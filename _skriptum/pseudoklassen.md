---
layout: skriptum
title: Pseudoklassen
permalink: /htmlcss/pseudoklassen/
---

## Pseudoklassen

### Allgemeines

Pseudoklassen sind den „normalen“ Klassen sehr ähnlich, mit dem Unterschied, dass sie im Markup nicht explizit angegeben werden. Sie tun also so als ob sie Elementen Klassen hinzufügen, um auf gewisse Gegebenheiten reagieren zu können. Beispielsweise unterschiedliche Zustände von Elementen, hervorgerufen durch Userinteraktion.

Man könnte beispielsweise so das erste Element einer Liste anders einfärben

{% highlight css %}
li:first-child {
  color:red
}
{% endhighlight %}

{% highlight html %}
<ul>
  <li>Rot</li>
  <li>Schwarz</li>
  <li>Schwarz</li>
  <li>Schwarz</li>
</ul>
{% endhighlight %}

### CSS 2.1 Pseudoklassen

#### Für Verweise zu noch nicht besuchten Seiten

{% highlight css %}
:link {}
{% endhighlight %}

#### Für Verweise zu bereits besuchten Seiten

{% highlight css %}
:visited {}
{% endhighlight %}


**Wichtig:** [Limitiertes Styling für :visited](http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited)

#### Befindet man sich mit der Maus über einem Element

{% highlight css %}	
:hover {}
{% endhighlight %}

#### Für aktive Elemente (bspw. ein Link der gerade geklickt wird)

{% highlight css %}	
:active {}
{% endhighlight %}

#### Für fokusierte Elemente (bspw. ein Formularfeld)

{% highlight css %}	
:focus {}
{% endhighlight %}

Das Fokusieren mit der Tab-Taste funktioniert in älteren Webkit Browsern und im aktuellen Safari per default nur bei Formularfeldern. Damit ein Element fokusierbar ist benötigt es die Eigenschaft Tabindex. Diese steuert die Reihenfolge in der Elemente fokusiert werden. 

{% highlight html %}	
<input type="text" tabindex="1" value="Dann ich" />
<input type="text" tabindex="-1" value="Ich werde nicht fokusiert" />
<input type="text" tabindex="0" value="Zuerst werde ich fokusiert" />
{% endhighlight %}

Wenn das Dokument sinnvoll und strukturiert aufgebaut ist, muss dieses Attribut in den meisten Fällen nicht verwendet werden.

[Das Problem mit Skiplinks in Webkit](http://whatisdamon.com/blog/2012/01/why-your-skip-to-content-link-might-not-work/)

Bei Links greift der tabindex in Safari aber trotzdem nicht. Dafür gibt es zwei Lösungen:

1. Mit alt+tab durchtaben, dann werden alle Elemente fokusiert

2. Einstellen, dass per default alle Elemente fokusiert werden (Safari/Preferences/Advanced/Press Tab to highlight each item on a webpage)

#### Ein Element, das das erste Kindelement eines anderen Elements ist

{% highlight css %}	
:first-child {}
{% endhighlight %}

#### Ein Element, das das letzte Kindelement eines anderen Elements ist

{% highlight css %}	
:last-child {}
{% endhighlight %}

#### Ein Element basierend auf der Sprache selektieren.

Die Sprache muss nicht explizit für dieses Element mittels lang-Attribut definiert werden. Es kann die Sprachdeklaration von einem Elternelement erben.

{% highlight css %}	
:lang() {}
{% endhighlight %}
