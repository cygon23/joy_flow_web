import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  Users,
  Handshake,
  Store,
  Clock,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const workingHours = [
  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM", isOpen: true },
  { day: "Saturday", time: "9:00 AM - 2:00 PM", isOpen: true },
  { day: "Sunday", time: "Closed", isOpen: false },
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "P.O. Box 2699, Arusha, Tanzania",
    detail: "Visit our processing facility in Arusha",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+255 784 240 780 / +255 745 330 042",
    detail: "Mon-Fri, 8AM-6PM EAT",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@africanjoy.com",
    detail: "We reply within 24 hours",
  },
];

const partnershipTypes = [
  {
    icon: Users,
    title: "Become a Farmer Partner",
    description:
      "Join our network of women dairy farmers and receive fair prices, training, and support",
    benefits: ["Fair payment terms", "Free training", "Equipment support"],
  },
  {
    icon: Store,
    title: "Distribution Partnership",
    description:
      "Distribute our premium dairy products in your region and grow your business with us",
    benefits: ["Quality products", "Marketing support", "Flexible terms"],
  },
  {
    icon: Handshake,
    title: "Strategic Collaboration",
    description:
      "Partner with us on sustainability, community development, or dairy innovation projects",
    benefits: ["Shared impact", "Innovation focus", "Community benefit"],
  },
];

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [selectedPartnership, setSelectedPartnership] = useState<number | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Initialize Mapbox
  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    // Coordinates for Njiro (Gorofa Mbili), Arusha, Tanzania
    const coordinates: [number, number] = [36.7144, -3.3869];

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: coordinates,
      zoom: 15,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add custom marker
    new mapboxgl.Marker({ color: "#FF6B35" })
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div style="padding: 12px; font-family: system-ui;">
              <strong style="font-size: 16px; color: #1a1a1a;">African Joy</strong><br/>
              <span style="color: #666;">Njiro (Gorofa Mbili)</span><br/>
              <span style="color: #666;">Arusha, Tanzania</span>
            </div>
          `)
      )
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description:
        "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Welcome to Our Community!",
      description: "You've successfully subscribed to our newsletter.",
    });

    setIsSubscribing(false);
    setNewsletterEmail("");
  };

  return (
    <div className='min-h-screen'>
      <Navbar />

      {/* Hero Section */}
      <section className='relative min-h-[50vh] flex items-center justify-center overflow-hidden mt-20 bg-primary'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className='absolute top-20 right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl'
        />

        <div className='relative z-10 text-center px-6 max-w-4xl mx-auto'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-5xl md:text-7xl font-bold text-primary-foreground mb-6'>
            Get Involved
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl md:text-2xl text-primary-foreground/90'>
            Join us in empowering communities through quality dairy
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={ref} className='py-24 md:py-32 bg-card'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'>
              <div>
                <h2 className='text-4xl font-bold text-primary mb-4'>
                  Let's Connect
                </h2>
                <p className='text-muted-foreground text-lg'>
                  Whether you're a farmer, distributor, or just curious about
                  our work, we'd love to hear from you.
                </p>
              </div>

              <div className='space-y-6'>
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                    whileHover={{ x: 10 }}
                    className='flex items-start gap-4 bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow'>
                    <div className='w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0'>
                      <info.icon className='w-6 h-6 text-primary-foreground' />
                    </div>
                    <div>
                      <div className='text-sm text-muted-foreground mb-1'>
                        {info.label}
                      </div>
                      <div className='text-foreground font-bold text-lg mb-1'>
                        {info.value}
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        {info.detail}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.6, duration: 0.6 }}
                className='bg-background rounded-xl p-6 shadow-md'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center'>
                    <Clock className='w-5 h-5 text-primary-foreground' />
                  </div>
                  <h3 className='text-xl font-bold text-primary'>
                    Working Hours
                  </h3>
                </div>
                <div className='space-y-3'>
                  {workingHours.map((schedule, idx) => (
                    <div
                      key={idx}
                      className='flex items-center justify-between py-2 border-b border-border last:border-0'>
                      <span className='text-foreground font-medium'>
                        {schedule.day}
                      </span>
                      <span
                        className={`font-semibold ${
                          schedule.isOpen
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}>
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.7, duration: 0.6 }}
                className='bg-secondary rounded-2xl p-8 text-center shadow-xl'>
                <h3 className='text-2xl font-bold text-secondary-foreground mb-4'>
                  Join Our Community
                </h3>
                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div>
                    <div className='text-3xl font-bold text-secondary-foreground'>
                      93+
                    </div>
                    <div className='text-sm text-secondary-foreground/80'>
                      Women Farmers
                    </div>
                  </div>
                  <div>
                    <div className='text-3xl font-bold text-secondary-foreground'>
                      20,338L
                    </div>
                    <div className='text-sm text-secondary-foreground/80'>
                      Monthly Collection
                    </div>
                  </div>
                </div>
                <p className='text-secondary-foreground/90 mb-6'>
                  Join our growing network empowering women through dairy
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}>
              <div className='bg-background rounded-2xl p-8 shadow-xl'>
                <h3 className='text-2xl font-bold text-primary mb-6'>
                  Send Us a Message
                </h3>

                <div className='space-y-6'>
                  <div>
                    <label className='block text-sm font-medium text-foreground mb-2'>
                      Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder='Your name'
                      className='bg-card'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-foreground mb-2'>
                      Email *
                    </label>
                    <Input
                      required
                      type='email'
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder='your@email.com'
                      className='bg-card'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-foreground mb-2'>
                      Subject *
                    </label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="What's this about?"
                      className='bg-card'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-foreground mb-2'>
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder='Tell us more...'
                      rows={6}
                      className='bg-card resize-none'
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={handleSubmit}
                      size='lg'
                      className='w-full bg-secondary hover:bg-secondary/90'
                      disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className='w-5 h-5 border-2 border-secondary-foreground border-t-transparent rounded-full animate-spin mr-2' />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className='ml-2 w-5 h-5' />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className='py-24 md:py-32 bg-background'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-primary mb-4'>
              Visit Us
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Find us in Njiro, Arusha - where quality dairy meets community
              empowerment
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='max-w-6xl mx-auto'>
            <div className='rounded-2xl overflow-hidden shadow-2xl h-[500px] border-4 border-primary/20'>
              <div ref={mapContainer} className='w-full h-full' />
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Partnership Opportunities */}
      <section className='py-24 md:py-32 bg-primary text-primary-foreground'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              Partnership Opportunities
            </h2>
            <p className='text-xl text-primary-foreground/90 max-w-3xl mx-auto'>
              Join us in empowering women farmers and building sustainable dairy communities across Tanzania. We offer diverse partnership models designed to create mutual value and lasting social impact.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {partnershipTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className='bg-primary-foreground text-foreground rounded-2xl p-8 shadow-xl'>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className='inline-block mb-6'>
                  <div className='w-16 h-16 rounded-2xl bg-primary flex items-center justify-center'>
                    <type.icon className='w-8 h-8 text-primary-foreground' />
                  </div>
                </motion.div>

                <h3 className='text-2xl font-bold text-primary mb-4'>
                  {type.title}
                </h3>
                <p className='text-muted-foreground mb-6'>{type.description}</p>

                <ul className='space-y-3 mb-6'>
                  {type.benefits.map((benefit, bidx) => (
                    <li key={bidx} className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-secondary flex-shrink-0' />
                      <span className='text-sm'>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant='outline'
                  onClick={() => setSelectedPartnership(idx)}
                  className='w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground'>
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='py-24 md:py-32 bg-secondary'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='max-w-4xl mx-auto'>
            <div className='bg-background rounded-3xl p-12 shadow-2xl text-center'>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='inline-block mb-6'>
                <div className='w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto'>
                  <Mail className='w-10 h-10 text-secondary-foreground' />
                </div>
              </motion.div>

              <h2 className='text-4xl md:text-5xl font-bold text-primary mb-4'>
                Stay Connected
              </h2>
              <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
                Subscribe to our newsletter for updates on our community impact,
                new products, and partnership opportunities
              </p>

              <div className='max-w-xl mx-auto'>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Input
                    type='email'
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder='Enter your email address'
                    className='flex-1 h-14 text-lg bg-card'
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={handleNewsletterSubmit}
                      size='lg'
                      className='w-full sm:w-auto h-14 px-8 bg-primary hover:bg-primary/90'
                      disabled={isSubscribing}>
                      {isSubscribing ? (
                        <>
                          <div className='w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2' />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe
                          <Send className='ml-2 w-5 h-5' />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
                <p className='text-sm text-muted-foreground mt-4'>
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border'>
                <div>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    Monthly
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Newsletter Updates
                  </div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    50+
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Active Subscribers
                  </div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    100%
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Community Focused
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Partnership Details Dialog */}
      <Dialog open={selectedPartnership !== null} onOpenChange={() => setSelectedPartnership(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-3">
              {selectedPartnership !== null && (
                <>
                  {React.createElement(partnershipTypes[selectedPartnership].icon, { className: "w-7 h-7" })}
                  {partnershipTypes[selectedPartnership].title}
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-base pt-4">
              {selectedPartnership === 0 && (
                <div className="space-y-4 text-foreground">
                  <p className="text-lg font-semibold text-primary">Empower Women Through Dairy</p>
                  <p>
                    Join our network of 93+ women dairy farmers and become part of a movement that's transforming lives across Tanzania. As a farmer partner, you'll receive comprehensive support to maximize your dairy production while ensuring fair compensation for your work.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">What We Offer:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong>Fair Payment Terms:</strong> Competitive prices paid on time, every time. We value your hard work and ensure you receive fair compensation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong>Free Training Programs:</strong> Access to modern dairy farming techniques, animal health management, and sustainable practices.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong>Equipment Support:</strong> Assistance with essential farming equipment and infrastructure to boost productivity.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong>Community Network:</strong> Join a supportive community of women farmers sharing experiences and best practices.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Current Impact:</strong> Our farmers collectively produce over 20,338 liters of milk monthly, creating sustainable livelihoods for their families and communities.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-center text-muted-foreground">
                      Interested in becoming a farmer partner?
                    </p>
                    <p className="text-center font-semibold text-lg text-primary mt-2">
                      Email us at <a href="mailto:info@africanjoy.com" className="underline hover:text-secondary transition-colors">info@africanjoy.com</a>
                    </p>
                  </div>
                </div>
              )}

              {selectedPartnership === 1 && (
                <div className="space-y-4 text-foreground">
                  <p className="text-lg font-semibold text-primary">Grow Your Business With Quality Dairy</p>
                  <p>
                    Partner with African Joy to distribute premium dairy products across Tanzania and beyond. Our products are crafted with care, backed by quality assurance, and supported by a mission that resonates with conscious consumers.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Partnership Benefits:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong>Premium Product Range:</strong> Access to our full line of cultured milk, yogurts, cheeses, and cream products—all made from ethically sourced dairy.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong>Marketing Support:</strong> Co-branded materials, product displays, and marketing campaigns to help you sell more.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong>Flexible Terms:</strong> Competitive pricing, volume discounts, and payment plans tailored to your business needs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong>Quality Assurance:</strong> Consistent product quality with full traceability and compliance with food safety standards.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Ideal For:</strong> Supermarkets, retail stores, restaurants, cafes, hotels, and specialty food shops looking to offer premium dairy products with a social impact story.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-center text-muted-foreground">
                      Ready to distribute African Joy products?
                    </p>
                    <p className="text-center font-semibold text-lg text-primary mt-2">
                      Email us at <a href="mailto:info@africanjoy.com" className="underline hover:text-secondary transition-colors">info@africanjoy.com</a>
                    </p>
                  </div>
                </div>
              )}

              {selectedPartnership === 2 && (
                <div className="space-y-4 text-foreground">
                  <p className="text-lg font-semibold text-primary">Collaborate For Lasting Impact</p>
                  <p>
                    Join forces with African Joy on strategic initiatives that drive sustainability, empower communities, and innovate within the dairy sector. We welcome partnerships with NGOs, development organizations, research institutions, and corporate social responsibility programs.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Collaboration Areas:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong>Sustainability Projects:</strong> Environmental initiatives, renewable energy adoption, and sustainable farming practices.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong>Community Development:</strong> Women's empowerment programs, education initiatives, and rural development projects.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong>Dairy Innovation:</strong> Research partnerships, technology adoption, product development, and quality improvement.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong>Capacity Building:</strong> Training programs, knowledge transfer, and skills development for farmers and processors.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Our Approach:</strong> We believe in partnerships that create shared value—combining your expertise and resources with our on-ground presence and community relationships to achieve meaningful, measurable impact.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-center text-muted-foreground">
                      Interested in strategic collaboration?
                    </p>
                    <p className="text-center font-semibold text-lg text-primary mt-2">
                      Email us at <a href="mailto:info@africanjoy.com" className="underline hover:text-secondary transition-colors">info@africanjoy.com</a>
                    </p>
                  </div>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactPage;
