export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "preparing-for-ism-audits",
    title: "Preparing for ISM Audits: A Structured Documentation Approach",
    excerpt:
      "Audit readiness depends on disciplined documentation control. This guide covers essential steps for organizing SMS procedures, maintaining amendment tracking, and preparing inspection-ready folders ahead of internal and external ISM audits.",
    category: "Audit Preparation",
    date: "January 15, 2026",
    readTime: "8 min read",
  },
  {
    slug: "certificate-tracking-best-practices",
    title: "Certificate Tracking Best Practices for Multi-Vessel Fleets",
    excerpt:
      "Centralized tracking reduces certificate lapses and supports structured renewal workflows across flag states.",
    category: "Certification Tracking",
    date: "January 8, 2026",
    readTime: "6 min read",
  },
  {
    slug: "psc-inspection-triggers",
    title: "Understanding PSC Inspection Triggers and Documentation Requirements",
    excerpt:
      "A practical overview of common PSC focus areas and how structured documentation control can reduce detention risk.",
    category: "PSC Inspection",
    date: "December 28, 2025",
    readTime: "7 min read",
  },
  {
    slug: "sms-revision-workflow",
    title: "SMS Revision Workflow: Aligning Procedures with Current ISM Code",
    excerpt:
      "Step-by-step guidance on reviewing, updating, and tracking amendments to your Safety Management System documentation.",
    category: "SMS / ISM",
    date: "December 15, 2025",
    readTime: "9 min read",
  },
  {
    slug: "audit-checklist-pre-inspection",
    title: "Audit Checklist: Pre-Inspection Documentation Review",
    excerpt:
      "A structured checklist for verifying document completeness, currency, and accessibility before scheduled audits.",
    category: "Audit Preparation",
    date: "December 5, 2025",
    readTime: "5 min read",
  },
  {
    slug: "vessel-takeover-compliance",
    title: "Vessel Takeover Compliance: Key Documentation Steps",
    excerpt:
      "Essential compliance documentation tasks when onboarding a vessel under new management, from handover to operational readiness.",
    category: "Operational Compliance",
    date: "November 22, 2025",
    readTime: "7 min read",
  },
  {
    slug: "equipment-service-records",
    title: "Managing Equipment Service Records for Class Survey Readiness",
    excerpt:
      "How to organize LSA, FFA, and critical equipment service records to ensure smooth class survey outcomes.",
    category: "Certification Tracking",
    date: "November 10, 2025",
    readTime: "6 min read",
  },
];
