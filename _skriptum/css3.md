---
layout: skriptum
title: CSS3
permalink: /htmlcss/css3/
---

## CSS3

### CSS3 vendor prefixes

<https://github.com/sindresorhus/sublime-autoprefixer>  

Solange Browser den Einsatz neuer Eigenschaften testen und noch nicht fix in ihr Repertoire aufgenommen haben, verwenden sie Browserprefixe (vendor prefixes).

Beispielsweise: `"-webkit-text-stroke: 10px"` wird nur von Webkitbasierenden Browsern erkannt

Sobald die Definition der Eigenschaft final ist und die Browser die technische Umsetzung abgeschlossen haben, wird die Eigenschaft in das offzielle Eigenschaftenset des Browsers aufgenommen.  
Alle Browserversionen ab diesem Zeitpunkt setzen den Prefix nicht mehr voraus, ältere natürlich immer noch.

Folgende Prefixe sind relevant:

* `-o-eigenschaft` - Opera
* `-ms-eigenschaft` - IE
* `-webkit-eigenschaft` - Webkit/Chrome/Safari
* `-moz-eigenschaft` - Firefox

Blink verwendet keine Prefixe. Stattdessen muss man experimentelle Features im Browser aktivieren.

* <http://www.chromium.org/blink/>
* <http://www.quirksmode.org/blog/archives/2013/04/blink.html>
* <http://prng.net/blink-faq.html>

### Status von CSS3 Eigenschaften

* <http://caniuse.com/#search=css3>
* <http://caniuse.com/#feat=css-sel3>
* <http://css3test.com/> von Lea Verou
* <http://www.w3.org/Style/CSS/current-work>
* <http://modernizr.com/>

### Polyfills

* <a href="http://selectivizr.com/">Selektoren</a>
* <a href="https://github.com/chuckcarpenter/REM-unit-polyfill">rem</a>
* <a href="http://css3pie.com/">border-radius, box-shadow, multiple backgrounds, linear gradients, border-image</a>
* <a href="https://github.com/louisremi/background-size-polyfill">background-size</a>
* <a href="https://github.com/heygrady/textshadow">textshadow</a>
* <a href="https://github.com/BetleyWhitehorne/CSS3MultiColumn">columns</a>
* <a href="https://github.com/pbakaus/transformie">tranforms</a>
* <a href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills">Mehr...</a>

### Generatoren

* [border-radius](http://border-radius.com/)
* [gradients](http://www.colorzilla.com/gradient-editor/)
* [text-shadow, border-radius, gradients, buttons](http://css3gen.com/button-generator/box-shadow)
* [css3 generator](http://css3generator.com)
* [flexbox](http://flexboxin5.com/)
* [animation](https://coveloping.com/tools/css-animation-generator)
* [animation2](http://cssanimate.com/)