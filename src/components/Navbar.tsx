import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Story", path: "/story" },
  { name: "Products", path: "/products" },
  { name: "Process", path: "/process" },
  { name: "Impact", path: "/impact" },
  { name: "Get Involved", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className='fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-lg'>
      <div className='container mx-auto px-6'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link to='/'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center'>
              <motion.img
                src={logo}
                alt='African Joy Logo'
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className='max-h-16 w-auto object-contain'
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-1'>
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -2 }}
                    className='relative px-4 py-2'>
                    <span
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId='navbar-indicator'
                        className='absolute bottom-0 left-0 right-0 h-0.5 bg-secondary'
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className='hidden lg:block'>
            <Link to='/contact'>
              <Button
                variant='default'
                className='bg-secondary hover:bg-secondary/90'>
                Partner With Us
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='lg:hidden p-2 text-foreground hover:text-primary transition-colors'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className='overflow-hidden lg:hidden'>
          <div className='py-4 space-y-2'>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}>
                    {link.name}
                  </motion.div>
                </Link>
              );
            })}
            <Link to='/contact' onClick={() => setIsOpen(false)}>
              <Button className='w-full bg-secondary hover:bg-secondary/90 mt-4'>
                Partner With Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
