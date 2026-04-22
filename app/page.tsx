import HomeClient from "@/app/components/HomeClient";
import JsonLd from "@/app/components/JsonLd";
import { SITE_URL } from "@/app/lib/site";

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Giulia Peruzzi",
          jobTitle: "Product & UX Designer",
          url: SITE_URL,
        }}
      />
      <HomeClient />
    </>
  );
}
