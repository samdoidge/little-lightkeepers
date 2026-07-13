import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "@/assets/logo-lighthouse.webp";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Our Story" },
    { href: "/rooms", label: "Nursery Rooms" },
    { href: "/team", label: "Our Team" },
    { href: "/fees", label: "Fees & Funding" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src={logoImg} 
              alt="Little Lightkeepers Nursery" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="font-serif text-xl md:text-2xl font-bold text-primary tracking-tight hidden sm:block">
              Little Lightkeepers
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:01234567890"
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              01234 567890
            </a>
            <Link
              href="/visit"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-medium shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book a Visit
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-1">
            <a
              href="tel:01234567890"
              className="p-2 text-primary"
              aria-label="Call us"
            >
              <Phone size={22} />
            </a>
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-white z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xl font-serif font-medium ${
                location === link.href ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/visit"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-primary text-primary-foreground text-center px-6 py-4 rounded-xl font-medium text-lg shadow-md mt-4"
          >
            Book a Visit
          </Link>
        </div>
      </div>
    </header>
  );
}
