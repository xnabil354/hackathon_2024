// app/paket/checkout/instagram/page.tsx

"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function CheckoutPage() {
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0); // Diskon default 0
  const router = useRouter();

  // Informasi produk
  const product = {
    image: "https://d.top4top.io/p_32205bolx1.png", // Ganti dengan URL gambar produk asli
    title: "Instagram Marketing Mastery",
    category: "course",
    tipe: "instagram",
    price: 149000, // Harga asli
  };

  const handleCheckout = () => {
    if (!email || !whatsapp) {
      MySwal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Email dan nomor WhatsApp harus diisi!',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    // Simpan data checkout dan produk ke localStorage
    localStorage.setItem(
      'checkoutData',
      JSON.stringify({ email, whatsapp, coupon, discount, product, totalPrice })
    );

    // Redirect ke halaman pembayaran
    router.push('/paket/pembayaran/course/instagram');
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ''); // Hanya angka
    setWhatsapp(input);
  };

  const handleCouponCheck = () => {
    if (coupon === "DISKON50" || coupon === "hackathon2024" || coupon === "codexa2") {
      setDiscount(product.price * 0.5); // Diskon 50%
      Swal.fire({
        icon: 'success',
        title: 'Kupon Berhasil',
        text: 'Diskon 50% berhasil diterapkan!',
        confirmButtonColor: '#3085d6',
      });
    } else if (coupon === "DISKON25") {
      setDiscount(product.price * 0.25)
      Swal.fire({
        icon: 'success',
        title: 'Kupon Berhasil',
        text: 'Diskon 25% berhasil diterapkan!',
        confirmButtonColor: '#3085d6',
      });
    } else {
      setDiscount(0); // Tidak ada diskon
      Swal.fire({
        icon: 'error',
        title: 'Kupon Tidak Valid',
        text: 'Kode kupon tidak ditemukan atau tidak valid.',
        confirmButtonColor: '#3085d6',
      });
    }
  };

  const totalPrice = product.price - discount;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-6 md:p-12">
      <h1 className="text-4xl font-extrabold text-center mb-8">Checkout</h1>

      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
        {/* Product Info */}
        <div className="flex items-center mb-4">
          <img src={product.image} alt={product.title} className="w-20 h-20 rounded-lg mr-4" />
          <div>
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-500">Tipe: {product.category}</p>
            <p className="text-gray-500">Category: {product.tipe}</p>
          </div>
        </div>

        <hr className="my-4" />

        {/* Form Email dan WhatsApp */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Contoh: john@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="whatsapp" className="block text-gray-600 font-semibold mb-2">Nomor WhatsApp</label>
          <div className="flex">
            <span className="p-3 bg-gray-200 rounded-l-lg text-gray-600">+62</span>
            <input
              type="text"
              id="whatsapp"
              placeholder="Contoh: 812xxxxxxx"
              value={whatsapp}
              onChange={handleWhatsappChange}
              className="w-full p-3 border-2 rounded-r-lg focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-400 transition-all duration-300"
            />
          </div>
        </div>

        {/* Kode Kupon */}
        <div className="mb-4">
          <label htmlFor="coupon" className="block text-gray-600 font-semibold mb-2">
            Kode Kupon (Jika ada)
          </label>
          <div className="flex">
            <input
              type="text"
              id="coupon"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Masukkan kode kupon"
              className="w-full p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleCouponCheck}
              className="bg-teal-500 text-white px-4 py-2 rounded-r-lg hover:bg-teal-600 transition-all"
            >
              Check
            </button>
          </div>
        </div>

        {/* Rincian Harga */}
        <div className="mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Harga</span>
            <span>Rp. {product.price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Diskon</span>
            <span>Rp. {discount.toLocaleString()}</span>
          </div>
        </div>

        <hr className="my-4" />

        {/* Total Harga */}
        <div className="flex justify-between mb-6">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-bold">Rp. {totalPrice.toLocaleString()}</span>
        </div>

        {/* Tombol Checkout */}
        <button
          onClick={handleCheckout}
          className="w-full py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition-all"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
