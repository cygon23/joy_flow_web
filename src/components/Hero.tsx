import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Import hero images
import heroMilkFlow from "@/assets/hero-milk-flow.jpg";
import heroFarmerHands from "@/assets/hero-farmer-hands.jpg";
import heroProcessing from "@/assets/hero-processing.jpg";
import heroConsumption from "@/assets/hero-consumption.jpg";
import heroDairyBottles from "@/assets/hero-dairy-bottles.jpg";
import heroWomenFarmers from "@/assets/hero-women-farmers.jpg";

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 150, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 150, damping: 20 });

  const images = [
    { src: heroWomenFarmers, title: "Empowering Women" },
    { src: heroDairyBottles, title: "Premium Quality" },
    { src: heroMilkFlow, title: "Fresh Flow" },
    { src: heroFarmerHands, title: "Care & Craft" },
    { src: heroProcessing, title: "Modern Process" },
    { src: heroConsumption, title: "Pure Joy" },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - window.innerWidth / 2);
      cursorY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className='relative min-h-screen bg-primary overflow-hidden'>
      {/* Full-bleed Background Images with Cinematic Transitions */}
      <div className='absolute inset-0'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className='absolute inset-0'>
            <motion.img
              src={images[activeImage].src}
              alt={images[activeImage].title}
              className='w-full h-full object-cover'
              animate={{
                scale: [1, 1.15],
              }}
              transition={{
                duration: 8,
                ease: "linear",
              }}
            />
            {/* Dramatic overlay with cursor-reactive gradient */}
            <motion.div
              className='absolute inset-0'
              style={{
                background: `radial-gradient(circle at ${
                  50 + (cursorX.get() / window.innerWidth) * 20
                }% ${
                  50 + (cursorY.get() / window.innerHeight) * 20
                }%, hsl(100 46% 20% / 0.5), hsl(100 46% 10% / 0.9))`,
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Layer */}
      <div className='relative z-10 min-h-screen flex flex-col items-center justify-center px-6'>
        <motion.div
          className='text-center max-w-6xl mx-auto'
          style={{
            x: useSpring(cursorX, { stiffness: 50, damping: 30 }),
            y: useSpring(cursorY, { stiffness: 50, damping: 30 }),
          }}>
          {/* Split Hero Title with Dramatic Reveal */}
          <div className='overflow-hidden mb-8'>
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className='text-6xl md:text-8xl lg:text-9xl font-bold text-primary-foreground leading-none'>
              <motion.span
                className='block'
                initial={{ letterSpacing: "0.5em", opacity: 0 }}
                animate={{ letterSpacing: "0em", opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}>
                Taste the
              </motion.span>
            </motion.h1>
          </div>

          <div className='overflow-hidden mb-8'>
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className='text-6xl md:text-8xl lg:text-9xl font-bold leading-none'>
              <motion.span
                className='block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent'
                style={{
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}>
                Flow of Joy
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtitle with blur fade-in */}
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1.2 }}
            className='text-xl md:text-3xl text-primary-foreground/90 mb-16 max-w-3xl mx-auto font-light'>
            Empowering women farmers in Tanzania, delivering premium dairy from
            farm to table
          </motion.p>

          {/* Magnetic CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className='relative inline-block'>
            <Link to='/story'>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  x: springX,
                  y: springY,
                }}>
                <Button
                  size='lg'
                  variant='secondary'
                  className='text-xl px-12 py-8 rounded-full group font-bold relative overflow-hidden shadow-2xl'>
                  <motion.span
                    className='relative z-10 flex items-center gap-3'
                    initial={false}>
                    Discover Our Story
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}>
                      <ArrowRight className='w-6 h-6' />
                    </motion.div>
                  </motion.span>

                  {/* Animated glow effect */}
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-r from-accent via-primary-foreground/20 to-accent'
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Progress Indicators */}
      <div className='absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3'>
        {images.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className='relative h-1.5 bg-primary-foreground/20 rounded-full overflow-hidden cursor-pointer'
            style={{ width: activeImage === idx ? "48px" : "24px" }}
            animate={{ width: activeImage === idx ? "48px" : "24px" }}
            transition={{ duration: 0.3 }}>
            {activeImage === idx && (
              <motion.div
                className='absolute inset-0 bg-secondary'
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 4, ease: "linear" }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Ambient Light Particles */}
      {[...Array(20)].map((_, idx) => (
        <motion.div
          key={idx}
          className='absolute rounded-full bg-primary-foreground/30 backdrop-blur-sm'
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default Hero;
