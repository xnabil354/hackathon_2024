"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    image: "https://h.top4top.io/p_3276jz7dt1.jpg",
    title: "Figma UI/UX Fundamental",
    instructor: "Nabil Hafiyyan Zihni",
    level: "Beginner",
    duration: "4 Jam",
    people: 30,
    modules: 62,
    originalPrice: 250000,
    salePrice: 149000,
    rentPrice: 49000,
    checkoutPath: "/paket/checkout/design",
  },
  {
    id: 2,
    image: "https://g.top4top.io/p_3276d36ks2.jpg",
    title: "Web Development Beginner to Advanced",
    instructor: "Muhammad Farhan Nabil",
    level: "Beginner",
    duration: "8 Jam",
    people: 10,
    modules: 24,
    originalPrice: 149000,
    salePrice: 99000,
    rentPrice: 49000,
    checkoutPath: "/paket/checkout/webdev",
  },
  {
    id: 3,
    image: "https://f.top4top.io/p_3276lokn61.jpg",
    title: "Computer Security Incident Response Team ",
    instructor: "Rizki Agung",
    level: "Beginner",
    duration: "12 Jam",
    people: 28,
    modules: 17,
    originalPrice: 149000,
    salePrice: 99000,
    rentPrice: 49000,
    checkoutPath: "/paket/checkout/cybersec",
  },
];

const BorderAnimation = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-x-0 top-0 h-px animate-border-slide bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    <div className="absolute inset-y-0 right-0 w-px animate-border-slide-vertical bg-gradient-to-b from-transparent via-indigo-500 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-px animate-border-slide bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    <div className="absolute inset-y-0 left-0 w-px animate-border-slide-vertical bg-gradient-to-b from-transparent via-indigo-500 to-transparent" />
  </div>
);

export default function PricingPage() {
  const router = useRouter();

  const handleBuyClick = (checkoutPath: string) => {
    router.push(checkoutPath);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-12">
        Pilih Paket Belajar
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="relative bg-white rounded-xl overflow-hidden transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <BorderAnimation />
            <div className="relative z-10 p-1">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative group">
                  <div className="relative w-full h-48">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="transform transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {product.level}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      {product.duration}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">
                    {product.title}
                  </h2>

                  <p className="text-sm text-gray-600 mb-4">
                    By {product.instructor}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      {product.people} Orang
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      {product.modules} Modul
                    </div>
                  </div>

                  <div className="flex items-baseline space-x-2 mb-6">
                    <span className="line-through text-gray-400 text-sm">
                      Rp {product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      Rp {product.salePrice.toLocaleString()}
                    </span>
                  </div>

                  <motion.button
                    onClick={() => handleBuyClick(product.checkoutPath)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Beli Sekarang
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
