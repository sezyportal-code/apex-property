import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Explorer",
    price: "Free",
    period: "",
    description: "Perfect for browsing luxury properties",
    features: [
      "Browse all listings",
      "Save up to 10 properties",
      "Basic property alerts",
      "Market insights (limited)",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Investor",
    price: "$99",
    period: "/month",
    description: "For serious property investors",
    features: [
      "Everything in Explorer",
      "Unlimited saved properties",
      "Advanced analytics & ROI tools",
      "Priority property alerts",
      "Direct agent messaging",
      "Investment reports",
      "Phone support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Elite",
    price: "$499",
    period: "/month",
    description: "White-glove service for UHNW clients",
    features: [
      "Everything in Investor",
      "Dedicated advisor",
      "Off-market listings access",
      "Custom property sourcing",
      "Legal & tax consultation",
      "Concierge viewing service",
      "24/7 priority support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.",
  },
  {
    question: "What's included in the free trial?",
    answer: "The 14-day free trial includes full access to all Investor plan features with no credit card required.",
  },
  {
    question: "Do you offer agency pricing?",
    answer: "Yes, we offer custom pricing for agencies and teams. Contact our sales team for a personalized quote.",
  },
  {
    question: "How do off-market listings work?",
    answer: "Elite members get exclusive access to properties not listed publicly, sourced through our network of agents and owners.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="caption">Pricing</span>
              <h1 className="mt-4 mb-6">
                Simple, Transparent <span className="text-gradient-gold">Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Choose the plan that matches your property journey. 
                All plans include access to our curated luxury listings.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "luxury-card relative bg-card p-8 flex flex-col",
                    plan.popular && "border-accent shadow-luxury"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium flex items-center gap-1.5">
                      <Sparkles size={14} />
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-light">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check size={18} className="text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "luxury" : "outline"}
                    className="w-full"
                    size="lg"
                    asChild
                  >
                    <Link to="/auth">{plan.cta}</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto luxury-card bg-card p-12 text-center"
            >
              <h2 className="text-3xl font-light mb-4">Enterprise Solutions</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                For real estate agencies, developers, and investment firms seeking 
                custom integrations and dedicated support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="luxury" size="lg" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-light">Frequently Asked Questions</h2>
            </motion.div>

            <div className="max-w-3xl mx-auto grid gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-secondary/50 rounded-xl"
                >
                  <h3 className="font-medium mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
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
