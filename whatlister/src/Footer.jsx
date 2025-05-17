import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Ship,
  ChevronUp
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const footerLinks = [
    {
      title: "Our Services",
      links: [
        { name: "Global Shipping", href: "#" },
        { name: "Container Transport", href: "#" },
        { name: "Cargo Insurance", href: "#" },
        { name: "Customs Clearance", href: "#" },
        { name: "Warehousing", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "News & Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Sustainability", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Track Shipment", href: "#" },
        { name: "Support Center", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const linkVariants = {
    initial: { x: 0 },
    hover: { x: 8, color: "#f97316" }
  };

  return (
    <footer className="bg-[#111112] text-white pt-16 pb-8 relative">
      {/* Top curvy separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0" style={{ transform: "translateY(-98%)" }}>
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-16"
          style={{ fill: "#111112" }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C-0.56,53.93,35.57,83.47,71.16,97.67,148.76,128.16,246.32,78.35,321.39,56.44Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Company info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <Ship size={32} className="text-orange-500" />
              <h2 className="text-2xl font-bold text-white">ShipGlobal</h2>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Your trusted global logistics partner since 2015. We connect businesses across continents with reliable and efficient shipping solutions.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, backgroundColor: "#f97316" }}
                className="bg-white/10 p-2 rounded-full"
              >
                <Facebook size={18} className="text-white" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, backgroundColor: "#f97316" }}
                className="bg-white/10 p-2 rounded-full"
              >
                <Twitter size={18} className="text-white" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, backgroundColor: "#f97316" }}
                className="bg-white/10 p-2 rounded-full"
              >
                <Instagram size={18} className="text-white" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, backgroundColor: "#f97316" }}
                className="bg-white/10 p-2 rounded-full"
              >
                <Linkedin size={18} className="text-white" />
              </motion.a>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">123 Shipping Lane, Harbor City, Ocean State 12345</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+1 (800) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">contact@shipglobal.com</p>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((column, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6 text-white border-b border-orange-500 pb-2 inline-block">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <motion.a 
                      href={link.href}
                      className="text-gray-300 hover:text-orange-500 flex items-center text-sm"
                      variants={linkVariants}
                      initial="initial"
                      whileHover="hover"
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          className="bg-white/5 p-8 rounded-2xl mb-12 border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-2 text-white">Stay Connected</h3>
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for the latest updates, industry insights, and exclusive offers.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form onSubmit={handleSubmit} className="flex">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-white/10 border border-white/20 rounded-l-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-white text-sm"
                    required
                  />
                  {isSubmitted && (
                    <motion.div 
                      className="absolute -top-10 left-0 bg-green-600 text-white text-xs py-1 px-3 rounded"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      Subscribed successfully!
                    </motion.div>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-r-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} ShipGlobal. All rights reserved.
            </motion.p>
            
            <motion.div 
              className="flex gap-6 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Cookies</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Sitemap</a>
            </motion.div>
            
            <motion.button
              onClick={scrollToTop}
              className="bg-orange-500 p-3 rounded-full shadow-lg"
              whileHover={{ scale: 1.1, backgroundColor: "#ea580c" }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <ChevronUp size={20} className="text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
