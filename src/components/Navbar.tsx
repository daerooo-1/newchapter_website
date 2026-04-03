import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { 
    name: "Services", 
    href: "/",
    dropdown: [
      { name: "Residential Inspections", href: "/services/residential" },
      { name: "Commercial Inspections", href: "/services/commercial" },
      { name: "Building Consulting", href: "/services/consulting" },
    ]
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Sample Report", href: "/sample-report" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBgClass = isHomePage 
    ? (isScrolled ? "bg-primary/95 backdrop-blur-md" : "bg-transparent")
    : "bg-primary/95 backdrop-blur-md";

  const textColorClass = isHomePage && !isScrolled ? "text-white" : "text-wood-900";
  const logoColorClass = isHomePage && !isScrolled ? "text-white" : "text-accent";

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${navBgClass}`}>
      <div className="px-6 md:px-10">
        <div className="max-w-[2000px] mx-auto w-full h-20 flex items-center justify-between">
          {/* Logo */}
        <Link to="/" className="flex items-center py-2">
          <img 
            src="/logo.svg" 
            alt="New Chapter Inspection & Consulting" 
            className="h-8 md:h-10 w-auto object-contain transition-opacity hover:opacity-90"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          <div className="flex items-center relative">
            {links.map((link) => (
              <div 
                key={link.name} 
                className="relative z-10"
                onMouseEnter={() => {
                  setHoveredLink(link.name);
                  if (link.dropdown) setActiveDropdown(link.name);
                }}
                onMouseLeave={() => {
                  setHoveredLink(null);
                  setActiveDropdown(null);
                }}
              >
                <Link 
                  to={link.href} 
                  onClick={(e) => {
                    if (link.name === "Services") {
                      e.preventDefault();
                      if (isHomePage) {
                        const element = document.getElementById("services");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      } else {
                        navigate("/?scroll=services");
                      }
                      setIsOpen(false);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className={`relative px-5 py-2.5 rounded-full text-[13px] font-medium uppercase tracking-wide flex items-center gap-1 group transition-all duration-500 ${textColorClass}`}
                >
                  <motion.span
                    animate={{ 
                      color: hoveredLink === link.name || (location.pathname === link.href && (link.name !== "Services" || location.search.includes("scroll=services")))
                        ? "#DB4B2B" // Accent color for both active and hover
                        : (isHomePage && !isScrolled ? "#FFFFFF" : "#2B2117"), // Consistent color logic for all items
                      scale: hoveredLink === link.name ? 1.03 : 1,
                    }}
                    whileTap={{ scale: 1.03, color: "#DB4B2B" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 flex items-center gap-1"
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-500 ${activeDropdown === link.name ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </motion.span>
                </Link>

                {link.dropdown && activeDropdown === link.name && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 pt-2 w-64 z-[60]"
                  >
                    <div className="bg-white rounded-2xl shadow-xl py-4 overflow-hidden">
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.href}
                          className="block px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-wood-900 relative group"
                        >
                          <motion.span 
                            whileHover={{ x: 4, color: "#DB4B2B" }}
                            whileTap={{ x: 4, color: "#DB4B2B" }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10 inline-block"
                          >
                            {sublink.name}
                          </motion.span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          <button 
            onClick={() => {
              if (isHomePage) {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate("/?scroll=contact");
              }
            }}
            className="ml-4 bg-accent text-white px-7 py-3 rounded-full text-[13px] font-medium uppercase tracking-wide hover:bg-wood-900 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 transition-colors ${textColorClass}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-primary p-6 flex flex-col space-y-6 shadow-xl h-screen overflow-y-auto">
          {links.map((link) => (
            <div key={link.name} className="flex flex-col space-y-4">
              <Link 
                to={link.href} 
                onClick={(e) => {
                  if (link.name === "Services") {
                    e.preventDefault();
                    setIsOpen(false);
                    if (isHomePage) {
                      const element = document.getElementById("services");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    } else {
                      navigate("/?scroll=services");
                    }
                  } else if (!link.dropdown) {
                    setIsOpen(false);
                  }
                }} 
                className="text-3xl font-serif text-wood-900 flex items-center justify-between"
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="flex flex-col space-y-3 pl-4 border-l-2 border-accent/20">
                  {link.dropdown.map((sublink) => (
                    <Link
                      key={sublink.name}
                      to={sublink.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-sans font-medium text-wood-900/60 hover:text-accent transition-colors"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};
