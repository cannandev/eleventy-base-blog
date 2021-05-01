---
title: Creating a Safer User Interface for Allconnect.com Redesign
description: Learn how the UX team redesigned this website and innovated a new platform to make content updates easy and safe.
date: 2018-05-01
tags:
  - drupal
  - architecture
layout: layouts/post.njk
eleventyNavigation:
  title: Creating a Safer User Interface for Allconnect.com Redesign
  order: 1
  parent: Case Studies
---
Allconnect is a free resource that simplifies how you shop for home services. Learn how the UX team redesigned this website and innovated a new platform to make content updates easy and safe!

Overview
Allconnect is a free tool for home service shopping. They provide plans in your area, connecting you and millions of others to the best deals on internet, TV, home security, electricity and more. Allconnect offers customers a convenient single source to compare and connect integrated media, broadband, home protection, energy and green products. Allconnect’s services are available at allconnect.com, through utility and energy companies representing over 50 million households, and via affiliates.

At Allconnect®, we’re all about connecting you and millions of others to the best deals on internet, TV, home security, electricity and more.
Allconnect.com

Allconnect wanted to rebrand their website using UX methods. It was also an opportunity to upgrade their content management software for their “behind the scenes” users — content administrators.

The Challenge
As Senior Web Developer, I focused on discovering the pain points of the existing content management system by interviewing the administrators.

Pain Point #1: Difficult to update content. A great part of allconnect.com’s success is its high ranking in search engines. Content managers needed an easy way of rendering SEO content. I sat with content admins and watched them painfully try to complete their daily tasks. The simple task of copying and pasting text from a Word document became a nightmare as they tried to find the appropriate location in a giant field of HTML code. One missing semi-colon or closing tag and boom! the page failed to render.

Pain Point #2: Difficult to find content. Once the user created content, finding that content page again was another nightmare. The Drupal content listing page was set up to display all pages in a table using pager navigation in the footer . Now, imagine a site with almost 1000 pages in alphabetical order. Administrators wanted a search feature** and a way to sort content by content type.

Pain Point #3: Security Risk. Embedded in the sea of HTML was JavaScript code. This is particularly dangerous and goes against Drupal best practices. These scripts are saved to the Drupal database, leaving the page suceptible to web hacking techniques such as Cross Site Scripting and SQL injections. We had to provide a safe way to add content.

Particularly dangerous are <script> HTML tags. If somebody were to put a script tag into a field or form value somewhere, then they would have introduced external code to your site that would execute for thousands of users.
Drupal.org

The Solution
The UX Director and UX Architect focused on the customers visiting the site; mainly movers in need of home services in their new home. As the Senior Web Developer & Drupal Architect, I focused on building an improved system for the content managers. This included two SEO managers, an SEM expert, and the entire marketing team.

I know a little HTML, but I shouldn’t have to in order to do my job!
Allconnect.com SEO Strategist

My first priority was security. I upgraded the platform to the latest version of Drupal which included many security updates. I also scheduled regular version upgrades with the DevOps team. I made sure that our new PHP templates used drupal filters to sanitize user content.

Allconnect.com homepage - header with admin page labels

Next, I focused on making the administrative interface easy to use without knowledge of HTML, CSS or JavaScript. After all, the point of a CMS is to make creating content easier. So we went through each page template and came up with form fields for content. Those fields would be wrapped around HTML and sanitized on the backend. The UX Architect helped me interview content managers, creating paper prototypes of the admin interface to identify which parts of the page needed content input.

Homepage behind the scenes - header admin page configuration

In addition, on the administrative page index, I installed and configured some Drupal modules to allow an advanced page search. Users could drill down to a page by content type, date, author or title keywords.

Results & Lessons Learned
The new site platform launched in August 2017. The site changes resulted in improved overall site conversion by 10% with four times more online orders. Total customers increased by 27% and gross revenue by 40%. I learned user research methodologies such as paper prototyping and A/B Tests with Google Optimize and Adobe Target.

An important lesson I learned was Content Managers are users too! They should be interviewed and participate in usability testing to isolate which content requires user input. It makes the user feel like they have control over the look and feel of the page without knowing any code. It also makes the developer know the user input is secure and will not risk site resources.

Months later, Allconnect was bought out by another company. The Drupal administrative interface was kept long after I left, but was eventually replaced with a different CMS. However, I’m immenseley proud of the platform we built. We used UX principles to champion often overlooked users.
