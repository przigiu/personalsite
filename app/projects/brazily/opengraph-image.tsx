import { ogContentType, ogSize, renderProjectOgImage } from "@/app/components/projectOgImage";

export const alt = "Brazily iOS app case study by Giulia Peruzzi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderProjectOgImage({
    title: "Brazily",
    tagline: "Rebuilding an iOS app after App Store rejection, with Claude Code and Figma MCP.",
  });
}
