/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Nunito']
			},
			colors: {
				blue: {
					text: 'hsl(200, 15%, 8%)',
					bg: 'hsl(207, 26%, 17%)',
					body: 'hsl(209, 23%, 22%)'
				},
				gray: {
					text: 'hsl(0, 0%, 52%)',
					bg: 'hsl(0, 0%, 98%)',
				},
				white: 'hsl(0, 0%, 100%)'
			}
		},
	},
	plugins: [],
  darkMode: 'class'
}
