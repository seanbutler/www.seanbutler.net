---
layout: project
title: games studies
slug: games-studies
tags: games studies games-studies academic venues conference journals
---


<p>to document the landscape for publishing on game studies, history, theory, mechanics, design etc</p>

<h3>journals</h3>


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


<h3>conferences</h3>

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


