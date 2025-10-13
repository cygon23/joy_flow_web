import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Truck, Factory, Store, CheckCircle, Clock, ThermometerSun, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroProcessing from "@/assets/hero-processing.jpg";

const steps = [
  {
    icon: Droplets,
    title: "Collection",
    description: "Fresh milk collected daily from women-owned farms across Tanzania",
    details: "Our trained collection teams visit each farm twice daily to ensure the freshest milk. We use insulated containers and maintain strict temperature controls from the moment of collection.",
    time: "6 AM & 6 PM Daily",
    quality: "Temperature Controlled"
  },
  {
    icon: Truck,
    title: "Transportation",
    description: "Efficient decentralized pickup reduces spoilage and ensures freshness",
    details: "Our fleet of refrigerated vehicles follows optimized routes to minimize transit time. GPS tracking ensures real-time monitoring and quick delivery to processing facilities.",
    time: "Within 2 Hours",
    quality: "GPS Monitored"
  },
  {
    icon: Factory,
    title: "Processing",
    description: "Cultured and packaged with rigorous quality control standards",
    details: "State-of-the-art processing facilities use modern equipment while respecting traditional culturing methods. Every batch undergoes multiple quality checks.",
    time: "24-48 Hours",
    quality: "Lab Tested"
  },
  {
    icon: Store,
    title: "Delivery",
    description: "Premium products delivered fresh to local markets and retailers",
    details: "Our distribution network ensures products reach customers within hours of packaging. Cold chain integrity is maintained throughout delivery.",
    time: "Same Day",
    quality: "Fresh Guarantee"
  }
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
            From farm to table with care at every step
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
              { value: "10k+", label: "Liters Processed Daily" },
              { value: "< 2hrs", label: "Collection Time" },
              { value: "100%", label: "Quality Tested" },
              { value: "72hrs", label: "Farm to Shelf" },
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
