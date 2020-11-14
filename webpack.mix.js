let mix = require('laravel-mix')

mix.js('src/main.js', 'public/js/app.js');

mix.styles(
    [
        'src/css/app.css',
        'src/css/all.min.css'
    ],

    'public/css/app.css')