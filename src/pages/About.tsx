import React from "react";
import { Layout } from "@/components/layout/Layout";
import { usePageMeta } from "@/lib/seo";
import aboutImg from "@/assets/about.png";

export default function About() {
  usePageMeta(
    "Our Story | Little Lightkeepers Nursery",
    "Discover the story and ethos behind Little Lightkeepers Nursery — a calm, coastal approach to early years education rooted in the EYFS."
  );

  return (
    <Layout>
      <div className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-in slide-in-from-left-8 duration-700">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Our Story & Ethos</h1>
              <div className="prose prose-lg prose-blue max-w-none text-muted-foreground">
                <p>
                  Little Lightkeepers Nursery was born from a simple vision: to create a space that feels like a gentle coastal morning—calm, safe, and full of light.
                </p>
                <p>
                  We believe that children thrive when they feel secure and connected to their environment. Our curriculum is deeply rooted in the Early Years Foundation Stage (EYFS), but delivered with a unique coastal philosophy that emphasises nature, tranquility, and holistic development.
                </p>
                <h3 className="text-2xl font-serif text-foreground mt-8 mb-4">Our Approach to Learning</h3>
                <p>
                  Play is the serious work of childhood. We provide carefully curated provocations that spark curiosity. Through our "Beacons of Learning", we ensure every child develops not just academic foundations, but resilience, sociability, and independence.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4 text-foreground/80">
                  <li>Child-led exploration supported by passionate practitioners</li>
                  <li>Emphasis on outdoor learning and nature connection</li>
                  <li>Nutritious, home-cooked meals prepared fresh daily</li>
                  <li>A culture of safeguarding and wellbeing above all else</li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[600px]">
                <img src={aboutImg} alt="Calm learning environment" className="w-full h-full object-cover" />
                <div className="absolute inset-0 border-[8px] border-white/20 rounded-3xl z-10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
