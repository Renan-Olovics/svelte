/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#f5f4f4',
				fontColor: '#9D9D9D'
			},
			fontFamily: {
				Nunito: [
					'Nunito',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Open Sans',
					'Helvetica Neue',
					'sans-serif'
				]
			}
		}
	},
	plugins: []
};
