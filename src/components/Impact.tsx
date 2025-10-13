import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const stats = [
  { value: "500+", label: "Women Farmers" },
  { value: "10k+", label: "Liters Daily" },
  { value: "30%", label: "Income Increase" },
  { value: "Zero", label: "Waste Goal" }
];

const testimonials = [
  {
    name: "Amina Hassan",
    role: "Dairy Farmer",
    quote: "African Joy has transformed my life. Now I have reliable income and can send my children to school."
  },
  {
    name: "Fatuma Juma",
    role: "Cooperative Member",
    quote: "The fair prices and timely payments have given our community new hope and prosperity."
  },
  {
    name: "Halima Said",
    role: "Farm Owner",
    quote: "Working with African Joy means my hard work is valued. They treat us as true partners."
  }
];

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering communities, transforming lives
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-primary rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ delay: idx * 0.1 + 0.5, duration: 0.6 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
              </motion.div>
              <div className="text-sm md:text-base text-primary-foreground/80 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-2 hover:border-primary transition-colors">
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-secondary mb-4" />
                  <p className="text-foreground mb-6 flex-grow italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-primary text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
