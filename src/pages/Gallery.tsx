import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Local images
import imp1 from "@/assets/pics/impacts/IMG-20251014-WA0024.jpg";
import imp2 from "@/assets/pics/impacts/IMG-20251014-WA0058.jpg";
import imp3 from "@/assets/pics/impacts/IMG-20251014-WA0062.jpg";
import imp4 from "@/assets/pics/impacts/IMG-20251014-WA0063.jpg";
import imp5 from "@/assets/pics/impacts/IMG-20251014-WA0067.jpg";
import imp6 from "@/assets/pics/impacts/IMG-20251014-WA0073.jpg";

import ev1 from "@/assets/pics/event/IMG-20251014-WA0052.jpg";
import ev2 from "@/assets/pics/event/IMG-20251014-WA0087.jpg";

// Farm images (local)
import farm1 from "@/assets/pics/farm/01.jpg";
import farm2 from "@/assets/pics/farm/02.jpg";
import farm3 from "@/assets/pics/farm/03.jpg";
import farm4 from "@/assets/pics/farm/04.jpg";
import farm5 from "@/assets/pics/farm/05.jpg";

import p1 from "@/assets/pics/prod/IMG_1265.jpg";
import p2 from "@/assets/pics/prod/IMG_1267.jpg";
import p3 from "@/assets/pics/prod/IMG_1268.jpg";
import p4 from "@/assets/pics/prod/IMG_1275.jpg";
import p5 from "@/assets/pics/prod/IMG_7485.jpg";
import p6 from "@/assets/pics/prod/IMG_7491.jpg";
import p7 from "@/assets/pics/prod/IMG_7495.jpg";

