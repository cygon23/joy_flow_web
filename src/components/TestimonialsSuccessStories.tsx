import { motion, AnimatePresence } from "framer-motion";
import { Star, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSuccessStories = () => {
  const [activeTab, setActiveTab] = useState("testimonials");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // detect small screens to disable marquee animations
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handler = (e) => setIsMobile(e.matches);
    handler(mq);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  // distances for marquee animation; smaller on mobile
  const marqueeDistance = isMobile ? 900 : 1920;
  const marqueeDuration = isMobile ? 18 : 30;

  const testimonials = [
    {
      name: "Amina Hassan",
      role: "Women Farmer, Olkeryan",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      text: "African Joy transformed my life. The support, training, and fair prices.",
      rating: 5,
    },
    {
      name: "Grace Mwangi",
      role: "Community Leader",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      text: "What started as a small partnership has become a movement. This is real empowerment.",
      rating: 5,
    },
    {
      name: "Joseph Kiprotich",
      role: "Retail Partner",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      text: "The quality is unmatched. Our customers specifically ask for African Joy products.",
      rating: 5,
    },
    {
      name: "Halima Yusuf",
      role: "Women Farmer, Meru",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      text: "I went from struggling to provide for my family , African Joy believed in me when I didn't believe in myself.",
      rating: 5,
    },
    {
      name: "Peter Okonkwo",
      role: "Sustainability Advocate",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      text: "They're not just selling products; they're building a better future for Tanzania.",
      rating: 5,
    },
    {
      name: "Sophia Mbalire",
      role: "Young Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1517841905240-74386c8b7e4d?w=400&h=400&fit=crop",
      text: "I'm proud to be part of something that truly matters.",
      rating: 5,
    },
  ];

  const successStories = [
    {
      title: "From Farm to Thriving Business",
      description:
        "How one farmer's milk collection center grew into a community hub",
      duration: "3:45",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      title: "Women Empowerment in Action",
      description: "Meet the 93+ women farmers transforming rural Tanzania",
      duration: "4:20",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      title: "Sustainable Dairy Production",
      description: "Our eco-friendly farming practices and their impact",
      duration: "3:15",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      title: "Youth Empowerment Journey",
      description: "Creating opportunities for the next generation",
      duration: "3:50",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      title: "Quality at Every Step",
      description: "Behind the scenes of our production facility",
      duration: "4:10",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      title: "Community Impact Stories",
      description: "Real stories from families we've supported",
      duration: "3:30",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariantsLeftToRight = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    animate: {
      x: [0, 20, 0, -20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const itemVariantsRightToLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    animate: {
      x: [0, -20, 0, 20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className='py-24 md:py-32 bg-gradient-to-b from-background via-card to-background'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'>
          <h2 className='text-4xl md:text-6xl font-black mb-6 text-primary'>
            Real Stories, Real Impact
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Hear from farmers, communities, and partners transformed by African
            Joy
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex gap-4 justify-center mb-16'>
          {["testimonials", "stories"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                activeTab === tab
                  ? "text-white shadow-lg"
                  : "text-gray-600 border-2 border-gray-300"
              }`}
              style={{
                background: activeTab === tab ? "#609F4D" : "transparent",
                borderColor: activeTab === tab ? "#609F4D" : "#d1d5db",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              {tab === "testimonials"
                ? "Client Testimonials"
                : "Success Stories"}
            </motion.button>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <AnimatePresence mode='wait'>
          {activeTab === "testimonials" && (
            <motion.div
              key='testimonials'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className='space-y-6 overflow-hidden'>
              {/* First Row - Left to Right */}
              <div className='relative overflow-hidden'>
                <motion.div
                  className='flex gap-6'
                  animate={{ x: [0, -marqueeDistance] }}
                  transition={{
                    x: {
                      duration: marqueeDuration,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                    },
                  }}>
                  {[
                    ...testimonials.slice(0, 3),
                    ...testimonials.slice(0, 3),
                    ...testimonials.slice(0, 3),
                  ].map((testimonial, idx) => (
                    <motion.div
                      key={`left-${idx}`}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 30px 60px rgba(96, 159, 77, 0.15)",
                      }}
                      className='group relative rounded-3xl overflow-hidden bg-white p-6 sm:p-8 border-2 border-gray-100 transition-all duration-300 flex-shrink-0 w-[340px] sm:w-[380px]'>
                      {/* Background gradient on hover */}
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-br from-[#609F4D]/5 to-[#E8252B]/5 opacity-0 group-hover:opacity-100 transition-opacity'
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />

                      <div className='relative z-10 space-y-4'>
                        {/* Rating */}
                        <div className='flex gap-1'>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}>
                              <Star className='w-5 h-5 fill-[#E8252B] text-[#E8252B]' />
                            </motion.div>
                          ))}
                        </div>

                        {/* Quote */}
                        <p className='text-gray-700 leading-relaxed italic'>
                          "{testimonial.text}"
                        </p>

                        {/* Author */}
                        <div className='flex items-center gap-4 pt-4 border-t border-gray-200'>
                          <motion.img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className='w-12 h-12 rounded-full object-cover'
                            whileHover={{ scale: 1.1 }}
                          />
                          <div>
                            <p className='font-bold text-gray-900'>
                              {testimonial.name}
                            </p>
                            <p className='text-sm text-gray-600'>
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Second Row - Right to Left */}
              <div className='relative overflow-hidden'>
                <motion.div
                  className='flex gap-6'
                  animate={{ x: [-marqueeDistance, 0] }}
                  transition={{
                    x: {
                      duration: marqueeDuration,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                    },
                  }}>
                  {[
                    ...testimonials.slice(3, 6),
                    ...testimonials.slice(3, 6),
                    ...testimonials.slice(3, 6),
                  ].map((testimonial, idx) => (
                    <motion.div
                      key={`right-${idx}`}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 30px 60px rgba(96, 159, 77, 0.15)",
                      }}
                      className='group relative rounded-3xl overflow-hidden bg-white p-6 sm:p-8 border-2 border-gray-100 transition-all duration-300 flex-shrink-0 w-[340px] sm:w-[380px]'>
                      {/* Background gradient on hover */}
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-br from-[#609F4D]/5 to-[#E8252B]/5 opacity-0 group-hover:opacity-100 transition-opacity'
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />

                      <div className='relative z-10 space-y-4'>
                        {/* Rating */}
                        <div className='flex gap-1'>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}>
                              <Star className='w-5 h-5 fill-[#E8252B] text-[#E8252B]' />
                            </motion.div>
                          ))}
                        </div>

                        {/* Quote */}
                        <p className='text-gray-700 leading-relaxed italic'>
                          "{testimonial.text}"
                        </p>

                        {/* Author */}
                        <div className='flex items-center gap-4 pt-4 border-t border-gray-200'>
                          <motion.img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className='w-12 h-12 rounded-full object-cover'
                            whileHover={{ scale: 1.1 }}
                          />
                          <div>
                            <p className='font-bold text-gray-900'>
                              {testimonial.name}
                            </p>
                            <p className='text-sm text-gray-600'>
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Stories Section */}
        <AnimatePresence mode='wait'>
          {activeTab === "stories" && (
            <motion.div
              key='stories'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className='max-w-5xl mx-auto'>
              <motion.div
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {successStories.slice(0, 4).map((story, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className='group relative rounded-3xl overflow-hidden cursor-pointer'
                    onClick={() => setSelectedVideo(idx)}>
                    {/* Thumbnail */}
                    <motion.div
                      className='relative overflow-hidden rounded-3xl h-64'
                      whileHover={{ scale: 1.05 }}>
                      <img
                        src={story.thumbnail}
                        alt={story.title}
                        className='w-full h-full object-cover'
                      />

                      {/* Overlay */}
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'
                        initial={{ opacity: 0.5 }}
                        whileHover={{ opacity: 0.8 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Play Button */}
                      <motion.div
                        className='absolute inset-0 flex items-center justify-center'
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.2, opacity: 1 }}
                        transition={{ duration: 0.3 }}>
                        <motion.div
                          className='w-16 h-16 rounded-full flex items-center justify-center'
                          style={{ background: "#E8252B" }}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}>
                          <Play className='w-7 h-7 text-white fill-white ml-1' />
                        </motion.div>
                      </motion.div>

                      {/* Duration Badge */}
                      <motion.div
                        className='absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white'
                        style={{ background: "rgba(0, 0, 0, 0.6)" }}>
                        {story.duration}
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      className='pt-6'
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}>
                      <h3 className='font-black text-lg text-gray-900 mb-2 group-hover:text-[#609F4D] transition-colors'>
                        {story.title}
                      </h3>
                      <p className='text-sm text-gray-600'>
                        {story.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4'>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className='relative w-full max-w-4xl'>
              {/* Video Container */}
              <div className='relative w-full bg-black rounded-3xl overflow-hidden aspect-video'>
                <iframe
                  width='100%'
                  height='100%'
                  src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`}
                  title={successStories[selectedVideo].title}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='w-full h-full'
                />
              </div>

              {/* Navigation */}
              <div className='flex items-center justify-between mt-6'>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setSelectedVideo(
                      (selectedVideo - 1 + successStories.length) %
                        successStories.length
                    )
                  }
                  className='p-3 rounded-full bg-white text-gray-900 hover:bg-[#609F4D] hover:text-white transition-colors'>
                  <ChevronLeft className='w-6 h-6' />
                </motion.button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='text-center flex-1 px-6'>
                  <h3 className='font-bold text-lg text-white mb-2'>
                    {successStories[selectedVideo].title}
                  </h3>
                  <p className='text-sm text-white/80'>
                    {selectedVideo + 1} / {successStories.length}
                  </p>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setSelectedVideo(
                      (selectedVideo + 1) % successStories.length
                    )
                  }
                  className='p-3 rounded-full bg-white text-gray-900 hover:bg-[#609F4D] hover:text-white transition-colors'>
                  <ChevronRight className='w-6 h-6' />
                </motion.button>
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedVideo(null)}
                className='absolute -top-12 right-0 p-3 rounded-full bg-white text-gray-900 hover:bg-[#E8252B] hover:text-white transition-colors'>
                <X className='w-6 h-6' />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialsSuccessStories;
