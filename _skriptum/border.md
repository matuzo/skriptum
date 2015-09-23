---
layout: skriptum
title: Rahmen
permalink: /htmlcss/border/
---

## Rahmen

### border-width (Rahmenbreite)

border-width definiert die Stärke des Rahmens. Sie muss in positiven und kann in absoluten oder relativen Werte angegeben werden. Um Rahmen zu sehen muss zumindest auch border-style definiert werden.

#### Jede Seite einzeln definieren

{% highlight css %}     
p { 
  border-top-width:10px;
  border-right-width:10px;    
  border-bottom-width:10px;
  border-left-width:10px;
}
{% endhighlight %}

#### Ein Wert für alle Seiten
 
{% highlight css %}      
p { 
  border-width:10px;
}
{% endhighlight %}

Alle weiteren Kurzschreibweisen funktionieren genauso wie bei <a href="{{site.baseurl}}htmlcss/boxmodell/#margin-aussenabstand">margin</a> oder <a href="{{site.baseurl}}htmlcss/boxmodell/#padding-innenabstand">padding</a>

### border-color (Rahmenfarbe)

Mit border-color kann die Farbe eines Rahmens definiert werden. Um Rahmen zu sehen muss zumindest auch border-width und border-style definiert werden.

#### Jede Seite einzeln definieren

{% highlight css %}      
p { 
  border-top-color:#FF0000;
  border-right-color:#00FFFF; 
  border-bottom-color:#0000FF;
  border-left-color:#00FF00;
}
{% endhighlight %}

#### Ein Wert für alle Seiten

{% highlight css %}      
  
p { 
  border-color:#FF0000;
}
{% endhighlight %}

Alle weiteren Kurzschreibweisen funktionieren genauso wie bei <a href="{{site.baseurl}}htmlcss/boxmodell/#margin-aussenabstand">margin</a> oder <a href="{{site.baseurl}}htmlcss/boxmodell/#padding-innenabstand">padding</a>

### border-style (Rahmenstil)

Mit border-style lässt sich die Art des Rahmens festlegen

#### Jede Seite einzeln definieren

{% highlight css %}      
p { 
  border-top-style:solid;
  border-right-style:groove;  
  border-bottom-style:dotted;
  border-left-style:dashed;
}
{% endhighlight %}

Alle weiteren Kurzschreibweisen funktionieren genauso wie bei <a href="{{site.baseurl}}htmlcss/boxmodell/#border-width-rahmenbreite">border-width</a>

#### Mögliche Werte

**none** (Standardwert) - Kein Rahmen

**solid** - Durchgehener Rahmen

**dashed** - Gestrichelter Rahmen

**dotted** - Gepunkteter Rahmen

**double** - Rahmen mit doppelter Linie

**groove, ridge, inset, outset** - „3D-Rahmen“

### border (Kurzschreibweise)

Die Rahmeneigenschaften lassen sich auch zusammenfassen.

border-width / border-style / border-color

#### Rahmen für alle Seiten

{% highlight css %}
p { 
  border:1px solid #FF0000;
}
{% endhighlight %}

#### Rahmen für einzelne Seiten
  
{% highlight css %}
p { 
  border-top:3px dashed #FF0000;
}
{% endhighlight %}

### border-radius

Mit `border-radius` kann man die Ecken eines Elements abrunden.

[Live-Beispiele](http://codepen.io/matuzo/pen/yYabeK?editors=110)

#### Ein Wert für alle Seiten

{% highlight css %}
div { 
  border-radius: 20px;
}
{% endhighlight %}

#### Zwei Werte

top-left und bottom-right / top-right und bottom-left

{% highlight css %}
div { 
  border-radius: 20px 10px;
}
{% endhighlight %}

#### Drei Werte

top-left / top-right und bottom-left / bottom-right

{% highlight css %}
div { 
  border-radius: 20px 40px 10px;
}
{% endhighlight %}

#### Vier Werte

top-left / top-right / bottom-right / bottom-left

{% highlight css %}
div { 
  border-radius: 20px 40px 10px 5px;
}
{% endhighlight %}

#### Jede Seite einzeln

{% highlight css %}
div { 
  border-top-left-radius: 20px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 5px;
}
{% endhighlight %}

#### Unterschiedliche Radien horizontal und vertikal
  
{% highlight css %}
div { 
  border-radius: 20px/50px;
}

div { 
  border-radius: 20px 30px 10px 8px/ 90px 5px 50px 20px;
}
{% endhighlight %}  

#### Kreise und Ellipsen

Man kann auch Prozentwerte angeben. Das ist speziell sehr brauchbar, wenn man Kreise und Ellipsen erzeugen will.

{% highlight css %}
div { 
  border-radius: 50%;
}
{% endhighlight %}

[Live-Beispiele](http://codepen.io/matuzo/pen/yYabeK?editors=110)