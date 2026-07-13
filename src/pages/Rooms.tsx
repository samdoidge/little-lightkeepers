import React from "react";
import { Layout } from "@/components/layout/Layout";
import { usePageMeta } from "@/lib/seo";
import babiesImg from "@/assets/room-babies.png";
import toddlersImg from "@/assets/room-toddlers.png";
import preschoolImg from "@/assets/room-preschool.png";

const rooms = [
  {
    id: "babies",
    name: "The Rockpools (0-2 years)",
    description: "A serene, loving environment designed specifically for our youngest learners. Soft lighting, sensory textures, and a calm atmosphere mirror the gentle tide, giving babies the security they need to take their first exploratory steps.",
    image: babiesImg,
    color: "bg-accent/20"
  },
  {
    id: "toddlers",
    name: "The Sandpipers (2-3 years)",
    description: "As mobility and vocabulary explode, the Sandpipers room provides boundless opportunities for discovery. Low shelving with accessible resources encourages independence, while dedicated cozy areas offer rest when needed.",
    image: toddlersImg,
    color: "bg-secondary/20"
  },
  {
    id: "preschool",
    name: "The Navigators (3-5 years)",
    description: "Preparing for the journey to primary school. The Navigators room is rich in literacy and numeracy provocations, creative arts, and complex problem-solving activities to build confident, school-ready children.",
    image: preschoolImg,
    color: "bg-primary/10"
  }
];

export default function Rooms() {
  usePageMeta(
    "Nursery Rooms | Little Lightkeepers Nursery",
    "Explore our three coastal rooms — The Rockpools (babies), The Sandpipers (toddlers) and The Navigators (preschool) — each designed for its age group."
  );

  return (
    <Layout>
      <div className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Our Nursery Rooms</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Each space is thoughtfully designed to meet the specific developmental needs of different age groups, while maintaining our calm, coastal ethos.
            </p>
          </div>

          <div className="space-y-24">
            {rooms.map((room, index) => (
              <div key={room.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="flex-1 w-full">
                  <div className={`p-4 rounded-3xl ${room.color}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                      <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full lg:px-8">
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">{room.name}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {room.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/80">Tailored EYFS curriculum activities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/80">Dedicated key person for every child</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/80">Daily updates via our parent app</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
