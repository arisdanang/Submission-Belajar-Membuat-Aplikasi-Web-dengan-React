module.exports = {
	content: ["./src/**/*.{html,js,jsx,tsx}", "./index.html"],
	theme: {
		extend: {
			colors: {
				"dark-primary": "#0E1525",
				"dark-secondary": "#64748b",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			gridTemplateColumns: {
				"1fr": "1fr",
				"2fr": "repeat(2, 1fr)",
				"3fr": "repeat(3, 1fr)",
				"4fr": "repeat(4, 1fr)",
			},
			gridTemplateRows: {
				minmax: "minmax(min-content, max-content)",
			},
		},
		container: {
			center: true,
			padding: "16px",
		},
	},
	plugins: [],
};
