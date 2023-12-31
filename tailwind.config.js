/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#f5f4f4',
				primary: {
					100: '#1C1B1F'
				},
				corrigir: {
					cor1: '#9D9D9D',
					cor2: '#2B6CE2'
				}
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
