=== Block Enhancements – Extended styling for the Block Editor ===
Contributors:      Mr2P
Tags:              blocks, responsive, button, icon, hover
Requires PHP:      7.0
Requires at least: 6.5
Tested up to:      7.0
Stable tag:        1.2.12
License:           GPL-3.0
License URI:       https://www.gnu.org/licenses/gpl-3.0.html
Donate link:       https://boldblocks.net?utm_source=wp.org&utm_campaign=readme&utm_medium=link&utm_content=BE+Donate

Add icon, responsive spacing, typography, alignment, shadow, transform, transition, color, hover style to blocks. Lightweight, fast, and clean.

== Description ==

**Block Enhancements** adds powerful design options to core Gutenberg blocks, so you don't need to install heavy custom block libraries.
It's the easiest way to make your existing blocks more flexible and responsive while keeping your site fast and clean. All dynamic styles are rendered in the document head instead of inline styles. If you deactivate the plugin, all customized styles are removed, and no leftover styles will affect your site.
Unlike other similar plugins, this plugin is lightweight. It only loads what you need. You can enable or disable individual features per block type from the plugin's settings page.

*It works with all Gutenberg-ready themes, however, the with-icon feature uses the CSS pseudo `::before` to add icons with the `mask-image` CSS property. It may conflict with other plugins or themes that use the same technique.*

=== Key Features ===

* Add icons to buttons, headings, lists, navigation blocks (built-in 3000+ icon library or custom SVGs).
* Set responsive dimensions: padding, margin, and block spacing per device.
* Adjust responsive typography: font size, weight, line height, letter spacing per device.
* Apply 2D transforms (translate, rotate, skew, scale) per device with hover styles.
* Add box-shadow and text-shadow with hover state styles.
* Customize text and background colors with hover styles.
* Control responsive text alignment for Group, Columns, and Column blocks.
* Use transitions for smooth hover style changes.
* Define responsive CSS positions (relative, absolute, sticky, static) with custom offsets.

=== How responsive styles work ===

Responsive styles are applied per device mode: Desktop, Tablet, and Mobile. When you edit a style for a block for the first time, the current device mode becomes the source, and the other modes will automatically inherit those styles.

For example, if you set styles in Desktop mode first, Tablet and Mobile will inherit the Desktop styles by default. If you want different styles for Tablet or Mobile, switch to that mode and adjust the settings there. The same behavior applies if you start editing in Tablet or Mobile mode. Each device mode can be customized independently once it has been edited.

By default, the breakpoints are:

* Desktop: 1024px
* Tablet: 768px

If your theme or another plugin uses different breakpoints, you can change the defaults using the following filter:

        apply_filters( 'block_enhancements_get_breakpoints', [
          'sm' => [
            'breakpoint' => '576px',
            'mediaQuery' => '',
          ],
          'md' => [
            'breakpoint' => '768px',
            'mediaQuery' => '@media (min-width: 768px){##CONTENT##}',
          ],
          'lg' => [
            'breakpoint' => '1024px',
            'mediaQuery' => '@media (min-width: 1024px){##CONTENT##}',
          ],
        ] );

This allows you to align responsive behavior with your theme’s breakpoint system.

=== Common use cases ===

1. Add icons to blocks (button, heading, list, navigation).
2. Change spacing (padding, margin, block spacing) per device for button, group, row, grid, columns, gallery blocks.
3. Change typography (font size, font weight, line-height, letter spacing) per device.
4. Change text-alignment for group blocks per device. For example text-align center on mobile but text-align left on the desktop.
6. Add 2D transforms (translate, scale, rotate, skew) hover effect for buttons, images, heading, group, etc.
7. Add box-shadow, text-shadow with hover styles.
8. Change text color, background color on mouse hover.

=== How to use a feature ===

1. Select the block in the Block Editor.
2. Choose the Styles tab from the inspector settings.
3. Click on the plus (+) icon of the Block Enhancements panel to choose a feature and input its settings.
4. You can make a feature visible by default in the Block Enhancements panel from Settings → Block Enhancements → Manage Features.
5. If a feature does not appear, go to Settings → Block Enhancements → Manage Features and enable that feature for your block type.
6. For responsive features, switch between device modes (Desktop, Tablet, and Mobile) to input settings for each screen size.
7. The responsive text alignment settings are available in the block toolbar, not in the inspector settings.
8. See the video tutorials and the screenshots for more details.

=== Video tutorials ===

How to customize a core button in Gutenberg:

