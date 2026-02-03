import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bed,
  Bath,
  Maximize,
  Calendar,
  MapPin,
  TrendingUp,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Check,
  Phone,
  Mail,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/properties";
import { cn } from "@/lib/utils";

export default function PropertyDetailPage() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Property not found</h1>
          <Button asChild>
            <Link to="/properties">Back to Properties</Link>
          </Button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <Link
            to="/properties"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Properties
          </Link>
        </div>

        {/* Hero Gallery */}
        <section className="relative h-[60vh] lg:h-[75vh] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={property.images[currentImageIndex]}
              alt={property.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Gallery Controls */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === currentImageIndex
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/70"
                    )}
                  />
                ))}
              </div>
            </>
          )}

          {/* Actions */}
          <div className="absolute top-8 right-4 lg:right-8 flex gap-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={cn(
                "p-3 rounded-full backdrop-blur-md transition-colors",
                isLiked
                  ? "bg-red-500 text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
            </button>
            <button className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                      {property.type}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-full">
                      {property.status}
                    </span>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-light mb-4">
                    {property.title}
                  </h1>
                  <p className="text-xl text-muted-foreground flex items-center gap-2">
                    <MapPin size={20} />
                    {property.location}
                  </p>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                  <div className="p-6 rounded-2xl bg-secondary/50">
                    <Bed size={24} className="text-accent mb-3" />
                    <div className="stat-value text-2xl">{property.bedrooms}</div>
                    <div className="text-sm text-muted-foreground mt-1">Bedrooms</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-secondary/50">
                    <Bath size={24} className="text-accent mb-3" />
                    <div className="stat-value text-2xl">{property.bathrooms}</div>
                    <div className="text-sm text-muted-foreground mt-1">Bathrooms</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-secondary/50">
                    <Maximize size={24} className="text-accent mb-3" />
                    <div className="stat-value text-2xl">{property.area.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground mt-1">{property.areaUnit}</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-secondary/50">
                    <Calendar size={24} className="text-accent mb-3" />
                    <div className="stat-value text-2xl">{property.yearBuilt}</div>
                    <div className="text-sm text-muted-foreground mt-1">Year Built</div>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-light mb-6">About This Property</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    This exceptional property represents the pinnacle of luxury living, 
                    offering an unparalleled combination of design excellence, premium 
                    materials, and a location that defines exclusivity. Every detail has 
                    been meticulously crafted to exceed the expectations of the most 
                    discerning buyers.
                  </p>
                </motion.div>

                {/* Amenities */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-light mb-6">Amenities & Features</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30"
                      >
                        <Check size={18} className="text-accent flex-shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Investment Insights */}
                {property.roi && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-8 rounded-2xl bg-primary text-primary-foreground"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <TrendingUp size={24} />
                      <h2 className="text-2xl font-light">Investment Potential</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div>
                        <div className="text-3xl font-light">{property.roi}%</div>
                        <div className="text-sm text-primary-foreground/70 mt-1">
                          Estimated ROI
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-light">+12%</div>
                        <div className="text-sm text-primary-foreground/70 mt-1">
                          Area Growth (5yr)
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-light">High</div>
                        <div className="text-sm text-primary-foreground/70 mt-1">
                          Demand Score
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-6">
                  {/* Price Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-8 rounded-2xl border border-border bg-card"
                  >
                    <div className="mb-6">
                      <span className="caption">Asking Price</span>
                      <div className="text-4xl font-light mt-2 text-accent">
                        {property.priceFormatted}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Button variant="hero" size="lg" className="w-full">
                        Schedule Viewing
                      </Button>
                      <Button variant="outline" size="lg" className="w-full">
                        Request Info
                      </Button>
                    </div>
                  </motion.div>

                  {/* Agent Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-6 rounded-2xl border border-border bg-card"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={property.agent.avatar}
                        alt={property.agent.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium">{property.agent.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {property.agent.agency}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Button variant="secondary" size="default" className="w-full gap-2">
                        <Phone size={16} />
                        Call Agent
                      </Button>
                      <Button variant="ghost" size="default" className="w-full gap-2">
                        <Mail size={16} />
                        Send Message
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
