// components/AutoSwipeCarousel.tsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Image from 'next/image';

interface Slide {
  id: number;
  content: string;
  imgSrc?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    content: `
      Siapa yang ingin kamu jangkau? Penting untuk mengetahui siapa yang akan menonton kontenmu. Misalnya, apakah audiensmu adalah keluarga, remaja, atau wisatawan yang mencari petualangan?
      Apa yang mereka suka? Coba pikirkan tentang apa yang menarik bagi mereka. Apakah mereka suka alam, budaya, makanan, atau aktivitas ekstreme?
    `,
  },
  {
    id: 2,
    content: `<img src='/images/tiktok-example.png' alt='Example'/>`,
    imgSrc: '/images/tiktok-example.png', // example image source
  },
  {
    id: 3,
    content: `
      Riset Konten dan Ide Kreatif: Lihat konten orang lain. Tonton video TikTok lain yang berkaitan dengan pariwisata. 
      Ini akan memberi ide untuk membuat video yang lebih baik.
    `,
  },
];

const AutoSwipeCarousel: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 p-6">
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        interval={5000}
        autoPlay={true}
        swipeable={true}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="text-center flex flex-col justify-center items-center">
            {slide.imgSrc ? (
              <Image
                src={slide.imgSrc}
                alt={`Slide image ${slide.id}`}
                width={300}
                height={500}
                className="object-cover"
              />
            ) : null}
            <div className="text-lg text-gray-800 px-4 mt-4">{slide.content}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AutoSwipeCarousel;
