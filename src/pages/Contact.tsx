import React from "react";
import { Layout } from "@/components/layout/Layout";
import { usePageMeta } from "@/lib/seo";
import { EnquiryForm } from "@/components/EnquiryForm";
import { MapPin, Phone, Mail, Clock, Map } from "lucide-react";

export default function Contact() {
  usePageMeta(
    "Contact & Find Us | Little Lightkeepers Nursery",
    "Contact Little Lightkeepers Nursery — address, phone, email, opening hours and directions. Send an enquiry and we'll reply within one working day."
  );

  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Contact & Find Us</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            We'd love to hear from you. Call, email, or drop in — the kettle is usually on.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-md border border-border/50 p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      Little Lightkeepers Nursery<br />
                      Southwell Business Park<br />
                      2 Compass Terrace, South Way<br />
                      Portland, Dorset DT5 2NP
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-foreground mb-1">Phone</h3>
                    <a href="tel:01234567890" className="text-primary hover:underline text-sm font-medium">
                      01234 567890
                    </a>
                    <p className="text-muted-foreground text-xs mt-1">[TO REVIEW]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-foreground mb-1">Email</h3>
                    <a href="mailto:hello@littlelightkeepers.co.uk" className="text-primary hover:underline text-sm font-medium">
                      hello@littlelightkeepers.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-foreground mb-1">Opening Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday – Friday, 7:30am – 6:00pm<br />
                      Open 51 weeks a year. Closed bank holidays and between Christmas and New Year.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm px-2">
                [TO REVIEW] We welcome families from across Portland and Weymouth — including Fortuneswell, Easton, Weston, Southwell, Wyke Regis and Chickerell — most of our families live within a 15-minute drive.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted/50 rounded-3xl border border-border/50 flex flex-col items-center justify-center text-center p-12 min-h-[320px]">
              <Map className="w-12 h-12 text-muted-foreground/40 mb-4" />
              <p className="text-muted-foreground font-medium mb-1">Map coming soon</p>
              <p className="text-muted-foreground/70 text-sm">[TO REVIEW] Embedded map of our location will appear here.</p>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-border/50">
              <EnquiryForm heading="Send Us an Enquiry" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
