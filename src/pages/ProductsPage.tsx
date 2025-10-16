import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Milk, Coffee, Package, Sparkles, X, ShoppingCart, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderForm from "@/components/OrderForm";
import productDisplay from "@/assets/product-display.jpg";

import img500ml from "@/assets/pics/allProd/500ml.jpg";
import cheederCheese from "@/assets/pics/allProd/cheedercheese.jpg";
import cheederCheese2 from "@/assets/pics/allProd/cheedercheese2.jpg";
import creemCheese from "@/assets/pics/allProd/creemCheese.jpg";
import fetacheese from "@/assets/pics/allProd/fetacheese.jpg";
import greekYougut from "@/assets/pics/allProd/greekYougut.jpg";
import halloumiCheese from "@/assets/pics/allProd/halloumicheese.jpg";
import mozzellaCheese from "@/assets/pics/allProd/mozzellacheese.jpg";
import mtindiPouch from "@/assets/pics/allProd/mtindiPouch.jpg";
import mtindi500 from "@/assets/pics/allProd/mtindi500.jpg";
import img3lt from "@/assets/pics/allProd/3lt.jpg";
import img5lt from "@/assets/pics/allProd/5lt.jpg";
import paneerCheese from "@/assets/pics/allProd/paneercheese.jpg";
import strawberryCup from "@/assets/pics/allProd/strawberrycup.jpg";
import strowberryCup from "@/assets/pics/allProd/strowberrycup.jpg";
import strobbery from "@/assets/pics/allProd/strobbery.jpg";
import vanillaSmall from "@/assets/pics/allProd/vannilaSmall.jpg";
import vanillaYoug from "@/assets/pics/allProd/vanillaYoug.jpg";
import PlainYoug from "@/assets/pics/allProd/PlainYoug.jpg";

// Product categories based on official price list
const culturedMilk = [
  { name: "Mtindi 5L (Gallon)", size: "5L", price: "12,500", image: img5lt },
  { name: "Mtindi 3L (Gallon)", size: "3L", price: "8,100", image: img3lt },
  { name: "Mtindi 500ml", size: "500ml", price: "1,500", image: mtindi500 },
  { name: "Mtindi Pouch", size: "500ml", price: "1,300", image: mtindiPouch },
];

const yogurt = [
  {
    name: "Strawberry Drinking Yoghurt",
    size: "500ml (Bottle)",
    price: "2,500",
    image: strowberryCup,
  },
  {
    name: "Strawberry Yoghurt",
    size: "150g (12 Cups)",
    price: "12,000",
    image: strobbery,
  },
  {
    name: "Vanilla Yoghurt",
    size: "150g (12 Cups)",
    price: "12,000",
    image: vanillaYoug,
  },
  {
    name: "Natural Yoghurt",
    size: "150g (12 Cups)",
    price: "12,000",
    image: PlainYoug,
  },
  { name: "Greek Yoghurt", size: "500g", price: "6,000", image: greekYougut },
];

const cheeseAndCream = [
  { name: "Cream", size: "500g", price: "5,500", image: creemCheese },
  { name: "Mozzarella", size: "1kg", price: "22,000", image: mozzellaCheese },
  { name: "Gouda", size: "1kg", price: "25,000" },
  { name: "Halloumi", size: "1kg", price: "24,000", image: halloumiCheese },
  { name: "Cheddar", size: "1kg", price: "29,000", image: cheederCheese2 },
  { name: "Paneer", size: "1kg", price: "22,000", image: paneerCheese },
  { name: "Feta", size: "250g", price: "5,500", image: fetacheese },
];

