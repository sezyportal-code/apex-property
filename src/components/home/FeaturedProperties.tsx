import { motion } from "framer-motion";
import { ArrowRight, Bed, Bath, Maximize } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { featuredProperties } from "@/data/properties";
import { cn } from "@/lib/utils";

export function FeaturedProperties() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="caption"
            >
              Curated Selection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4"
            >
              Featured Properties
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="ghost" asChild className="group">
              <Link to="/properties">
                View All Properties
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link to={`/property/${property.id}`} className="group block">
                <article className="luxury-card bg-card overflow-hidden">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full">
                        {property.status}
                      </span>
                    </div>

                    {/* Price Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-2xl font-light">
                        {property.priceFormatted}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-normal mb-2 group-hover:text-accent transition-colors duration-300">
                      {property.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {property.location}
                    </p>

                    {/* Specs */}
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Bed size={16} />
                        <span>{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath size={16} />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Maximize size={16} />
                        <span>{property.area.toLocaleString()} {property.areaUnit}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
