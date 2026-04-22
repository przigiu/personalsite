import type { Metadata } from "next";
import { SITE_URL } from "./site";

interface ProjectInfo {
  slug: string;
  title: string;
  description: string;
}

export function projectMetadata({ slug, title, description }: ProjectInfo): Metadata {
  const path = `/projects/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { description, url: path, type: "article" },
  };
}

interface ProjectJsonLdInput extends ProjectInfo {
  name?: string;
  image?: string;
}

export function projectJsonLd({ slug, title, description, name, image }: ProjectJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: name ?? title,
    description,
    creator: { "@type": "Person", name: "Giulia Peruzzi" },
    url: `${SITE_URL}/projects/${slug}`,
    image: image ?? `${SITE_URL}/images/${slug}/${slug}-1.png`,
  };
}
