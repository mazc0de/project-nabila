/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
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
        extend: {
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
            colors: {
                'off-white': {
                    100: '#FDFCF4',
                    200: '#FAE6DA',
                },
                'mint-green': '#8FE4CD',
                'soft-cyan': '#84DCE0',
                'blush-pink': '#FFD2D6',
                'peach-orange': '#FED38E',
            },
        },
    },
    plugins: [],
};
