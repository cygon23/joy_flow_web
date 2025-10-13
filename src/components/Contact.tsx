import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Dar es Salaam, Tanzania"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+255 XXX XXX XXX"
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@africanjoy.co.tz"
  }
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-primary overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 35, repeat: Infinity }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join us in empowering communities through quality dairy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-primary-foreground rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </div>
                      <div className="text-foreground font-medium">
                        {info.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-secondary rounded-2xl p-8 text-center shadow-xl"
            >
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                Partner With Us
              </h3>
              <p className="text-secondary-foreground/90 mb-6">
                Interested in distributing our products or supporting our farmers? Let's talk.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-secondary-foreground text-secondary border-secondary-foreground hover:bg-secondary-foreground/90"
              >
                Partnership Opportunities
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-primary-foreground rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="How can we help you?" 
                    rows={6}
                    className="bg-background resize-none"
                  />
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
