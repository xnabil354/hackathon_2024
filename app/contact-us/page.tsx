import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      {/* Bagian Konten Utama */}
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg shadow-2xl rounded-lg p-10 transform transition hover:scale-105 duration-500">
          <h1 className="text-5xl font-bold text-white mb-6">Hubungi Kami</h1>

          {/* Informasi Kontak */}
          <div className="text-white mb-8">
            <p className="text-lg">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@nusacipta.com"
                className="underline hover:text-yellow-300"
              >
                info@nusacipta.com
              </a>
            </p>
            <p className="text-lg mt-4">
              <strong>Jam Operasional:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Senin - Jumat: 09.00 - 17.00 WIB</li>
              <li>Sabtu: 10.00 - 14.00 WIB</li>
              <li>Minggu dan Hari Libur Nasional: Tutup</li>
            </ul>
          </div>

          <p className="text-lg text-white mb-4">
            Atau, Anda juga dapat mengisi formulir kontak di bawah ini, dan kami akan segera menghubungi Anda:
          </p>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default ContactUsPage;
