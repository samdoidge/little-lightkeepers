import React from "react";
import { Layout } from "@/components/layout/Layout";
import { usePageMeta } from "@/lib/seo";
import heroImg from "@/assets/hero.png";
import aboutImg from "@/assets/about.png";
import babiesImg from "@/assets/room-babies.png";
import toddlersImg from "@/assets/room-toddlers.png";
import preschoolImg from "@/assets/room-preschool.png";
import outdoorImg from "@/assets/outdoor.png";

const images = [
  { src: outdoorImg, alt: "Natural outdoor play area" },
  { src: preschoolImg, alt: "Preschool learning environment" },
  { src: aboutImg, alt: "Calm room setting" },
  { src: toddlersImg, alt: "Toddler play area" },
  { src: babiesImg, alt: "Baby sensory area" },
  { src: heroImg, alt: "Coastal morning" }
];

export default function Gallery() {
  usePageMeta(
    "Gallery | Little Lightkeepers Nursery",
    "A glimpse into daily life at Little Lightkeepers Nursery — our coastal rooms, outdoor play spaces and calm learning environments."
  );

  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Nursery Gallery</h1>
            <p className="text-xl text-muted-foreground">
              A glimpse into daily life at Little Lightkeepers Nursery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden aspect-square bg-accent/10">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
