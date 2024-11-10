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
                'title-page__tablet': "url('/src/assets/images/background/title_page_tablet.jpg')",
                'title-page__phone': "url('/src/assets/images/background/title_page_phone.jpg')",
                'main-menu': "url('/src/assets/images/background/main-menu.jpg')",
            },
            fontFamily: {
                copyduck: ['Copyduck', 'sans-serif'],
            },
            colors: {
                'off-white': {
                    100: '#FDFCF4',
                    200: '#FAE6DA',
                },
            },
        },
    },
    plugins: [],
};
