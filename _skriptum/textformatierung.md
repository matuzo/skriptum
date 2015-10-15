---
layout: skriptum
title: Textformatierung
permalink: /htmlcss/textformatierung/
order: 1
---
## Textformatierung


### text-transform (Schrifttransformation)

Darstellung von Text in Klein- oder Großbuchstaben

{% highlight css %}
p {
  text-transform: uppercase;
}
{% endhighlight %}

**none (Standardwert)** - Das Wort wir normal dargestellt.

**capitalize** - Der erste Buchstabe wird groß dargestellt Vorher: wort text-transform:capitalize;

**uppercase** - Alle Buchstaben werden groß dargestellt

**lowercase** - Alle Buchstaben werden klein dargestellt

### color

Ändert die Textfarbe in Hexadezimal, rgb(), rgba() oder mit Schlüsselwörtern.

{% highlight css %}
h1 {
  color: rgb(255,0,0);
}
{% endhighlight %}

### font-family (Schriftart)

Mit font-family lässt sich eine Schrift, eine Schriftfamilie oder eine generische Schriftfamilie definieren. Diese Werte werden auch auf Kindelemente vererbt.

Browser können nur die Schriften anzeigen, die auf dem System des Benutzers vorhanden sind. Deswegen definiert man mehrere Schriften, durch Kommata getrennt, sollte eine nicht vorhanden sein. Bevorzugt wir die zuerst definierte Schrift, sollte diese nicht am Rechner des Benutzers installiert sein, wird die nächste genommen. Ist keine der angegebenen Schriften vorhanden, wird die standardmäßige generische Schrift verwendet. Schriftnamen, die Lehrzeichen enthalten, müssen in Anführungszeichen gesetzt werden.

{% highlight css %}
body { 
  font-family: Times, "Times New Roman", serif;
}
{% endhighlight %}

#### Generische Schriftarten

##### serif

Serifenschriften sind an den "Füßchen" an den Enden der Buchstaben zu erkennen.

Beispielsweise: Times New Roman oder Georgia.

##### sans-serif

Serifenlose Schriften besitzen im Gegensatz zu Serifenschriften diese zusätzlichen Verzierungen nicht.

Beispielsweise: Arial oder Verdana


##### monospace

Bei Monospace-Schriften haben alle Buchstaben die gleiche feste Breite. Diese Schriften eignen sich beispielsweise zur Darstellung von Programmcode.

Beispielsweise: Courier oder Lucida 

Weiterführende Links zu Schriften und generischen Schriftfamilien:

<http://cssfontstack.com/>

###  font-style (Schriftstil)

Mit font-style definiert man den Schriftstil eines Textes

{% highlight css %}

body { 
  font-style: italic;
}
{% endhighlight %}

**normal** - Der normale Schriftstil.

**italic** - Mit italic wird der kursive Schriftstil der Schrift angezeigt. Mann sollte italic standardmäßig verwenden um Schrift kursiv darzustellen. Gibt es keinen kursiven Schriftschnitt einer Schrift nicht, wird er oblique dargestellt.

**oblique** - Mit oblique wir ein normale Schriftstil schräg gestellt. Oblique gilt nur als Notlösung, für Schriften die keinen kursiven Schriftschnitt haben.




### font-weight (Schriftstärke)

Mit font-weight gibt man an, wie stark Text dargestellt werden soll.
{% highlight css %}
	
p {
    font-weight: bold;
}
{% endhighlight %}

**100 - 900** - Verschiedenste Abstufungen der Schriftstärke. Viele Schriften bieten nicht genug Schnitte an um so feine Unterschiede zu machen. Falls nur zwei Schriftschnitte zur Verfügung stehen, entsprechen die Werte 100-500 normal und 600-900 bold.

**normal** - Text wird normal dargestellt (entspricht dem Wert 400)

**bold** - Text wird fett dargestellt (entspricht dem Wert 700)

**bolder** - Der Text wird in der nächst fetteren Stufe als sein Eltern-Element dargestellt.

**lighter** - Text wird entsprechend dünner formatiert