[youtube https://www.youtube.com/watch?v=uW3xEH6U-C0]

Please help this plugin grow by reporting issues and giving suggestions.

If this plugin is useful for you, please do a quick review and [rate it](https://wordpress.org/support/plugin/block-enhancements/reviews/#new-post) on WordPress.org to help us spread the word. I would very much appreciate it.

Please check out my other plugins if you're interested:

- **[Content Blocks Builder](https://wordpress.org/plugins/content-blocks-builder)** - Build custom layouts and blocks visually in the Block Editor without needing a code editor, using only core blocks and native Gutenberg features.
- **[Meta Field Block](https://wordpress.org/plugins/display-a-meta-field-as-block)** - A single block to display custom fields in the Block Editor without coding. It supports ACF, MetaBox, WooCommerce, meta, rest field, shortcode and more. Works everywhere: in the Site Editor (FSE), the Block Editor, inside Query Loop, WooCommerce Product Collection, Term Query blocks, and even in template files.
- **[SVG Block](https://wordpress.org/plugins/svg-block)** - A block to display SVG images as blocks. Useful for images, icons, dividers, and buttons. It allows you to upload SVG images and load them into the icon library.
- **[Icon separator](https://wordpress.org/plugins/icon-separator)** - A tiny block just like the core/separator block but with the ability to add an icon.
- **[Breadcrumb Block](https://wordpress.org/plugins/breadcrumb-block)** - A simple breadcrumb trail block that supports JSON-LD structured data and is compatible with WooCommerce.
- **[Counting Number Block](https://wordpress.org/plugins/counting-number-block)** - A block to display numbers with a counting effect
- **[Better YouTube Embed Block](https://wordpress.org/plugins/better-youtube-embed-block)** - A block to solve the performance issue with embedded YouTube videos. It can also embed multiple videos and playlists.

The plugin is developed using @wordpress/scripts. The source code is available in the trunk branch.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= What problem does this plugin solve? =

It adds advanced styling controls to Gutenberg core blocks, so you can customize existing core blocks further without heavy block libraries.

= When should I use this plugin? =

When you want more advanced features on core blocks, without installing new ones.

= Does it affect performance? =

No. Each feature loads only when used, keeping your site fast, light, and clean.

= Who can use it? =

Anyone — designers, developers, or content creators familiar with the Block Editor.

= Is it compatible with Full Site Editing? =

Yes. It works perfectly in the Site Editor and with all block themes.

= Does it support my theme? =

It supports any Gutenberg-ready theme.

= Why does the text of the block break when I add an icon to it? =

It is probably because you added an inline element such as bold, italic, highlight, etc. in the text. To fix it, there is a toggle setting named ‘Wrap a <span> around the text to keep it on a single line.’ in the ‘With icon’ panel. Just turn it on to make the text work properly.

== Screenshots ==

1. Add an icon to a heading

2. Add an icon to a list

3. Add an icon to a button

4. Add responsive settings for font size, line height, font weight, and letter spacing

5. Add responsive text alignment to a group

6. Add text shadow to a group

7. Add box shadow with hover style to a group

8. Add color with hover style to a group

9. Add transform with hover style to a group

10. Add a feature to blocks

11. Add an icon to categories

== Changelog ==

= 1.2.12 =
*Release Date - 14 May 2026*

* Improved - Updated inspector control styles
* Improved - Added a visualizer for padding and margin
* Added    - New settings to choose which features are displayed by default in the Block Enhancements panel

= 1.2.11 =
*Release Date - 19 January 2026*

* Improved - Added a setting to wrap list item text in a span to prevent it from breaking into multiple lines.

= 1.2.10 =
*Release Date - 12 January 2026*

* Improved - Added sanitize_callback to setttings field registration
* Added    - Removed settings fields on uninstall

= 1.2.9 =
*Release Date - 22 November 2025*

* Fixed    – Missing styles for classic/hybrid themes that include template files (e.g., templates/index.html), which caused WordPress to detect them as block themes.
* Fixed    – Removed the box-shadow from wp-block-button so it only applies to wp-block-button__link.
* Improved - Allowed loading more SVGs from the media library via a hook

= 1.2.8 =
*Release Date - 15 October 2025*

* Added - responsive padding, margin, and block spacing options to blocks for better tablet/mobile design control.

= 1.2.7 =
*Release Date - 11 August 2025*

* Added    - The new with-position feature. Thanks to @hozefasmile for the suggestion.
* Fixed    - Issue where the icon on the left for the core "Read More" block was not working.
* Improved - Added the 'block_enhancements_get_breakpoints' hook to change the breakpoints beside getting the value from the Content Blocks Builder plugin.

= 1.2.6 =
*Release Date - 24 October 2024*

* Updated  - SDK to implement minor UI changes and remove deprecated code
* Improved - Replaced classnames with clsx
* Updated  - Tested compatibility with WP 6.7 and set minimum requirement to WP 6.5

= 1.2.5 =
*Release Date - 18 June 2024*

* Fixed    - Dirty state when wrapping text is enabled on buttons with icon
* Fixed    - Buttons in a navigation with icon
* Improved - Make the selector of the navigation item more specific than the submenu's

= 1.2.4 =
*Release Date - 17 June 2024*

* Added    - Support the with-icon feature on core/list-item, core/navigation-link, core/navigation, core/navigation-submenu
* Fixed    - Style issues on the color dropdown control and vertical spacings
* Improved - Get responsive settings from CBB

= 1.2.3 =
*Release Date - 06 May 2024*

* Fixed - The custom gap between the icon and the text on buttons not working

= 1.2.2 =
*Release Date - 28 April 2024*

* Updated - Icon Library
* Removed - Upload SVGs to the media library

= 1.2.1 =
*Release Date - 31 March 2024*

* Fixed    - When front-end forms are submitted to admin-post.php, nopriv users are redirected to the login page.
* Refactor - Get/set device preview

= 1.2.0 =
*Release Date - 13 January 2024*

* Added   - Responsive settings for font size, line height, font weight, and letter spacing
* Added   - Allow uploading SVG files and load them into the icon library
* Updated - Increase 'Requires at least' to 6.3
* Updated - Update SDK

= 1.1.20 =
*Release Date - 05 January 2024*

* Fixed - Issue: the nested button blocks get the style from their parent block

= 1.1.19 =
*Release Date - 27 September 2023*

* Updated - Allow adding style on multiple selected blocks
* Updated - Remove deprecated warning

= 1.1.18 =
*Release Date - 11 September 2023*

* DEV - Only core lists can have icons for nested lists.

= 1.1.17 =
*Release Date - 09 September 2023*

* DEV - Support with-icon for nested list of list blocks
* DEV - Update "Requires at least 6.2" for using the new HTML API

= 1.1.16 =
*Release Date - 26 August 2023*

* DEV - Support prefers-reduced-motion

= 1.1.15 =
*Release Date - 13 August 2023*

* FIX - The custom styles have not been loaded in classic themes

= 1.1.14 =
*Release Date - 08 August 2023*

* DEV - Redesign the setting page
* DEV - Add feature classes to all dynamic blocks
* DEV - Add icon to core/categories, core/latest-posts, core/post-title, core/query-title, core/comment-title

= 1.1.13 =
*Release Date - 14 June 2023*

* DEV - Add custom shadow presets
* DEV - Using ToolsPanel instead of PanelBody for more clean UI

= 1.1.12 =
*Release Date - 17 May 2023*

* DEV - Add preset shadows to the with-shadow feature

= 1.1.11 =
*Release Date - 08 April 2023*

* DEV - Move all settings to the styles tab

= 1.1.10 =
*Release Date - 11 March 2023*

* DEV - Update icon library
* DEV - Refactor namespace

= 1.1.9 =
*Release Date - 19 February 2023*

* FIX - Remove the empty class attribute from blocks
* FIX - Remove empty spaces when adding class attribute

= 1.1.8 =
*Release Date - 10 February 2023*

* DEV - Add the with-color feature with the hover state
* DEV - Refactor code, combine all separate styles into one

= 1.1.7 =
*Release Date - 20 January 2023*

* DEV - Add hover state style builder to shadows, transform
* DEV - Add transition feature

= 1.1.6 =
*Release Date - 06 November 2022*

* DEV - Clean up the default value for more cleaning markup

= 1.1.5 =
*Release Date - 27 October 2022*

* DEV - Allow custom ColorGradientControl clearable
* FIX - Add a fallback value for the withIcon feature

= 1.1.4 =
*Release Date - 12 October 2022*

* FIX - Only load CSS files when necessary

= 1.1.3 =
*Release Date - 08 October 2022*

* DEV - Add the withIcon feature to the read more block
* DEV - Refactor the icon library

= 1.1.2 =
*Release Date - 18 September 2022*

* FIX - Compatibility issue with the Gutenberg plugin
* DEV - Load localization

= 1.1.1 =
*Release Date - 28 July 2022*

* FIX - Check whether having an icon or not to improve performance

= 1.1.0 =
*Release Date - 27 July 2022*

* FIX - Edit text after wrapping it inside an element
* DEV - Allow double click to insert icon with the withIcon feature
* FIX - Convert inline style to style object
* REFACTOR - Refactor the withIcon feature

= 1.0.12 =
*Release Date - 20 Jun 2022*

* DEV - Allow uploading SVG icons for the withIcon feature

= 1.0.11 =
*Release Date - 08 May 2022*

* REFACTOR Update SDK

= 1.0.10 =
*Release Date - 08 May 2022*

* DEV - Add responsive text-alignment feature

= 1.0.9 =
*Release Date - 02 May 2022*

* DEV - Add text-shadow feature

= 1.0.8 =
*Release Date - 02 May 2022*

* FIX - Add a setting to prevent text from breaking when there is an inline tag in the text

= 1.0.7 =
*Release Date - 30 April 2022*

* DEV - Use nanoid instead of useInstanceId
* DEV - Update components' style

= 1.0.6 =
*Release Date - 27 April 2022*

* DEV - Add the transform feature

= 1.0.5 =
*Release Date - 27 April 2022*

* DEV - Add settings page to select which blocks should be allowed to add features
* FIX - Make page 'dirty' on page load

= 1.0.4 =
*Release Date - 19 April 2022*

* DEV - Load styles for the iframe editor

= 1.0.3 =
*Release Date - 16 April 2022*

* DEV - Add the 'withShadow' feature
* DEV - Add shortcut keys to the icon library modal, focus on the search box when opening the modal

= 1.0.2 =
*Release Date - 12 April 2022*

* DEV - Update icon pack

= 1.0.1 =
*Release Date - 11 April 2022*

* DEV - Support 'withIcon' to core/heading block

= 1.0.0 =
*Release Date - 09 April 2022*
