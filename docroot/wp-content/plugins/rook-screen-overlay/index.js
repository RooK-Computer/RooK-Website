(function (blocks, blockEditor, components, element, i18n) {
	'use strict';

	var registerBlockType = blocks.registerBlockType;
	var useBlockProps = blockEditor.useBlockProps;
	var InspectorControls = blockEditor.InspectorControls;
	var MediaUpload = blockEditor.MediaUpload;
	var MediaUploadCheck = blockEditor.MediaUploadCheck;
	var BlockControls = blockEditor.BlockControls;
	var InnerBlocks = blockEditor.InnerBlocks;

	var PanelBody = components.PanelBody;
	var RangeControl = components.RangeControl;
	var SelectControl = components.SelectControl;
	var ToggleControl = components.ToggleControl;
	var TextControl = components.TextControl;
	var Button = components.Button;
	var BaseControl = components.BaseControl;
	var ToolbarGroup = components.ToolbarGroup;
	var ToolbarButton = components.ToolbarButton;
	var Placeholder = components.Placeholder;
	var Notice = components.Notice;

	var createElement = element.createElement;
	var Fragment = element.Fragment;
	var __ = i18n.__;

	var DISPLAY_DEFAULTS = {
		displayLeft: 38.3,
		displayTop: 34,
		displayWidth: 16,
		displayHeight: 18,
		objectFit: 'cover',
		displayBorderRadius: 0
	};

	var CONTENT_DEFAULTS = {
		contentLeft: 0,
		contentTop: 0,
		contentWidth: 100,
		contentHeight: 100,
		contentPadding: 0,
		contentVerticalAlign: 'center',
		contentZIndex: 3
	};

	var PREVIOUS_ATTRIBUTES = {
		align: { type: 'string', default: 'full' },
		backgroundId: { type: 'number' },
		backgroundUrl: { type: 'string', default: '' },
		backgroundAlt: { type: 'string', default: '' },
		displayId: { type: 'number' },
		displayUrl: { type: 'string', default: '' },
		displayAlt: { type: 'string', default: '' },
		displayLeft: { type: 'number', default: 38.3 },
		displayTop: { type: 'number', default: 34 },
		displayWidth: { type: 'number', default: 16 },
		displayHeight: { type: 'number', default: 18 },
		objectFit: { type: 'string', default: 'cover' },
		displayBorderRadius: { type: 'number', default: 0 },
		contentLeft: { type: 'number', default: 0 },
		contentTop: { type: 'number', default: 0 },
		contentWidth: { type: 'number', default: 100 },
		contentHeight: { type: 'number', default: 100 },
		contentPadding: { type: 'number', default: 0 },
		contentVerticalAlign: { type: 'string', default: 'center' },
		contentZIndex: { type: 'number', default: 3 }
	};

	var OLD_ATTRIBUTES = {
		align: { type: 'string', default: 'full' },
		backgroundId: { type: 'number' },
		backgroundUrl: { type: 'string', default: '' },
		backgroundAlt: { type: 'string', default: '' },
		displayId: { type: 'number' },
		displayUrl: { type: 'string', default: '' },
		displayAlt: { type: 'string', default: '' },
		displayLeft: { type: 'number', default: 38.3 },
		displayTop: { type: 'number', default: 34 },
		displayWidth: { type: 'number', default: 16 },
		displayHeight: { type: 'number', default: 18 },
		objectFit: { type: 'string', default: 'cover' },
		displayBorderRadius: { type: 'number', default: 0 }
	};

	function getMediaUrl(media) {
		if (!media) {
			return '';
		}

		// Bei GIFs bewusst die Original-URL verwenden, damit die Animation erhalten bleibt.
		return media.url || '';
	}

	function getCustomProperties(attributes) {
		var properties = {
			'--rook-display-left': attributes.displayLeft + '%',
			'--rook-display-top': attributes.displayTop + '%',
			'--rook-display-width': attributes.displayWidth + '%',
			'--rook-display-height': attributes.displayHeight + '%',
			'--rook-display-fit': attributes.objectFit,
			'--rook-display-radius': attributes.displayBorderRadius + 'px',
			'--rook-content-left': attributes.contentLeft + '%',
			'--rook-content-top': attributes.contentTop + '%',
			'--rook-content-width': attributes.contentWidth + '%',
			'--rook-content-height': attributes.contentHeight + '%',
			'--rook-content-padding': attributes.contentPadding + 'px',
			'--rook-content-vertical-align': attributes.contentVerticalAlign,
			'--rook-content-z-index': attributes.contentZIndex
		};

		if (attributes.useViewportMaxHeight) {
			properties['--rook-background-max-height'] = attributes.viewportMaxHeight + 'vh';

			if (attributes.backgroundWidth > 0 && attributes.backgroundHeight > 0) {
				properties['--rook-background-max-width'] =
					Math.round(attributes.viewportMaxHeight * (attributes.backgroundWidth / attributes.backgroundHeight) * 1000) / 1000 + 'vh';
			}
		}

		return properties;
	}

	function getBlockClassName(attributes) {
		return 'rook-screen-overlay' + (attributes.useViewportMaxHeight ? ' has-rook-viewport-max-height' : '');
	}

	function mediaButton(label, mediaId, onSelect, isPrimary) {
		return createElement(
			MediaUploadCheck,
			null,
			createElement(MediaUpload, {
				onSelect: onSelect,
				allowedTypes: ['image'],
				value: mediaId,
				render: function (obj) {
					return createElement(
						Button,
						{
							onClick: obj.open,
							variant: isPrimary ? 'primary' : 'secondary'
						},
						label
					);
				}
			})
		);
	}

	function MediaSetting(props) {
		return createElement(
			BaseControl,
			{
				label: props.label,
				className: 'rook-screen-overlay__media-setting'
			},
			createElement(
				'div',
				{ className: 'rook-screen-overlay__media-actions' },
				mediaButton(
					props.url ? __('Bild ersetzen', 'rook-screen-overlay') : __('Bild auswählen', 'rook-screen-overlay'),
					props.id,
					props.onSelect,
					!props.url
				),
				props.url
					? createElement(
						Button,
						{
							onClick: props.onRemove,
							variant: 'tertiary',
							isDestructive: true
						},
						__('Entfernen', 'rook-screen-overlay')
					)
					: null
			),
			props.url
				? createElement('img', {
					src: props.url,
					alt: '',
					className: 'rook-screen-overlay__media-preview'
				})
				: null
		);
	}

	function Edit(props) {
		var attributes = props.attributes;
		var setAttributes = props.setAttributes;

		var backgroundId = attributes.backgroundId;
		var backgroundUrl = attributes.backgroundUrl;
		var backgroundAlt = attributes.backgroundAlt;
		var backgroundWidth = attributes.backgroundWidth;
		var backgroundHeight = attributes.backgroundHeight;
		var displayId = attributes.displayId;
		var displayUrl = attributes.displayUrl;
		var displayAlt = attributes.displayAlt;

		var blockProps = useBlockProps({
			className: getBlockClassName(attributes),
			style: getCustomProperties(attributes)
		});

		function selectBackground(media) {
			setAttributes({
				backgroundId: media.id,
				backgroundUrl: getMediaUrl(media),
				backgroundAlt: media.alt || '',
				backgroundWidth: media.width || 0,
				backgroundHeight: media.height || 0
			});
		}

		function rememberBackgroundDimensions(event) {
			var image = event.currentTarget;

			if (image.naturalWidth && image.naturalHeight &&
				(image.naturalWidth !== backgroundWidth || image.naturalHeight !== backgroundHeight)) {
				setAttributes({
					backgroundWidth: image.naturalWidth,
					backgroundHeight: image.naturalHeight
				});
			}
		}

		function selectDisplay(media) {
			setAttributes({
				displayId: media.id,
				displayUrl: getMediaUrl(media),
				displayAlt: media.alt || ''
			});
		}

		var inspector = createElement(
			InspectorControls,
			null,
			createElement(
				PanelBody,
				{
					title: __('Bilder', 'rook-screen-overlay'),
					initialOpen: true
				},
				createElement(MediaSetting, {
					label: __('Hintergrundbild', 'rook-screen-overlay'),
					id: backgroundId,
					url: backgroundUrl,
					onSelect: selectBackground,
					onRemove: function () {
						setAttributes({ backgroundId: undefined, backgroundUrl: '', backgroundAlt: '', backgroundWidth: 0, backgroundHeight: 0 });
					}
				}),
				backgroundUrl
					? createElement(TextControl, {
						label: __('Alternativtext Hintergrund', 'rook-screen-overlay'),
						value: backgroundAlt,
						onChange: function (value) {
							setAttributes({ backgroundAlt: value });
						},
						help: __('Leer lassen, wenn das Hintergrundbild rein dekorativ ist.', 'rook-screen-overlay')
					})
					: null,
				createElement(MediaSetting, {
					label: __('Display-Bild oder GIF', 'rook-screen-overlay'),
					id: displayId,
					url: displayUrl,
					onSelect: selectDisplay,
					onRemove: function () {
						setAttributes({ displayId: undefined, displayUrl: '', displayAlt: '' });
					}
				}),
				displayUrl
					? createElement(TextControl, {
						label: __('Alternativtext Display', 'rook-screen-overlay'),
						value: displayAlt,
						onChange: function (value) {
							setAttributes({ displayAlt: value });
						},
						help: __('Beschreibe die Szene, sofern sie inhaltlich relevant ist.', 'rook-screen-overlay')
					})
					: null
			),
			createElement(
				PanelBody,
				{
					title: __('Hintergrundhöhe', 'rook-screen-overlay'),
					initialOpen: false
				},
				createElement(ToggleControl, {
					label: __('Maximale Viewport-Höhe verwenden', 'rook-screen-overlay'),
					checked: attributes.useViewportMaxHeight,
					disabled: !backgroundUrl,
					onChange: function (value) { setAttributes({ useViewportMaxHeight: value }); },
					help: attributes.useViewportMaxHeight
						? __('Das Seitenverhältnis bleibt erhalten. Ist der Elterncontainer schmaler, wird der Block entsprechend kleiner.', 'rook-screen-overlay')
						: __('Ohne Begrenzung bestimmt das natürliche Seitenverhältnis des Hintergrundbildes die Höhe.', 'rook-screen-overlay')
				}),
				attributes.useViewportMaxHeight
					? createElement(RangeControl, {
						label: __('Maximale Höhe (vh)', 'rook-screen-overlay'),
						value: attributes.viewportMaxHeight,
						onChange: function (value) { setAttributes({ viewportMaxHeight: value }); },
						min: 1,
						max: 100,
						step: 1,
						withInputField: true,
						help: __('100 vh entspricht der Höhe des Browser-Viewports.', 'rook-screen-overlay')
					})
					: null
			),
			createElement(
				PanelBody,
				{
					title: __('Display positionieren', 'rook-screen-overlay'),
					initialOpen: true
				},
				createElement(Notice, {
					status: 'info',
					isDismissible: false
				}, __('Alle Werte sind Prozentangaben relativ zum Hintergrundbild.', 'rook-screen-overlay')),
				createElement(RangeControl, {
					label: __('Abstand links (%)', 'rook-screen-overlay'),
					value: attributes.displayLeft,
					onChange: function (value) { setAttributes({ displayLeft: value }); },
					min: 0,
					max: 100,
					step: 0.1,
					withInputField: true
				}),
				createElement(RangeControl, {
					label: __('Abstand oben (%)', 'rook-screen-overlay'),
					value: attributes.displayTop,
					onChange: function (value) { setAttributes({ displayTop: value }); },
					min: 0,
					max: 100,
					step: 0.1,
					withInputField: true
				}),
				createElement(RangeControl, {
					label: __('Breite (%)', 'rook-screen-overlay'),
					value: attributes.displayWidth,
					onChange: function (value) { setAttributes({ displayWidth: value }); },
					min: 1,
					max: 100,
					step: 0.1,
					withInputField: true
				}),
				createElement(RangeControl, {
					label: __('Höhe (%)', 'rook-screen-overlay'),
					value: attributes.displayHeight,
					onChange: function (value) { setAttributes({ displayHeight: value }); },
					min: 1,
					max: 100,
					step: 0.1,
					withInputField: true
				}),
				createElement(SelectControl, {
					label: __('Bildanpassung', 'rook-screen-overlay'),
					value: attributes.objectFit,
					options: [
						{ label: __('Ausfüllen und beschneiden', 'rook-screen-overlay'), value: 'cover' },
						{ label: __('Vollständig einpassen', 'rook-screen-overlay'), value: 'contain' },
						{ label: __('Auf Fläche strecken', 'rook-screen-overlay'), value: 'fill' }
					],
					onChange: function (value) { setAttributes({ objectFit: value }); }
				}),
				createElement(RangeControl, {
					label: __('Eckenradius (px)', 'rook-screen-overlay'),
					value: attributes.displayBorderRadius,
					onChange: function (value) { setAttributes({ displayBorderRadius: value }); },
					min: 0,
					max: 100,
					step: 1,
					withInputField: true
				}),
				createElement(
					Button,
					{ onClick: function () { setAttributes(DISPLAY_DEFAULTS); }, variant: 'secondary' },
					__('Werte auf Vorlage zurücksetzen', 'rook-screen-overlay')
				)
			),
			createElement(
				PanelBody,
				{
					title: __('Text- und Block-Overlay', 'rook-screen-overlay'),
					initialOpen: true
				},
				createElement(Notice, {
					status: 'info',
					isDismissible: false
				}, __('Diese Fläche liegt absolut über Hintergrund und Display. Füge direkt im Block Überschriften, Text, Buttons oder Gruppen ein.', 'rook-screen-overlay')),
				createElement(RangeControl, {
					label: __('Abstand links (%)', 'rook-screen-overlay'),
					value: attributes.contentLeft,
					onChange: function (value) { setAttributes({ contentLeft: value }); },
					min: 0,
					max: 100,
					step: 0.1,
					withInputField: true
				}),
				createElement(RangeControl, {
					label: __('Abstand oben (%)', 'rook-screen-overlay'),
					value: attributes.contentTop,
					onChange: function (value) { setAttributes({ contentTop: value }); },
					min: 0,
					max: 100,
					step: 0.1,
					withInputField: true
				}),
				createElement(RangeControl, {
					label: __('Breite (%)', 'rook-screen-overlay'),
					value: attributes.contentWidth,
					onChange: function (value) { setAttributes({ contentWidth: value }); },
					min: 1,
					max: 100,
					step: 0.1,
					withInputField: true
				}),
				createElement(RangeControl, {
					label: __('Höhe (%)', 'rook-screen-overlay'),
					value: attributes.contentHeight,
					onChange: function (value) { setAttributes({ contentHeight: value }); },
					min: 1,
					max: 100,
					step: 0.1,
					withInputField: true
				}),
				createElement(RangeControl, {
					label: __('Innenabstand (px)', 'rook-screen-overlay'),
					value: attributes.contentPadding,
					onChange: function (value) { setAttributes({ contentPadding: value }); },
					min: 0,
					max: 200,
					step: 1,
					withInputField: true
				}),
				createElement(SelectControl, {
					label: __('Vertikale Ausrichtung', 'rook-screen-overlay'),
					value: attributes.contentVerticalAlign,
					options: [
						{ label: __('Oben', 'rook-screen-overlay'), value: 'flex-start' },
						{ label: __('Mittig', 'rook-screen-overlay'), value: 'center' },
						{ label: __('Unten', 'rook-screen-overlay'), value: 'flex-end' }
					],
					onChange: function (value) { setAttributes({ contentVerticalAlign: value }); }
				}),
				createElement(RangeControl, {
					label: __('Ebenenreihenfolge (Z-Index)', 'rook-screen-overlay'),
					value: attributes.contentZIndex,
					onChange: function (value) { setAttributes({ contentZIndex: value }); },
					min: 0,
					max: 50,
					step: 1,
					withInputField: true,
					help: __('Das Display verwendet Ebene 2. Werte ab 3 liegen darüber.', 'rook-screen-overlay')
				}),
				createElement(
					Button,
					{ onClick: function () { setAttributes(CONTENT_DEFAULTS); }, variant: 'secondary' },
					__('Overlay-Fläche zurücksetzen', 'rook-screen-overlay')
				)
			)
		);

		var toolbar = createElement(
			BlockControls,
			null,
			createElement(
				ToolbarGroup,
				null,
				createElement(
					MediaUploadCheck,
					null,
					createElement(MediaUpload, {
						onSelect: selectBackground,
						allowedTypes: ['image'],
						value: backgroundId,
						render: function (obj) {
							return createElement(ToolbarButton, {
								onClick: obj.open,
								icon: 'format-image',
								label: __('Hintergrund auswählen oder ersetzen', 'rook-screen-overlay')
							});
						}
					})
				),
				createElement(
					MediaUploadCheck,
					null,
					createElement(MediaUpload, {
						onSelect: selectDisplay,
						allowedTypes: ['image'],
						value: displayId,
						render: function (obj) {
							return createElement(ToolbarButton, {
								onClick: obj.open,
								icon: 'images-alt2',
								label: __('Display-Bild auswählen oder ersetzen', 'rook-screen-overlay')
							});
						}
					})
				)
			)
		);

		var content;

		if (!backgroundUrl) {
			content = createElement(
				'div',
				blockProps,
				createElement(
					Placeholder,
					{
						icon: 'format-image',
						label: __('Bild-auf-Bild', 'rook-screen-overlay'),
						instructions: __('Wähle zuerst das Hintergrundbild mit dem abgebildeten Bildschirm.', 'rook-screen-overlay')
					},
					mediaButton(__('Hintergrundbild auswählen', 'rook-screen-overlay'), backgroundId, selectBackground, true)
				)
			);
		} else {
			content = createElement(
				'div',
				blockProps,
				createElement(
					'figure',
					{ className: 'rook-screen-overlay__background' },
					createElement('img', { src: backgroundUrl, alt: backgroundAlt || '', onLoad: rememberBackgroundDimensions })
				),
				displayUrl
					? createElement(
						'figure',
						{ className: 'rook-screen-overlay__display' },
						createElement('img', { src: displayUrl, alt: displayAlt || '' })
					)
					: createElement(
						'div',
						{ className: 'rook-screen-overlay__display-placeholder' },
						mediaButton(__('Display-Bild oder GIF auswählen', 'rook-screen-overlay'), displayId, selectDisplay, true)
					),
				createElement(
					'div',
					{ className: 'rook-screen-overlay__content' },
					createElement(InnerBlocks, {
						renderAppender: InnerBlocks.ButtonBlockAppender
					})
				)
			);
		}

		return createElement(Fragment, null, inspector, toolbar, content);
	}

	function Save(props) {
		var attributes = props.attributes;

		if (!attributes.backgroundUrl) {
			return null;
		}

		var blockProps = useBlockProps.save({
			className: getBlockClassName(attributes),
			style: getCustomProperties(attributes)
		});

		return createElement(
			'div',
			blockProps,
			createElement(
				'figure',
				{ className: 'rook-screen-overlay__background' },
				createElement('img', { src: attributes.backgroundUrl, alt: attributes.backgroundAlt || '' })
			),
			attributes.displayUrl
				? createElement(
					'figure',
					{ className: 'rook-screen-overlay__display' },
					createElement('img', { src: attributes.displayUrl, alt: attributes.displayAlt || '' })
				)
				: null,
			createElement(
				'div',
				{ className: 'rook-screen-overlay__content' },
				createElement(InnerBlocks.Content)
			)
		);
	}

	function PreviousVersionSave(props) {
		var attributes = props.attributes;

		if (!attributes.backgroundUrl) {
			return null;
		}

		var previousBlockProps = useBlockProps.save({
			className: 'rook-screen-overlay alignfull',
			style: getCustomProperties(attributes)
		});

		return createElement(
			'div',
			previousBlockProps,
			createElement(
				'figure',
				{ className: 'rook-screen-overlay__background' },
				createElement('img', { src: attributes.backgroundUrl, alt: attributes.backgroundAlt || '' })
			),
			attributes.displayUrl
				? createElement(
					'figure',
					{ className: 'rook-screen-overlay__display' },
					createElement('img', { src: attributes.displayUrl, alt: attributes.displayAlt || '' })
				)
				: null,
			createElement(
				'div',
				{ className: 'rook-screen-overlay__content' },
				createElement(InnerBlocks.Content)
			)
		);
	}

	function DeprecatedSave(props) {
		var attributes = props.attributes;

		if (!attributes.backgroundUrl) {
			return null;
		}

		var oldProperties = {
			'--rook-display-left': attributes.displayLeft + '%',
			'--rook-display-top': attributes.displayTop + '%',
			'--rook-display-width': attributes.displayWidth + '%',
			'--rook-display-height': attributes.displayHeight + '%',
			'--rook-display-fit': attributes.objectFit,
			'--rook-display-radius': attributes.displayBorderRadius + 'px'
		};

		var oldBlockProps = useBlockProps.save({
			className: 'rook-screen-overlay alignfull',
			style: oldProperties
		});

		return createElement(
			'div',
			oldBlockProps,
			createElement(
				'figure',
				{ className: 'rook-screen-overlay__background' },
				createElement('img', { src: attributes.backgroundUrl, alt: attributes.backgroundAlt || '' })
			),
			attributes.displayUrl
				? createElement(
					'figure',
					{ className: 'rook-screen-overlay__display' },
					createElement('img', { src: attributes.displayUrl, alt: attributes.displayAlt || '' })
				)
				: null
		);
	}

	registerBlockType('rook/screen-overlay', {
		edit: Edit,
		save: Save,
		deprecated: [
			{
				attributes: PREVIOUS_ATTRIBUTES,
				save: PreviousVersionSave
			},
			{
				attributes: OLD_ATTRIBUTES,
				save: DeprecatedSave
			}
		]
	});
})(window.wp.blocks, window.wp.blockEditor, window.wp.components, window.wp.element, window.wp.i18n);
