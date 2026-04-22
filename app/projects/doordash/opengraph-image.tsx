import { ogContentType, ogSize, renderProjectOgImage } from "@/app/components/projectOgImage";

export const alt = "DoorDash feature concept case study by Giulia Peruzzi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderProjectOgImage({
    title: "DoorDash",
    tagline: "Bringing the social proof users rely on into the food delivery app itself.",
  });
}
