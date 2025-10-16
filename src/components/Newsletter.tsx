import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Send, Sparkles, CheckCircle2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubscribing(false);
    setIsSubscribed(true);

    setTimeout(() => {
      setEmail("");
      setIsSubscribed(false);
    }, 4000);
  };

  return (
    <section 
      className="relative py-32 md:py-40 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #609F4D 0%, #5a8f44 50%, #E8252B 100%)",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              background: i % 2 === 0 
                ? "radial-gradient(circle, rgba(232, 37, 43, 0.15) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Interactive cursor glow */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
            filter: "blur(50px)",
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT: Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-white space-y-6"
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-sm font-bold uppercase tracking-wide">
                  Join Our Community
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
                  Stay in the Loop
                </h2>
                <motion.div
                  className="h-2 w-24 rounded-full"
                  style={{ background: "#E8252B" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "96px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/90 leading-relaxed"
              >
                Get exclusive updates on fresh products, inspiring farmer stories, and community impact — delivered straight to your inbox.
              </motion.p>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-3 pt-4"
              >
                {["Monthly farmer stories", "New product launches", "Community impact reports"].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#E8252B" }}
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.3,
                      }}
                    />
                    <span className="text-white/80 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <motion.div
                className="relative rounded-3xl overflow-hidden backdrop-blur-xl border-2 border-white/20 p-8 md:p-10"
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)",
                }}
                whileHover={{
                  boxShadow: "0 40px 80px rgba(232, 37, 43, 0.3)",
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(232, 37, 43, 0.1) 0%, rgba(96, 159, 77, 0.1) 100%)",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                    style={{ background: "rgba(232, 37, 43, 0.9)" }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Mail className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-3xl font-black text-white mb-2">
                    Subscribe Now
                  </h3>
                  <p className="text-white/80 mb-8">
                    Join 50+ subscribers already in the loop
                  </p>

                  {/* Form */}
                  {!isSubscribed ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="relative"
                      >
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          className="w-full px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-all font-medium"
                          disabled={isSubscribing}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
                            pointerEvents: "none",
                          }}
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </motion.div>

                      <motion.button
                        type="submit"
                        disabled={isSubscribing}
                        className="w-full px-8 py-4 rounded-2xl font-bold text-lg relative overflow-hidden"
                        style={{
                          background: "white",
                          color: "#609F4D",
                        }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <motion.span className="relative z-10 flex items-center justify-center gap-3">
                          {isSubscribing ? (
                            <>
                              <motion.div
                                className="w-5 h-5 border-3 border-[#609F4D] border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              Subscribing...
                            </>
                          ) : (
                            <>
                              Subscribe Free
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <Send className="w-5 h-5" />
                              </motion.div>
                            </>
                          )}
                        </motion.span>

                        <motion.div
                          className="absolute inset-0"
                          style={{ background: "#E8252B" }}
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </motion.button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
                        style={{ background: "#E8252B" }}
                      >
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </motion.div>
                      <h4 className="text-2xl font-black text-white mb-2">
                        Welcome Aboard!
                      </h4>
                      <p className="text-white/80">
                        Check your inbox for a confirmation email
                      </p>
                    </motion.div>
                  )}

                  {/* Privacy Note */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xs text-white/60 text-center mt-6"
                  >
                    We respect your privacy. Unsubscribe anytime.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(to top, rgba(255, 255, 255, 0.1), transparent)",
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
    </section>
  );
};

export default Newsletter;