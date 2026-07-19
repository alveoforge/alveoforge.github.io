/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			// Los valores reales viven en src/styles/globals.css (:root).
			// El patrón rgb(var(--x) / <alpha-value>) conserva las opacidades (bg-ember/10).
			colors: {
				ember: {
					DEFAULT: 'rgb(var(--ember) / <alpha-value>)',
					hot: 'rgb(var(--ember-hot) / <alpha-value>)',
					soft: 'rgb(var(--ember-soft) / <alpha-value>)',
				},
				steel: {
					DEFAULT: 'rgb(var(--steel) / <alpha-value>)',
					light: 'rgb(var(--steel-light) / <alpha-value>)',
					soft: 'rgb(var(--steel-soft) / <alpha-value>)',
				},
				ink: {
					DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
					soft: 'rgb(var(--ink-soft) / <alpha-value>)',
					faint: 'rgb(var(--ink-faint) / <alpha-value>)',
				},
			},
			fontFamily: {
				sans: ['Onest Variable', 'system-ui', 'sans-serif'],
				mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
			},
		},
	},
	plugins: [],
}
