import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Leaf, TrendingUp, Target, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroFarmerHands from "@/assets/hero-farmer-hands.jpg";
import landscapeFarm from "@/assets/landscape-farm.jpg";

const narrativeBlocks = [
  {
    icon: Heart,
    title: "Empowering Women",
    description: "At the heart of African Joy is our commitment to women dairy farmers. We provide fair wages, reliable payments, and economic independence to over 500 women across Tanzania.",
    stat: "500+ Women Farmers",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: Users,
    title: "Community Partnership",
    description: "We work directly with local cooperatives, ensuring that every farmer is treated as a valued partner. Our decentralized collection system strengthens communities.",
    stat: "50+ Communities",
    color: "from-secondary/20 to-transparent"
  },
  {
    icon: Leaf,
    title: "Zero Waste Mission",
    description: "Through efficient collection and processing, we minimize spoilage and environmental impact. Sustainability is woven into every step of our process.",
    stat: "30% Less Waste",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: TrendingUp,
    title: "Quality Excellence",
    description: "Premium dairy products are our promise. From farm-fresh collection to careful processing, we maintain the highest standards at every stage.",
    stat: "10k+ Liters Daily",
    color: "from-secondary/20 to-transparent"
  }
];

const milestones = [
  { year: "2018", title: "Founded", description: "African Joy begins with 50 farmers" },
  { year: "2019", title: "Growth", description: "Expanded to 5 communities" },
  { year: "2021", title: "Innovation", description: "Launched decentralized collection" },
  { year: "2023", title: "Impact", description: "500+ women empowered" },
];

const Story = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img 
            src={heroFarmerHands} 
            alt="Woman farmer" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/90"
          >
            Building a sustainable dairy future, one farmer at a time
          </motion.p>
        </div>
      </section>

      {/* Mission Narrative Blocks */}
      <section ref={ref} className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming dairy farming through partnership, sustainability, and quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {narrativeBlocks.map((block, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-background rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${block.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="inline-block mb-6"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                        <block.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {block.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {block.description}
                    </p>
                    
                    <div className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-bold text-sm">
                      {block.stat}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our Values
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Target className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transparency</h3>
                    <p className="text-primary-foreground/90">
                      Open communication and fair dealings with every farmer and customer
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Excellence</h3>
                    <p className="text-primary-foreground/90">
                      Uncompromising quality standards from farm to table
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Empowerment</h3>
                    <p className="text-primary-foreground/90">
                      Creating lasting economic opportunities for women farmers
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={landscapeFarm} 
                  alt="Farm landscape" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-card to-muted/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-primary mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                backgroundImage: "linear-gradient(90deg, hsl(101, 45%, 45%), hsl(359, 70%, 51%), hsl(101, 45%, 45%))",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Journey
            </motion.h2>
            <p className="text-xl text-muted-foreground">
              Growing together, one milestone at a time
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto relative">
            {/* Animated Central Path - SVG */}
            <svg
              className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block"
              width="4"
              height="100%"
              style={{ zIndex: 0 }}
            >
              <motion.path
                d={`M 2 0 Q 2 ${100} 2 ${200} T 2 ${400} T 2 ${600} T 2 800`}
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(101, 45%, 45%)" />
                  <stop offset="50%" stopColor="hsl(359, 70%, 51%)" />
                  <stop offset="100%" stopColor="hsl(101, 45%, 45%)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Milestones */}
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.2, duration: 0.8, type: "spring" }}
                className={`flex items-center mb-20 md:mb-32 relative ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${idx % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="relative group"
                  >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                    
                    <div className="relative bg-card rounded-3xl p-8 shadow-xl border-2 border-transparent group-hover:border-primary/30 transition-all overflow-hidden">
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className={`absolute inset-0 bg-gradient-to-br ${
                          idx % 2 === 0 ? "from-primary/10 to-transparent" : "from-secondary/10 to-transparent"
                        }`} />
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-20 h-20 rounded-full bg-primary/10 blur-xl"
                            animate={{
                              x: [0, Math.random() * 100 - 50],
                              y: [0, Math.random() * 100 - 50],
                              scale: [1, 1.5, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative z-10">
                        {/* Year Badge */}
                        <motion.div
                          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="inline-block mb-4"
                        >
                          <div className={`px-6 py-3 rounded-full bg-gradient-to-br ${
                            idx % 2 === 0 ? "from-primary to-primary-dark" : "from-secondary to-secondary/80"
                          } shadow-lg`}>
                            <span className="text-2xl md:text-3xl font-bold text-white">
                              {milestone.year}
                            </span>
                          </div>
                        </motion.div>

                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {milestone.description}
                        </p>

                        {/* Decorative Line */}
                        <motion.div
                          className={`h-1 rounded-full mt-6 ${
                            idx % 2 === 0 ? "bg-primary" : "bg-secondary"
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.2 + 0.5, duration: 0.8 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="hidden md:flex items-center justify-center flex-shrink-0 relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    className="relative"
                  >
                    {/* Pulse Rings */}
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute inset-0 rounded-full border-2 ${
                          idx % 2 === 0 ? "border-primary" : "border-secondary"
                        }`}
                        animate={{
                          scale: [1, 2, 2.5],
                          opacity: [0.8, 0.3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                      />
                    ))}

                    {/* Morphing Node */}
                    <motion.div
                      className={`w-8 h-8 bg-gradient-to-br ${
                        idx % 2 === 0 ? "from-primary to-primary-dark" : "from-secondary to-secondary/80"
                      } shadow-lg`}
                      animate={{
                        borderRadius: [
                          "50% 50% 50% 50%",
                          "60% 40% 30% 70%",
                          "50% 50% 50% 50%",
                        ],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        boxShadow: `0 0 30px ${idx % 2 === 0 ? "hsla(101, 45%, 45%, 0.5)" : "hsla(359, 70%, 51%, 0.5)"}`,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />

                {/* Mobile View */}
                <div className="md:hidden w-full">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-20" />
                    
                    <div className="relative bg-card rounded-3xl p-6 shadow-lg border border-border">
                      <motion.div className="inline-block mb-3">
                        <div className={`px-5 py-2 rounded-full bg-gradient-to-br ${
                          idx % 2 === 0 ? "from-primary to-primary-dark" : "from-secondary to-secondary/80"
                        }`}>
                          <span className="text-2xl font-bold text-white">
                            {milestone.year}
                          </span>
                        </div>
                      </motion.div>

                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Story;
