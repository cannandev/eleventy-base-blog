---
title: Building an article list with nunjucks
description: This is how I built the reusable list of posts on my blog.
date: 2021-05-03
draft: true
tags:
  - eleventy
  - nunjucks
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

Turns out, using Javascript data files are faster than setting this data in front matter. So let's move this setting to `tutorials/tutorials.11tydata.js`. I'll break down each line of this file.
```
<code>some</code>
```
## 4. Getting categories
Now that we've set the parent of each post, we can print the values in our template.
```
<span>{{ post.data.parent }}</span>
```

## 5. Getting read times
Eleventy makes this so easy. Check out my post on how to do this the easy way and the hard way.


#### References
* [Javascript Data Files](https://www.11ty.dev/docs/data-js/#javascript-data-files)
* [Data Cascade](https://www.11ty.dev/docs/data-cascade/)
