import { useMutation } from "@tanstack/react-query";

// Portable replacement for Replit's @workspace/api-client-react useCreateEnquiry.
// Posts to Web3Forms when VITE_WEB3FORMS_KEY is set; otherwise logs and succeeds
// so the form is testable in local dev.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

interface EnquiryData {
  parentName: string;
  email: string;
  phone?: string;
  childAge: string;
  preferredStart?: string;
  message?: string;
}

export function useCreateEnquiry() {
  return useMutation({
    mutationFn: async ({ data }: { data: EnquiryData }) => {
      if (!WEB3FORMS_KEY) {
        console.warn("[enquiry] VITE_WEB3FORMS_KEY not set — dev no-op", data);
        await new Promise((r) => setTimeout(r, 600));
        return { ok: true };
      }
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nursery enquiry from ${data.parentName}`,
          from_name: "Little Lightkeepers website",
          ...data,
        }),
      });
      if (!res.ok) throw new Error(`Enquiry submission failed (${res.status})`);
      return res.json();
    },
  });
}