import v1 from "@/assets/pics/vistor/IMG-20251014-WA0050.jpg";
import v2 from "@/assets/pics/vistor/IMG-20251014-WA0069.jpg";
import v3 from "@/assets/pics/vistor/IMG-20251014-WA0080.jpg";
import v4 from "@/assets/pics/vistor/IMG_0805.jpg";
import v5 from "@/assets/pics/vistor/IMG_1054.jpg";
import v6 from "@/assets/pics/vistor/IMG_1196.jpg";
import v7 from "@/assets/pics/vistor/IMG_1248.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const categories = [
    {
      id: "events",
      name: "Events",
      description: "Community gatherings and celebrations",
      thumbnail: ev1,
      color: "#609F4D",
      images: [
        {
          url: ev1,
          title: "Annual Farmers Festival 2024",
          description: "Celebrating our farmers' achievements",
        },
        {
          url: ev2,
          title: "Women Empowerment Workshop",
          description: "Training session for new dairy farmers",
        },
      ],
    },
    {
      id: "farmers",
      name: "Farmers",
      description: "Our incredible women dairy farmers",
      thumbnail: farm1,
      color: "#E8252B",
      images: [
        {
          url: farm1,
          title: "Amina at Her Farm",
          description: "Daily milk collection in Olkeryan",
        },
        {
          url: farm2,
          title: "Grace's Success Story",
          description: "From single cow to thriving dairy business",
        },
        {
          url: farm3,
          title: "Farmers' Cooperative Meeting",
          description: "Weekly planning and training session",
        },
        {
          url: farm4,
          title: "Early Morning Collection",
          description: "Fresh milk ready for processing",
        },
        {
          url: farm5,
          title: "Women Farmer Training",
          description: "Capacity building and best practices",
        },
      ],
    },
    {
      id: "products",
      name: "Products",
      description: "Premium quality dairy products",
      thumbnail: p1,
      color: "#FDB913",
      images: [
        {
          url: p1,
          title: "Cultured Milk Range",
          description: "Our signature fermented milk products",
        },
        {
          url: p2,
          title: "Fresh Yogurt Collection",
          description: "Available in multiple flavors",
        },
        {
          url: p3,
          title: "Butter & Ghee Products",
          description: "Traditional and premium quality",
        },
        {
          url: p4,
          title: "Product Packaging",
          description: "Eco-friendly and convenient",
        },
        {
          url: p5,
          title: "Bottled Products",
          description: "Ready for distribution",
        },
        {
          url: p6,
          title: "Handmade Cheese",
          description: "Small batch artisan cheese",
        },
        {
          url: p7,
          title: "Prepared Goods",
          description: "Value-added dairy products",
        },
      ],
    },
    {
      id: "visitors",
      name: "Visitors",
      description: "Partners and guests at our facilities",
      thumbnail: v1,
      color: "#2C5F2D",
      images: [
        {
          url: v1,
          title: "International Delegation Visit",
          description: "Agricultural experts from Kenya",
        },
        {
          url: v2,
          title: "School Field Trip",
          description: "Local students learning about dairy farming",
        },
        {
          url: v3,
          title: "Government Officials Tour",
          description: "Ministry of Agriculture visit",
        },
        {
          url: v4,
          title: "Media Coverage",
          description: "Documentary filming at our facility",
        },
        {
          url: v5,
          title: "Guest Sampling",
          description: "Visitors tasting products",
        },
        {
          url: v6,
          title: "Facility Tour",
          description: "Visitors touring production area",
        },
        {
          url: v7,
          title: "Community Partners",
          description: "Collaborative partners and donors",
        },
      ],
    },
    {
      id: "impact",
      name: "Impact",
      description: "Real change in communities",
      thumbnail: imp1,
      color: "#97233F",
      images: [
        {
          url: imp1,
          title: "New School Construction",
          description: "Built with profits from dairy cooperative",
        },
        {
          url: imp2,
          title: "Women's Health Clinic",
          description: "Free healthcare for farming families",
        },
        {
          url: imp3,
          title: "Youth Training Program",
          description: "Next generation of dairy entrepreneurs",
        },
        {
          url: imp4,
          title: "Clean Water Initiative",
          description: "New wells in farming communities",
        },
        {
          url: imp5,
          title: "Community Outreach",
          description: "Local engagement programs",
        },
        {
          url: imp6,
          title: "Sustainability Projects",
          description: "Eco-friendly farming methods",
        },
      ],
    },
  ];

  const handleNext = () => {
    if (selectedCategory) {
      const category = categories.find((c) => c.id === selectedCategory);
      setSelectedImageIndex((prev) => (prev + 1) % category.images.length);
    }
  };

  const handlePrev = () => {
    if (selectedCategory) {
      const category = categories.find((c) => c.id === selectedCategory);
      setSelectedImageIndex((prev) =>
        prev === 0 ? category.images.length - 1 : prev - 1
      );
    }
  };

  // Auto-play effect
  useEffect(() => {
    if (isAutoPlay && selectedCategory) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, selectedCategory, selectedImageIndex]);

  return (
    <div className='min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-24'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'>
          <div className='max-w-7xl mx-auto px-4 text-left mb-6'>
            <Link
              to='/'
              className='inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900'>
              <span className='inline-block px-3 py-2 rounded-md bg-secondary/80 hover:bg-primary'>
                Back to home
              </span>
            </Link>
          </div>
          <h1
            className='text-5xl md:text-7xl font-black mb-6'
            style={{ color: "#609F4D" }}>
            Photo Gallery
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Explore our journey through images - from farm to community impact
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => {
                setSelectedCategory(category.id);
                setSelectedImageIndex(0);
              }}
              className='group cursor-pointer relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'>
              {/* Image */}
              <div className='relative h-64 overflow-hidden'>
                <img
                  src={category.thumbnail}
                  alt={category.name}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                {/* Overlay */}
                <div
                  className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                  style={{
                    background: `linear-gradient(to top, ${category.color}CC, transparent)`,
                  }}
                />
              </div>

              {/* Content */}
              <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                <div className='flex items-center gap-3 mb-2'>
                  <Camera className='w-6 h-6' />
                  <h3 className='text-2xl font-black'>{category.name}</h3>
                </div>
                <p className='text-white/90 text-sm mb-3'>
                  {category.description}
                </p>
                <div className='flex items-center gap-2 text-xs'>
                  <span className='bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full'>
                    {category.images.length} Photos
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4'>
            {(() => {
              const category = categories.find(
                (c) => c.id === selectedCategory
              );
              const currentImage = category.images[selectedImageIndex];

              return (
                <>
                  {/* Close Button */}
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedCategory(null)}
                    className='absolute top-6 right-6 w-12 h-12 rounded-full bg-white text-gray-900 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center z-10'>
                    <X className='w-6 h-6' />
                  </motion.button>

                  {/* Auto-play Toggle */}
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className='absolute top-6 left-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors z-10 text-sm font-bold'>
                    {isAutoPlay ? "⏸ Pause" : "▶ Play"}
                  </motion.button>

                  {/* Main Content */}
                  <div className='w-full max-w-6xl'>
                    {/* Image Container */}
                    <motion.div
                      key={selectedImageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className='relative rounded-2xl overflow-hidden mb-6'>
                      <img
                        src={currentImage.url}
                        alt={currentImage.title}
                        className='w-full h-[70vh] object-cover'
                      />

                      {/* Image Info Overlay */}
                      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8'>
                        <h3 className='text-2xl font-bold text-white mb-2'>
                          {currentImage.title}
                        </h3>
                        <p className='text-white/80'>
                          {currentImage.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Navigation */}
                    <div className='flex items-center justify-between'>
                      {/* Previous Button */}
                      <motion.button
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePrev}
                        className='w-14 h-14 rounded-full bg-white text-gray-900 hover:bg-green-500 hover:text-white transition-colors flex items-center justify-center'>
                        <ChevronLeft className='w-7 h-7' />
                      </motion.button>

                      {/* Thumbnails */}
                      <div className='flex items-center gap-3 overflow-x-auto px-4 max-w-2xl'>
                        {category.images.map((img, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => setSelectedImageIndex(idx)}
                            whileHover={{ scale: 1.1 }}
                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-4 transition-all ${
                              idx === selectedImageIndex
                                ? "border-green-500 opacity-100"
                                : "border-white/30 opacity-50 hover:opacity-75"
                            }`}>
                            <img
                              src={img.url}
                              alt={img.title}
                              className='w-full h-full object-cover'
                            />
                          </motion.button>
                        ))}
                      </div>

                      {/* Next Button */}
                      <motion.button
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleNext}
                        className='w-14 h-14 rounded-full bg-white text-gray-900 hover:bg-green-500 hover:text-white transition-colors flex items-center justify-center'>
                        <ChevronRight className='w-7 h-7' />
                      </motion.button>
                    </div>

                    {/* Counter */}
                    <div className='text-center mt-4 text-white/70 text-sm'>
                      {selectedImageIndex + 1} / {category.images.length} •{" "}
                      {category.name}
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
