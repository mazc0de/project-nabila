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
                'title-page': "url('./src/assets/images/background/title_page.png')",
            },
            fontFamily: {
                copyduck: ['Copyduck', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
