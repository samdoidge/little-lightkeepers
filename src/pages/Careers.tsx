import React from "react";
import { Layout } from "@/components/layout/Layout";
import { usePageMeta } from "@/lib/seo";
import { Mail, Sun, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Sun,
    title: "A genuinely happy place to work",
    desc: "Small teams, supportive leadership, and a calm coastal environment that children and adults love spending time in.",
  },
  {
    icon: TrendingUp,
    title: "Real investment in your growth",
    desc: "Funded training, qualification support and clear progression — many of our room leaders started with us as apprentices. [TO REVIEW]",
  },
  {
    icon: Users,
    title: "A team that feels like family",
    desc: "Wellbeing days, staff socials and a listening culture. We look after the people who look after the children. [TO REVIEW]",
  },
];

export default function Careers() {
  usePageMeta(
    "Join Our Team | Little Lightkeepers Nursery",
    "Careers at Little Lightkeepers Nursery — join a supportive early years team with funded training and real progression. See current vacancies."
  );

  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Help us guide little learners towards a bright future. We're building a team of kind, curious practitioners who believe childhood should be full of light.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason) => (
              <div key={reason.title} className="bg-white rounded-3xl shadow-md border border-border/50 p-8">
                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/20 rounded-3xl p-8 md:p-10 mb-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Current Vacancies</h2>
            <p className="text-muted-foreground mb-4">
              [TO REVIEW] We don't have any advertised vacancies right now, but we're always happy to hear from great practitioners — speculative applications are warmly welcomed.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80 text-sm">
              <li>[TO REVIEW] Example: Early Years Practitioner (Level 3) — full time</li>
              <li>[TO REVIEW] Example: Nursery Apprentice — term time</li>
            </ul>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Sound like you?</h2>
            <p className="text-muted-foreground mb-8">
              Send us your CV and a few lines about why you'd love to join us.
            </p>
            <a
              href="mailto:hello@littlelightkeepers.co.uk?subject=Careers%20at%20Little%20Lightkeepers"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              hello@littlelightkeepers.co.uk
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
