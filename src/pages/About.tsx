import { motion } from "framer-motion";
import { Award, Users, Globe, TrendingUp, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "$12B+", label: "Properties Sold", icon: TrendingUp },
  { value: "15K+", label: "Happy Clients", icon: Users },
  { value: "50+", label: "Countries", icon: Globe },
  { value: "98%", label: "Satisfaction", icon: Award },
];

const values = [
  {
    title: "Excellence",
    description: "We pursue perfection in every property listing and client interaction.",
  },
  {
    title: "Trust",
    description: "Built on decades of transparent dealings and verified property histories.",
  },
  {
    title: "Innovation",
    description: "Leveraging cutting-edge technology to transform property discovery.",
  },
  {
    title: "Discretion",
    description: "Protecting client privacy with bank-level security and confidentiality.",
  },
];

const team = [
  {
    name: "Alexandra Sterling",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "Former Goldman Sachs MD, Harvard MBA",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Ex-Google, Stanford CS",
  },
  {
    name: "Victoria Hayes",
    role: "Head of Global Properties",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "20+ years luxury real estate",
  },
  {
    name: "Marcus Rivera",
    role: "Chief Investment Officer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "Former Blackstone Partner",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
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
              <span className="caption">About LUXE</span>
              <h1 className="mt-4 mb-6">
                Redefining <span className="text-gradient-gold">Luxury</span> Real Estate
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded in 2018, LUXE has become the world's most trusted platform 
                for extraordinary properties, serving discerning clients across 50+ countries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="caption">Our Story</span>
                <h2 className="mt-4 mb-6">Built by Experts, for Visionaries</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    LUXE was born from a simple observation: the world's most exceptional 
                    properties deserve an equally exceptional platform.
                  </p>
                  <p>
                    Our founders—veterans of Goldman Sachs, Google, and Christie's—combined 
                    their expertise in finance, technology, and luxury markets to create 
                    something unprecedented.
                  </p>
                  <p>
                    Today, we serve over 15,000 clients worldwide, facilitating over 
                    $12 billion in property transactions annually.
                  </p>
                </div>
                <Button variant="luxury" className="mt-8" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                    alt="Luxury property"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-xl overflow-hidden border-4 border-background shadow-2xl hidden lg:block">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80"
                    alt="Luxury interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="caption">Our Values</span>
              <h2 className="mt-4">What Drives Us</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="luxury-card bg-card p-8 text-center"
                >
                  <CheckCircle className="w-10 h-10 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="caption">Leadership</span>
              <h2 className="mt-4">Meet the Team</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-accent text-sm mb-1">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
