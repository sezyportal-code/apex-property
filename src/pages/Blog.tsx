import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const featuredPost = {
  id: "1",
  title: "The Rise of Sustainable Luxury: How Green Design is Reshaping Premium Real Estate",
  excerpt: "Discover how eco-conscious architecture and sustainable materials are becoming the new standard in ultra-luxury properties worldwide.",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  category: "Trends",
  author: "Alexandra Sterling",
  authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  date: "Jan 28, 2026",
  readTime: "8 min read",
};

const posts = [
  {
    id: "2",
    title: "2026 Luxury Real Estate Market Outlook",
    excerpt: "Expert predictions on price trends, emerging hotspots, and investment opportunities.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    category: "Market Analysis",
    date: "Jan 25, 2026",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "Inside a $50M Penthouse: What Makes It Worth the Price",
    excerpt: "An exclusive tour of Manhattan's most expensive new listing and its unparalleled amenities.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    category: "Property Tours",
    date: "Jan 22, 2026",
    readTime: "5 min read",
  },
  {
    id: "4",
    title: "The Art of Property Negotiation at the Ultra-Luxury Level",
    excerpt: "Strategies and tactics for securing the best deals on properties above $10 million.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    category: "Guides",
    date: "Jan 19, 2026",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "Smart Home Technology Every Luxury Property Needs",
    excerpt: "From AI-powered climate control to invisible audio systems, the tech features buyers expect.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    category: "Technology",
    date: "Jan 16, 2026",
    readTime: "5 min read",
  },
  {
    id: "6",
    title: "Investment Properties: Finding the Perfect Balance of Luxury and ROI",
    excerpt: "How to identify properties that offer both lifestyle appeal and strong returns.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80",
    category: "Investment",
    date: "Jan 13, 2026",
    readTime: "6 min read",
  },
  {
    id: "7",
    title: "The Most Exclusive Private Islands on the Market",
    excerpt: "A curated selection of island properties offering ultimate privacy and luxury.",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
    category: "Property Tours",
    date: "Jan 10, 2026",
    readTime: "4 min read",
  },
];

const categories = ["All", "Market Analysis", "Property Tours", "Guides", "Investment", "Technology", "Trends"];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="caption">Insights & Stories</span>
              <h1 className="mt-4 mb-6">
                The LUXE <span className="text-gradient-gold">Journal</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert insights on luxury real estate, market trends, 
                and the art of exceptional living.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-xl z-30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto pb-2 -mb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors bg-secondary hover:bg-secondary/80 first:bg-accent first:text-accent-foreground"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="luxury-card bg-card overflow-hidden group"
            >
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-muted-foreground">Featured</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-light mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{featuredPost.author}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        {featuredPost.date}
                        <span>•</span>
                        <Clock size={14} />
                        {featuredPost.readTime}
                      </p>
                    </div>
                  </div>
                  <Button variant="luxury" className="w-fit">
                    Read Article
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="luxury-card bg-card overflow-hidden group"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-light mb-4">Stay Informed</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter for exclusive market insights, 
                new listings, and investment opportunities.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="luxury">Subscribe</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
