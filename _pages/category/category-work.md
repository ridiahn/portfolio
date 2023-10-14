---
title: "작업목록"
layout: category-table
permalink: /works
after_footer_scripts:
- /assets/js/category.js
---
{% assign posts = site.categories.work | sort: 'due_date' | reverse %}
{% for post in posts %} 
  {% include archive-table.html type="grid" class="bg_modal" %} 
{% endfor %}