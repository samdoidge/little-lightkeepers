import React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { usePageMeta, useJsonLd } from "@/lib/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the settling-in process work?",
    a: "[TO REVIEW] We offer a series of free settling-in sessions before your child's start date, beginning with a short stay together and building up to a full session on their own. Your child's key person will guide you through every step, and we'll never rush a child who needs a little longer.",
  },
  {
    q: "What should my child bring each day?",
    a: "[TO REVIEW] A named bag with spare clothes, a comforter if they have one, wellies, and a sun hat or warm hat depending on the season. We provide nappies, wipes, meals, snacks, and milk — you don't need to bring food.",
  },
  {
    q: "What food do you serve, and how do you handle allergies?",
    a: "[TO REVIEW] Our cook prepares fresh, balanced meals from scratch every day — breakfast, lunch, tea, and snacks. We are a nut-free setting and cater for all allergies, intolerances, and dietary requirements with individual care plans agreed with parents.",
  },
  {
    q: "Do you provide nappies and wipes?",
    a: "[TO REVIEW] Yes — nappies, wipes, and nappy cream are all included in our fees. If your child needs a specific brand or you're potty training, just let us know and we'll follow your lead.",
  },
  {
    q: "What happens if my child is unwell?",
    a: "[TO REVIEW] If your child becomes unwell at nursery, we'll call you straight away. We follow standard exclusion guidance — for example, 48 hours symptom-free after sickness or diarrhoea — to keep all children and staff well. Please let us know by 9am if your child will be absent.",
  },
  {
    q: "Do I pay for holidays and absences?",
    a: "[TO REVIEW] Fees are charged for booked sessions including holidays and sickness, as staffing and places are committed in advance. We close for bank holidays and the week between Christmas and New Year, which are not charged.",
  },
  {
    q: "Can I use 15 or 30 hours funding and Tax-Free Childcare?",
    a: "[TO REVIEW] Yes — we accept all government funding, including 15 and 30 funded hours and Tax-Free Childcare. See our Fees & Funding page for details, and we're always happy to talk you through what your family is entitled to.",
  },
  {
    q: "How does the waiting list work?",
    a: "[TO REVIEW] Places are offered in order of application date, with priority for siblings. Popular rooms and sessions can have a wait, so we recommend registering early — even before your child is born. There's no charge to join the waiting list.",
  },
  {
    q: "What are your staff ratios?",
    a: "[TO REVIEW] We meet or exceed statutory ratios: 1 adult to 3 children under two, 1 to 5 for two-year-olds, and 1 to 8 for three- to five-year-olds. Every child has a dedicated key person who knows them inside out.",
  },
  {
    q: "How will I know what my child has been doing all day?",
    a: "[TO REVIEW] We share photos, updates, and daily information (meals, sleeps, nappies) through our parent app, plus a friendly handover at pick-up. You'll also be invited to regular parents' evenings and stay-and-play sessions.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a.replace("[TO REVIEW] ", ""),
    },
  })),
};

export default function Faqs() {
  usePageMeta(
    "FAQs | Little Lightkeepers Nursery",
    "Answers to the questions parents ask us most — settling in, food and allergies, funding, staff ratios, daily updates and more."
  );
  useJsonLd("faq-jsonld", faqJsonLd);

  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground mb-12">
            The answers to the questions parents ask us most. Can't find what you're looking for? <Link href="/contact" className="text-primary hover:underline">Get in touch</Link> — we're happy to help.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-2xl shadow-sm border border-border/50 px-6 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="font-serif font-bold text-left text-foreground hover:no-underline hover:text-primary py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Layout>
  );
}
