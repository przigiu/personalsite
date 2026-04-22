import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Giulia Peruzzi for product and UX design work.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Giulia Peruzzi",
    description: "Get in touch with Giulia Peruzzi for product and UX design work.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
