/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				white: {
					500: '#f5f5f5',
					300: '#999',
					200: '#777',
					100: '#CCC'
				},
				dark: {
					500: '#000',
					400: '#0A0A0A',
					300: '#1A1A1A',
					200: '#222222',
					100: '#333333'
				}
			}
		},
		borderRadius: {
			DEFAULT: '8px',
			full: '99px'
		},
		spacing: {
			0: '0px',
			1: '4px',
			2: '8px',
			3: '16px',
			4: '20px',
			5: '24px',
			6: '32px',
			7: '36px',
			8: '42px'
		},
		typography: {
			DEFAULT: {
				css: {
					color: '#f5f5f5',
					fontSize: '14px'
				}
			},
			h1: {
				css: {
					fontSize: '36px',
					lineHeight: 1.2,
					fontWeight: 'bold'
				}
			},
			h2: {
				css: {
					fontSize: '28px',
					lineHeight: 1.3,
					fontWeight: 'bold'
				}
			},
			h3: {
				css: {
					fontSize: '24px',
					lineHeight: 1.5,
					fontWeight: 'bold'
				}
			},
			h4: {
				css: {
					fontSize: '24px',
					lineHeight: 1.5,
					fontWeight: 'medium'
				}
			},
			subheading: {
				css: {
					fontSize: '20px',
					lineHeight: 1.5,
					fontWeight: 'normal'
				}
			},
			body1: {
				css: {
					fontSize: '16px',
					lineHeight: 1.6,
					fontWeight: 'normal'
				}
			},
			smalltext: {
				css: {
					fontSize: '14px',
					lineHeight: 1.6,
					fontWeight: 'normal'
				}
			},
			caption: {
				css: {
					fontSize: '12px',
					lineHeight: 1.5,
					fontWeight: 'normal'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
