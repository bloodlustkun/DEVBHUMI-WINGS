/**
 * Copyright © 2025 metasyndikate. All rights reserved.
 */

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1738825920265-c93888f27369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBhZXJpYWx8ZW58MXx8fHwxNzY0MTk0NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Himalayan Peaks",
      category: "Mountains",
    },
    {
      src: "https://images.unsplash.com/photo-1698723985345-f1456340f0a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1dHRhcmFraGFuZCUyMHRlbXBsZXxlbnwxfHx8fDE3NjQxOTQ1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Ancient Temples",
      category: "Spiritual",
    },
    {
      src: "https://images.unsplash.com/photo-1669768185505-8c611f00c088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB0cmVra2luZ3xlbnwxfHx8fDE3NjQxOTQ1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Trekking Adventures",
      category: "Adventure",
    },
    {
      src: "https://images.unsplash.com/photo-1600257729950-13a634d32697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZhbGxleSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjQxNDQ1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Valley Views",
      category: "Landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1717677977177-c9577c04cf27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2NDE5NDU0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Meditation & Yoga",
      category: "Wellness",
    },
    {
      src: "https://images.unsplash.com/photo-1637217632015-d1d00b77f327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGN1bHR1cmV8ZW58MXx8fHwxNzY0MTk0NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Cultural Heritage",
      category: "Culture",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 tracking-wide uppercase">Gallery</span>
          <h2 className="mt-2 mb-4">Moments Worth Capturing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into the breathtaking experiences that await you in the heart of Devbhoomi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(image.src)}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-blue-400 text-sm">{image.category}</span>
                  <h3 className="text-white mt-1">{image.title}</h3>
                </div>
              </div>
              
              {/* Animated border on hover */}
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 border-4 border-blue-500 rounded-2xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
}
