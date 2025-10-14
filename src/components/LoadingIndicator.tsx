import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingIndicator = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const phaseTimer = setInterval(() => {
      setPhase((p) => (p + 1) % 5);
    }, 1200);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      onComplete?.();
    }, 6000);

    return () => {
      clearInterval(phaseTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  const brandGreen = "#60A441";
  const accentGreen = "#4a8a34";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFFBFF] overflow-hidden"
    >
      {/* Animated Background - Living Farm Landscape */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M0,400 Q150,350 300,400 T600,400 T900,400 T1200,400 L1200,800 L0,800 Z"
            fill={brandGreen}
            animate={{ d: ["M0,400 Q150,350 300,400 T600,400 T900,400 T1200,400 L1200,800 L0,800 Z", "M0,420 Q150,370 300,420 T600,420 T900,420 T1200,420 L1200,800 L0,800 Z", "M0,400 Q150,350 300,400 T600,400 T900,400 T1200,400 L1200,800 L0,800 Z"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-12 px-6">
        
        {/* PHASE 1: Milk Drop Morph */}
        {phase === 0 && (
          <motion.div
            key="phase-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="relative w-48 h-48 flex items-center justify-center"
          >
            {/* Ripple waves */}
            {[0, 1, 2].map((i) => (
              <motion.svg
                key={`ripple-${i}`}
                className="absolute"
                width="200"
                height="200"
                viewBox="0 0 200 200"
              >
                <motion.circle
                  cx="100"
                  cy="100"
                  r="60"
                  stroke={brandGreen}
                  strokeWidth="2"
                  fill="none"
                  animate={{
                    r: [60, 95, 60],
                    opacity: [1, 0.1, 1],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              </motion.svg>
            ))}

            {/* Morphing Central Drop */}
            <motion.svg
              width="120"
              height="140"
              viewBox="0 0 100 140"
              style={{ filter: `drop-shadow(0 12px 30px ${brandGreen}40)` }}
            >
              <motion.path
                d="M50 10 C30 30, 15 55, 15 75 C15 110, 32 130, 50 130 C68 130, 85 110, 85 75 C85 55, 70 30, 50 10 Z"
                fill={brandGreen}
                animate={{
                  d: [
                    // Milk drop (start)
                    "M50 10 C30 30, 15 55, 15 75 C15 110, 32 130, 50 130 C68 130, 85 110, 85 75 C85 55, 70 30, 50 10 Z",
                    // Leaf (growth)
                    "M50 15 C35 35, 25 60, 28 85 C32 115, 40 135, 50 135 C60 135, 68 115, 72 85 C75 60, 65 35, 50 15 Z",
                    // Heart (care)
                    "M50 20 C35 35, 20 55, 22 80 C25 115, 38 140, 50 140 C62 140, 75 115, 78 80 C80 55, 65 35, 50 20 Z",
                    // Back to drop
                    "M50 10 C30 30, 15 55, 15 75 C15 110, 32 130, 50 130 C68 130, 85 110, 85 75 C85 55, 70 30, 50 10 Z",
                  ],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.svg>

            {/* Floating particles (women's energy) */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: brandGreen }}
                animate={{
                  x: [0, Math.cos((i / 6) * Math.PI * 2) * 80],
                  y: [0, Math.sin((i / 6) * Math.PI * 2) * 80],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i / 6) * 0.2,
                }}
              />
            ))}
          </motion.div>
        )}

        {/* PHASE 2: Farm Collection */}
        {phase === 1 && (
          <motion.div
            key="phase-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative w-56 h-40 flex items-center justify-center"
          >
            {/* Farmer figure */}
            <motion.svg width="80" height="100" viewBox="0 0 80 100" className="absolute left-0">
              <circle cx="20" cy="20" r="8" fill={brandGreen} />
              <rect x="14" y="32" width="12" height="30" rx="6" fill={brandGreen} />
              <motion.rect
                x="10"
                y="35"
                width="6"
                height="25"
                rx="3"
                fill={brandGreen}
                animate={{ x: [10, 5, 10], y: [35, 32, 35] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              <motion.rect
                x="24"
                y="35"
                width="6"
                height="25"
                rx="3"
                fill={brandGreen}
                animate={{ x: [24, 29, 24], y: [35, 32, 35] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.1 }}
              />
              <rect x="14" y="65" width="6" height="30" rx="3" fill={brandGreen} />
              <rect x="24" y="65" width="6" height="30" rx="3" fill={brandGreen} />
            </motion.svg>

            {/* Milk can */}
            <motion.svg
              width="60"
              height="70"
              viewBox="0 0 50 60"
              className="absolute left-28"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <rect x="10" y="15" width="30" height="35" rx="3" fill={brandGreen} opacity="0.8" />
              <rect x="12" y="12" width="26" height="8" rx="2" fill={brandGreen} />
              <path d="M40 20 Q45 18 45 28 Q45 32 40 33" stroke={brandGreen} strokeWidth="2" fill="none" />
              <rect x="15" y="20" width="20" height="20" fill="white" opacity="0.3" />
            </motion.svg>

            {/* Milk droplets flowing */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`drop-${i}`}
                className="absolute w-2 h-2 rounded-full"
                style={{ backgroundColor: brandGreen }}
                animate={{
                  x: [28 * Math.cos((i / 5) * Math.PI * 2), 60 * Math.cos((i / 5) * Math.PI * 2)],
                  y: [28 * Math.sin((i / 5) * Math.PI * 2), 60 * Math.sin((i / 5) * Math.PI * 2)],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: (i / 5) * 0.15,
                }}
              />
            ))}

            {/* Text label */}
            <motion.div className="absolute bottom-0 text-center">
              <p className="text-xs font-bold" style={{ color: brandGreen }}>
                FARM COLLECTION
              </p>
              <p className="text-[10px] opacity-60" style={{ color: brandGreen }}>
                93+ Women Farmers
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* PHASE 3: Quality Processing */}
        {phase === 2 && (
          <motion.div
            key="phase-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="relative w-56 h-40 flex items-center justify-center"
          >
            {/* Processing tanks */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`tank-${i}`}
                className="absolute w-16 h-20 rounded-lg border-2"
                style={{ borderColor: brandGreen }}
                animate={{
                  x: [-80 + i * 80, -80 + i * 80],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              >
                {/* Liquid inside */}
                <motion.div
                  className="w-full h-1/2 rounded-b-lg"
                  style={{ backgroundColor: brandGreen }}
                  animate={{
                    height: ["40%", "70%", "40%"],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              </motion.div>
            ))}

            {/* Checkmark validation */}
            <motion.svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              className="absolute"
              animate={{ scale: [0, 1, 1, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                times: [0, 0.3, 0.7, 1],
              }}
            >
              <circle cx="30" cy="30" r="28" stroke={brandGreen} strokeWidth="2" fill="none" />
              <path
                d="M20 30 L27 38 L40 22"
                stroke={brandGreen}
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>

            <motion.div className="absolute bottom-0 text-center">
              <p className="text-xs font-bold" style={{ color: brandGreen }}>
                QUALITY CONTROL
              </p>
              <p className="text-[10px] opacity-60" style={{ color: brandGreen }}>
                TBS/OSHA Compliant
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* PHASE 4: Products Created */}
        {phase === 3 && (
          <motion.div
            key="phase-3"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 10 }}
            transition={{ duration: 0.4 }}
            className="relative w-56 h-40 flex items-center justify-center gap-8"
          >
            {/* Milk bottle */}
            {[
              { name: "MILK", x: -40 },
              { name: "MTINDI", x: 0 },
              { name: "YOGURT", x: 40 },
            ].map((product, i) => (
              <motion.div
                key={product.name}
                className="flex flex-col items-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              >
                <svg width="45" height="60" viewBox="0 0 45 60">
                  <rect x="10" y="12" width="25" height="40" rx="2" fill={brandGreen} opacity="0.9" />
                  <rect x="14" y="6" width="17" height="8" rx="1.5" fill={brandGreen} />
                  <rect x="12" y="16" width="21" height="25" fill="white" opacity="0.25" />
                  <circle cx="22.5" cy="28" r="2" fill={brandGreen} opacity="0.6" />
                </svg>
                <motion.p
                  className="text-[9px] font-bold mt-2"
                  style={{ color: brandGreen }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                >
                  {product.name}
                </motion.p>
              </motion.div>
            ))}

            <motion.div className="absolute bottom-0 text-center w-full">
              <p className="text-xs font-bold" style={{ color: brandGreen }}>
                PRODUCTS
              </p>
              <p className="text-[10px] opacity-60" style={{ color: brandGreen }}>
                Fresh · Wholesome · Nutritious
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* PHASE 5: Distribution & Women Empowerment */}
        {phase === 4 && (
          <motion.div
            key="phase-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="relative w-56 h-40 flex items-center justify-center"
          >
            {/* Central distributor (woman) */}
            <motion.svg
              width="70"
              height="90"
              viewBox="0 0 70 90"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <circle cx="35" cy="18" r="10" fill={brandGreen} />
              <ellipse cx="35" cy="40" rx="14" ry="18" fill={brandGreen} opacity="0.85" />
              <rect x="28" y="60" width="5" height="25" fill={brandGreen} />
              <rect x="37" y="60" width="5" height="25" fill={brandGreen} />
              {/* Hand gesture */}
              <motion.g animate={{ rotate: [0, 15, 0] }} style={{ transformOrigin: "25px 40px" }}>
                <rect x="18" y="38" width="4" height="20" rx="2" fill={brandGreen} />
                <circle cx="18" cy="36" r="3" fill={brandGreen} />
              </motion.g>
              <motion.g animate={{ rotate: [0, -15, 0] }} style={{ transformOrigin: "45px 40px" }}>
                <rect x="48" y="38" width="4" height="20" rx="2" fill={brandGreen} />
                <circle cx="50" cy="36" r="3" fill={brandGreen} />
              </motion.g>
            </motion.svg>

            {/* Radiating products to community */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`community-${i}`}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: brandGreen,
                  left: `calc(50% + ${Math.cos((i / 6) * Math.PI * 2) * 80}px)`,
                  top: `calc(50% + ${Math.sin((i / 6) * Math.PI * 2) * 80}px)`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: (i / 6) * 0.18,
                }}
              />
            ))}

            <motion.div className="absolute bottom-0 text-center">
              <p className="text-xs font-bold" style={{ color: brandGreen }}>
                COMMUNITY
              </p>
              <p className="text-[10px] opacity-60" style={{ color: brandGreen }}>
                250+ Women Empowered
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Brand Title */}
        <motion.div className="text-center mt-4">
          <motion.h1
            className="text-5xl md:text-6xl font-black tracking-tight"
            style={{ color: brandGreen }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          >
            African Joy
          </motion.h1>
          <motion.p
            className="text-sm font-bold tracking-widest mt-3"
            style={{ color: brandGreen, opacity: 0.7 }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 0.3 }}
          >
            FROM FARM TO TABLE WITH LOVE
          </motion.p>
        </motion.div>

        {/* Phase Indicator Dots */}
        <div className="flex gap-2 justify-center">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: phase === i ? brandGreen : brandGreen,
              }}
              animate={{
                scale: phase === i ? 1.3 : 0.8,
                opacity: phase === i ? 1 : 0.3,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        {/* Floating Impact Stats */}
        <motion.div
          className="text-center text-xs font-semibold"
          style={{ color: brandGreen, opacity: 0.6 }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p>🌾 20,338 L Monthly • 93+ Women • 2 Centers 🥛</p>
        </motion.div>
      </div>

      {/* Subtle Background Pulse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${brandGreen}05 0%, transparent 70%)`,
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default LoadingIndicator;