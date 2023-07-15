import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '5h7quq',
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
