import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, MapPin, Bed, Bath, Maximize, ArrowUpDown, Grid3X3, LayoutList } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { properties, Property } from "@/data/properties";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";

const propertyTypes = ["All Types", "Villa", "Penthouse", "Mansion", "Estate", "Chalet"];
const sortOptions = [
  { value: "price-desc", label: "Price: High to Low" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "newest", label: "Newest First" },
  { value: "area-desc", label: "Largest First" },
];

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [priceRange, setPriceRange] = useState([0, 100000000]);
  const [bedroomMin, setBedroomMin] = useState(0);
  const [sortBy, setSortBy] = useState("price-desc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.city.toLowerCase().includes(query) ||
          p.country.toLowerCase().includes(query)
      );
    }

    // Type filter
    if (selectedType !== "All Types") {
      result = result.filter((p) => p.type === selectedType);
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Bedroom filter
    if (bedroomMin > 0) {
      result = result.filter((p) => p.bedrooms >= bedroomMin);
    }

    // Sort
    switch (sortBy) {
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "area-desc":
        result.sort((a, b) => b.area - a.area);
        break;
      case "newest":
        result.sort((a, b) => b.yearBuilt - a.yearBuilt);
        break;
    }

    return result;
  }, [searchQuery, selectedType, priceRange, bedroomMin, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("All Types");
    setPriceRange([0, 100000000]);
    setBedroomMin(0);
    setSortBy("price-desc");
  };

  const hasActiveFilters =
    searchQuery ||
    selectedType !== "All Types" ||
    priceRange[0] > 0 ||
    priceRange[1] < 100000000 ||
    bedroomMin > 0;

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
              className="max-w-3xl"
            >
              <span className="caption">Property Collection</span>
              <h1 className="mt-4 mb-6">
                Discover Extraordinary
                <span className="text-gradient-gold"> Properties</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our curated selection of the world's most exceptional real estate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Bar */}
        <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto px-6 lg:px-8 py-4">
            <div className="flex flex-wrap items-center gap-4">
              {/* Search */}
              <div className="relative flex-1 min-w-[200px] max-w-md">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by location, city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-secondary/50 border-0"
                />
              </div>

              {/* Property Type */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-40 bg-secondary/50 border-0">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 bg-secondary/50 border-0">
                  <ArrowUpDown size={14} className="mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* More Filters */}
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <SlidersHorizontal size={16} />
                    Filters
                    {hasActiveFilters && (
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 space-y-8">
                    {/* Price Range */}
                    <div>
                      <label className="caption block mb-4">Price Range</label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        min={0}
                        max={100000000}
                        step={1000000}
                        className="mb-4"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${(priceRange[0] / 1000000).toFixed(0)}M</span>
                        <span>${(priceRange[1] / 1000000).toFixed(0)}M</span>
                      </div>
                    </div>

                    {/* Bedrooms */}
                    <div>
                      <label className="caption block mb-4">Minimum Bedrooms</label>
                      <div className="flex gap-2">
                        {[0, 3, 4, 5, 6, 7].map((num) => (
                          <button
                            key={num}
                            onClick={() => setBedroomMin(num)}
                            className={cn(
                              "flex-1 py-2 rounded-lg text-sm transition-colors",
                              bedroomMin === num
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary hover:bg-secondary/80"
                            )}
                          >
                            {num === 0 ? "Any" : `${num}+`}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Clear Filters */}
                    {hasActiveFilters && (
                      <Button variant="outline" onClick={clearFilters} className="w-full">
                        Clear All Filters
                      </Button>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              {/* View Toggle */}
              <div className="ml-auto flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "p-2 rounded-md transition-colors",
                    viewMode === "grid" ? "bg-background shadow-sm" : "hover:bg-background/50"
                  )}
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={cn(
                    "p-2 rounded-md transition-colors",
                    viewMode === "list" ? "bg-background shadow-sm" : "hover:bg-background/50"
                  )}
                >
                  <LayoutList size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-8">
            {/* Results Count */}
            <div className="mb-8 flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing <span className="text-foreground font-medium">{filteredProperties.length}</span> properties
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-accent hover:text-accent/80 flex items-center gap-1"
                >
                  <X size={14} />
                  Clear filters
                </button>
              )}
            </div>

            {/* Properties Grid/List */}
            <AnimatePresence mode="wait">
              <motion.div
                key={viewMode}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cn(
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    : "space-y-6"
                )}
              >
                {filteredProperties.map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    index={index}
                    viewMode={viewMode}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty State */}
            {filteredProperties.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-xl text-muted-foreground mb-4">
                  No properties match your criteria
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function PropertyCard({
  property,
  index,
  viewMode,
}: {
  property: Property;
  index: number;
  viewMode: "grid" | "list";
}) {
  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
      >
        <Link to={`/property/${property.id}`} className="group block">
          <article className="luxury-card bg-card flex flex-col lg:flex-row overflow-hidden">
            {/* Image */}
            <div className="relative lg:w-96 aspect-[16/10] lg:aspect-auto overflow-hidden">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full">
                  {property.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-normal mb-2 group-hover:text-accent transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <MapPin size={16} />
                      {property.location}
                    </p>
                  </div>
                  <p className="text-2xl font-light text-accent">
                    {property.priceFormatted}
                  </p>
                </div>
                <p className="text-muted-foreground line-clamp-2 mb-6">
                  {property.description}
                </p>
              </div>

              {/* Specs */}
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Bed size={18} />
                  <span>{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath size={18} />
                  <span>{property.bathrooms} Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize size={18} />
                  <span>{property.area.toLocaleString()} {property.areaUnit}</span>
                </div>
              </div>
            </div>
          </article>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full">
                {property.status}
              </span>
            </div>

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
            <p className="text-muted-foreground mb-6 flex items-center gap-2">
              <MapPin size={14} />
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
  );
}
