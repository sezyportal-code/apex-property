import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        {/* Large 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative mb-8"
        >
          <span className="text-[180px] font-light text-muted-foreground/10 leading-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-light text-gradient-gold">Lost?</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-light mb-4"
        >
          This Page Doesn't Exist
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mb-8"
        >
          The property you're looking for might have been sold, 
          or perhaps you took a wrong turn in the mansion.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Button variant="luxury" size="lg" asChild>
            <Link to="/">
              <Home size={18} className="mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/properties">
              <Search size={18} className="mr-2" />
              Browse Properties
            </Link>
          </Button>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground mb-4">Popular destinations:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Properties", href: "/properties" },
              { name: "Agents", href: "/agents" },
              { name: "Contact", href: "/contact" },
              { name: "About", href: "/about" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-4 py-2 text-sm bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
