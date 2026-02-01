/**
 * ESLint config for Next.js. The override below restricts @/lib/monexSpot
 * in app routes/pages only: importing it causes fetch() at build time and
 * triggers Next.js "Dynamic server usage", breaking SSG. API routes and
 * client components may still fetch live data via /api/spot.
 */
module.exports = {
  extends: "next/core-web-vitals",
  overrides: [
    {
      files: ["src/app/**/*.ts", "src/app/**/*.tsx"],
      excludedFiles: ["src/app/api/**"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "@/lib/monexSpot",
                message:
                  "Do not import @/lib/monexSpot in app routes/pages: it triggers Next.js dynamic server usage during prerender and breaks SSG. Use client components that fetch via /api/spot instead.",
              },
            ],
          },
        ],
      },
    },
  ],
};
