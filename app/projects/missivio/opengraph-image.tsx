import { ogContentType, ogSize, renderProjectOgImage } from "@/app/components/projectOgImage";

export const alt = "Missivio — AI-led email marketing case study by Giulia Peruzzi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderProjectOgImage({
    title: "Missivio",
    tagline: "AI-led email marketing for non-marketing founders — research-first, zero to MVP.",
  });
}
