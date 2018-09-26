const tailwindcss = require('tailwindcss');

console.log('** Custom webpack config loaded.');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        "loader": "postcss-loader",
                        "options": {
                            "ident": "embedded",
                            "plugins": [
                                tailwindcss('./tailwind.js'),
                            ],
                            "sourceMap": true
                        }
                    }
                ]
            },
        ],
    },
};
