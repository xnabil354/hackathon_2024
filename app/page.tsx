"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Home = () => {
  const [activePlatform, setActivePlatform] = useState<string | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const router = useRouter();

  const handleStartClick = () => {
    setActivePlatform(null);
    router.push("/platform");
  };

  // Data testimonial
  const testimonials = [
    {
      id: 1,
      name: "Pak Febri",
      role: "Pemilik Wisata Desa Leuwimalang",
      image: "https://k.top4top.io/p_3220t6q5j2.png",
      banner: "https://j.top4top.io/p_3220mn75u1.png", // Banner wisata desa
      text: "Setelah mengikuti pelatihan ini, wisata Curug kami menjadi lebih dikenal. Pengunjung meningkat drastis berkat strategi media sosial yang kami terapkan. Terima kasih atas bimbingannya!"
    },
    {
      id: 2,
      name: "Bu Sarah",
      role: "Pengelola Wisata Pantai Indah",
      image: "/api/placeholder/80/80",
      banner: "https://e.top4top.io/p_3204969bs1.png", // Banner pantai
      text: "Platform ini sangat membantu kami dalam mempromosikan wisata pantai. Sekarang kami lebih percaya diri dalam membuat konten yang menarik di sosial media."
    },
    {
      id: 3,
      name: "Pak Ahmad",
      role: "Koordinator Desa Wisata",
      image: "/api/placeholder/80/80",
      banner: "https://h.top4top.io/p_3204969bs1.png", // Banner desa wisata
      text: "Berkat panduan yang diberikan, desa wisata kami sekarang memiliki presence yang kuat di sosial media. Pengunjung meningkat signifikan!"
    },
    {
      id: 4,
      name: "Ibu Rina",
      role: "Pengusaha Homestay",
      image: "/api/placeholder/80/80",
      banner: "https://l.top4top.io/p_3204rmp321.jpg", // Banner homestay
      text: "Awalnya bingung bagaimana memasarkan homestay di era digital. Setelah mengikuti program ini, okupansi homestay kami meningkat pesat."
    },
    {
      id: 5,
      name: "Pak Dedi",
      role: "Pengelola Wisata Gunung",
      image: "/api/placeholder/80/80",
      banner: "https://k.top4top.io/p_3204xnrq91.jpeg", // Banner gunung
      text: "Sangat terbantu dengan materi pelatihan yang lengkap. Sekarang kami bisa membuat konten yang menarik dan viral di TikTok dan Instagram."
    }
  ];

  // Auto slide testimonial
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 10000);

    return () => clearInterval(timer);
  }, []);

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
          <h1
            className="text-4xl font-bold text-center animate-fade-in-up"
            style={{
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
            }}
          >
            Belajar Sosial Media Marketing Pariwisata
          </h1>
          <div className="mt-4 flex items-center">
            <button
              onClick={handleStartClick}
              className="px-8 py-3 bg-gradient-to-r from-green-400 to-lime-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300 active:scale-95"
              style={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              }}
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
          Kami membantu Anda memaksimalkan potensi pariwisata melalui strategi
          pemasaran media sosial yang tepat. Pelajari cara membuat konten
          menarik dan efektif di platform yang kami sediakan.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Tiktok Card */}
          <div
            className="text-center w-full sm:w-64 transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => setActivePlatform("tiktok")}
          >
            <div
              className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-transparent bg-clip-padding rounded-lg"
              style={{
                borderImage: "linear-gradient(to right, #ff7e5f, #feb47b) 1",
              }}
            >
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
          <div
            className="text-center w-full sm:w-64 transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => setActivePlatform("instagram")}
          >
            <div
              className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-transparent bg-clip-padding rounded-lg"
              style={{
                borderImage: "linear-gradient(to right, #43cea2, #185a9d) 1",
              }}
            >
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
          <div
            className="text-center w-full sm:w-64 transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => setActivePlatform("youtube")}
          >
            <div
              className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-transparent bg-clip-padding rounded-lg"
              style={{
                borderImage: "linear-gradient(to right, #fc00ff, #00dbde) 1",
              }}
            >
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

        {/* Video Section */}
        {activePlatform === "tiktok" && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Tonton Tutorial TikTok</h3>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@desy.deriza/video/7248619009803914502"
              data-video-id="7248619009803914502"
              style={{ maxWidth: "605px", minWidth: "325px" }}
            >
              <section>
                <a
                  target="_blank"
                  title="@desy.deriza"
                  href="https://www.tiktok.com/@desy.deriza?refer=embed"
                >
                  @desy.deriza
                </a>{" "}
                TUTORIAL/CARA MEMBUAT AKUN TIKTOK UNTUK PEMULA PERTAMA KALI{" "}
                <a
                  title="tutorialtiktok"
                  target="_blank"
                  href="https://www.tiktok.com/tag/tutorialtiktok?refer=embed"
                >
                  #tutorialtiktok
                </a>{" "}
                <a
                  title="akunbaru"
                  target="_blank"
                  href="https://www.tiktok.com/tag/akunbaru?refer=embed"
                >
                  #akunbaru
                </a>{" "}
                <a
                  title="tiktokpemula"
                  target="_blank"
                  href="https://www.tiktok.com/tag/tiktokpemula?refer=embed"
                >
                  #tiktokpemula
                </a>{" "}
                <a
                  title="caramembuatakunbaru"
                  target="_blank"
                  href="https://www.tiktok.com/tag/caramembuatakunbaru?refer=embed"
                >
                  #caramembuatakunbaru
                </a>{" "}
                <a
                  title="videotiktok"
                  target="_blank"
                  href="https://www.tiktok.com/tag/videotiktok?refer=embed"
                >
                  #videotiktok
                </a>{" "}
                <a
                  title="viral"
                  target="_blank"
                  href="https://www.tiktok.com/tag/viral?refer=embed"
                >
                  #viral
                </a>{" "}
                <a
                  title="videofyp"
                  target="_blank"
                  href="https://www.tiktok.com/tag/videofyp?refer=embed"
                >
                  #videofyp
                </a>{" "}
                <a
                  title="desyderiza"
                  target="_blank"
                  href="https://www.tiktok.com/tag/desyderiza?refer=embed"
                >
                  #desyderiza
                </a>{" "}
                <a
                  target="_blank"
                  title="♬ Aesthetic - Tollan Kim"
                  href="https://www.tiktok.com/music/Aesthetic-7072513628145977346?refer=embed"
                >
                  ♬ Aesthetic - Tollan Kim
                </a>{" "}
              </section>
            </blockquote>
            <script async src="https://www.tiktok.com/embed.js"></script>
          </div>
        )}

        {activePlatform === "instagram" && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">
              Tonton Tutorial Instagram
            </h3>
            <blockquote
              cite="https://www.youtube.com/embed/c0Eyifw5to8?si=kvaZ_ORg8OhHqJF9"
              className="instagram-embed"
              style={{ maxWidth: "100%", overflow: "hidden" }}
            >
              <div
                className="relative"
                style={{ paddingBottom: "56.25%", height: 0 }}
              >
                <iframe
                  src="https://www.youtube.com/embed/c0Eyifw5to8?controls=1&enablejsapi=1" // No autoplay, with controls enabled
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            </blockquote>
          </div>
        )}

        {activePlatform === "youtube" && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Tonton Tutorial YouTube</h3>
            <blockquote
              cite="https://www.youtube.com/embed/1j8nG_StTLI?si=1UMqz7K_3Sfw1Q4e"
              className="youtube-embed"
              style={{ maxWidth: "100%", overflow: "hidden" }}
            >
              <div
                className="relative"
                style={{ paddingBottom: "56.25%", height: 0 }}
              >
                <iframe
                  src="https://www.youtube.com/embed/1j8nG_StTLI?controls=1&enablejsapi=1" // No autoplay, with controls
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            </blockquote>
          </div>
        )}
      </section>

      {/* Section for Media Sosial Penting */}
      <section className="p-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 relative inline-block before:absolute before:w-20 before:h-1 before:bg-gradient-to-r from-blue-400 to-purple-600 before:-bottom-2 before:left-1/2 before:-translate-x-1/2">
            Mengapa Media Sosial Penting?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Di era digital ini, media sosial telah menjadi alat yang paling kuat
            untuk mempromosikan destinasi wisata. Platform seperti Tiktok,
            Instagram, dan Youtube memungkinkan Anda untuk terhubung langsung
            dengan wisatawan, membangun komunitas yang tertarik dengan tempat
            wisata Anda, dan memperluas jangkauan promosi Anda secara global.
            Melalui pelatihan kami, Anda akan belajar cara memanfaatkan setiap
            platform untuk menghasilkan konten yang kreatif dan tepat sasaran.
          </p>

          <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-600 mb-8"></div>

          <hr className="border-t-2 border-gray-300 opacity-50 my-10 mx-auto w-1/3 transition-transform hover:scale-105" />
        </div>
      </section>

      {/* Testimonial Section */}
