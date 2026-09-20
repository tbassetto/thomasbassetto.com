import { defineConfig } from "oxlint";

export default defineConfig({
  ignorePatterns: ["dist", ".astro"],
  overrides: [
    {
      files: ["src/env.d.ts"],
      rules: {
        "typescript/triple-slash-reference": "off",
      },
    },
  ],
});
