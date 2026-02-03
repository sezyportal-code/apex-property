import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  Platform: [
    { name: "Browse Properties", href: "/properties" },
    { name: "Investment Tools", href: "/investments" },
    { name: "Market Insights", href: "/blog" },
    { name: "Agent Network", href: "/agents" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  Account: [
    { name: "Sign In", href: "/auth" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Saved Properties", href: "/saved" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-light tracking-tight">
                LUXE<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="mt-6 text-muted-foreground max-w-sm leading-relaxed">
              The world's most sophisticated real estate platform. Designed for
              discerning buyers, elite agencies, and serious investors.
            </p>
            <div className="flex items-center space-x-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2.5 rounded-full bg-background border border-border hover:border-accent hover:text-accent transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="caption mb-6">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center group"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={14}
                        className="ml-1 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LUXE. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-soft" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
