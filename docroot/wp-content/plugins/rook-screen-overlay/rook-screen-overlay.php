<?php
/**
 * Plugin Name:       RooK Bild-auf-Bild Block
 * Description:       Responsiver Gutenberg-Block „Bild-auf-Bild“ mit proportional positioniertem Bild- oder GIF-Overlay und frei platzierbaren Inhaltsblöcken.
 * Version:           1.2.2
 * Requires at least: 6.3
 * Requires PHP:      7.4
 * Author:            Rook
 * Text Domain:       rook-screen-overlay
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


/**
 * Fügt dem Block-Inserter die eigene Kategorie "RooK" hinzu.
 *
 * @param array $block_categories Vorhandene Block-Kategorien.
 * @return array
 */
function rook_screen_overlay_add_block_category( $block_categories ) {
	foreach ( $block_categories as $category ) {
		if ( isset( $category['slug'] ) && 'rook' === $category['slug'] ) {
			return $block_categories;
		}
	}

	array_unshift(
		$block_categories,
		array(
			'slug'  => 'rook',
			'title' => __( 'RooK', 'rook-screen-overlay' ),
			'icon'  => null,
		)
	);

	return $block_categories;
}
add_filter( 'block_categories_all', 'rook_screen_overlay_add_block_category' );

/**
 * Registriert den Block anhand der block.json-Metadaten.
 */
function rook_screen_overlay_register_block() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'rook_screen_overlay_register_block' );
