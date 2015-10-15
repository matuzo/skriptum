---
layout: skriptum
title: Darstellung/Sichtbarkeit
permalink: /htmlcss/darstellung/
order: 3
---

## Darstellung/Sichtbarkeit

###  display (Anzeigemodus)

display steuert wie ein Element dargestellt wird.
	
{% highlight css %}
span {
    display:inline;
}
{% endhighlight %}

**none** - Das Element wird nicht dargestellt und es wird auch kein Platz auf der Seite freigehalten. Es verhält sich als ob es nicht existiert.

**block** - Das Element verhält sich wie ein Blocklevelelement

**inline** - Das Element verhält sich wie ein Inlineelement

**inline-block** - Mischung aus inline und block. Man kann uneingeschränkt width, height, padding und margin vergeben. Element erzeugt aber keinen Zeilenumbruch.

Weitere: <http://www.css4you.de/display.html>

### visibility (Sichtbarkeit)

Mit Visibilty kann die Sichtbarkeit eines Elements gesteuert werden. Wird es ausgeblendet, ist es auf der Seite immer noch vorhanden, wird aber nicht angezeigt. 

{% highlight css %}
div {
    visibility:hidden;
}
{% endhighlight %}

**visible (Standartwert)** - Element befindet sich auf der Seite und wird angezeigt

**hidden** - Element befindet sich auf der Seite, wird aber nicht angezeigt

### opacity (Deckkraft)

opacity steuert die Deckkraft eines Elements (Werte 0-1)
    
{% highlight css %}
div {
    opacity:0.5;
}
{% endhighlight %}

### overflow (Überschuss)

overflow gibt an was mit Inhalten passiert, die nicht in den Anzeigebereich passen

    
{% highlight css %}
div {
    overflow:visible;
}
{% endhighlight %}

**visible (Standardwert)** - Überschüssige Elemente sind sichtbar

**hidden** - Überschüssige Elemente werden nicht angezeigt

**auto** - Überschüssige Elemente werden je nach Gegebenheit automatisch behandelt

**scroll** - Es werden immer Scrollbalken bzw. ein Platzhalter für Scrollbalken angezeigt