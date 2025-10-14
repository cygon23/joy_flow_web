import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Milk, Coffee, Package, Sparkles, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productDisplay from "@/assets/product-display.jpg";

const products = [
  {
    icon: Milk,
    name: "Pasteurized & Homogenized Fresh Milk",
    tagline: "Pure, Farm-Fresh Goodness",
    description:
      "Direct from our partner farms in Olkeryan and Meru to your table. Our fresh milk undergoes strict quality testing and is pasteurized using modern dairy technology to ensure safety while preserving freshness and flavor.",
    benefits: [
      "Farm Fresh Daily",
      "Pasteurized",
      "TBS Certified",
      "No Preservatives",
    ],
    color: "from-primary/30 via-primary/10 to-transparent",
    sizes: ["500ml", "1L", "2L"],
    price: "Contact for pricing",
  },
  {
    icon: Coffee,
    name: "Yogurt",
    tagline: "Creamy Perfection in Every Spoonful",
    description:
      "Smooth, creamy yogurt made from the finest farm-fresh milk. Carefully fermented using modern processing technology while respecting traditional methods. Every batch undergoes multiple quality checks.",
    benefits: [
      "High Protein",
      "Probiotic-Rich",
      "Quality Tested",
      "Fresh Daily",
    ],
    color: "from-secondary/30 via-secondary/10 to-transparent",
    sizes: ["200g", "500g", "1kg"],
    price: "Contact for pricing",
  },
  {
    icon: Sparkles,
    name: "Cultured Sour Milk (Mtindi)",
    tagline: "Traditional Taste, Authentic Heritage",
    description:
      "Traditional Tanzanian cultured milk made using time-honored fermentation methods. Mtindi is naturally rich in probiotics, offering authentic taste and cultural heritage in every sip. A staple in East African cuisine.",
    benefits: [
      "Traditional Recipe",
      "Probiotic-Rich",
      "Cultural Heritage",
      "Natural Fermentation",
    ],
    color: "from-primary/30 via-primary/10 to-transparent",
    sizes: ["500ml", "1L", "2L"],
    price: "Contact for pricing",
  },
  {
    icon: Package,
    name: "Cheese",
    tagline: "Handcrafted, Fresh Cheese",
    description:
      "Artisanal cheese made from our fresh pasteurized milk. Carefully cultured and aged by local women producers to deliver rich flavor and texture. Perfect for everyday meals and special occasions.",
    benefits: ["Handmade", "Locally Produced", "High Protein", "No Additives"],
    color: "from-secondary/30 via-secondary/10 to-transparent",
    sizes: ["200g", "500g", "1kg"],
    price: "Contact for pricing",
  },
];

const ProductsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className='min-h-screen'>
      <Navbar />

      {/* Hero Section */}
      <section className='relative min-h-[50vh] flex items-center justify-center overflow-hidden mt-20 bg-primary'>
        <div className='absolute inset-0 opacity-20'>
          <img
            src={productDisplay}
            alt='Products'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='relative z-10 text-center px-6 max-w-4xl mx-auto'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-5xl md:text-7xl font-bold text-primary-foreground mb-6'>
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl md:text-2xl text-primary-foreground/90'>
            High-quality dairy products from women-owned farms
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={ref} className='py-24 md:py-32 bg-card'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProduct(product)}
                className='cursor-pointer'>
                <Card className='border-2 hover:border-primary transition-all overflow-hidden h-full group'>
                  <CardContent className='p-0 relative'>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                    />

                    <div className='p-8 relative z-10'>
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className='inline-block mb-6'>
                        <div className='w-20 h-20 rounded-2xl bg-primary flex items-center justify-center'>
                          <product.icon className='w-10 h-10 text-primary-foreground' />
                        </div>
                      </motion.div>

                      <h3 className='text-3xl font-bold text-foreground mb-2'>
                        {product.name}
                      </h3>
                      <p className='text-secondary font-medium mb-4'>
                        {product.tagline}
                      </p>
                      <p className='text-muted-foreground mb-6'>
                        {product.description.substring(0, 120)}...
                      </p>

                      <div className='flex items-center justify-between'>
                        <span className='text-lg font-bold text-primary'>
                          {product.price}
                        </span>
                        <Button
                          variant='secondary'
                          size='sm'
                          className='group-hover:scale-110 transition-transform'>
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6'>
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className='bg-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl'>
              <div className='p-8 relative'>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className='absolute top-4 right-4 w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors'>
                  <X className='w-6 h-6' />
                </button>

                <div className='flex items-start gap-6 mb-8'>
                  <div className='w-24 h-24 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0'>
                    <selectedProduct.icon className='w-12 h-12 text-primary-foreground' />
                  </div>
                  <div>
                    <h2 className='text-4xl font-bold text-foreground mb-2'>
                      {selectedProduct.name}
                    </h2>
                    <p className='text-xl text-secondary font-medium'>
                      {selectedProduct.tagline}
                    </p>
                  </div>
                </div>

                <p className='text-muted-foreground text-lg mb-8 leading-relaxed'>
                  {selectedProduct.description}
                </p>

                <div className='mb-8'>
                  <h3 className='text-2xl font-bold text-foreground mb-4'>
                    Benefits
                  </h3>
                  <div className='grid grid-cols-2 gap-3'>
                    {selectedProduct.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className='flex items-center gap-2 bg-primary/10 rounded-lg p-3'>
                        <div className='w-2 h-2 rounded-full bg-secondary' />
                        <span className='text-foreground font-medium'>
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className='mb-8'>
                  <h3 className='text-2xl font-bold text-foreground mb-4'>
                    Available Sizes
                  </h3>
                  <div className='flex gap-3'>
                    {selectedProduct.sizes.map((size, idx) => (
                      <div
                        key={idx}
                        className='px-4 py-2 rounded-full bg-muted text-foreground font-medium'>
                        {size}
                      </div>
                    ))}
                  </div>
                </div>

                <div className='flex items-center justify-between pt-6 border-t border-border'>
                  <div>
                    <div className='text-sm text-muted-foreground mb-1'>
                      Starting at
                    </div>
                    <div className='text-3xl font-bold text-primary'>
                      {selectedProduct.price}
                    </div>
                  </div>
                  <Button
                    size='lg'
                    className='bg-secondary hover:bg-secondary/90'>
                    Order Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coming Soon Section */}
      <section className='py-24 md:py-32 bg-primary text-primary-foreground'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-8'>
            <h2 className='text-4xl md:text-6xl font-bold mb-4'>Coming Soon</h2>
            <p className='text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-6'>
              Exciting new products in development for 2025-2026
            </p>
            <div className='flex justify-center'>
              <button
                onClick={() => setShowComingSoon((s) => !s)}
                className='px-6 py-3 rounded-full bg-primary-foreground text-primary font-semibold shadow-lg hover:scale-105 transition-transform'
              >
                {showComingSoon ? 'Hide coming soon' : 'View coming soon'}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={showComingSoon ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.45 }}
            className='overflow-hidden'
          >
            <div className='grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto py-6'>
              {[
                { name: 'Flavored Milk', icon: Milk },
                { name: 'Butter', icon: Package },
                { name: 'Ghee', icon: Sparkles },
                { name: 'Cream', icon: Coffee },
              ].map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={showComingSoon ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 + 0.05, duration: 0.4 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className='bg-primary-foreground rounded-2xl p-6 text-center shadow-xl'
                >
                  <div className='w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4'>
                    <product.icon className='w-8 h-8 text-primary-foreground' />
                  </div>
                  <h3 className='text-lg font-bold text-foreground'>
                    {product.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
