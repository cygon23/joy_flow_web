import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, CheckCircle, Users, Handshake, Store } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Dar es Salaam, Tanzania",
    detail: "Visit our processing facility"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+255 XXX XXX XXX",
    detail: "Mon-Fri, 8AM-6PM EAT"
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@africanjoy.co.tz",
    detail: "We reply within 24 hours"
  }
];

const partnershipTypes = [
  {
    icon: Users,
    title: "Become a Farmer Partner",
    description: "Join our network of women dairy farmers and receive fair prices, training, and support",
    benefits: ["Fair payment terms", "Free training", "Equipment support"]
  },
  {
    icon: Store,
    title: "Distribution Partnership",
    description: "Distribute our premium dairy products in your region and grow your business with us",
    benefits: ["Quality products", "Marketing support", "Flexible terms"]
  },
  {
    icon: Handshake,
    title: "Strategic Collaboration",
    description: "Partner with us on sustainability, community development, or dairy innovation projects",
    benefits: ["Shared impact", "Innovation focus", "Community benefit"]
  }
];

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden mt-20 bg-primary">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
        />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6"
          >
            Get Involved
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/90"
          >
            Join us in empowering communities through quality dairy
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={ref} className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground text-lg">
                  Whether you're a farmer, distributor, or just curious about our work, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </div>
                      <div className="text-foreground font-bold text-lg mb-1">
                        {info.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {info.detail}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-secondary rounded-2xl p-8 text-center shadow-xl"
              >
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                  Join Our Community
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-secondary-foreground">500+</div>
                    <div className="text-sm text-secondary-foreground/80">Farmers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary-foreground">50+</div>
                    <div className="text-sm text-secondary-foreground/80">Communities</div>
                  </div>
                </div>
                <p className="text-secondary-foreground/90 mb-6">
                  Be part of a growing network changing lives through dairy
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-background rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Send Us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input 
                      required
                      placeholder="Your name" 
                      className="bg-card"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input 
                      required
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-card"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input 
                      required
                      placeholder="What's this about?" 
                      className="bg-card"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      required
                      placeholder="Tell us more..." 
                      rows={6}
                      className="bg-card resize-none"
                    />
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-secondary hover:bg-secondary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-secondary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
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
              Partnership Opportunities
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Multiple ways to join our mission of empowerment and quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnershipTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-primary-foreground text-foreground rounded-2xl p-8 shadow-xl"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                    <type.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-primary mb-4">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {type.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {type.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
