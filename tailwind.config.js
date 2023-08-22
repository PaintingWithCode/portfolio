import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'steel-gray': {
					50: '#f3f3fb',
					100: '#e7e5f4',
					200: '#d3d0ed',
					300: '#b3b0e0',
					400: '#928bcf',
					500: '#7d6fc2',
					600: '#705cb4',
					700: '#6851a4',
					800: '#5a4687',
					900: '#4a3c6c',
					950: '#2e2640'
				},
				montana: '#231c2f',
				'gray-suit': '#94909d',
				'white-lilac': '#e6e5e7'
			},
			fontFamily: {
				display: ['Roca Two', defaultTheme.fontFamily.serif]
			}
		}
	},
	plugins: []
};
