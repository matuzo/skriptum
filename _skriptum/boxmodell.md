---
layout: skriptum
title: Box-Modell
permalink: /htmlcss/boxmodell/
---

#Box-Modell

## Allgemeines

Das Box-Modell legt fest wie sich Blocklevel-Elemente hinsichtlich ihrer Breite und Höhe verhalten und wie Innen- und Außenabstand und Rahmen interpretiert werden. Das Verständnis des Box-Modells ist essenziell für das grundsätzliche Layouting in CSS.

Die Eigenschaft width eines Elements bezieht sich auf die Breite seines Inhalts. Zu dieser Breite werden noch Innenabstand und Rahmen addiert. Somit ergeben Breite, Innenabstand und Rahmen die Gesamtbreite des Elements.

<img src="{{site.baseurl}}/images/boxmodell.jpg" class="img-responsive" alt="Box-Modell" />

## width (Breite)

Die Breite eines Elements kann mit relativen oder absoluten Zahl- oder Prozentwerten (Prozentwerte beziehen sich auf die Breite des Elternelements) definiert werden. Der Standartwert für die Breite eines Elements ist 'auto'. width kann nur auf Blocklevelelemente angewendet werden.


{% highlight css %}
div { 
  width:200px;
}
{% endhighlight %}


## min-width

Gibt die minimale Breite eines Elements an.

{% highlight css %}
div { 
  min-width:200px;
}
{% endhighlight %}


## max-width

Gibt die maximale Breite eines Elements an. (Funktioniert nicht in IE6)

{% highlight css %}	
div { 
  max-width:200px;
}
{% endhighlight %}



## margin (Aussenabstand)

margin gibt den Aussenabstand eines Elementes an. Der Abstand kann relativ oder absolut angegeben werden und auch mit negativen Werten.

### Jede Seite einzeln definieren
	
{% highlight css %}	
p { 
  margin-top:10px;
  margin-right:10px;
  margin-bottom:10px;
  margin-left:10px;
}
{% endhighlight %}

### Jede Seite einzeln definieren 
Kurzschreibweise in der Reihenfolge: top / right / bottom / left

{% highlight css %}	
	
p { 
  margin:10px 20px 40px 30px;
}
{% endhighlight %}

### Ein Wert für alle Seiten

{% highlight css %}	

p { 
  margin:10px;
}
{% endhighlight %}

### Ein Wert für oben und unten und ein Wert für links und rechts 
margin: top und bottom / left und right

{% highlight css %}	
p { 
  margin:10px 20px;
}
{% endhighlight %}

### Ein Wert für oben, einer für links und rechts und einer für unten 
margin: top / left und right / bottom

{% highlight css %}		
p { 
  margin:10px 30px 20px;
}
{% endhighlight %}


## padding (Innenabstand)

padding gibt den Innenabstand eines Elementes an. Der Abstand kann relativ oder absolut angegeben werden und ausschließlich mit positiven Werten.

### Jede Seite einzeln definieren

{% highlight css %}			
p { 
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
}
{% endhighlight %}

### Jede Seite einzeln definieren
Kurzschreibweise in der Reihenfolge: top / right / bottom / left

{% highlight css %}			
p { 
  padding:10px 20px 40px 30px;
}
{% endhighlight %}

### Ein Wert für alle Seiten

	
{% highlight css %}			
p { 
  padding:10px;
}
{% endhighlight %}

### Ein Wert für oben und unten und ein Wert für links und rechts 
padding: top und bottom / left und right

	
{% highlight css %}			
p { 
  padding:10px 20px;
}
{% endhighlight %}

### Ein Wert für oben, einer für links und rechts und einer für unten
padding: top / left und right / bottom)

	
{% highlight css %}			
p { 
  padding:10px 30px 20px;
}
{% endhighlight %}