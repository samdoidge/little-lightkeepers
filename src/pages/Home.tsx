import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { usePageMeta } from "@/lib/seo";
import heroImg from "@/assets/hero.png";
import iconLighthouse from "@/assets/icon-lighthouse.png";
import iconShells from "@/assets/icon-shells.png";
import iconSandcastle from "@/assets/icon-sandcastle.png";
import iconSailboat from "@/assets/icon-sailboat.png";

const beacons = [
  { title: "Confident", desc: "Willing to try new things and believe in themselves.", icon: iconLighthouse },
  { title: "Curious", desc: "Eager to explore, question and discover.", icon: iconShells },
  { title: "Happy", desc: "Feeling safe, secure and valued.", icon: iconSandcastle },
  { title: "Independent", desc: "Developing self-help skills and decision-making.", icon: iconSailboat },
  { title: "Resilient", desc: "Keep trying, problem solve and overcome challenges.", icon: iconLighthouse },
  { title: "Sociable", desc: "Building friendships and learning to work together.", icon: iconShells },
  { title: "Connected to Nature", desc: "Developing respect and understanding of the natural world.", icon: iconSandcastle },
];

export default function Home() {
  usePageMeta(
    "Little Lightkeepers Nursery | Coastal Early Years Education",
    "A warm, coastal-inspired UK nursery guiding little learners towards a bright future. Now enrolling — book a visit today."
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Coastal morning at the nursery" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-semibold mb-6 tracking-wide uppercase">
              Ofsted Registered Nursery
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight text-balance">
              Guiding little learners towards a bright future.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 text-balance leading-relaxed">
              Step into a warm, coastal-inspired haven where your child will feel safe, happy, and inspired to explore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/visit" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg text-center shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
                Book a Visit
              </Link>
              <Link href="/about" className="bg-white/80 backdrop-blur-sm text-foreground px-8 py-4 rounded-full font-medium text-lg text-center hover:bg-white transition-colors duration-300">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Banner */}
      <section className="bg-secondary/30 border-y border-secondary/40">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <p className="text-center text-sm md:text-base text-secondary-foreground font-medium">
            Now enrolling — limited places for September 2026 [TO REVIEW].{" "}
            <Link href="/visit" className="underline underline-offset-4 font-semibold hover:text-primary transition-colors">
              Book a visit
            </Link>
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-accent/10 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Our Beacons of Learning</h2>
            <p className="text-lg text-muted-foreground">
              These seven core values illuminate our approach to early years education, guiding every child to reach their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {beacons.map((beacon, i) => (
              <div key={i} className="glass-panel rounded-3xl p-8 text-center flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-24 h-24 mb-6 rounded-full bg-accent/20 flex items-center justify-center p-4 group-hover:scale-110 transition-transform duration-300">
                  <img src={beacon.icon} alt="" className="w-full h-full object-contain drop-shadow-sm" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{beacon.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{beacon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to start the journey?</h2>
          <p className="text-xl text-primary-foreground/80 mb-12 text-balance leading-relaxed mx-auto">
            Choosing a nursery is a big step. Come and see our beautiful coastal rooms, meet our passionate team, and experience the warmth of Little Lightkeepers for yourself.
          </p>
          <Link href="/visit" className="inline-block bg-secondary text-secondary-foreground px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Book Your Personal Tour
          </Link>
        </div>
      </section>
    </Layout>
  );
}
