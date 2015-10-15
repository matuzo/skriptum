---
layout: skriptum
title: Selektoren
permalink: /htmlcss/selektoren/
---

## Selektoren

Liste der CSS 2.1 Selektoren: <http://www.w3.org/TR/CSS21/selector.html#pattern-matching>

Liste der CSS 3 Selektoren: <http://www.w3.org/TR/css3-selectors/#selectors>

### Attributselektoren

#### E[foo]
Element besitzt Attribut

{% highlight css %}
[src] {
    border: 10px solid red;
}
{% endhighlight %}

#### E[foo="bar"]
Attributwert entspricht mit "bar"

{% highlight css %}
input[type="submit"] {
    border: 1px solid red;
}
{% endhighlight %}

#### E[foo~="bar"]
bar kommt im Attributwert als eigenständiges Wort vor

#### E[foo*="bar"]
bar kommt im Attributwert egal wie und wo vor

#### E[foo^="bar"]
Attributwert beginnt mit "bar"
    
#### E[foo$="bar"]
Attributwert endet mit "bar"

{% highlight css %}
[href$=".html"] {
    text-decoration: none;
}
{% endhighlight %}