const categories = [
  {
    title: "🥛 Cultured Milk (Mtindi)",
    icon: Milk,
    products: culturedMilk,
    description:
      "Traditional Tanzanian cultured milk, rich in probiotics and heritage.",
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
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(
    null
  );
  const [showOrderForm, setShowOrderForm] = useState(false);

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
            Quality dairy products from women-owned farms in Tanzania
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: categoryIdx * 0.12, duration: 0.6 }}
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
                    transition={{
                      delay: categoryIdx * 0.2 + idx * 0.05,
                      duration: 0.4,
                    }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() =>
                      setSelectedProduct({
                        ...product,
                        category: category.title,
                      })
                    }
                    className='cursor-pointer'>
                    <Card className='border-2 hover:border-primary transition-all overflow-hidden h-full group shadow-lg hover:shadow-xl'>
                      <CardContent className='p-0 relative'>
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        />

                        <div className='p-4 sm:p-6 relative z-10'>
                          {/*  Product Image or Icon Fallback */}
                          <div className='aspect-square bg-muted rounded-xl mb-4 flex items-center justify-center overflow-hidden relative'>
                            {product.image && (
                              <img
                                src={product.image}
                                alt={product.name}
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                                onError={(e) => {
                                  // Hide the image if it fails to load
                                  e.currentTarget.style.display = "none";
                                  // Show the fallback icon
                                  const fallbackIcon = e.currentTarget
                                    .nextSibling as HTMLElement;
                                  if (fallbackIcon)
                                    fallbackIcon.style.display = "flex";
                                }}
                              />
                            )}

                            {/* Fallback Icon */}
                            <category.icon
                              className='w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground/40 absolute'
                              style={{
                                display: product.image ? "none" : "flex",
                              }}
                            />
                          </div>

                          {/* Product Info */}
                          <h3 className='text-base sm:text-lg font-bold text-foreground mb-2 line-clamp-2'>
                            {product.name}
                          </h3>
                          <p className='text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4'>
                            {product.size}
                          </p>

                          <div className='flex items-center justify-between'>
                            <div>
                              <div className='text-xs text-muted-foreground'>
                                Price
                              </div>
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

                <div className='aspect-square bg-muted rounded-2xl mb-6 sm:mb-8 flex items-center justify-center overflow-hidden'>
                  {selectedProduct?.image ? (
                    <motion.img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className='w-full h-full object-cover rounded-2xl'
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <Package className='w-20 h-20 sm:w-24 sm:h-24 text-muted-foreground/40' />
                  )}
                </div>

                {/* Product Description */}
                <div className='mb-6 sm:mb-8 p-4 bg-muted/50 rounded-xl'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    About This Product
                  </h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {selectedProduct.category.includes("Cultured Milk") &&
                      "Traditional Tanzanian cultured milk (Mtindi), rich in natural probiotics and made from fresh, high-quality dairy. Perfect for daily nutrition and supporting digestive health."}
                    {selectedProduct.category.includes("Yoghurt") &&
                      "Creamy, delicious yogurt made from premium milk sourced from women-owned farms. Packed with probiotics and crafted with care for exceptional taste and quality."}
                    {selectedProduct.category.includes("Cheese") &&
                      "Artisanal cheese handcrafted using traditional methods and fresh dairy. Perfect for cooking, snacking, or adding gourmet touches to your favorite dishes."}
                  </p>
                </div>

                <div className='flex items-center justify-between pt-6 border-t border-border'>
                  <div>
                    <div className='text-sm text-muted-foreground mb-1'>
                      Price
                    </div>
                    <div className='text-2xl sm:text-3xl font-bold text-secondary'>
                      TZS {selectedProduct.price}
                    </div>
                  </div>
                  <Button
                    size='lg'
                    onClick={() => setShowOrderForm(true)}
                    className='bg-secondary hover:bg-secondary/90 text-sm sm:text-base'>
                    Order Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Order Form Modal */}
      <AnimatePresence>
        {showOrderForm && selectedProduct && (
          <OrderForm
            product={selectedProduct}
            onClose={() => {
              setShowOrderForm(false);
              setSelectedProduct(null);
            }}
          />
        )}
      </AnimatePresence>

      {/* Bulk & Monthly Payment Section */}
      <section className='py-24 md:py-32 bg-secondary text-secondary-foreground'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              Special Purchase Options
            </h2>
            <p className='text-xl text-secondary-foreground/90 max-w-3xl mx-auto'>
              Flexible options for businesses and regular customers
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {/* Bulk Orders */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className='bg-secondary-foreground text-foreground rounded-3xl p-8 shadow-2xl'>
              <div className='w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6'>
                <TrendingUp className='w-8 h-8 text-primary-foreground' />
              </div>
              <h3 className='text-3xl font-bold mb-4'>Bulk Orders</h3>
              <p className='text-muted-foreground text-lg mb-6'>
                Perfect for retailers, restaurants, and businesses. Get special
                pricing on large volume purchases.
              </p>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-start gap-3'>
                  <div className='w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <div className='w-2 h-2 rounded-full bg-primary' />
                  </div>
                  <span className='text-foreground'>
                    Discounted bulk pricing
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <div className='w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <div className='w-2 h-2 rounded-full bg-primary' />
                  </div>
                  <span className='text-foreground'>
                    Priority delivery scheduling
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <div className='w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <div className='w-2 h-2 rounded-full bg-primary' />
                  </div>
                  <span className='text-foreground'>
                    Dedicated account manager
                  </span>
                </li>
              </ul>
              <Button
                size='lg'
                className='w-full bg-primary hover:bg-primary/90'>
                Request Bulk Quote
              </Button>
            </motion.div>

            {/* Monthly Payment Plans */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className='bg-secondary-foreground text-foreground rounded-3xl p-8 shadow-2xl'>
              <div className='w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6'>
                <Users className='w-8 h-8 text-secondary-foreground' />
              </div>
              <h3 className='text-3xl font-bold mb-4'>Monthly Billing</h3>
              <p className='text-muted-foreground text-lg mb-6'>
                For regular customers who prefer monthly billing. Keep track of
                purchases and pay at month-end.
              </p>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-start gap-3'>
                  <div className='w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <div className='w-2 h-2 rounded-full bg-secondary' />
                  </div>
                  <span className='text-foreground'>
                    Consolidated monthly invoice
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <div className='w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <div className='w-2 h-2 rounded-full bg-secondary' />
                  </div>
                  <span className='text-foreground'>
                    Flexible payment terms
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <div className='w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <div className='w-2 h-2 rounded-full bg-secondary' />
                  </div>
                  <span className='text-foreground'>
                    Detailed purchase tracking
                  </span>
                </li>
              </ul>
              <Button
                size='lg'
                variant='outline'
                className='w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground'>
                Apply for Monthly Billing
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
