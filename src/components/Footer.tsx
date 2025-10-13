import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Linkedin,
} from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  company: [
    { name: "About Us", path: "/story" },
    { name: "Our Mission", path: "/story" },
    { name: "Impact", path: "/impact" },
    { name: "Careers", path: "/contact" },
  ],
  products: [
    { name: "Cultured Milk", path: "/products" },
    { name: "Yogurt", path: "/products" },
    { name: "Butter & Ghee", path: "/products" },
    { name: "All Products", path: "/products" },
  ],
  support: [
    { name: "Contact Us", path: "/contact" },
    { name: "Partner With Us", path: "/contact" },
    { name: "FAQs", path: "/contact" },
    { name: "Distribution", path: "/process" },
  ],
};

const socialLinks = [
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/company/african-joy",
    target: "_blank",
    label: "Facebook",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/p/DOIqeMoiH2l/",
    target: "_blank",
    label: "Instagram",
  },
  { icon: Twitter, url: "#", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className='bg-primary text-primary-foreground'>
      <div className='container mx-auto px-6'>
        {/* Main Footer Content */}
        <div className='py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12'>
          {/* Brand Column */}
          <div className='lg:col-span-2'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <Link to='/' className='inline-block mb-6'>
                <div className='flex items-center gap-2'>
                  {/* Logo circle */}
                  <div className='w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center overflow-hidden'>
                    <img
                      src={logo}
                      alt='African Joy Logo'
                      className='w-10 h-10 object-contain'
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <div className='text-2xl font-bold text-white'>
                      African Joy
                    </div>
                    <div className='text-xs text-primary-foreground/80'>
                      Premium Dairy
                    </div>
                  </div>
                </div>
              </Link>
              <p className='text-primary-foreground/80 mb-6 max-w-sm'>
                Empowering women dairy farmers in Tanzania through sustainable
                practices, fair partnerships, and premium quality products.
              </p>

              {/* Contact Info */}
              <div className='space-y-3 text-sm'>
                <div className='flex items-center gap-3'>
                  <MapPin className='w-4 h-4 flex-shrink-0' />
                  <span>Arusha, Tanzania</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Phone className='w-4 h-4 flex-shrink-0' />
                  <span>+255 XXX XXX XXX</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Mail className='w-4 h-4 flex-shrink-0' />
                  <span>info@africanjoy.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className='text-lg font-bold mb-4'>Company</h3>
            <ul className='space-y-3'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className='text-primary-foreground/80 hover:text-primary-foreground transition-colors inline-block hover:translate-x-1 transform transition-transform'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className='text-lg font-bold mb-4'>Products</h3>
            <ul className='space-y-3'>
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className='text-primary-foreground/80 hover:text-primary-foreground transition-colors inline-block hover:translate-x-1 transform transition-transform'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className='text-lg font-bold mb-4'>Support</h3>
            <ul className='space-y-3'>
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className='text-primary-foreground/80 hover:text-primary-foreground transition-colors inline-block hover:translate-x-1 transform transition-transform'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='border-t border-primary-foreground/20 py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            {/* Social Links */}
            <div className='flex items-center gap-4'>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors'
                  aria-label={social.label}>
                  <social.icon className='w-5 h-5' />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className='text-sm text-primary-foreground/70 text-center md:text-left'>
              © {new Date().getFullYear()} African Joy Dairy. All rights
              reserved.
            </div>

            {/* Legal Links */}
            <div className='flex items-center gap-6 text-sm'>
              <Link
                to='/contact'
                className='text-primary-foreground/70 hover:text-primary-foreground transition-colors'>
                Privacy Policy
              </Link>
              <Link
                to='/contact'
                className='text-primary-foreground/70 hover:text-primary-foreground transition-colors'>
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
