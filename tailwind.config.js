module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],
    theme: {
        extend: {
            height: {
                128: "32rem",
                192: "48rem",
                256: "64rem",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
