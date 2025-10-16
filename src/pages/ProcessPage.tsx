import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Truck, Factory, Store, CheckCircle, Clock, ThermometerSun, Shield, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroProcessing from "@/assets/hero-processing.jpg";

const steps = [
  {
    icon: Droplets,
    title: "Farmer Partnership & Milk Collection",
    description:
      "We work hand-in-hand with smallholder farmers — especially women — in the Olkeryan and Meru communities",
    details:
      "Our network of over 93+ women farmers supplies high-quality raw milk daily. Through the MEDA (FEGEE) partnership, we train farmers on animal health, milk hygiene, and record-keeping. Farmers receive milk-can incentives and fair payment terms.",
    time: "Daily Collection",
    quality: "MEDA Trained Farmers",
    animation:
      "Parallax map showing farmers delivering milk cans to collection centers",
  },
  {
    icon: Truck,
    title: "Cooling & Transportation",
    description:
      "Milk is collected at two main centers — Olkeryan and Karangai",
    details:
      "Using dedicated collection tanks, including a newly installed 500-liter cooling tank that keeps milk fresh and safe. Our logistics team and trained riders transport milk to the factory under hygienic and temperature-controlled conditions.",
    time: "Under 2 Hours",
    quality: "500L Cooling Tank",
    animation:
      "Smooth line animation of trucks and bikes moving across a route",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Before processing, every batch undergoes strict quality tests",
    details:
      "We test for purity, temperature, and hygiene. We adhere to Tanzanian Bureau of Standards (TBS) and Occupational Safety and Health Authority (OSHA) regulations to ensure consumer safety.",
    time: "Every Batch",
    quality: "TBS & OSHA Certified",
    animation: "Animated lab with check-marks appearing as tests are approved",
  },
  {
    icon: Factory,
    title: "Processing & Transformation",
    description:
      "Modern dairy technology to process milk into premium products",
    details:
      "At our Arusha facility, we use modern equipment to produce Pasteurized & Homogenized Fresh Milk, Cultured Sour Milk (Mtindi), and Yogurt. Each step — pasteurization, fermentation, and packaging — is carefully controlled to preserve freshness and flavor.",
    time: "24-48 Hours",
    quality: "Modern Technology",
    animation:
      "Liquid transition between stages (milk flowing → packaged products)",
  },
  {
    icon: Store,
    title: "Packaging & Distribution",
    description:
      "High-quality, locally printed materials for safety and freshness",
    details:
      "African Joy products are packaged using safe, fresh packaging materials. Distribution is handled through women vendors, retail shops, and supermarkets in Arusha, Manyara, and beyond.",
    time: "Same Day",
    quality: "Local Distribution",
    animation: "Boxes flowing across screen representing delivery and reach",
  },
  {
    icon: Leaf,
    title: "Sustainability & Growth",
    description:
      "Building a greener future through responsible farming and smarter resource use.",
    details:
      "By 2026, African Joy aims to connect its factory to a central sewage system for full environmental compliance. We’re training farmers to grow their own quality grasses, recycle efficiently, and conserve the environment — improving both livelihoods and the land we depend on.",
    time: "2025–2028",
    quality: "Eco-Driven",
    animation:
      "Green background with animated leaves transforming into the African Joy logo, symbolizing renewal and harmony.",
  },
];

const qualityStandards = [
  { icon: ThermometerSun, title: "Temperature Control", description: "Maintained at 4°C throughout" },
  { icon: Shield, title: "Safety Testing", description: "Multiple quality checks at each stage" },
  { icon: CheckCircle, title: "Certification", description: "Meets international dairy standards" },
  { icon: Clock, title: "Freshness", description: "Farm to shelf in under 72 hours" },
];

const ProcessPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img 
            src={heroProcessing} 
            alt="Processing facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary/60" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-secondary-foreground mb-6"
          >
            Our Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary-foreground/90"
          >
            From farm to shelf - empowering communities, nourishing Tanzania
          </motion.p>
        </div>
      </section>

      {/* Process Flow with Connecting Lines */}
      <section ref={ref} className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="relative max-w-6xl mx-auto">
            {/* SVG Connecting Path */}
            <svg 
              className="absolute inset-0 w-full h-full -z-0 hidden lg:block" 
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <motion.path
                d="M 150 100 Q 400 50, 550 150 T 950 200 Q 1100 220, 1200 280"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="3"
                strokeDasharray="10,10"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative"
                >
                  <div className="bg-background rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
                    <div className="flex items-start gap-6 mb-6">
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0"
                      >
                        <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center relative">
                          <step.icon className="w-10 h-10 text-primary-foreground" />
                          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center text-sm">
                            {idx + 1}
                          </div>
                        </div>
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <p className="text-foreground leading-relaxed mb-6">
                      {step.details}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium text-foreground">{step.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{step.quality}</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow indicator for desktop */}
                  {idx < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: idx * 0.2 + 0.3, duration: 0.4 }}
                      className="hidden lg:block absolute -bottom-6 left-1/2 -translate-x-1/2 z-20"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Quality Standards
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Excellence in every drop through rigorous standards and care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {qualityStandards.map((standard, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-primary-foreground rounded-2xl p-8 shadow-xl">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto">
                      <standard.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {standard.title}
                  </h3>
                  <p className="text-foreground/80">
                    {standard.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: "20,338L", label: "Monthly Collection" },
              { value: "< 2hrs", label: "Collection Time" },
              { value: "100%", label: "TBS Tested" },
              { value: "93+", label: "Women Farmers" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="bg-secondary rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-foreground/80 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessPage;
