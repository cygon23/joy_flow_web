import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import heroMilkFlow from "@/assets/hero-milk-flow.jpg";
import heroFarmerHands from "@/assets/hero-farmer-hands.jpg";
import heroProcessing from "@/assets/hero-processing.jpg";
import heroConsumption from "@/assets/hero-consumption.jpg";
import heroDairyBottles from "@/assets/hero-dairy-bottles.jpg";
import heroWomenFarmers from "@/assets/hero-women-farmers.jpg";

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [counters, setCounters] = useState({ farmers: 0, liters: 0, jobs: 0 });

  const images = [
    heroMilkFlow,
    heroFarmerHands,
    heroProcessing,
    heroConsumption,
    heroDairyBottles,
    heroWomenFarmers,
  ];

  const stats = [
    { label: "Women Farmers", value: 93, suffix: "+", color: "#E8252B" },
    { label: "Liters Monthly", value: 20338, suffix: "", color: "#609F4D" },
    { label: "Jobs Created", value: 250, suffix: "+", color: "#E8252B" },
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const counters = [
      { key: "farmers", target: 93, duration: 2 },
      { key: "liters", target: 20338, duration: 2.5 },
      { key: "jobs", target: 250, duration: 2 },
    ];

    counters.forEach(({ key, target, duration }) => {
      const interval = setInterval(() => {
        setCounters((prev) => ({
          ...prev,
          [key]:
            prev[key] < target
              ? prev[key] + Math.ceil(target / (duration * 60))
              : target,
        }));
      }, duration * 10);

      return () => clearInterval(interval);
    });
  }, []);

  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* Main Hero Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
        {/* LEFT SECTION - PREMIUM CONTENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='relative flex flex-col items-center justify-center px-8 md:px-16 py-20 min-h-screen'
          style={{
            background: "linear-gradient(135deg, #609F4D 0%, #5a8f44 100%)",
          }}>
          {/* Animated background elements */}
          <motion.div className='absolute inset-0 overflow-hidden pointer-events-none'>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute rounded-full'
                style={{
                  width: Math.random() * 500 + 200,
                  height: Math.random() * 500 + 200,
                  background: `rgba(232, 37, 43, ${
                    0.02 + Math.random() * 0.03
                  })`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  filter: "blur(100px)",
                }}
                animate={{
                  y: [0, 120, 0],
                  x: [0, 80, 0],
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: 15 + Math.random() * 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 2,
                }}
              />
            ))}
          </motion.div>

          {/* Content */}
          <div className='relative z-10 max-w-2xl text-center space-y-8'>
            {/* Slogan - Premium Typography */}
            <motion.div
              className='space-y-2'
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}>
              <motion.div
                className='overflow-hidden'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}>
                <motion.h1
                  className='text-6xl md:text-7xl lg:text-9xl font-black leading-tight tracking-tight'
                  style={{ color: "white" }}
                  initial={{ y: 120, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}>
                  Drink it
                </motion.h1>
              </motion.div>

              <motion.div
                className='overflow-hidden'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}>
                <motion.h1
                  className='text-6xl md:text-7xl lg:text-9xl font-black leading-tight tracking-tight'
                  style={{ color: "#E8252B" }}
                  initial={{ y: 120, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}>
                  Enjoy..
                </motion.h1>
              </motion.div>
            </motion.div>

            {/* Premium Stats Cards */}
            <motion.div
              className='grid grid-cols-1 md:grid-cols-3 gap-4 py-8'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}>
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className='relative overflow-hidden rounded-2xl backdrop-blur-md border-2 p-6'
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    background: "rgba(255, 255, 255, 0.08)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(232, 37, 43, 0.2)",
                  }}>
                  {/* Animated background */}
                  <motion.div
                    className='absolute inset-0'
                    style={{
                      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(232, 37, 43, 0.05) 100%)`,
                    }}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: idx * 0.3,
                    }}
                  />

                  {/* Content */}
                  <motion.div className='relative z-10 space-y-3'>
                    <motion.div
                      className='text-4xl md:text-5xl font-black leading-none'
                      style={{ color: stat.color }}
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 + idx * 0.1 }}>
                      {idx === 0 && counters.farmers}
                      {idx === 1 && counters.liters}
                      {idx === 2 && counters.jobs}
                      <span className='text-3xl'>{stat.suffix}</span>
                    </motion.div>

                    <motion.p
                      className='text-sm font-bold text-white/80 uppercase tracking-wide'
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.9 + idx * 0.1 }}>
                      {stat.label}
                    </motion.p>

                    {/* Progress Bar */}
                    <motion.div className='w-full h-1 bg-white/10 rounded-full overflow-hidden mt-3'>
                      <motion.div
                        className='h-full rounded-full'
                        style={{ background: stat.color }}
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.9 + idx * 0.1 }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className='text-white/90 text-base md:text-lg leading-relaxed font-medium max-w-md mx-auto'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}>
              Empowering rural communities through premium dairy crafted by
              dedicated farmers.
            </motion.p>

            {/* Explore Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className='pt-4'>
              <Link to='/story'>
                <motion.button
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className='relative px-12 py-4 rounded-full font-bold text-lg overflow-hidden group'
                  style={{
                    background: "white",
                    color: "#609F4D",
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.25)",
                  }}>
                  <motion.span className='relative z-10 flex items-center justify-center gap-3'>
                    Explore Our Story
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}>
                      <ArrowRight className='w-5 h-5' />
                    </motion.div>
                  </motion.span>

                  <motion.div
                    className='absolute inset-0'
                    style={{ background: "#E8252B" }}
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SECTION - IMAGE WITH PROGRESS BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative h-screen md:min-h-screen overflow-hidden flex items-center justify-center'>
          {/* Image Carousel */}
          <div className='absolute inset-0 w-full h-full'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, scale: 1.1, rotate: 3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotate: -3 }}
                transition={{
                  duration: 1.4,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                className='absolute inset-0 w-full h-full'>
                <motion.img
                  src={images[activeImage]}
                  alt='African Joy Products'
                  className='w-full h-full object-cover object-center'
                  animate={{
                    scale: [1, 1.08],
                  }}
                  transition={{
                    duration: 5,
                    ease: "linear",
                  }}
                />

                {/* Vignette overlay */}
                <motion.div
                  className='absolute inset-0'
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(96, 159, 77, 0.12) 0%, rgba(96, 159, 77, 0.25) 100%)",
                  }}
                />

                {/* Shimmer effect */}
                <motion.div
                  className='absolute inset-0'
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 3.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(232, 37, 43, 0.1) 50%, transparent 100%)",
                    width: "25%",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Modern Progress Bars - Top */}
          <motion.div
            className='absolute top-0 left-0 right-0 z-30 flex gap-1 px-6 pt-6'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            {images.map((_, idx) => (
              <motion.div
                key={idx}
                className='flex-1 h-1 rounded-full overflow-hidden backdrop-blur-sm'
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}>
                <motion.div
                  className='h-full rounded-full'
                  style={{
                    background:
                      idx === activeImage
                        ? "linear-gradient(90deg, #609F4D 0%, #E8252B 100%)"
                        : "rgba(255, 255, 255, 0.3)",
                  }}
                  animate={{
                    width: idx === activeImage ? "100%" : "0%",
                  }}
                  transition={{
                    duration: idx === activeImage ? 5 : 0.3,
                    ease: idx === activeImage ? "linear" : "easeInOut",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Navigation - Interactive Dots */}
          <motion.div
            className='absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 backdrop-blur-md px-6 py-4 rounded-full border'
            style={{
              borderColor: "rgba(255, 255, 255, 0.2)",
              background: "rgba(0, 0, 0, 0.15)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            {images.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className='relative'
                whileHover={{ scale: 1.3 }}>
                <motion.div
                  className='w-2.5 h-2.5 rounded-full border-2'
                  style={{
                    borderColor:
                      activeImage === idx
                        ? "#E8252B"
                        : "rgba(255, 255, 255, 0.3)",
                    background:
                      activeImage === idx
                        ? "#E8252B"
                        : "rgba(255, 255, 255, 0.1)",
                  }}
                  animate={{
                    scale: activeImage === idx ? 1.5 : 1,
                    boxShadow:
                      activeImage === idx
                        ? "0 0 20px rgba(232, 37, 43, 0.6)"
                        : "none",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