<section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 relative">
      Testimoni Klien Kami
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
    </h2>

    {/* Testimonial Card */}
    <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-xl">
      {/* Banner Image - Now unique for each testimonial */}
      <div className="relative h-56 w-full">
        <Image
          src={testimonials[currentTestimonial].banner}
          alt={`Banner ${testimonials[currentTestimonial].name}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white"></div>
      </div>

      <div className="p-8 -mt-24 relative">
        {/* Profile Image with Enhanced Styling */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
          <Image
            src={testimonials[currentTestimonial].image}
            alt={testimonials[currentTestimonial].name}
            fill
            className="rounded-full object-cover border-4 border-white shadow-xl ring-4 ring-indigo-50 relative z-10"
          />
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center z-20 shadow-lg">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>

        {/* Testimonial Content with Enhanced Styling */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6 relative">
            {/* Decorative Quotes */}
            <div className="absolute -top-6 -left-4 text-6xl text-indigo-200 opacity-50"></div>
            <div className="absolute -bottom-6 -right-4 text-6xl text-indigo-200 opacity-50"></div>
            
            <p className="text-gray-600 text-lg italic leading-relaxed relative z-10 px-8">
              {testimonials[currentTestimonial].text}
            </p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-bold text-gray-800 text-xl">
              {testimonials[currentTestimonial].name}
            </h4>
            <p className="text-indigo-600 font-medium">
              {testimonials[currentTestimonial].role}
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <svg className="w-24 h-24 text-indigo-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 rotate-180">
          <svg className="w-24 h-24 text-indigo-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>
    </div>

    {/* Enhanced Navigation Dots */}
    <div className="flex justify-center mt-8 gap-3">
      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentTestimonial(index)}
          className={`transform transition-all duration-300 ${
            index === currentTestimonial 
              ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full scale-110' 
              : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-indigo-300 hover:scale-105'
          }`}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  </div>
</section>

<section className="p-8 bg-gray-50">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Manfaat Digital Marketing untuk Bisnis:</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* First Benefit */}
    <div className="relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="absolute top-0 left-0 m-4 flex space-x-2">
        <div className="bg-red-400 w-4 h-4 rounded-full"></div>
        <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
        <div className="bg-green-400 w-4 h-4 rounded-full"></div>
      </div>
      <div className="border border-dotted border-blue-400 rounded-md p-4 hover:border-solid hover:border-blue-600 transition-all duration-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Lebih Mudah Dikenal Banyak Orang</h3>
        <p className="text-gray-600">
          Digital marketing membantu bisnis Anda lebih dikenal di berbagai platform online, seperti media sosial dan mesin pencari.
        </p>
      </div>
    </div>

    {/* Second Benefit */}
    <div className="relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="absolute top-0 left-0 m-4 flex space-x-2">
        <div className="bg-red-400 w-4 h-4 rounded-full"></div>
        <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
        <div className="bg-green-400 w-4 h-4 rounded-full"></div>
      </div>
      <div className="border border-dotted border-pink-400 rounded-md p-4 hover:border-solid hover:border-pink-600 transition-all duration-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Biaya Lebih Terjangkau</h3>
        <p className="text-gray-600">
          Dibandingkan dengan iklan di TV atau radio, digital marketing memungkinkan Anda mengatur budget sesuai kebutuhan.
        </p>
      </div>
    </div>

    {/* Third Benefit */}
    <div className="relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="absolute top-0 left-0 m-4 flex space-x-2">
        <div className="bg-red-400 w-4 h-4 rounded-full"></div>
        <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
        <div className="bg-green-400 w-4 h-4 rounded-full"></div>
      </div>
      <div className="border border-dotted border-purple-400 rounded-md p-4 hover:border-solid hover:border-purple-600 transition-all duration-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Bisa Menargetkan Pelanggan yang Tepat</h3>
        <p className="text-gray-600">
          Digital marketing memungkinkan Anda mengarahkan iklan ke orang-orang yang sesuai, berdasarkan minat, lokasi, usia, dan kebiasaan mereka di internet.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Section for Visi Misi */}
      <section id="visi-misi" className="p-8 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center md:text-left">
          Visi Misi Kami
        </h2>
        <div className="flex flex-col md:flex-row items-stretch gap-6">
          {/* Visi Misi Text Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:w-1/2 flex flex-col justify-center transform transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Visi:</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Membangun komunitas digital yang berdaya untuk mempromosikan
              potensi pariwisata lokal secara efektif melalui media sosial.
            </p>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Misi:</h3>
            <p className="text-gray-600 leading-relaxed">
              Memberikan panduan praktis dan langkah-langkah terperinci bagi
              masyarakat yang ingin mempromosikan pariwisata melalui platform
              media sosial seperti TikTok, Instagram, dan YouTube.
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

      {/* Panggil Footer */}
    </main>
  );
};

export default Home;
