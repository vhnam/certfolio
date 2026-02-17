// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { viewTransitions } from "astro-vtbot/starlight-view-transitions";
import { fileURLToPath } from "url";

export default defineConfig({
  integrations: [
    starlight({
      title: "Certfolio",
      components: {
        Hero: "./src/components/override-components/Hero.astro",
      },
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "Master Classes",
          items: [
            {
              label: "How to Design Forms Like an Expert",
              link: "/master-classes/how-to-design-forms-like-an-expert",
            },
            {
              label: "Design for AI Agents: Healthcare and High-Stakes Systems",
              link: "/master-classes/design-for-ai-agents-healthcare-and-high-stakes-systems",
            },
            {
              label: "Bring AI into Your Design System: Hands-On Workshop",
              link: "/master-classes/bring-ai-into-your-design-system-hands-on-workshop",
            },
          ],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss(), viewTransitions()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
