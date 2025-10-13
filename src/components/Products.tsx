import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Milk, Coffee, Package, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import productDisplay from "@/assets/product-display.jpg";

const products = [
  {
    icon: Milk,
    name: "Cultured Milk",
    description: "Fresh, naturally fermented milk with authentic taste",
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: Coffee,
    name: "Premium Yogurt",
    description: "Creamy yogurt packed with natural probiotics",
    color: "from-secondary/20 to-secondary/5"
  },
  {
    icon: Package,
    name: "Butter & Ghee",
    description: "Rich, golden butter and clarified ghee",
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: Sparkles,
    name: "Specialty Products",
    description: "Artisanal dairy treats crafted with care",
    color: "from-secondary/20 to-secondary/5"
  }
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-primary overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Product Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-liquid-morph">
              <img 
                src={productDisplay} 
                alt="African Joy Products" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-40" />
            </div>
            
            {/* Floating Accent */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-50"
            />
          </motion.div>

          {/* Right: Product List */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Our Products
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-12">
                From farm-fresh milk to artisanal dairy delights
              </p>
            </motion.div>

            <div className="space-y-6">
              {products.map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <Card className="border-2 border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all overflow-hidden">
                    <CardContent className="p-6 relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 ${hoveredIdx === idx ? 'opacity-100' : ''} transition-opacity`} />
                      
                      <div className="flex items-start gap-4 relative z-10">
                        <motion.div
                          animate={hoveredIdx === idx ? { rotate: [0, -10, 10, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <product.icon className="w-10 h-10 text-primary-foreground" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary-foreground mb-2">
                            {product.name}
                          </h3>
                          <p className="text-primary-foreground/80">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
