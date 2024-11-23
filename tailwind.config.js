/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
    theme: {
        extend: {
            screens: {
                phone: '640px',
                // => @media (min-width: 640px) { ... }
                tablet: '640px',
                // => @media (min-width: 640px) { ... }
                laptop: '1024px',
                // => @media (min-width: 1024px) { ... }
                desktop: '1280px',
                // => @media (min-width: 1280px) { ... }
            },
            backgroundImage: {
                'welcome-page': "url('/src/assets/images/background/welcome-page.jpg')",
                'main-menu': "url('/src/assets/images/background/main-menu.jpg')",
                'material-definition': "url('/src/assets/images/background/material-definition.jpg')",
                'generic-structure': "url('/src/assets/images/background/generic-structure.jpg')",
                'language-features': "url('/src/assets/images/background/language-features.jpg')",
                'prambanan-temple': "url('/src/assets/images/background/prambanan-temple.jpg')",
                'my-lovely-cat': "url('/src/assets/images/background/my-lovely-cat.jpg')",
                'quiz-menu': "url('/src/assets/images/background/quiz-menu.jpg')",
                grass: "url('/src/assets/images/background/bg-grass.jpg')",
            },
            fontFamily: {
                moreSugar: ['MoreSugar', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {
                'off-white': {
                    100: '#FDFCF4',
                    200: '#FAE6DA',
                },
                'mint-green': '#8FE4CD',
                'soft-cyan': '#84DCE0',
                'blush-pink': '#FFD2D6',
                'peach-orange': '#FED38E',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    1: 'hsl(var(--chart-1))',
                    2: 'hsl(var(--chart-2))',
                    3: 'hsl(var(--chart-3))',
                    4: 'hsl(var(--chart-4))',
                    5: 'hsl(var(--chart-5))',
                },
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
