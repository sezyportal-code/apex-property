import { motion } from "framer-motion";
import { BarChart3, Globe, Shield, Sparkles, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access exclusive properties across 50+ countries with local market expertise.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "AI-powered insights on ROI, market trends, and investment opportunities.",
  },
  {
    icon: Shield,
    title: "Verified Listings",
    description: "Every property is verified by our team to ensure authenticity and accuracy.",
  },
  {
    icon: Users,
    title: "Elite Network",
    description: "Connect with top-tier agents and high-net-worth investors worldwide.",
  },
  {
    icon: Zap,
    title: "Instant Matching",
    description: "Our algorithm matches you with properties that fit your exact criteria.",
  },
  {
    icon: Sparkles,
    title: "Concierge Service",
    description: "White-glove support from property search to final acquisition.",
  },
];

export function ValueProposition() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="caption"
          >
            Why LUXE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 mb-6"
          >
            A New Standard in
            <span className="text-gradient-gold"> Real Estate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We've reimagined every aspect of the property experience to deliver
            unmatched value to our clients.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-accent/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-500">
                <feature.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-normal mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
