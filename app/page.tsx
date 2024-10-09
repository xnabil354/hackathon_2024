// app/page.tsx
"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from '../components/Footer'; // Import Footer

const Home = () => {
  const router = useRouter();

  return (
    <main>
      <section className="relative">
        <Image
          src="https://c.top4top.io/p_3203xbm5l1.jpg"
          alt="Background image"
          width={1920}
          height={1200}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold text-center">
            Belajar Sosial Media Marketing Pariwisata
          </h1>
          <div className="mt-4 flex items-center">
            <button
              onClick={() => router.push("/platform")}
              className="px-6 py-2 bg-lime-400 text-gray-800 font-semibold rounded mr-4"
            >
              Mulai Sekarang
            </button>
          </div>
        </div>
      </section>

      <section className="p-8 bg-blue-50 text-center">
  <h2 className="text-3xl font-extrabold text-gray-800 mb-4 relative inline-block before:absolute before:w-24 before:h-1 before:bg-gradient-to-r from-green-400 to-blue-500 before:-bottom-2 before:left-1/2 before:-translate-x-1/2">
    Perkenalkan tempat wisata anda lebih luas dengan kami
  </h2>
  <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
    Kami membantu Anda memaksimalkan potensi pariwisata melalui strategi pemasaran media sosial yang tepat. Pelajari cara membuat konten menarik dan efektif di platform yang kami sediakan.
  </p>

  <div className="flex flex-wrap justify-center gap-8">
    {/* Tiktok Card */}
    <div className="text-center w-full sm:w-64 transform transition-transform hover:scale-105">
      <div className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center bg-gray-300 p-2">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2"></div>
          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
        </div>
        <Image
          src="https://i.top4top.io/p_32040cdcl2.jpeg"
          alt="Tiktok platform preview"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-40 transition-opacity duration-300">
          <i className="fas fa-play-circle text-4xl text-white"></i>
        </div>
      </div>
      <h3 className="mt-4 font-bold text-gray-800">Tiktok</h3>
    </div>

    {/* Instagram Card */}
    <div className="text-center w-full sm:w-64 transform transition-transform hover:scale-105">
      <div className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center bg-gray-300 p-2">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2"></div>
          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
        </div>
        <Image
          src="https://h.top4top.io/p_3204969bs1.png"
          alt="Instagram platform preview"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-40 transition-opacity duration-300">
          <i className="fas fa-play-circle text-4xl text-white"></i>
        </div>
      </div>
      <h3 className="mt-4 font-bold text-gray-800">Instagram</h3>
    </div>

    {/* Youtube Card */}
    <div className="text-center w-full sm:w-64 transform transition-transform hover:scale-105">
      <div className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center bg-gray-300 p-2">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2"></div>
          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
        </div>
        <Image
          src="https://k.top4top.io/p_3204xnrq91.jpeg"
          alt="Youtube platform preview"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-40 transition-opacity duration-300">
          <i className="fas fa-play-circle text-4xl text-white"></i>
        </div>
      </div>
      <h3 className="mt-4 font-bold text-gray-800">Youtube</h3>
    </div>
  </div>
</section>


      <section className="p-8 bg-gradient-to-r from-gray-50 to-blue-50">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-6 relative inline-block before:absolute before:w-20 before:h-1 before:bg-gradient-to-r from-blue-400 to-purple-600 before:-bottom-2 before:left-1/2 before:-translate-x-1/2">
      Mengapa Media Sosial Penting?
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      Di era digital ini, media sosial telah menjadi alat yang paling kuat untuk mempromosikan destinasi wisata. Platform seperti Tiktok, Instagram, dan Youtube memungkinkan Anda untuk terhubung langsung dengan wisatawan, membangun komunitas yang tertarik dengan tempat wisata Anda, dan memperluas jangkauan promosi Anda secara global. Melalui pelatihan kami, Anda akan belajar cara memanfaatkan setiap platform untuk menghasilkan konten yang kreatif dan tepat sasaran.
    </p>

    <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-600 mb-8"></div>

    <hr className="border-t-2 border-gray-300 opacity-50 my-10 mx-auto w-1/3 transition-transform hover:scale-105" />
  </div>
</section>


      <section id="visi-misi" className="p-8 bg-blue-50">
  <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center md:text-left">
    Visi Misi Kami
  </h2>
  <div className="flex flex-col md:flex-row items-stretch gap-6">
    {/* Visi Misi Text Section */}
    <div className="bg-white rounded-lg shadow-lg p-8 md:w-1/2 flex flex-col justify-center transform transition-transform hover:scale-105">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Visi:</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Membangun komunitas digital yang berdaya untuk mempromosikan potensi pariwisata lokal secara efektif melalui media sosial.
      </p>
      <h3 className="text-xl font-bold mb-4 text-gray-800">Misi:</h3>
      <p className="text-gray-600 leading-relaxed">
        Memberikan panduan praktis dan langkah-langkah terperinci bagi masyarakat yang ingin mempromosikan pariwisata melalui platform media sosial seperti TikTok, Instagram, dan YouTube.
      </p>
    </div>

    {/* Visi Misi Image Section */}
    <div className="md:w-1/2 flex items-center transform transition-transform hover:scale-105">
      <Image
        src="https://l.top4top.io/p_3204rmp321.jpg"
        alt="Gambar Visi Misi"
        width={600}
        height={460}
        className="rounded-lg shadow-lg object-cover w-full h-full"
      />
    </div>
  </div>
</section>



      {/* Panggil Footer di sini */}
      <Footer />
    </main>
  );
};

export default Home;