### font-size (Schriftgröße)

Die Schriftgröße wird üblicherweise in px, em oder Prozent angegeben.

{% highlight css %}
p {
    font-size: 14px;
}
{% endhighlight %}

**Numerische Angaben** - in cm, mm, in, pt, pc, em, ex, px

**Prozentuale Angaben** - Bezogen auf die Schriftgröße des Elternelements

### text-indent (Texteinrückung)

Mit text-indent wird die erste Zeile eines Textes ein- oder ausgerückt, je nachdem ob ein positiver oder negative Wert angegeben wird.

{% highlight css %}
p {
    text-indent: -40px;
}
{% endhighlight %}

line-height (Zeilenhöhe)

### line-height 
Gibt die Zeilenhöhe an.

{% highlight css %}
p {
    line-height: 16px;
}
{% endhighlight %}

**normal** - Standardzeilenhöhe 

**Multiplikator** - Die Zeilenhöhe ergibt sich auch Schriftgröße mal Multiplikator

**Numerische/Prozentuale Angabe** - Entweder in px/em oder Prozent 

### text-align (Textausrichtung)

text-align gibt die Ausrichtung des Inhalts eines Elements an.

{% highlight css %}
p {
    text-align: right;
}
{% endhighlight %}

**left** - Linkbündiger Text

**right** - Rechtsbündiger Text

**center** - Zentrierter Text

**justify** - Blocksatz

### font-variant (Schriftvariante)

Mit font-variant stellt man eine Schrift normal (normal) oder in Kapitälchen (small-caps) dar.

{% highlight css %}
h1 {
  font-variant: small-caps;
}
{% endhighlight %}


### letter-spacing (Buchstabenabstand)

Abstände zwischen Zeichen. Diese Eigenschaft kann in absoluten oder relativen Werten angegeben werden.

{% highlight css %}
p {
  letter-spacing: 1.5em;
}
{% endhighlight %}

### word-spacing (Wortabstand)

Abstände zwischen Wörtern. Diese Eigenschaft kann in absoluten oder relativen Werten angegeben werden.
    
{% highlight css %}
p {
    word-spacing: 1.5em;
}
{% endhighlight %}

### white-space (Leerzeichen)

white-space regelt wie mit Abständen und Tabulatoren umgegangen werden soll.
   
{% highlight css %}
p {
    white-space: pre;
}
{% endhighlight %}

**normal** - Wenn mehrere Leerzeichen nebeneinander stehen, wir nur eines angezeigt. Wenn nötig wird der Text bei einem Leerzeichen umgebrochen.

**pre** - Der Text wird wie im `<pre>`-Tag behandelt, das heisst alle Leerzeichen werden ausgegeben.

**nowrap** - Leerzeichen werden normal behandelt, aber der Text wird nicht umgebrochen.

### font (Kurzschreibweise)

Mit font können einzelnen Eigenschaften für Schriftformatierung zusammengefasst werden.

{% highlight css %}
p {
    font-style:italic;
    font-variant:small-caps;
    font-weight:bold;
    font-size:1.2em;
    line-height:2em;
    font-family:Arial, sans-serif;
}
{% endhighlight %}

Alle dieses Eigenschaften können so abgekürzt werden:

{% highlight css %}
p {
    font: italic small-caps bold 1.2em/2em Arial, sans-serif;
}
{% endhighlight %}

Wird eine Eigenschaft nicht gesetzt, wird der Standardwert für die jeweilige Eigenschaft verwendet. Um `line-height` zu definieren, muss unbedingt auch font-size definiert werden (Die Werte werden mit / getrennt). Damit `font` überhaupt verwendet werden kann müssen zumindest die Werte `fontsize`/`line-height` und `font-family` angegeben werden.

### text-decoration (Schriftverzierung)

text-decoration dient zur Verzierung von Elementen
   
{% highlight css %}
p {
  text-decoration: underline;
}
{% endhighlight %}

**underline** - Linien unter dem Text

**overline** - Linien über dem Text

**line-trough** - Text durchgestrichen

**none** - Keine Linien
