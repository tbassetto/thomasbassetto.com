/** @type {import("prettier").Config} */
const config = {
	printWidth: 120,
	useTabs: true,
	singleQuote: true,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
};

export default config;
