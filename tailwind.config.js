/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
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
