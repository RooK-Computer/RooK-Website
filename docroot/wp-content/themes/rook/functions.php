<?php

add_action( 'wp_enqueue_scripts', 'rook_theme_enqueue_styles' );

function rook_theme_enqueue_styles() {
    wp_enqueue_style(
        'rook-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get( 'Version' )
    );
}