import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Leaf, TrendingUp } from "lucide-react";
import landscapeFarm from "@/assets/landscape-farm.jpg";

const missions = [
  {
    icon: Heart,
    title: "Empowering Women",
    description: "Partnering with women dairy farmers to ensure fair wages and economic independence"
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building sustainable supply chains that benefit local communities and reduce spoilage"
  },
  {
    icon: Leaf,
    title: "Zero Waste",
    description: "Decentralized collection and processing to minimize environmental impact"
  },
  {
    icon: TrendingUp,
    title: "Quality Assured",
    description: "Premium dairy products processed with care, from collection to delivery"
  }
];

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-card overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${landscapeFarm})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 1.2 }}
        animate={isInView ? { scale: 1 } : { scale: 1.2 }}
        transition={{ duration: 1.5 }}
      />

      <div className="container mx-auto px-6 relative z-10">
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
            Transforming dairy farming in Tanzania through partnership, sustainability, and quality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <mission.icon className="w-12 h-12 text-primary mb-4" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 relative">
                {mission.title}
              </h3>
              <p className="text-muted-foreground relative">
                {mission.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
