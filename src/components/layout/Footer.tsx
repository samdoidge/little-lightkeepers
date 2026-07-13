import React from "react";
import { Link } from "wouter";
import logoImg from "@/assets/logo-mark-open.webp";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border/40 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Little Lightkeepers Nursery" className="h-10 w-auto opacity-90 grayscale-[0.2]" />
              <span className="font-serif text-xl font-bold text-foreground">Little Lightkeepers</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Guiding little learners towards a bright future. A warm, coastal-inspired UK nursery providing outstanding early years education in a safe, nurturing environment.
            </p>
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-xs font-semibold">
              Ofsted Registered
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">Discover</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Story & Ethos</Link></li>
              <li><Link href="/rooms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Nursery Rooms</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Team</Link></li>
              <li><Link href="/fees" className="text-muted-foreground hover:text-primary transition-colors text-sm">Fees & Funding</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">Photo Gallery</Link></li>
              <li><Link href="/policies" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Policies</Link></li>
              <li><Link href="/visit" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Book a Visit</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>12 Coastal Way<br/>Seaside Town<br/>CT12 4AB</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>01234 567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>hello@littlelightkeepers.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">Opening Hours</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-foreground">Monday – Friday</span>
                  <span>7:30am – 6:00pm</span>
                </div>
              </li>
              <li className="mt-4 p-3 bg-muted/50 rounded-lg text-xs">
                Open 51 weeks a year. Closed bank holidays and between Christmas and New Year.
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; 2026 Little Lightkeepers Nursery Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/policies/data-protection-gdpr-confidentiality" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/policies/safeguarding-and-child-protection" className="hover:text-primary transition-colors">Safeguarding</Link>
            <Link href="/" className="hover:text-primary transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
