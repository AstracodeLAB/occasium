/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,astro}'],
	theme: {
		extend: {
			colors: {
				accent: 'rgb(136, 58, 234)', // Color del header
				'accent-light': 'rgb(224, 204, 250)',
				'accent-dark': 'rgb(49, 10, 101)',
				'background': '#f5f5f5', // Color de fondo claro
				'text-color': '#333', // Color de texto oscuro
				'button-bg': 'rgb(136, 58, 234)', // Color de fondo del botón
				'button-hover-bg': 'rgb(49, 10, 101)', // Color de fondo del botón al pasar el cursor
			},
		},
	},
	plugins: [],
};
