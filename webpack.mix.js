let mix = require('laravel-mix');

mix.scripts([
        'assets/js/jquery.min.js',
        'assets/js/jquery.easing.1.3.js',
        'assets/js/bootstrap.min.js',
        'assets/js/jquery.waypoints.min.js',
        'assets/js/jquery.magnific-popup.min.js',
        'assets/js/owl.carousel.min.js',
        'assets/js/jquery.countTo.js',
        'assets/js/main.js',
    ], 'dist/js/body.js')
    .styles([
        'assets/css/animate.css',
        'assets/css/icomoon.css',
        'assets/css/simple-line-icons.css',
        'assets/css/magnific-popup.css',
        'assets/css/owl.carousel.min.css',
        'assets/css/owl.theme.default.min.css',
        'assets/css/salvattore.css',
        'public/skins/skin-dispatcher24.css',
        'assets/css/style.css',
    ], 'dist/css/app.css');