import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Milk, Coffee, Package, Sparkles, X, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productDisplay from "@/assets/product-display.jpg";

// Product categories based on official price list
const culturedMilk = [
  { name: "Mtindi 5L (Gallon)", size: "5L", price: "12,500" },
  { name: "Mtindi 3L (Gallon)", size: "3L", price: "8,100" },
  { name: "Mtindi 500ml (Bottle)", size: "500ml", price: "1,500" },
  { name: "Mtindi 500ml (Pouch)", size: "500ml", price: "1,300" },
];

const yogurt = [
  { name: "Strawberry Drinking Yoghurt", size: "500ml (Bottle)", price: "2,500" },
  { name: "Strawberry Yoghurt", size: "150g (12 Cups)", price: "12,000" },
  { name: "Vanilla Yoghurt", size: "150g (12 Cups)", price: "12,000" },
  { name: "Natural Yoghurt", size: "150g (12 Cups)", price: "12,000" },
  { name: "Greek Yoghurt", size: "500g", price: "6,000" },
];

const cheeseAndCream = [
  { name: "Cream", size: "500g", price: "5,500" },
  { name: "Mozzarella", size: "1kg", price: "22,000" },
  { name: "Gouda", size: "1kg", price: "25,000" },
  { name: "Halloumi", size: "1kg", price: "24,000" },
  { name: "Cheddar", size: "1kg", price: "29,000" },
  { name: "Paneer", size: "1kg", price: "22,000" },
  { name: "Feta", size: "250g", price: "5,500" },
];

const categories = [
  {
    title: "🥛 Cultured Milk (Mtindi)",
    icon: Milk,
    products: culturedMilk,
    description: "Traditional Tanzanian cultured milk, rich in probiotics and heritage.",
    color: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    title: "🍓 Flavoured Yoghurt",
    icon: Coffee,
    products: yogurt,
    description: "Creamy, probiotic-rich yogurt in delicious flavors.",
    color: "from-secondary/20 via-secondary/10 to-transparent",
  },
  {
    title: "🧀 Cheese & Cream",
    icon: Package,
    products: cheeseAndCream,
    description: "Artisanal cheese and fresh cream, handcrafted with care.",
    color: "from-primary/20 via-primary/10 to-transparent",
  },
];

interface ProductDetail {
  name: string;
  size: string;
  price: string;
  category: string;
}

const ProductsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  return (
    <div className='min-h-screen bg-background'>
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

        <div className='relative z-10 text-center px-6 max-w-4xl mx-auto py-16'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6'>
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-lg sm:text-xl md:text-2xl text-primary-foreground/90'>
            Premium dairy products from women-owned farms in Tanzania
          </motion.p>
        </div>
      </section>

      {/* Products by Category */}
      <section ref={ref} className='py-16 sm:py-24 md:py-32 bg-card'>
        <div className='container mx-auto px-4 sm:px-6'>
          {categories.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: categoryIdx * 0.2, duration: 0.6 }}
              className='mb-16 sm:mb-24 last:mb-0'>
              {/* Category Header */}
              <div className='flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8'>
                <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0'>
                  <category.icon className='w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground' />
                </div>
                <div>
                  <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2'>
                    {category.title}
                  </h2>
                  <p className='text-sm sm:text-base text-muted-foreground'>
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
                {category.products.map((product, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ delay: categoryIdx * 0.2 + idx * 0.05, duration: 0.4 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => setSelectedProduct({ ...product, category: category.title })}
                    className='cursor-pointer'>
                    <Card className='border-2 hover:border-primary transition-all overflow-hidden h-full group shadow-lg hover:shadow-xl'>
                      <CardContent className='p-0 relative'>
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        />

                        <div className='p-4 sm:p-6 relative z-10'>
                          <div className='aspect-square bg-muted rounded-xl mb-4 flex items-center justify-center overflow-hidden'>
                            <category.icon className='w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground/40' />
                          </div>

                          <h3 className='text-base sm:text-lg font-bold text-foreground mb-2 line-clamp-2'>
                            {product.name}
                          </h3>
                          <p className='text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4'>
                            {product.size}
                          </p>

                          <div className='flex items-center justify-between'>
                            <div>
                              <div className='text-xs text-muted-foreground'>Price</div>
                              <div className='text-lg sm:text-xl font-bold text-secondary'>
                                TZS {product.price}
                              </div>
                            </div>
                            <Button
                              variant='secondary'
                              size='sm'
                              className='group-hover:scale-110 transition-transform'>
                              <ShoppingCart className='w-4 h-4' />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
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
            className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6'>
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className='bg-card rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl'>
              <div className='p-6 sm:p-8 relative'>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className='absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors'>
                  <X className='w-5 h-5 sm:w-6 sm:h-6' />
                </button>

                <div className='mb-6 sm:mb-8'>
                  <div className='text-sm text-muted-foreground mb-2'>
                    {selectedProduct.category}
                  </div>
                  <h2 className='text-2xl sm:text-3xl font-bold text-foreground mb-2'>
                    {selectedProduct.name}
                  </h2>
                  <p className='text-base sm:text-lg text-muted-foreground'>
                    {selectedProduct.size}
                  </p>
                </div>

                <div className='aspect-square bg-muted rounded-2xl mb-6 sm:mb-8 flex items-center justify-center'>
                  <Package className='w-20 h-20 sm:w-24 sm:h-24 text-muted-foreground/40' />
                </div>

                <div className='flex items-center justify-between pt-6 border-t border-border'>
                  <div>
                    <div className='text-sm text-muted-foreground mb-1'>Price</div>
                    <div className='text-2xl sm:text-3xl font-bold text-secondary'>
                      TZS {selectedProduct.price}
                    </div>
                  </div>
                  <Button
                    size='lg'
                    className='bg-secondary hover:bg-secondary/90 text-sm sm:text-base'>
                    Order Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default ProductsPage;
