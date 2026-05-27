<?php
/**
 * Plugin uninstall cleanup
 */

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

// Remove plugin settings.
delete_option( 'be_allowed_blocks' );
delete_option( 'be_breakpoints' );
