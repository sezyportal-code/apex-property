import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Star, Award, Phone, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const agents = [
  {
    id: "1",
    name: "Alexandra Sterling",
    title: "Principal Agent",
    agency: "Sterling Properties",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    rating: 4.9,
    reviews: 127,
    sales: "$890M+",
    properties: 45,
    specialties: ["Luxury Estates", "Beachfront", "Celebrity Homes"],
    bio: "20+ years specializing in ultra-luxury properties across Southern California.",
    verified: true,
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Senior Broker",
    agency: "Prestige NYC",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    rating: 4.8,
    reviews: 98,
    sales: "$650M+",
    properties: 32,
    specialties: ["Penthouses", "Manhattan", "Investment Properties"],
    bio: "Former Wall Street executive turned luxury real estate specialist.",
    verified: true,
  },
  {
    id: "3",
    name: "Victoria Hayes",
    title: "Luxury Specialist",
    agency: "Hayes Luxury Estates",
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    rating: 5.0,
    reviews: 156,
    sales: "$1.2B+",
    properties: 67,
    specialties: ["Celebrity Estates", "Modern Architecture", "Privacy Estates"],
    bio: "Hollywood's most trusted luxury real estate advisor.",
    verified: true,
  },
  {
    id: "4",
    name: "Marcus Rivera",
    title: "Investment Advisor",
    agency: "Rivera Luxury Group",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    rating: 4.9,
    reviews: 89,
    sales: "$520M+",
    properties: 28,
    specialties: ["Waterfront", "International Buyers", "New Development"],
    bio: "Specializing in South Florida's most exclusive waterfront properties.",
    verified: true,
  },
  {
    id: "5",
    name: "Sophie Laurent",
    title: "European Director",
    agency: "Swiss Alpine Properties",
    location: "Zurich, Switzerland",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    rating: 4.9,
    reviews: 73,
    sales: "CHF 780M+",
    properties: 41,
    specialties: ["Alpine Chalets", "Lake Properties", "Historic Estates"],
    bio: "Expert in Swiss and French Alps luxury properties.",
    verified: true,
  },
  {
    id: "6",
    name: "Marco Bellini",
    title: "Italian Specialist",
    agency: "Bellini Immobiliare",
    location: "Lake Como, Italy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    rating: 4.8,
    reviews: 64,
    sales: "€450M+",
    properties: 35,
    specialties: ["Historic Villas", "Lake Como", "Tuscan Estates"],
    bio: "Third-generation luxury real estate specialist in Northern Italy.",
    verified: true,
  },
];

const locations = ["All Locations", "Los Angeles", "New York", "Beverly Hills", "Miami", "Europe"];

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.agency.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === "All Locations" || 
      agent.location.includes(selectedLocation);
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="caption">Our Agents</span>
              <h1 className="mt-4 mb-6">
                Meet Our <span className="text-gradient-gold">Elite Advisors</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Connect with the world's most accomplished luxury property specialists, 
                each with decades of experience and billions in sales.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-xl z-30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative flex-1 min-w-[200px] max-w-md">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search agents or agencies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-secondary/50 border-0"
                />
              </div>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-48 bg-secondary/50 border-0">
                  <MapPin size={16} className="mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Agents Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAgents.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <article className="luxury-card bg-card overflow-hidden group">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={agent.image}
                        alt={agent.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {agent.verified && (
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-accent/90 text-accent-foreground rounded-full text-xs font-medium">
                          <Award size={14} />
                          Verified
                        </div>
                      )}

                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-medium mb-1">{agent.name}</h3>
                        <p className="text-white/80 text-sm">{agent.title} · {agent.agency}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-accent fill-accent" />
                          <span className="font-medium">{agent.rating}</span>
                          <span className="text-muted-foreground text-sm">({agent.reviews})</span>
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin size={14} />
                          {agent.location}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 py-4 border-y border-border">
                        <div className="text-center">
                          <div className="text-lg font-medium">{agent.sales}</div>
                          <div className="text-xs text-muted-foreground">Total Sales</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-medium">{agent.properties}</div>
                          <div className="text-xs text-muted-foreground">Active Listings</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {agent.specialties.slice(0, 2).map((spec) => (
                          <span
                            key={spec}
                            className="px-2 py-1 bg-secondary text-xs rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                        {agent.bio}
                      </p>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Phone size={14} className="mr-2" />
                          Call
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Mail size={14} className="mr-2" />
                          Email
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/agent/${agent.id}`}>
                            <ExternalLink size={14} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light mb-4">Are You an Elite Agent?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join the world's most exclusive property platform and connect 
                with high-net-worth clients globally.
              </p>
              <Button variant="luxury" size="lg" asChild>
                <Link to="/contact">Apply to Join</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
