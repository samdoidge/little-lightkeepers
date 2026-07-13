import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center min-h-[70vh] bg-accent/20">
        <h1 className="text-8xl font-serif font-bold text-primary mb-4 drop-shadow-sm">404</h1>
        <h2 className="text-3xl font-semibold mb-6 text-foreground">Lost at sea</h2>
        <p className="text-muted-foreground mb-10 max-w-md text-lg">
          We couldn't find the page you're looking for. It might have drifted away on the tide.
        </p>
        <Link href="/" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
          Return to Safe Harbour
        </Link>
      </div>
    </Layout>
  );
}
