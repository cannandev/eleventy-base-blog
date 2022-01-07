---
layout: "layouts/quote.njk"
title: Ship Quotes - App Outline
description:
---

## User Interface

Pure Javascript for interactions. TailwindCSS styles. Lightning fast and accessible.

## Components

Each component is a modular piece of code that matches a frontend user interface with interactive functionality (see Functions). Being modular allows code to be repeated dynamically within a View (see Views). I like to document each component at the beginning of a project to determine data types, semantic HTML elements, CSS class names, Javascript functions and parameters, and even architecture structures. It helps to build out this list while wireframing the interface. Looking at components in different views, I can gather all fields upfront instead of adding them as I build. For example, knowing that the logged in version displays edit and delete buttons means I'll require an ID on each quote.

### Login bar

* Login button
* Logout button **(logged in view)**
* Add quote button **(logged in view)**

### Title bar

* Title (subject, author or reference)
* Reference type icon **(reference view)**
* Learn more link **(reference view)**

### Sort bar

* Sort by date button
* Sort by reference button
* Sort by author button

### Quote

* ID (auto)
* Date (auto)
* Text
* Author
* Title
* Reference type
* Page number _optional_
* Learn more link _optional_
* ~~Subject tags~~
* **Actions bar**

### Actions bar

* Copy and Paste button
* Edit button **(logged in view)**
* Delete button **(logged in view)**

### Tag cloud

* Subject tags

### Search

* input
* search button
* results

### Add quote form

* Quote Text (textarea)
* Author (text)
* Title (text)
* Reference type (select)
* Page number _optional_ (number)
* Learn more link _optional_ (text)
* ~~image _optional_ (text)~~
* Subject tags (select multiple, text)

## Views

1. Quote list by date (default)
1. Quote list by subject
1. Quote list by author
1. Quote list by reference (display **learn more link**)
1. References list
1. Authors list
1. Login
1. Add quote **(logged in view)**
1. Quote list **(logged in view)**

## Functions

1. Add quote
1. Delete quote
1. Edit quote (inline)
1. Search by word/phrase
1. Filter by subject
1. Filter by reference
1. Filter by author
1. Copy and Paste
1. Sort by date (default)
1. Sort by reference button
1. Sort by author button
1. Login
1. Logout - redirect to homepage

## API

[See Github repository](https://github.com/cannandev/bookclub) for original Node-express-mongodb REST API application to keep track of books.

## Wireframe and Design

[See Balsamiq wireframe](https://balsamiq.cloud/s3z7r7w/puzap2c/r1A23)
