---
layout: project
title: games studies
slug: games-studies
tags: games studies games-studies academic venues conference journals
---


<p>to document the landscape for publishing on game studies, history, theory, mechanics, design etc. </p>
<p>currently separated into sections based on their type...

  {% assign formats = site.data.games_studies | map: "format" | uniq %}
  {% for format in formats %} <a href="#{{ format | downcase | replace: ' ', '-' }}">{{ format | capitalize }}</a>
  {% endfor %}

</p>

<h3 id = "book">books</h3>

{% for item in site.data.games_studies %}
{% if item.format == "book" %}

<h4>{{ item.name }} 
    {% if item.abbreviation %} ({{item.abbreviation}}) {% endif %} </h4>
<p>{{item.notes}}</p>

<ul>
    <li>{{ item.type }} {{ item.format }}    
    {% if item.peer_reviewed %}
        peer reviewed
    {% endif %}
    </li>

    {% if item.focus %}
        <li>covering:  {% for fitem in item.focus %} {{fitem}}; {% endfor %} </li>
    {% endif %}

    {% if item.url %}
    <li><a href = "{{ item.url }}">{{ item.url }}</a></li>
    {% endif %}

    {% if item.apc %}
    <li> apc: {{ item.apc }}</li>
    {% endif %}

    {% if item.impact_factor %}
    <li> impact factor: {{ item.impact_factor }}</li>
    {% endif %}
 
    {% if item.doi %}
    <li> doi: {{ item.doi }}</li>
    {% endif %}

</ul>

{% endif %}
{% endfor %}

<h3 id="journal">journals</h3>


{% for item in site.data.games_studies %}
{% if item.format == "journal" %}

<h4>{{ item.name }} 
    {% if item.abbreviation %} ({{item.abbreviation}}) {% endif %} </h4>
<p>{{item.notes}}</p>

<ul>
    <li>{{ item.type }} {{ item.format }}    
    {% if item.peer_reviewed %}
        peer reviewed
    {% endif %}
    </li>

    {% if item.focus %}
        <li>covering:  {% for fitem in item.focus %} {{fitem}}; {% endfor %} </li>
    {% endif %}

    {% if item.url %}
    <li><a href = "{{ item.url }}">{{ item.url }}</a></li>
    {% endif %}

    {% if item.apc %}
    <li> apc: {{ item.apc }}</li>
    {% endif %}

    {% if item.impact_factor %}
    <li> impact factor: {{ item.impact_factor }}</li>
    {% endif %}
 
    {% if item.doi %}
    <li> doi: {{ item.doi }}</li>
    {% endif %}

</ul>

{% endif %}
{% endfor %}


<h3 id="conference">conferences</h3>

{% for item in site.data.games_studies %}
{% if item.format == "conference" %}

<h4>{{ item.name }} 
    {% if item.abbreviation %} ({{item.abbreviation}}) {% endif %} </h4>
<p>{{item.notes}}</p>


<ul>
    <li>{{ item.type }} {{ item.format }}    
    {% if item.peer_reviewed %}
        peer reviewed
    {% endif %}
    </li>

    {% if item.focus %}
        <li>covering:  {% for fitem in item.focus %} {{fitem}}; {% endfor %} </li>
    {% endif %}

    {% if item.url %}
    <li><a href = "{{ item.url }}">{{ item.url }}</a></li>
    {% endif %}
</ul>

{% endif %}
{% endfor %}


