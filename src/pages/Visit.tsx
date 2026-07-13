import React from "react";
import { Layout } from "@/components/layout/Layout";
import { usePageMeta } from "@/lib/seo";
import { EnquiryForm } from "@/components/EnquiryForm";

export default function Visit() {
  usePageMeta(
    "Book a Visit | Little Lightkeepers Nursery",
    "Book a personal tour of Little Lightkeepers Nursery. Meet our team, see our coastal rooms and find out if we're the right fit for your family."
  );

  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Copy Side */}
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Come and see for yourself</h1>
              <p className="text-xl text-muted-foreground mb-8">
                The best way to know if a nursery is right for your child is to feel the atmosphere. We'd love to welcome you for a personal tour.
              </p>
              
              <div className="bg-accent/20 rounded-3xl p-8 mb-8">
                <h3 className="font-serif text-xl font-bold mb-4">What to expect on your visit:</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-foreground/80">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span>A guided tour of our beautiful coastal rooms</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span>Meet the manager and key practitioners</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span>Discuss funding, fees, and your family's needs</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span>Receive a welcome pack to take home</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-border/50">
              <EnquiryForm scrollToTopOnSuccess />
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
