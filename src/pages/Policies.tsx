import React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { usePageMeta } from "@/lib/seo";
import { policies } from "@/data/policies";
import { FileText, ChevronRight } from "lucide-react";

export default function Policies() {
  usePageMeta(
    "Our Policies | Little Lightkeepers Nursery",
    "Read the key policies that underpin everything we do at Little Lightkeepers Nursery, from safeguarding and SEND to admissions and data protection."
  );

  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Our Policies</h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl">
            Clear, up-to-date policies underpin everything we do. You can read summaries of our key policies below.
          </p>
          <p className="text-muted-foreground mb-12">
            Copies of all policies are available in our reception area — ask us for a printed copy any time.
          </p>

          <ul className="space-y-4">
            {policies.map((policy) => (
              <li key={policy.slug}>
                <Link
                  href={`/policies/${policy.slug}`}
                  className="group flex items-center gap-5 bg-white rounded-2xl shadow-sm border border-border/50 p-6 hover:shadow-md hover:border-primary/30 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">{policy.title}</h2>
                    <p className="text-muted-foreground text-sm">{policy.summary}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
