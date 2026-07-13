import React from "react";
import { Link, useParams } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { usePageMeta } from "@/lib/seo";
import { getPolicy } from "@/data/policies";
import NotFound from "@/pages/not-found";
import { ArrowLeft } from "lucide-react";

export default function PolicyPage() {
  const { slug } = useParams<{ slug: string }>();
  const policy = getPolicy(slug ?? "");

  usePageMeta(
    policy ? `${policy.title} | Little Lightkeepers Nursery` : "Page Not Found | Little Lightkeepers Nursery",
    policy
      ? `${policy.title} policy at Little Lightkeepers Nursery. ${policy.summary}`
      : "The page you're looking for couldn't be found."
  );

  if (!policy) {
    return <NotFound />;
  }

  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Link
            href="/policies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All policies
          </Link>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">{policy.title}</h1>
          <p className="text-xl text-muted-foreground mb-12">{policy.summary}</p>

          <div className="space-y-10">
            {policy.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-3">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-16 p-6 bg-accent/20 rounded-2xl text-sm text-foreground/80">
            Copies of all policies are available in our reception area — ask us for a printed copy any time. If you have any questions about this policy, please speak to the Manager.
          </div>
        </div>
      </div>
    </Layout>
  );
}
