import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Trash2, MapPin, Bed, Bath, Maximize, Share2, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/properties";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export default function SavedPage() {
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [savedIds, setSavedIds] = useState<string[]>(["1", "2", "3", "4"]);

  const savedProperties = properties.filter((p) => savedIds.includes(p.id));

  const handleRemove = (id: string) => {
    setSavedIds(savedIds.filter((savedId) => savedId !== id));
    toast({
      title: "Property removed",
      description: "The property has been removed from your saved list.",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 min-h-[80vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center px-6"
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-3xl font-light mb-4">Save Your Favorites</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Sign in to save properties and track your favorites across all devices.
            </p>
            <Button variant="luxury" size="lg" asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div>
                <span className="caption">Your Collection</span>
                <h1 className="mt-4 mb-2">
                  Saved <span className="text-gradient-gold">Properties</span>
                </h1>
                <p className="text-muted-foreground">
                  {savedProperties.length} properties saved
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Bell size={16} className="mr-2" />
                  Price Alerts
                </Button>
                <Button variant="outline">
                  <Share2 size={16} className="mr-2" />
                  Share List
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Properties */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            {savedProperties.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Heart className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
                <h2 className="text-2xl font-light mb-4">No saved properties yet</h2>
                <p className="text-muted-foreground mb-8">
                  Start exploring and save properties you love.
                </p>
                <Button variant="luxury" asChild>
                  <Link to="/properties">Browse Properties</Link>
                </Button>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {savedProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="luxury-card bg-card overflow-hidden"
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Image */}
                      <Link 
                        to={`/property/${property.id}`}
                        className="lg:w-96 aspect-[16/10] lg:aspect-auto relative overflow-hidden group"
                      >
                        <img
                          src={property.images[0]}
                          alt={property.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full">
                            {property.status}
                          </span>
                        </div>
                      </Link>

                      {/* Content */}
                      <div className="flex-1 p-6 lg:p-8">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <Link 
                              to={`/property/${property.id}`}
                              className="text-xl font-medium hover:text-accent transition-colors"
                            >
                              {property.title}
                            </Link>
                            <p className="text-muted-foreground flex items-center gap-2 mt-1">
                              <MapPin size={14} />
                              {property.location}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-light text-accent">
                              {property.priceFormatted}
                            </p>
                            {property.roi && (
                              <p className="text-sm text-green-500">
                                {property.roi}% est. ROI
                              </p>
                            )}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 line-clamp-2">
                          {property.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Bed size={16} />
                              <span>{property.bedrooms} Beds</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Bath size={16} />
                              <span>{property.bathrooms} Baths</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Maximize size={16} />
                              <span>{property.area.toLocaleString()} {property.areaUnit}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/property/${property.id}`}>View Details</Link>
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => handleRemove(property.id)}
                              className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
