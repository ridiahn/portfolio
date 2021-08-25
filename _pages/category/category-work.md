---
title: "Development"
layout: archive
permalink: categories/work
author_profile: true
---
{% assign posts = site.categories.work %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}