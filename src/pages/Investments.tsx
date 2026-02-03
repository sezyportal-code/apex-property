import { motion } from "framer-motion";
import { TrendingUp, Shield, Globe, BarChart3, PieChart, ArrowUpRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/properties";

const investmentBenefits = [
  {
    icon: TrendingUp,
    title: "High Returns",
    description: "Luxury real estate has historically outperformed traditional investments with 8-12% annual returns.",
  },
  {
    icon: Shield,
    title: "Asset Protection",
    description: "Tangible assets provide stability and protection against market volatility and inflation.",
  },
  {
    icon: Globe,
    title: "Global Diversification",
    description: "Access properties across 50+ countries to diversify your portfolio geographically.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Make informed decisions with our proprietary market analytics and ROI projections.",
  },
];

const marketStats = [
  { label: "Average ROI", value: "9.2%", trend: "+1.5%" },
  { label: "Properties Sold", value: "$12B+", trend: "+22%" },
  { label: "Average Hold Time", value: "4.2 yrs", trend: "-0.8" },
  { label: "Client Satisfaction", value: "98%", trend: "+2%" },
];

const investmentProperties = properties.filter(p => p.roi).slice(0, 3);

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')" 
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="caption">Investment Platform</span>
              <h1 className="mt-4 mb-6">
                Build Wealth Through <span className="text-gradient-gold">Luxury Real Estate</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Access institutional-grade investment opportunities in the world's 
                most prestigious properties with data-driven insights and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg" asChild>
                  <Link to="/properties">Explore Opportunities</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Download Investment Guide
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {marketStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-light mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                  <div className="text-xs text-green-500 flex items-center justify-center gap-1">
                    <ArrowUpRight size={12} />
                    {stat.trend} YoY
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="caption">Why Invest With LUXE</span>
              <h2 className="mt-4">The Smart Way to Invest in Real Estate</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {investmentBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="luxury-card bg-card p-8 text-center"
                >
                  <benefit.icon className="w-12 h-12 mx-auto mb-6 text-accent" />
                  <h3 className="text-lg font-medium mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Properties */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
            >
              <div>
                <span className="caption">Featured Opportunities</span>
                <h2 className="mt-4">High-Yield Investment Properties</h2>
              </div>
              <Button variant="ghost" asChild>
                <Link to="/properties">
                  View All Properties
                  <ArrowUpRight size={16} className="ml-2" />
                </Link>
              </Button>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {investmentProperties.map((property, index) => (
                <motion.article
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="luxury-card bg-card overflow-hidden group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full">
                        {property.roi}% ROI
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{property.location}</p>
                    
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-border mb-4">
                      <div>
                        <div className="text-lg font-medium">{property.priceFormatted}</div>
                        <div className="text-xs text-muted-foreground">Investment</div>
                      </div>
                      <div>
                        <div className="text-lg font-medium text-green-500">{property.roi}%</div>
                        <div className="text-xs text-muted-foreground">Est. Annual ROI</div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/property/${property.id}`}>View Details</Link>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="caption">How It Works</span>
              <h2 className="mt-4">Your Investment Journey</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {[
                { step: "01", title: "Consultation", description: "Meet with our investment advisors to discuss your goals, risk tolerance, and timeline." },
                { step: "02", title: "Property Selection", description: "Browse curated opportunities with detailed ROI projections and market analysis." },
                { step: "03", title: "Due Diligence", description: "Our team handles legal, financial, and structural assessments for your chosen property." },
                { step: "04", title: "Acquisition", description: "Seamless transaction management with our global network of legal and financial partners." },
                { step: "05", title: "Management", description: "Optional property management services to maximize returns and minimize hassle." },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-accent font-medium">{item.step}</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-light mb-6">
                Ready to Start Building Wealth?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Schedule a consultation with our investment advisors and discover 
                opportunities tailored to your financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Download Investor Kit
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
