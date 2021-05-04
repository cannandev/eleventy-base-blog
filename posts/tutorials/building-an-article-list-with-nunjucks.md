---
title: Building an article list with nunjucks
description: This is how I built the reusable list of posts on my blog.
date: 2021-05-03
tags:
  - eleventy
  - nunjucks
layout: layouts/post.njk
---

## 1. Use postslist.njk as a starter
from eleventy base blog theme
## 2. Adapt to your article.
Use semantic elements to make sure they're accessible. Not worried about styles or classes yet.

```
{% for post in postslist | reverse %}
  <article class="postlist-item">
		<span>category label</span>
		<h2><a href="{{ post.url | url }}" class="postlist-link">
      {% if post.data.title %}
        {{ post.data.title }}
      {% else %}
        <code>{{ post.url }}</code>
      {% endif %}
    </a></h2>
		<ul>
			<li><time class="postlist-date" datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate }}</time></li>
			<li>111 Shares</li>
			<li>5 min read</li>
		</ul>
		<p>{{post.data.description}}</p>
	</article>
{% endfor %}

```
## 3. Architecture - Article Parent/Child relationships
Organize posts in post folder. To create subdirectories, add index.md in each one with `title` and `parent` keys. These index pages will serve as category pages, listing all articles that belong to that category (parent). Then, create other articles in the subdirectory.
Make sure you add the eleventyNavigation plugin installed. Add a `title`, `parent`, and `eleventyComputed` keys.

```
title: My Page Title
parent: My Parent Key
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    parent: "{{ parent }}"
```

Something I desired in jekyll liquid templates.

To make this global for all posts, I created `posts/posts.eleventyComputed.js`
