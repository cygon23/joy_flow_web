import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, TrendingUp, Users, Heart, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroFarmerHands from "@/assets/hero-farmer-hands.jpg";
import landscapeFarm from "@/assets/landscape-farm.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Women Farmers", color: "bg-primary" },
  { icon: DollarSign, value: "30%", label: "Income Increase", color: "bg-secondary" },
  { icon: TrendingUp, value: "10k+", label: "Liters Daily", color: "bg-primary" },
  { icon: Heart, value: "50+", label: "Communities", color: "bg-secondary" }
];

const testimonials = [
  {
    name: "Amina Hassan",
    role: "Dairy Farmer, Morogoro",
    image: "👩🏾‍🌾",
    quote: "African Joy has transformed my life. Now I have reliable income and can send my children to school. The fair prices and timely payments have given me dignity and hope.",
    impact: "Income increased by 40%"
  },
  {
    name: "Fatuma Juma",
    role: "Cooperative Leader, Arusha",
    image: "👩🏿‍💼",
    quote: "Working with African Joy means our voices are heard. They treat us as true partners, not just suppliers. Our community has prospered together.",
    impact: "Led 150 farmers to partnership"
  },
  {
    name: "Halima Said",
    role: "Farm Owner, Dodoma",
    image: "👩🏾",
    quote: "The decentralized collection system has eliminated waste. My milk reaches processing quickly, and I receive fair payment within days. This partnership has changed everything.",
    impact: "Zero milk spoilage achieved"
  },
  {
    name: "Zainab Mohamed",
    role: "Young Farmer, Kilimanjaro",
    image: "👩🏾‍🌾",
    quote: "As a young woman, I was unsure about dairy farming. African Joy provided training, equipment, and a guaranteed market. Now I'm building a future for my family.",
    impact: "Started with 2 cows, now has 10"
  },
  {
    name: "Mariam Ali",
    role: "Cooperative Member, Mwanza",
    image: "👩🏿",
    quote: "The training programs have taught us modern farming techniques while respecting our traditions. We're producing more milk of higher quality than ever before.",
    impact: "Milk quality score: 95/100"
  },
  {
    name: "Saida Hamisi",
    role: "Senior Farmer, Tanga",
    image: "👵🏾",
    quote: "I've been farming for 30 years, but African Joy has brought new life to our work. Fair prices, respect, and partnership—this is what we always deserved.",
    impact: "15 years with African Joy"
  }
];

const impactAreas = [
  {
    title: "Economic Empowerment",
    description: "Fair wages and reliable payments have increased household incomes by an average of 30%, enabling education, healthcare, and business growth.",
    stats: ["30% income increase", "500+ families supported", "Zero delayed payments"]
  },
  {
    title: "Gender Equality",
    description: "By partnering exclusively with women farmers, we're breaking barriers and creating leadership opportunities in traditionally male-dominated sectors.",
    stats: ["100% women-owned farms", "50+ women leaders", "Equal pay guaranteed"]
  },
  {
    title: "Environmental Sustainability",
    description: "Our decentralized collection and efficient processing reduce waste, carbon emissions, and environmental impact across the supply chain.",
    stats: ["30% less waste", "Reduced carbon footprint", "Sustainable practices"]
  },
  {
    title: "Community Development",
    description: "Investment in training, equipment, and infrastructure strengthens entire communities, creating ripple effects of prosperity and opportunity.",
    stats: ["50+ communities", "Training programs", "Infrastructure development"]
  }
];

const ImpactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img 
            src={heroFarmerHands} 
            alt="Impact" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6"
          >
            Our Impact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/90"
          >
            Empowering communities, transforming lives
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              By The Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measuring our positive impact on communities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`${stat.color} rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all`}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, delay: idx * 0.2 }}
                  className="inline-block mb-4"
                >
                  <stat.icon className="w-8 h-8 text-primary-foreground mx-auto" />
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
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
              Areas of Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {impactAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-primary-foreground rounded-2xl p-8 text-foreground shadow-xl"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {area.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.stats.map((stat, sidx) => (
                    <div
                      key={sidx}
                      className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium"
                    >
                      {stat}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories / Testimonials */}
      <section ref={ref} className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Stories of Change
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real voices from the women transforming dairy farming
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full border-2 hover:border-primary transition-colors hover:shadow-xl">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-5xl">{testimonial.image}</div>
                      <div>
                        <div className="font-bold text-primary text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    
                    <Quote className="w-8 h-8 text-secondary mb-4" />
                    <p className="text-foreground mb-6 flex-grow italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="pt-4 border-t border-border">
                      <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {testimonial.impact}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
          >
            <img 
              src={landscapeFarm} 
              alt="Community impact" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12 text-secondary-foreground">
              <h3 className="text-4xl font-bold mb-4">
                Together, We're Building a Better Future
              </h3>
              <p className="text-xl text-secondary-foreground/90">
                Every liter of milk tells a story of empowerment, partnership, and hope
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpactPage;
