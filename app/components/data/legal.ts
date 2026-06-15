// Maps URL slugs to the markdown files in /legal and their display metadata.
export const legalDocs = {
  terms: {
    file: "terms-and-conditions.md",
    title: "Terms & Conditions",
    short: "Terms",
    icon: "📄",
    description:
      "The terms that govern your use of QuickBite as a customer, vendor or rider.",
  },
  privacy: {
    file: "privacy-policy.md",
    title: "Privacy Policy",
    short: "Privacy",
    icon: "🔒",
    description:
      "How QuickBite collects, uses and protects your personal data under the NDPR and NDPA.",
  },
  cookies: {
    file: "cookie-policy.md",
    title: "Cookie Policy",
    short: "Cookies",
    icon: "🍪",
    description:
      "How QuickBite uses cookies and similar technologies, and how to manage them.",
  },
  refunds: {
    file: "refund-policy.md",
    title: "Refund & Cancellation Policy",
    short: "Refunds",
    icon: "💸",
    description:
      "When and how cancellations and refunds are handled on QuickBite.",
  },
} as const;

export type LegalSlug = keyof typeof legalDocs;

export const legalSlugs = Object.keys(legalDocs) as LegalSlug[];
