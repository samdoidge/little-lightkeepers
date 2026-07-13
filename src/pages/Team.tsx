import React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { usePageMeta } from "@/lib/seo";
import { ShieldCheck, HeartPulse, GraduationCap, User } from "lucide-react";

const team = [
  {
    name: "[TO REVIEW] Sarah Brightman",
    role: "Nursery Manager",
    qualification: "Level 5 Early Years Leadership",
    bio: "[TO REVIEW] Sarah has led early years settings for over 15 years and believes every child deserves to feel truly known. She keeps an open door for parents — pop in any time.",
  },
  {
    name: "[TO REVIEW] Emma Tide",
    role: "Deputy Manager & SENCO",
    qualification: "Level 3 Early Years",
    bio: "[TO REVIEW] Emma champions inclusive practice and works closely with families to make sure every child gets the support they need to shine.",
  },
  {
    name: "[TO REVIEW] James Marlow",
    role: "Rockpools Room Leader (Babies)",
    qualification: "Level 3 Early Years",
    bio: "[TO REVIEW] James creates a calm, cuddly home-from-home for our youngest lightkeepers, with a special love of sensory play and song time.",
  },
  {
    name: "[TO REVIEW] Priya Shore",
    role: "Sandpipers Room Leader (Toddlers)",
    qualification: "Level 3 Early Years",
    bio: "[TO REVIEW] Priya's toddler room is full of muddy wellies and giggles. She believes the best learning happens outdoors, whatever the weather.",
  },
  {
    name: "[TO REVIEW] Tom Beacon",
    role: "Navigators Room Leader (Preschool)",
    qualification: "Level 3 Early Years",
    bio: "[TO REVIEW] Tom prepares our oldest children for the big adventure of school, nurturing confidence, curiosity and firm friendships along the way.",
  },
  {
    name: "[TO REVIEW] Lucy Harbour",
    role: "Nursery Cook",
    qualification: "Food Hygiene Level 2",
    bio: "[TO REVIEW] Lucy cooks fresh, balanced meals from scratch every day and loves nothing more than a plate coming back empty.",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    text: "All staff hold enhanced DBS checks [TO REVIEW]",
  },
  {
    icon: HeartPulse,
    text: "Paediatric first aid trained [TO REVIEW]",
  },
  {
    icon: GraduationCap,
    text: "Room leaders qualified to Level 3 minimum [TO REVIEW]",
  },
];

export default function Team() {
  usePageMeta(
    "Our Team | Little Lightkeepers Nursery",
    "Meet the warm, qualified team at Little Lightkeepers Nursery — enhanced DBS checked, paediatric first aid trained, and led by experienced practitioners."
  );

  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Our Team</h1>
            <p className="text-xl text-muted-foreground">
              The warm, qualified people who keep our beacon lit every day. Every member of our team is chosen for their genuine love of working with children.
            </p>
          </div>

          {/* Trust Strip */}
          <div className="bg-accent/20 rounded-3xl p-6 md:p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trustPoints.map((point) => (
                <div key={point.text} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground/80 font-medium text-sm">{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl shadow-md border border-border/50 p-8 flex flex-col items-start hover:shadow-lg transition-shadow duration-300">
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
                  <User className="w-10 h-10 text-muted-foreground/60" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-xs font-semibold mb-4">
                  {member.qualification}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          {/* Join Our Team */}
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Join Our Team</h2>
            <p className="text-muted-foreground mb-8">
              Passionate about early years? We're always keen to hear from warm, dedicated practitioners who share our values.
            </p>
            <Link
              href="/careers"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              See Current Vacancies
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
