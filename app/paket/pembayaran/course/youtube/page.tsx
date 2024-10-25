/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// app/paket/pembayaran/course/tiktok/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Image from "next/image";

const MySwal = withReactContent(Swal);
const BOT_TOKEN = "7428219263:AAEKrYJvG47yqLqRAQEasPVMOGY9XRpoXBw"; // Ganti dengan token bot Telegram kamu
const CHAT_ID = "1365766425"; // Ganti dengan ID chat Telegram tujuan
const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;

export default function PaymentPage() {
  const [file, setFile] = useState<File | null>(null);
  const [checkoutData, setCheckoutData] = useState<any>(null); // Data checkout dari localStorage
  const router = useRouter();
  const qrisImage = "https://l.top4top.io/p_3220tvfrf1.png"; // Ganti dengan URL gambar QRIS sebenarnya

  // Ambil data checkout dari localStorage saat komponen dimuat
  useEffect(() => {
    const data = localStorage.getItem("checkoutData");
    if (data) {
      setCheckoutData(JSON.parse(data));
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Data checkout tidak ditemukan!",
        confirmButtonColor: "#3085d6",
      }).then(() => router.push("/paket/checkout/tiktok"));
    }
  }, [router]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;

    if (selectedFile) {
      const fileType = selectedFile.type;
      const validTypes = ["image/png", "image/jpeg", "image/jpg", "application/pdf"];

      if (!validTypes.includes(fileType)) {
        MySwal.fire({
          icon: "error",
          title: "Format File Tidak Didukung",
          text: "Hanya file PNG, JPG, JPEG, atau PDF yang diperbolehkan.",
          confirmButtonColor: "#3085d6",
        });
        setFile(null);
        return;
      }

      setFile(selectedFile);
      MySwal.fire({
        icon: "success",
        title: "File Berhasil Diupload",
        text: `${selectedFile.name} berhasil dipilih.`,
        confirmButtonColor: "#3085d6",
      });
    }
  };

  const handleConfirmPayment = async () => {
    if (!file) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Bukti pembayaran harus diupload!",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    // Format pesan untuk Telegram
    const message = `
Konfirmasi Pembayaran 🚀

📧 Email: ${checkoutData?.email}
📱 WhatsApp: ${checkoutData?.whatsapp}
🛒 Produk: ${checkoutData?.product.title}
📂 Tipe: ${checkoutData?.product.tipe}
📑 Kategori: ${checkoutData?.product.category}
💵 Total Harga: Rp. ${checkoutData?.totalPrice?.toLocaleString()}
    `;

    const formData = new FormData();
    formData.append("chat_id", CHAT_ID);
    formData.append("caption", message);
    formData.append("photo", file);

    try {
      await fetch(`${TELEGRAM_URL}/sendPhoto`, {
        method: "POST",
        body: formData,
      });

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Pembayaran berhasil dikonfirmasi!",
        confirmButtonColor: "#3085d6",
      }).then(() => router.push("/")); // Redirect ke halaman utama setelah konfirmasi
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Terjadi kesalahan saat mengirim konfirmasi!",
        confirmButtonColor: "#3085d6",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-400 to-pink-600 p-6 md:p-12">
      <h1 className="text-4xl font-extrabold text-white text-center mb-10 animate-pulse">
        Upload Bukti Pembayaran
      </h1>

      <div className="flex flex-col bg-white shadow-2xl rounded-lg overflow-hidden p-8">
        <div className="mb-5">
          <label htmlFor="file-upload" className="block text-gray-600 font-semibold mb-2">
            Upload Bukti Pembayaran
          </label>
          <input
            type="file"
            id="file-upload"
            accept=".png, .jpg, .jpeg, .pdf"
            onChange={handleFileChange}
            className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
          />
        </div>

        <div className="flex flex-col items-center mt-8">
  <h2 className="text-xl font-bold text-gray-800 mb-4">Scan QRIS untuk Pembayaran</h2>
  <div className="w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 border-4 border-dashed border-purple-600">
    <Image
      src={qrisImage}
      alt="QRIS Payment"
      width={320}
      height={320}
      layout="responsive"
      objectFit="contain"
    />
  </div>
</div>

        <button
          onClick={handleConfirmPayment}
          className="w-full py-3 bg-green-500 text-white font-bold rounded-lg mt-4 hover:bg-green-600 transition-all"
        >
          Konfirmasi Pembayaran
        </button>
      </div>
    </div>
  );
}
