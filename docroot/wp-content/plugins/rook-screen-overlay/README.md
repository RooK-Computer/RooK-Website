# RooK Bild-auf-Bild Block

Ein statischer Gutenberg-Block für ein responsives Hintergrundbild mit proportional positioniertem Bild- oder GIF-Overlay und einer zusätzlichen absolut positionierten Gutenberg-Inhaltsfläche.

## Installation oder Update

1. Die ZIP-Datei unter **Plugins → Installieren → Plugin hochladen** auswählen.
2. Bei einem Update die vorhandene Plugin-Version durch die neue ersetzen.
3. Plugin aktivieren.
4. Im Block-Editor in der Kategorie **RooK** den Block **Bild-auf-Bild** einfügen.


## Breite und Columns-Kompatibilität

Der Block erzwingt keine Vollbreite mehr. Ohne besondere Ausrichtung verwendet er `width: 100%` seines direkten Elterncontainers und kann deshalb innerhalb eines **Spalten-/Columns-Blocks** platziert werden. Alle Overlay-Positionen bleiben prozentual an das Hintergrundbild gekoppelt. Optional stehen in der Block-Werkzeugleiste weiterhin **Breite** und **Volle Breite** zur Verfügung, sofern das aktive Theme diese Ausrichtungen unterstützt.

## Optionale Viewport-Maximalhöhe

Im Panel **Hintergrundhöhe** kann eine maximale Höhe zwischen `1vh` und `100vh` aktiviert werden. Der Block bewahrt dabei das Seitenverhältnis des Hintergrundbildes und reduziert bei Bedarf auch seine Breite. Dadurch bleiben Bild-, GIF- und Inhalts-Overlays weiterhin proportional an der richtigen Stelle. In schmalen Columns wird der Block niemals breiter als sein Elterncontainer.

## Bild-Overlay

Das Hintergrundbild bestimmt über sein natürliches Seitenverhältnis die Höhe des gesamten Blocks. Das Display-Medium wird absolut darüber positioniert. Linker Abstand, oberer Abstand, Breite und Höhe werden als Prozentwerte relativ zum Hintergrund gespeichert.

## Text- und Block-Overlay

Innerhalb des Blocks steht eine zusätzliche absolute Ebene zur Verfügung. Über den Block-Inserter können dort unter anderem folgende Gutenberg-Blöcke eingefügt werden:

- Überschrift
- Absatz
- Buttons
- Gruppe, Reihe oder Stapel
- Bild, Icon und weitere Blöcke

Die gesamte Inhaltsebene lässt sich über Prozentwerte positionieren und skalieren. Innenabstand, vertikale Ausrichtung und Z-Index können ebenfalls eingestellt werden. Der Z-Index des Display-Mediums ist `2`; die Inhaltsebene verwendet standardmäßig `3` und liegt deshalb darüber.

## Standardwerte des Display-Mediums

- Links: `38.3 %`
- Oben: `34 %`
- Breite: `16 %`
- Höhe: `18 %`

## Kompatibilität

Die Version 1.2.2 enthält veraltete Blockdefinitionen für die bisherigen Versionen. Bereits gespeicherte Blöcke können dadurch weiterhin geöffnet und beim nächsten Speichern auf die neue Struktur aktualisiert werden. Neu eingefügte Blöcke verwenden standardmäßig die Breite ihres Elterncontainers.

## Block-Kategorie und Kompatibilität

Der Block wird im Inserter in der eigenen Kategorie **RooK** angezeigt. Die interne Block-ID `rook/screen-overlay` bleibt bewusst unverändert, damit bereits eingefügte Blöcke weiterhin funktionieren.


## Änderungen in 1.2.2

Die optionale Viewport-Höhenbegrenzung verwendet nun die klassische CSS-Einheit `vh` statt der zuvor verwendeten Small-Viewport-Einheit.
