---
title: "작업목록"
layout: category
permalink: /works
after_footer_scripts:
- /assets/js/category.js
---
{% assign posts = site.categories.work | sort: 'due_date' | reverse %}
{% for post in posts %} 
  {% include archive-single.html type="grid" %} 
{% endfor %}