import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Package, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TestimonialsSuccessStories from "@/components/TestimonialsSuccessStories";
import heroMilkFlow from "@/assets/hero-milk-flow.jpg";
import productDisplay from "@/assets/hero-dairy-bottles.jpg";
import landscapeFarm from "@/assets/product-display1.jpg";

const quickLinks = [
  {
    icon: Heart,
    title: "Our Story",
    description: "Empowering 500+ women farmers across Tanzania",
    path: "/story",
    color: "from-primary/20 to-transparent",
  },
  {
    icon: Package,
    title: "Products",
    description: "Premium dairy from farm to table",
    path: "/products",
    color: "from-secondary/20 to-transparent",
  },
  {
    icon: TrendingUp,
    title: "Our Process",
    description: "Quality at every step of the journey",
    path: "/process",
    color: "from-primary/20 to-transparent",
  },
  {
    icon: Users,
    title: "Impact",
    description: "Transforming communities together",
    path: "/impact",
    color: "from-secondary/20 to-transparent",
  },
];

const Index = () => {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Hero />

      {/* Quick Navigation Section */}
      <section className='py-24 md:py-32 bg-card'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'>
            <h2 className='text-4xl md:text-6xl font-bold text-primary mb-6'>
              Discover African Joy
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Explore our mission, products, and the impact we're making
              together
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
            {quickLinks.map((link, idx) => (
              <Link key={link.path} to={link.path}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className='bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group cursor-pointer h-full'>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />

                  <div className='relative z-10'>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className='inline-block mb-6'>
                      <div className='w-16 h-16 rounded-2xl bg-primary flex items-center justify-center'>
                        <link.icon className='w-8 h-8 text-primary-foreground' />
                      </div>
                    </motion.div>

                    <h3 className='text-2xl font-bold text-foreground mb-3'>
                      {link.title}
                    </h3>
                    <p className='text-muted-foreground mb-4'>
                      {link.description}
                    </p>

                    <div className='flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform'>
                      Learn More <ArrowRight className='ml-2 w-5 h-5' />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className='py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                Premium Dairy, Powerful Impact
              </h2>
              <p className='text-xl text-primary-foreground/90 mb-8 leading-relaxed'>
                Every product you enjoy supports women farmers, strengthens
                communities, and promotes sustainable agriculture across
                Tanzania.
              </p>
              <Link to='/story'>
                <Button size='lg' variant='secondary' className='group'>
                  Read Our Story
                  <ArrowRight className='ml-2 group-hover:translate-x-2 transition-transform' />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='relative'>
              <div className='grid grid-cols-2 gap-4'>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='rounded-2xl overflow-hidden shadow-xl'>
                  <img
                    src={productDisplay}
                    alt='Products'
                    className='w-full h-48 object-cover'
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='rounded-2xl overflow-hidden shadow-xl mt-8'>
                  <img
                    src={landscapeFarm}
                    alt='Farm'
                    className='w-full h-48 object-cover'
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='rounded-2xl overflow-hidden shadow-xl col-span-2'>
                  <img
                    src={heroMilkFlow}
                    alt='Milk'
                    className='w-full h-48 object-cover'
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 md:py-32 bg-secondary text-secondary-foreground'>
        <div className='container mx-auto px-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='max-w-4xl mx-auto'>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              Ready to Get Involved?
            </h2>
            <p className='text-xl text-secondary-foreground/90 mb-12'>
              Whether you're a farmer, distributor, or supporter, there's a
              place for you
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <Link to='/contact'>
                <Button
                  size='lg'
                  className='bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 px-8'>
                  Partner With Us
                </Button>
              </Link>
              <Link to='/products'>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-secondary-foreground text-primary hover:bg-secondary-foreground/10 px-8'>
                  Explore Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <TestimonialsSuccessStories />
      <Footer />
    </main>
  );
};

export default Index;
