---
layout: skriptum
title: Layout
permalink: /htmlcss/layout/
---

## Layout

### Flexbox

Layouting mit CSS. Mit Flexbox kann man Layoutelemente definieren und festlegen wie sich die Kindelemente dieser verhalten sollen.

**Browsersupport:** <http://caniuse.com/#search=flexbox>  

**Umfangreicher Artikel mit Grafiken:** <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>

<p data-height="268" data-theme-id="6054" data-slug-hash="dYvpyN" data-default-tab="result" data-user="matuzo" class='codepen'>See the Pen <a href='http://codepen.io/matuzo/pen/dYvpyN/'>dYvpyN</a> by Manuel Matuzovic (<a href='http://codepen.io/matuzo'>@matuzo</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

#### Eigenschaften für das Elternelement

#### display
Flex Container definieren.  

`display: flex;`  
**flex:** Volle Breite und Zeilenumbruch  
**inline-flex** So breit wie sein Inhalt und kein Zeilenumbruch

{% highlight css %}      
ul { 
  display:flex;
}
{% endhighlight %}

#### flex-direction
Achse und Richtung der Ausrichtung

`flex-direction: row-reverse;`  
**row:** links nach rechts  
**row-reverse:** rechts nach links  
**column:** von oben nach unten  
**column-reverse:** von unten nach oben

#### flex-wrap
Verhalten ob Kindelemente in einer oder mehreren Zeilen dargestellt werden sollen

`flex-wrap: wrap-reverse`  
**nowrap:** alles in einer Zeile (default)    
**wrap:** mehrere Zeilen  
**wrap-reverse:** mehrere Zeilen rechts nach links

#### justify-content
Ausrichtung der Inhalte  

`justify-content: center`

**flex-start:** default  
**flex-end:** Am Ende positioniert  
**center:** Inhalte zentrieren  
**space-between:** Gleichmäßig verteilt. Erstes am Anfang, Letztes am Ende  
**space-around:** Gleichmäßig verteilt mit gleich viel Abstand links und rechts.  

#### align-items
Ausrichtung der Elemente auf entgegengesetzter Achse.

**flex-start:** Am Anfang  
**flex-end:** Am Ende positioniert  
**center:** Inhalte zentrieren  
**strech:** Höhe des Elternelements (default)

#### align-content
Ausrichtung der Linien auf der entgegengesetzten Achse. Funktioniert nur bei mehreren Zeilen.

**flex-start:** default  
**flex-end:** Am Ende positioniert  
**center:** Inhalte zentrieren  
**space-between:** Gleichmäßig verteilt. Erstes am Anfang, Letztes am Ende  
**space-around:** Gleichmäßig verteilt mit gleich viel Abstand oben und unten.  

#### Eigenschaften für das Kindelement

#### order 

Reihenfolge der Darstellung unabhängig von der Reihenfolge im DOM

`order: 2`

#### flex-grow

Platz der eingenommen werden soll bzw. Verteilung der Größe, wenn die Elemente wachsen

`flex-grow: 1`  

Wenn alle Elemente den Wert `1` besitzen, sind sie gleich breit. Wenn eines davon beispielsweise den Wert `2`  hat, ist es doppelt so breit wie alle anderen.

#### flex-basis

Defaultgröße eines Elements

`flex-basis: 500px;`

#### flex-shrink

Platz der eingenommen werden soll, wenn die Breite des Elements unter der Defaultgröße liegt.

`flex-shrink: 2;`

Element strumpft auf die Hälfte.

#### flex

Kurzschreibweise für `flex-grow`, `flex-shrink` and `flex-basis`.

`flex: 1 2 500px;`