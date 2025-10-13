import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Milk } from "lucide-react";

const LoadingIndicator = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(101, 45%, 45%) 0%, hsl(300, 100%, 99%) 50%, hsl(359, 70%, 51%) 100%)",
      }}
    >
      {/* Animated Dairy Farm Background */}
      <div className="absolute inset-0">
        {/* Rolling Hills */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="hsl(101, 45%, 30%)"
            fillOpacity="0.3"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,154.7C960,128,1056,96,1152,106.7C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            fill="hsl(101, 45%, 35%)"
            fillOpacity="0.2"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>

        {/* Floating Milk Bottles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`bottle-${i}`}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: -100,
            }}
            animate={{
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 6,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3,
              rotate: { duration: 2, repeat: Infinity },
            }}
          >
            <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
              <rect x="8" y="15" width="24" height="40" rx="3" fill="white" opacity="0.9" />
              <rect x="12" y="5" width="16" height="12" rx="2" fill="white" opacity="0.9" />
              <rect x="10" y="20" width="20" height="25" fill="hsl(300, 100%, 99%)" opacity="0.8" />
              <circle cx="20" cy="32" r="3" fill="hsl(101, 45%, 45%)" opacity="0.6" />
            </svg>
          </motion.div>
        ))}

        {/* Milk Drops Falling */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`drop-${i}`}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: -20,
            }}
            animate={{
              y: typeof window !== 'undefined' ? window.innerHeight + 20 : 1000,
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          >
            <svg width="12" height="16" viewBox="0 0 12 16">
              <motion.path
                d="M6 0C6 0 0 8 0 11C0 13.7614 2.68629 16 6 16C9.31371 16 12 13.7614 12 11C12 8 6 0 6 0Z"
                fill="white"
                opacity="0.7"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Milk Pouring Animation */}
        <div className="relative w-80 h-80 flex items-center justify-center">
          {/* Top Milk Bottle */}
          <motion.div
            className="absolute top-0"
            animate={{
              rotate: [0, -15, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="100" height="120" viewBox="0 0 100 120">
              <defs>
                <linearGradient id="bottleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(300, 100%, 99%)" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <rect x="20" y="30" width="60" height="80" rx="8" fill="url(#bottleGradient)" stroke="hsl(101, 45%, 45%)" strokeWidth="2" />
              <rect x="30" y="10" width="40" height="25" rx="5" fill="url(#bottleGradient)" stroke="hsl(101, 45%, 45%)" strokeWidth="2" />
              <motion.rect
                x="25"
                y="50"
                width="50"
                height="40"
                fill="hsl(300, 100%, 99%)"
                animate={{
                  height: [40, 20, 40],
                  y: [50, 70, 50],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </svg>
          </motion.div>

          {/* Pouring Milk Stream */}
          <motion.div
            className="absolute top-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="30" height="80" viewBox="0 0 30 80">
              <motion.path
                d="M15 0 Q10 20 15 40 Q20 60 15 80"
                stroke="white"
                strokeWidth="8"
                fill="none"
                opacity="0.8"
                animate={{
                  strokeWidth: [8, 12, 8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </svg>
          </motion.div>

          {/* Bottom Milk Glass */}
          <motion.div
            className="absolute bottom-0"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <svg width="140" height="140" viewBox="0 0 140 140">
              <defs>
                <linearGradient id="glassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(101, 45%, 45%)" />
                  <stop offset="100%" stopColor="hsl(101, 45%, 30%)" />
                </linearGradient>
              </defs>
              
              {/* Glass Container */}
              <motion.ellipse
                cx="70"
                cy="110"
                rx="50"
                ry="15"
                fill="hsl(101, 45%, 30%)"
                opacity="0.3"
              />
              <path
                d="M30 40 L30 100 Q30 115 70 115 Q110 115 110 100 L110 40 Q110 30 70 30 Q30 30 30 40"
                fill="url(#glassGradient)"
                opacity="0.6"
                stroke="white"
                strokeWidth="3"
              />
              
              {/* Milk Level */}
              <motion.path
                d="M32 80 L32 100 Q32 112 70 112 Q108 112 108 100 L108 80 Q108 75 70 75 Q32 75 32 80"
                fill="white"
                opacity="0.9"
                animate={{
                  d: [
                    "M32 85 L32 100 Q32 112 70 112 Q108 112 108 100 L108 85 Q108 80 70 80 Q32 80 32 85",
                    "M32 70 L32 100 Q32 112 70 112 Q108 112 108 100 L108 70 Q108 65 70 65 Q32 65 32 70",
                    "M32 85 L32 100 Q32 112 70 112 Q108 112 108 100 L108 85 Q108 80 70 80 Q32 80 32 85",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              {/* Milk Splash */}
              {[...Array(5)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={70 + (i - 2) * 15}
                  cy={75}
                  r="3"
                  fill="white"
                  initial={{ y: 0, opacity: 1 }}
                  animate={{
                    y: [-10, -25, -10],
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </svg>
          </motion.div>

          {/* Orbiting Milk Drops */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`orbit-${i}`}
              className="absolute"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
              style={{
                left: "50%",
                top: "50%",
              }}
            >
              <motion.div
                className="w-4 h-4 bg-white rounded-full"
                style={{
                  x: Math.cos((i / 8) * Math.PI * 2) * 150,
                  y: Math.sin((i / 8) * Math.PI * 2) * 150,
                  boxShadow: "0 0 20px white",
                }}
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Brand Text with Milk Drop Effect */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity },
              }}
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
            >
              <Milk className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-white"
              style={{
                textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.5)",
              }}
            >
              African Joy
            </motion.h2>
          </div>
          
          <motion.p
            className="text-xl text-white/90 mb-8"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            From Farm to Table with Love
          </motion.p>

          {/* Animated Loading Dots */}
          <div className="flex items-center justify-center gap-3">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="relative"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <div className="w-4 h-4 bg-white rounded-full" />
                <motion.div
                  className="absolute inset-0 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.8],
                    opacity: [0.8, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Creative Progress Bar */}
        <div className="w-80 md:w-96">
          <div className="relative h-3 bg-white/20 backdrop-blur-sm rounded-full overflow-hidden">
            {/* Progress Fill */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              style={{
                background: "linear-gradient(90deg, white 0%, hsl(300, 100%, 99%) 50%, white 100%)",
                boxShadow: "0 0 20px white",
              }}
            />
            
            {/* Milk Drop Indicator */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2"
              animate={{
                left: `${progress}%`,
              }}
              transition={{ duration: 0.3 }}
            >
              <svg width="20" height="24" viewBox="0 0 12 16" style={{ marginLeft: "-10px" }}>
                <motion.path
                  d="M6 0C6 0 0 8 0 11C0 13.7614 2.68629 16 6 16C9.31371 16 12 13.7614 12 11C12 8 6 0 6 0Z"
                  fill="white"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  style={{
                    filter: "drop-shadow(0 0 10px white)",
                  }}
                />
              </svg>
            </motion.div>
          </div>
          
          <motion.div
            className="text-center mt-4 text-xl font-bold text-white"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              textShadow: "0 0 20px rgba(255,255,255,0.8)",
            }}
          >
            {Math.round(progress)}%
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingIndicator;
