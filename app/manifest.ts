import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maxim Construction",
    short_name: "Maxim",
    description:
      "Construction management, factory maintenance, office renovation, and specialty skilled work for commercial and industrial clients in the St. Louis area.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f5f4",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/Maxim+Construction+Management+-+Heavy+Lifting+&+Millwrights+(1).webp",
        sizes: "any",
        type: "image/webp",
      },
    ],
  };
}
