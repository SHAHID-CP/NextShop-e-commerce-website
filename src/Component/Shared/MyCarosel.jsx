"use client";

import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOutlineViewInAr, MdCheckCircle } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "New Arrivals",
    description: "Check out the latest products in our collection.",
    extraInfo: [
      "Trendy and up-to-date items",
      "High quality and durable",
      "Limited stock available",
      "Free shipping on select products",
    ],
    image: "https://i.ibb.co/whpXWSKR/lost-places-5209551-1920.jpg",
  },
  {
    id: 2,
    title: "Best Deals",
    description: "Grab amazing discounts and offers today.",
    extraInfo: [
      "Up to 50% off selected products",
      "Exclusive online deals",
      "Hassle-free returns",
      "Fast and secure checkout",
    ],
    image: "https://i.ibb.co.com/938CRJZt/specker.jpg",
  },
  {
    id: 3,
    title: "Shop by Category",
    description: "Find products easily in our categorized collections.",
    extraInfo: [
      "Electronics, Fashion, Home & more",
      "Curated collections for your needs",
      "Regular updates and new additions",
      "Easy navigation and search",
    ],
    image: "https://i.ibb.co/SDm3qTGq/labyrinth-1015640-1920.jpg",
  },
];

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function MyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="max-w-[2520px] mx-auto h-[80vh] relative">
      <Carousel
        infiniteLoop
        autoPlay
        interval={4500}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        className="h-full"
        onChange={(index) => setCurrentSlide(index)}
      >
        {slides.map(({ id, title, description, extraInfo, image }, index) => (
          <div key={id} className="relative h-[80vh] w-full overflow-hidden">
            {/* Background */}
            <motion.img
              src={image}
              alt={title}
              className="object-cover w-full h-full filter blur-sm brightness-75"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={
                currentSlide === index
                  ? { scale: 1, opacity: 1 }
                  : { scale: 1.1, opacity: 0 }
              }
              transition={{ duration: 1 }}
            />

            {/* Center Content */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-20 z-20 space-y-4 sm:space-y-5 md:space-y-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                currentSlide === index
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.8 }}
            >
              {/* Title with Gradient */}
              <motion.h2
                className="text-3xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={
                  currentSlide === index ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }
                }
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {title}
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-xs sm:text-sm md:text-lg text-gray-100 max-w-xs sm:max-w-xl md:max-w-2xl leading-relaxed"
                initial={{ y: -10, opacity: 0 }}
                animate={
                  currentSlide === index ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }
                }
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {description}
              </motion.p>

              {/* Extra Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 max-w-2xl">
                {extraInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md px-2 sm:px-4 py-1 sm:py-2 rounded-xl shadow-md text-xs sm:text-sm md:text-lg text-white"
                    custom={idx}
                    initial="hidden"
                    animate={currentSlide === index ? "visible" : "hidden"}
                    variants={listVariants}
                  >
                    <MdCheckCircle className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    {info}
                  </motion.div>
                ))}
              </div>

              {/* Button */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={
                  currentSlide === index ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }
                }
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link href="/products" aria-label={`Shop ${title}`}>
                  <button className="cursor-pointer inline-flex items-center gap-2 sm:gap-3 border-2 border-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:scale-105 transition-transform text-white shadow-lg text-xs sm:text-base md:text-lg">
                    <MdOutlineViewInAr className="w-4 sm:w-6 h-4 sm:h-6" />
                    Shop Now
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
