---
layout: skriptum
title: Featuredetection
permalink: /sonstiges/featuredetection/
type: sonstiges
---

## Featuredetection mit Mordernizr

Eigenen Build auf <https://modernizr.com/download?setclasses> erstellen.

1. Features, die gecheckt werden sollen auswählen.
2. *Build* rechts oben klicken und dann *Download*.
3. Generierte JS-Datei im `<head>` einbinden.
4. Feature-spezifisches CSS schreiben. z.B.:
{% highlight css %}        
.flexbox header {
    ...
}    

.no-flexbox header {
    ...
}
{% endhighlight %}

### no-js

Soll JS gecheckt werden, muss man zuerst dem `html`-Element die Klasse `no-js` vergeben. Mordernizr ändert diese automatisch zu `js`, wenn Javascript aktiv ist.