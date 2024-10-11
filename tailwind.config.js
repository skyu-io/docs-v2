/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
    // If using `src` directory:
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  darkMode: ["class", "class"],
  theme: {
  	container: {
  		center: 'true',
  		padding: '2rem',
  		screens: {
  			xl: '1234px'
  		}
  	},
  	extend: {
  		colors: {
  			primary: '#0368B1',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			border: 'hsl(var(--border))',
  			card: 'hsl(var(--card))',
  			'card-foreground': 'hsl(var(--card-foreground))',
  			popover: 'hsl(var(--popover))',
  			'popover-foreground': 'hsl(var(--popover-foreground))',
  			'primary-foreground': 'hsl(var(--primary-foreground))',
  			secondary: 'hsl(var(--secondary))',
  			'secondary-foreground': 'hsl(var(--secondary-foreground))',
  			muted: 'hsl(var(--muted))',
  			'muted-foreground': 'hsl(var(--muted-foreground))',
  			accent: 'hsl(var(--accent))',
  			'accent-foreground': 'hsl(var(--accent-foreground))',
  			destructive: 'hsl(var(--destructive))',
  			'destructive-foreground': 'hsl(var(--destructive-foreground))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))'
  		},
  		borderColor: '(theme) => ({\r\n        ...theme("colors"),\r\n        border: "hsl(var(--border))",\r\n      })',
  		backgroundColor: '(theme) => ({\r\n        ...theme("colors"),\r\n        background: "hsl(var(--background))",\r\n      })',
  		textColor: '(theme) => ({\r\n        ...theme("colors"),\r\n        foreground: "hsl(var(--foreground))",\r\n      })',
  		fontSize: {
  			h1: ["2.6875rem", { lineHeight: "1.2", fontWeight: "700" }],
  			h2: ["1.6875rem", { lineHeight: "1.3", fontWeight: "700" }],
  			h3: ["1.0625rem", { lineHeight: "1.4", fontWeight: "600" }],
  			h4: ["0.9375rem", { lineHeight: "1.4", fontWeight: "600" }],
  			h5: ["0.875rem", { lineHeight: "1.4", fontWeight: "500" }],
  			h6: ["0.75rem", { lineHeight: "1.4", fontWeight: "500" }],
  			p: ["1rem", { lineHeight: "1.6", fontWeight: "400" }]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
};
