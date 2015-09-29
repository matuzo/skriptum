---
layout: skriptum
title: Schatten
permalink: /htmlcss/schatten/
---

## box-shadow

Schatten in oder um ein Element

{% highlight css %}
body {
  box-shadow: 10px 10px 10px 5px #f00 inset;
}
{% endhighlight %}

box-shadow: [horizontaler Versatz] [vertikaler Versatz] [Kantenhärte (optional)] [Ausbreitung (optional)] [Farbe (optional)];

Zusätzlich kann auch noch der Wert `inset` vergeben werden, wenn es ein innerer Schatten werden soll.

Es können einem Element auch mehrere Schatten zugewiesen werden.

{% highlight css %}
body {
  box-shadow: -10px -10px #f00, 10px 10px #00f;
}
{% endhighlight %}