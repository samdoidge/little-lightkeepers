export interface Policy {
  slug: string;
  title: string;
  summary: string;
  sections: { heading: string; body: string }[];
}

export const policies: Policy[] = [
  {
    slug: "admissions",
    title: "Admissions",
    summary: "How places are offered, our waiting list, and settling-in arrangements.",
    sections: [
      {
        heading: "Our Approach",
        body: "[TO REVIEW] We welcome all families and allocate places fairly, in order of application date, with priority given to siblings of children already attending. This section should describe the full admissions process, including registration fees, deposits, and notice periods.",
      },
      {
        heading: "Waiting List",
        body: "[TO REVIEW] Details of how the waiting list operates, how families are contacted when a place becomes available, and typical waiting times for each room.",
      },
      {
        heading: "Settling In",
        body: "[TO REVIEW] Description of our gradual settling-in sessions, key person allocation, and how we work with parents during a child's first weeks.",
      },
    ],
  },
  {
    slug: "complaints-and-compliments",
    title: "Complaints and Compliments",
    summary: "How to share feedback, raise a concern, and how we respond.",
    sections: [
      {
        heading: "We Want to Hear From You",
        body: "[TO REVIEW] We value all feedback, positive or otherwise. This section should explain informal routes first — speaking to your child's key person or the Manager.",
      },
      {
        heading: "Making a Formal Complaint",
        body: "[TO REVIEW] The formal complaints procedure: how to put a complaint in writing, our response timescales, investigation process, and record keeping.",
      },
      {
        heading: "Escalating to Ofsted",
        body: "[TO REVIEW] Parents may contact Ofsted at any time. Include Ofsted's contact details and our registration number here.",
      },
    ],
  },
  {
    slug: "data-protection-gdpr-confidentiality",
    title: "Data Protection, GDPR & Confidentiality",
    summary: "How we collect, store, and protect your family's personal information.",
    sections: [
      {
        heading: "What We Collect and Why",
        body: "[TO REVIEW] The categories of personal data we hold about children and families, our lawful bases for processing, and how long we retain records.",
      },
      {
        heading: "Keeping Information Safe",
        body: "[TO REVIEW] How records are stored securely, who has access, our use of photographs, and arrangements with any third-party systems such as our parent app.",
      },
      {
        heading: "Your Rights",
        body: "[TO REVIEW] Parents' rights to access, correct, and request deletion of their data, and how to contact our Data Protection Lead.",
      },
    ],
  },
  {
    slug: "equality-inclusion-diversity",
    title: "Equality, Inclusion and Diversity",
    summary: "Our commitment to a setting where every child and family belongs.",
    sections: [
      {
        heading: "Our Commitment",
        body: "[TO REVIEW] We celebrate every child and family. This section should set out our commitment to equal opportunities in admissions, employment, and daily practice.",
      },
      {
        heading: "In Practice",
        body: "[TO REVIEW] How our curriculum, resources, festivals, and food reflect and celebrate diverse backgrounds, cultures, languages, and family structures.",
      },
      {
        heading: "Challenging Discrimination",
        body: "[TO REVIEW] How we respond to discriminatory language or behaviour from any child, parent, or member of staff.",
      },
    ],
  },
  {
    slug: "promoting-positive-behaviour",
    title: "Promoting Positive Behaviour",
    summary: "How we support children to build kindness, empathy, and self-regulation.",
    sections: [
      {
        heading: "Our Philosophy",
        body: "[TO REVIEW] We see behaviour as communication. This section should describe our warm, consistent approach: clear boundaries, praise, and supporting children to name and manage big feelings.",
      },
      {
        heading: "What We Do Not Do",
        body: "[TO REVIEW] We never use physical punishment, shaming, or the withholding of food or comfort. Detail our position on physical intervention and when it may be used to keep children safe.",
      },
      {
        heading: "Working With Parents",
        body: "[TO REVIEW] How we share information with parents about behaviour, and how we work together on consistent strategies between home and nursery.",
      },
    ],
  },
  {
    slug: "safeguarding-and-child-protection",
    title: "Safeguarding and Child Protection",
    summary: "Keeping children safe is at the heart of everything we do.",
    sections: [
      {
        heading: "Our Commitment",
        body: "[TO REVIEW] Safeguarding is everyone's responsibility. This section should name our Designated Safeguarding Lead (DSL) and deputy, and summarise our safer recruitment practices, including enhanced DBS checks for all staff.",
      },
      {
        heading: "Recognising and Responding to Concerns",
        body: "[TO REVIEW] How staff are trained to recognise signs of abuse and neglect, our procedures for recording and reporting concerns, and how we work with the local safeguarding partnership.",
      },
      {
        heading: "Site Security and Safe Care",
        body: "[TO REVIEW] Secure entry systems, collection passwords, mobile phone and camera policy, and safe arrangements for intimate care and sleeping children.",
      },
      {
        heading: "Concerns About an Adult",
        body: "[TO REVIEW] The procedure if an allegation is made against a member of staff, including the role of the Local Authority Designated Officer (LADO).",
      },
    ],
  },
  {
    slug: "send",
    title: "Special Educational Needs and Disabilities (SEND)",
    summary: "How we identify, support, and celebrate children with additional needs.",
    sections: [
      {
        heading: "Our Inclusive Approach",
        body: "[TO REVIEW] Every child is welcome at Little Lightkeepers. This section should name our Special Educational Needs Coordinator (SENCO) and describe our graduated approach: assess, plan, do, review.",
      },
      {
        heading: "Working With Families and Professionals",
        body: "[TO REVIEW] How we partner with parents, health visitors, speech and language therapists, and the local authority, including Education, Health and Care Plan (EHCP) support.",
      },
      {
        heading: "Accessibility",
        body: "[TO REVIEW] Details of our physical environment, adaptations we can make, and how inclusion funding is used to support individual children.",
      },
    ],
  },
];

export function getPolicy(slug: string): Policy | undefined {
  return policies.find((p) => p.slug === slug);
}
