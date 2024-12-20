"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Home = () => {
  const [activePlatform, setActivePlatform] = useState<string | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const router = useRouter();
  // const [searchQuery, setSearchQuery] = useState(""); // State untuk menyimpan input search

  const handleStartClick = () => {
    setActivePlatform(null);
    router.push("/platform");
  };

  // const handleSearch = () => {
  //   const query = searchQuery.toLowerCase();

  //   // Mengarahkan ke section berdasarkan substring dari query
  //   if (query.includes("introduce") || query.includes("intro")) {
  //     document.getElementById("introduce-section")?.scrollIntoView({ behavior: "smooth" });
  //   } else if (query.includes("penting") || query.includes("sosial")) {
  //     document.getElementById("media-sosial-penting-section")?.scrollIntoView({ behavior: "smooth" });
  //   } else if (query.includes("testi")) { // Termasuk "testi" dan "testimon"
  //     document.getElementById("testimoni")?.scrollIntoView({ behavior: "smooth" });
  //   } else if (query.includes("benefit") || query.includes("manfaat")) {
  //     document.getElementById("benefit-section")?.scrollIntoView({ behavior: "smooth" });
  //   } else if (query.includes("visi")) {
  //     document.getElementById("visi-misi")?.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // Data testimonial
  const testimonials = [
    {
      id: 1,
      name: "Febri Kurniawan",
      role: "Mahasiswa Universitas Indonesia",
      image: "https://k.top4top.io/p_3220t6q5j2.png",
      banner: "https://j.top4top.io/p_3220mn75u1.png", // Banner wisata desa
      text: "Pelatihan UI/UX ini benar-benar membuka wawasan saya tentang bagaimana mendesain aplikasi yang user-friendly dan menarik. Fasilitatornya gaul banget, tapi tetap profesional dalam menjelaskan konsep seperti wireframing dan prototyping. Sekarang, saya lebih percaya diri menghadirkan desain yang bisa bikin pengguna jatuh cinta pada pandangan pertama!"
    },
    {
      id: 2,
      name: "Sarah Saraswati",
      role: "Web Developer PT Tokopedia",
      image: "https://k.top4top.io/p_3220t6q5j2.png",
      banner: "https://e.top4top.io/p_3221jh1d11.jpg", // Banner pantai
      text: "Saya mengikuti pelatihan Web Developer dan merasa seperti mendapatkan shortcut ke dunia coding yang sebenarnya. Dari dasar HTML hingga framework modern, semuanya dijelaskan dengan runtut dan teliti. Plus, pembimbingnya selalu update dengan tren terbaru. Ngoding jadi terasa seru dan nggak ribet lagi!"
    },
    {
      id: 3,
      name: "Iqbal Ramadhan",
      role: "Cyber Security Enthusiasts",
      image: "https://k.top4top.io/p_3220t6q5j2.png",
      banner: "https://f.top4top.io/p_3221477z44.jpg", // Banner desa wisata
      text: "Jujur, saya tadinya agak takut masuk dunia Cyber Security karena kelihatannya kompleks banget. Tapi di pelatihan ini, konsep yang rumit dijelaskan secara sederhana dan relatable. Saya jadi paham cara melindungi data dari serangan siber dengan tools yang powerful. Worth every second!"
    },
    {
      id: 4,
      name: "Rina Lastri",
      role: "Backend Developer PT Bank Syariah Indonesia",
      image: "https://k.top4top.io/p_3220t6q5j2.png",
      banner: "https://a.top4top.io/p_32213p6wg1.jpg", // Banner homestay
      text: "Menggabungkan pelatihan Web Developer dan Cyber Security adalah langkah terbaik yang pernah saya ambil. Selain bisa bikin website yang canggih, saya juga paham gimana caranya menjaga keamanannya"
    },
    {
      id: 5,
      name: "Dedi Kurniadi",
      role: "Mobile Developer PT Bank Rakjyat Indonesia",
      image: "https://k.top4top.io/p_3220t6q5j2.png",
      banner: "https://f.top4top.io/p_3221tsl6r1.jpg", // Banner gunung
      text: "Buat kamu yang mau masuk dunia desain digital, pelatihan ini jawabannya! Setiap sesi terasa interaktif, dan mentor-menya selalu memberikan feedback yang detail dan cermat. Saya nggak nyangka desain saya sekarang bisa terlihat profesional dan siap dipamerkan di portofolio!"
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
          src="/3.jpg"
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
            Transformasi Digital Anda Dimulai dengan Keahlian, Keamanan, dan Kreativitas
          </h1>
          <div className="mt-4 flex items-center">
            <button
              onClick={handleStartClick}
              className="px-8 py-3 bg-gradient-to-r from-green-400 to-lime-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300 active:scale-95"
              style={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              Join Sekarang
            </button>
          </div>
        </div>
      </section>


      <section id="introduce-section" className="p-8 bg-blue-50 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4 relative inline-block before:absolute before:w-24 before:h-1 before:bg-gradient-to-r from-green-400 to-blue-500 before:-bottom-2 before:left-1/2 before:-translate-x-1/2">
          Apasih PhytonRaptors Itu?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
        PhytonRaptors adalah organisasi pelatihan digital yang bertujuan untuk mencetak profesional berkualitas di bidang teknologi melalui program pelatihan yang inovatif dan relevan. Fokus utama kami adalah memberikan pendidikan di bidang UI/UX, Web Development, dan Cybersecurity, dengan pendekatan yang berbasis praktik dan proyek nyata.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Tiktok Card */}
          <div
            className="text-center w-full sm:w-64 transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => setActivePlatform("ui/ux")}
          >
            <div
              className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-transparent bg-clip-padding rounded-lg"
              style={{
                borderImage: "linear-gradient(to right, #ff7e5f, #feb47b) 1",
              }}
            >
              <Image
                src="data:image/jpeg;base64,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"
                alt="UI/UX Pelatihan preview"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-40 transition-opacity duration-300">
                <i className="fas fa-play-circle text-4xl text-white"></i>
              </div>
            </div>
            <h3 className="mt-4 font-bold text-gray-800">UI/UX</h3>
          </div>

          {/* Instagram Card */}
          <div
            className="text-center w-full sm:w-64 transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => setActivePlatform("webdev")}
          >
            <div
              className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-transparent bg-clip-padding rounded-lg"
              style={{
                borderImage: "linear-gradient(to right, #43cea2, #185a9d) 1",
              }}
            >
              <Image
                src="data:image/jpeg;base64,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"
                alt="Web Developer Pelatihan preview"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-40 transition-opacity duration-300">
                <i className="fas fa-play-circle text-4xl text-white"></i>
              </div>
            </div>
            <h3 className="mt-4 font-bold text-gray-800">Web Developer</h3>
          </div>

          {/* Youtube Card */}
          <div
            className="text-center w-full sm:w-64 transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => setActivePlatform("Cyber Security")}
          >
            <div
              className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-transparent bg-clip-padding rounded-lg"
              style={{
                borderImage: "linear-gradient(to right, #fc00ff, #00dbde) 1",
              }}
            >
              <Image
                src="data:image/jpeg;base64,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"
                alt="Cyber Security Pelatihan preview"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-40 transition-opacity duration-300">
                <i className="fas fa-play-circle text-4xl text-white"></i>
              </div>
            </div>
            <h3 className="mt-4 font-bold text-gray-800">Cyber Security</h3>
          </div>
        </div>

        {/* Video Section */}
        {activePlatform === "tiktok" && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Tonton Pelatihan UI/UX</h3>
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
              Tonton Pelatihan Web Developer
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
            <h3 className="text-2xl font-bold mb-4">Tonton Pelatihan Cyber Security</h3>
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
      <section id="media-sosial-penting-section" className="p-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 relative inline-block before:absolute before:w-20 before:h-1 before:bg-gradient-to-r from-blue-400 to-purple-600 before:-bottom-2 before:left-1/2 before:-translate-x-1/2">
          Mengapa Pelatihan ini Sangat Penting ?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Pelatihan dalam UI/UX, Web Development, dan Cyber Security sangat penting karena ketiga bidang ini saling mendukung dalam menciptakan produk digital yang berkualitas, aman, dan user-friendly.Ketiga bidang ini saling melengkapi: UI/UX menciptakan pengalaman pengguna yang baik, Web Development membangun fondasi teknis yang solid, dan Cyber Security memastikan produk tetap aman dari ancaman. Pelatihan dalam ketiganya membantu para profesional menghasilkan solusi digital yang inovatif, aman, dan dapat dipercaya.
          </p>

          <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-600 mb-8"></div>

          <hr className="border-t-2 border-gray-300 opacity-50 my-10 mx-auto w-1/3 transition-transform hover:scale-105" />
        </div>
      </section>

      {/* Testimonial Section */}
<section id="testimoni" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
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
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Manfaat Pelatihan Digital:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* First Benefit */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="absolute top-0 left-0 m-4 flex space-x-2">
              <div className="bg-red-400 w-4 h-4 rounded-full"></div>
              <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
              <div className="bg-green-400 w-4 h-4 rounded-full"></div>
            </div>
            <div className="border-2 border-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 p-1 rounded-lg">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Meningkatkan Pengalaman Pengguna</h3>
                <p className="text-gray-600">
                Pelatihan UI/UX bertujuan untuk membangun keahlian dalam menciptakan antarmuka yang estetis sekaligus fungsional
                </p>
              </div>
            </div>
          </div>

          {/* Second Benefit */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="absolute top-0 left-0 m-4 flex space-x-2">
              <div className="bg-red-400 w-4 h-4 rounded-full"></div>
              <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
              <div className="bg-green-400 w-4 h-4 rounded-full"></div>
            </div>
            <div className="border-2 border-transparent bg-gradient-to-r from-green-300 via-yellow-300 to-orange-300 p-1 rounded-lg">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Pondasi Karier Digital yang Stabil</h3>
                <p className="text-gray-600">
                Pelatihan web development mencakup front-end, back-end, hingga pengembangan full-stack
                </p>
              </div>
            </div>
          </div>

          {/* Third Benefit */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="absolute top-0 left-0 m-4 flex space-x-2">
              <div className="bg-red-400 w-4 h-4 rounded-full"></div>
              <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
              <div className="bg-green-400 w-4 h-4 rounded-full"></div>
            </div>
            <div className="border-2 border-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 p-1 rounded-lg">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Melindungi Data dan Sistem Digital</h3>
                <p className="text-gray-600">
                Ancaman siber terus meningkat, menjadikan cyber security keterampilan yang sangat penting
                </p>
              </div>
            </div>
          </div>

          {/* Fourth Benefit - New */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="absolute top-0 left-0 m-4 flex space-x-2">
              <div className="bg-red-400 w-4 h-4 rounded-full"></div>
              <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
              <div className="bg-green-400 w-4 h-4 rounded-full"></div>
            </div>
            <div className="border-2 border-transparent bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-300 p-1 rounded-lg">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Investasi pada Masa Depan Digital</h3>
                <p className="text-gray-600">
                Mengikuti pelatihan di bidang UI/UX, web development, dan cyber security adalah langkah strategis untuk mengembangkan karier di industri teknologi. Dengan kompetensi yang relevan, peluang untuk mendapatkan pekerjaan impian dan meningkatkan penghasilan menjadi lebih besar
                </p>
              </div>
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
            Menjadi lembaga pelatihan digital terkemuka yang menghasilkan profesional unggul di bidang UI/UX, Web Development, dan Cybersecurity, siap bersaing di pasar global.
            </p>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Misi:</h3>
            <p className="text-gray-600 leading-relaxed">
            PhytonRaptors berkomitmen untuk menyediakan pelatihan berkualitas yang fokus pada keterampilan praktis dan inovatif, mempersiapkan peserta menjadi profesional kompeten di dunia digital.
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
