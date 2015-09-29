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
