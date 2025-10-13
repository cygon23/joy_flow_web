import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Truck, Factory, Store } from "lucide-react";

const steps = [
  {
    icon: Droplets,
    title: "Collection",
    description: "Fresh milk collected daily from women-owned farms"
  },
  {
    icon: Truck,
    title: "Transportation",
    description: "Efficient decentralized pickup reduces spoilage"
  },
  {
    icon: Factory,
    title: "Processing",
    description: "Cultured and packaged with quality control"
  },
  {
    icon: Store,
    title: "Delivery",
    description: "Premium products delivered to local markets"
  }
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-64 h-64 bg-secondary-foreground/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-foreground/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-6">
            From Farm to Table
          </h2>
          <p className="text-xl text-secondary-foreground/90 max-w-3xl mx-auto">
            Our streamlined process ensures quality at every step
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-secondary-foreground/20 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary-foreground rounded-2xl p-8 text-center relative z-10 shadow-xl"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ delay: idx * 0.2 + 0.5, duration: 1 }}
                    className="inline-block mb-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto">
                      <step.icon className="w-10 h-10 text-secondary-foreground" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-secondary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary/80">
                    {step.description}
                  </p>

                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center text-lg">
                    {idx + 1}
                  </div>
                </motion.div>

                {/* Arrow for desktop */}
                {idx < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.2 + 0.3, duration: 0.6 }}
                    className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <svg className="w-5 h-5 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
  );
};

export default Process;
