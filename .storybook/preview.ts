import type { Preview } from "@storybook/vue3";
import "../src/app/styles/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
      default: "light",
    },
  },

  decorators: [
    (story, context) => {
      const bgValue = context.globals.backgrounds?.value;
      const theme = bgValue !== "#000000" ? "light" : "dark";
      document.documentElement.classList.toggle("light-theme", theme === "light");

      return story();
    },
  ],
};

export default preview;
