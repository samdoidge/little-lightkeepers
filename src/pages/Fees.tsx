import React from "react";
import { Layout } from "@/components/layout/Layout";
import { usePageMeta } from "@/lib/seo";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Fees() {
  usePageMeta(
    "Fees & Funding | Little Lightkeepers Nursery",
    "Clear nursery fees with no hidden extras, plus guidance on 15 and 30 funded hours and Tax-Free Childcare at Little Lightkeepers Nursery."
  );

  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Fees & Funding</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Transparent, inclusive pricing. We accept all major forms of government funding and tax-free childcare to help support your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* Full Day */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-1 rounded-bl-xl font-medium text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">Full Day</h3>
              <p className="text-muted-foreground mb-6">7:30am – 6:00pm</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">£75.00</span>
                <span className="text-muted-foreground"> / day *</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-foreground/80">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Breakfast, lunch, and high tea included</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>All snacks and drinks</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Nappies and wipes provided</span>
                </li>
              </ul>
            </div>

            {/* Half Day */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">Half Day</h3>
              <p className="text-muted-foreground mb-6">Morning or Afternoon sessions</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">£42.00</span>
                <span className="text-muted-foreground"> / session *</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-foreground/80">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>One main meal included</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>All session snacks and drinks</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Nappies and wipes provided</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mb-16">
            * Prices shown are indicative base rates. Your actual fees may be significantly lower depending on your eligibility for government funding schemes. Please contact us for a personalised quote.
          </p>

          <div className="bg-accent/20 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-foreground text-center">Government Funding</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="font-bold text-lg mb-3">15 Hours Funding</h4>
                <p className="text-sm text-muted-foreground">Available for all 3 and 4 year olds, and eligible working parents of 9 month olds to 2 year olds.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="font-bold text-lg mb-3">30 Hours Funding</h4>
                <p className="text-sm text-muted-foreground">Available for eligible working parents of 3 and 4 year olds.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="font-bold text-lg mb-3">Tax-Free Childcare</h4>
                <p className="text-sm text-muted-foreground">Get up to £500 every 3 months (£2,000 a year) for each of your children to help with the costs of childcare.</p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Link href="/visit" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 inline-block">
                Discuss Your Requirements
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
