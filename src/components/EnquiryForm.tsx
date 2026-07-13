import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateEnquiry } from "@/lib/enquiry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Link } from "wouter";

const childAgeOptions = ["Under 1", "1–2", "2–3", "3–4", "4+"];

const formSchema = z.object({
  parentName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  childAge: z.string().min(1, "Child's age is required"),
  preferredStart: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, {
    message: "Please confirm you're happy for us to store your details",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function EnquiryForm({
  heading = "Enquiry Form",
  scrollToTopOnSuccess = false,
}: {
  heading?: string;
  scrollToTopOnSuccess?: boolean;
}) {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      email: "",
      phone: "",
      childAge: "",
      preferredStart: "",
      message: "",
      consent: false,
    },
  });

  const createEnquiry = useCreateEnquiry();

  const onSubmit = (data: FormValues) => {
    const cleaned = {
      ...data,
      phone: data.phone?.trim() || undefined,
      preferredStart: data.preferredStart?.trim() || undefined,
      message: data.message?.trim() || undefined,
    };
    createEnquiry.mutate(
      { data: cleaned },
      {
        onSuccess: () => {
          setIsSuccess(true);
          if (scrollToTopOnSuccess) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        },
      }
    );
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full py-12 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Thank you — we'll be in touch within one working day</h2>
        <p className="text-muted-foreground mb-8">
          We're so pleased you're interested in Little Lightkeepers Nursery. A member of our team will get back to you within one working day to arrange your visit.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSuccess(false);
            form.reset();
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">{heading}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

          <FormField
            control={form.control}
            name="parentName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="jane@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="07123 456789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="childAge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Child's Age</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an age range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {childAgeOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferredStart"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Start Date (Optional)</FormLabel>
                  <FormControl>
                    <Input type="month" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Any questions or preferred days for a visit?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="I'd love to visit next Tuesday morning if possible..."
                    className="resize-none min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-start gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-0.5"
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal text-muted-foreground leading-relaxed cursor-pointer">
                    I consent to Little Lightkeepers storing these details to respond to my
                    enquiry, as described in our{" "}
                    <Link
                      href="/policies/data-protection-gdpr-confidentiality"
                      className="underline underline-offset-2 hover:text-primary"
                    >
                      privacy policy
                    </Link>
                    .
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {createEnquiry.error && (
            <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
              {createEnquiry.error.message || "An error occurred. Please try again."}
            </div>
          )}

          <p className="text-sm text-muted-foreground text-center">
            We'll be in touch within one working day.
          </p>

          <Button
            type="submit"
            className="w-full h-12 text-lg rounded-xl"
            disabled={createEnquiry.isPending}
          >
            {createEnquiry.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              "Submit Enquiry"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}
