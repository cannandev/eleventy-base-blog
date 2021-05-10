---
title: A Build Process FTW!
description: After many, many trials and failures, this method has worked for me.
date: 2021-05-01
draft: true
tags:
  - html
  - css
  - a11y
  - process
---

Question I've been asked by newer engineers is, how do you get started? Truth is every engineer has their own process. I prefer one that gets everyone on the team included AND gives high visibility to what I'm working on. I recently tried this on my website redesign, wearing hats of PM, devops, backend, frontend and tester.

## Research

No design necessary. Iterative process of information gathering before you write one line of code. Figure out content. Information infrastructure. Determine tech stack. Goals of site. User research. Who's your audience.

Build stack. Hosting, code repo, Task runners, accessibility checks, automated processes, build pipeline. SSG or database. Style structure (sass/root), templating systems (nunjucks, liquid), react.

Server side Information architecture (more than just labels of things). How pages, posts, data feeds organized. Where will this be hosted? Do we have space? Any upcoming freezes or outages? Do we have access to the boxes? Do we need load balancers? *Back to Devops*. Data sources. Data maintenance. Who will access? What permissions are needed? *Back to Devops*. Tech or non-tech content maintainers? Need CMS? Research what goes with stack and what's comfortable to users. Test. *Research* .Multilanguage? How many? What browser versions need support. Need analytics. *Back to Researcher*. Do you have fonts to support? *Back to designer*. External data support. Are APIs currently maintained? Who to contact which software issues? If they go down, what are the failsafes that this app doesn't go down (or show empty data). *Back to 3rd party support team* Learning new software or skills? Need to bring on new developers? *Talk to product manager to add sufficient time*

What type of testing do you want to cover? What helps is knowing 1) what technical stack your platform is running on already. The more you deviate from your platform - the more maintenance. The other consideration is 2) what does your team already know.  The more you deviate from what your team knows, the more training time the product owner/project manager needs to add.

* Developer setup
* CI/CD Pipeline, Github Actions
* Asset bundler/minifier (js, css, images)
* Accessibility Automated Checks
* Accessibility Manual Checks - accessibility insights - team exercise.
* Responsive design across devices
* Cross browser testing
* Version testing
* Choice of testing -> E2E, unit, snapshots

[image](Ideation)

## Document Architecture

Don't wait for a full fledged design. Better if work together with designers to create a wireframe or low-fi mockup. Working with a low-fi mockup as your blueprint (see Related article _"Getting developers involved..."_), start laying the foundation---to DOCUMENT. Again, no code (except where needed to test or confirm). Like a map you can always refer to, not set in stone, keep improving/adding with every sprint.

* *Backend Architecture* - database, schemas, json meta data, data types, content types, API calls, software, Classes, plugins, pipeline setup, multi-dev environment (prod, dev, uat), cloud, repos, etc. What data format should be returned to frontend? json, yaml, objects, arrays, etc. How to handle nested data? How can you avoid the frontend having to loop a hundred times into deeply nested data?

* *Local development workflow* - Remember the testing research you do? Now's the time to make those decisions and document them. pa11y, axe, lighthouse, image tinifiers, performance tools, plain language checks, url-testers, dead-links. What tools do you plan to implement for local development? When will they run? adhoc, on build remote, on commit, on pull request?

* *Frontend Architecture* - API calls, Frameworks, plugins, exports, main methods, component parameters, variables, configs, tests, design systems, CMS fields related to which data, etc. CSS naming methodology (BEM, SMACCS. Choose one and have all your devs stick to it. Add a pipeline check, if possible.)

* *Relational data* - so important and often missed. What parts of the frontend need to talk to the backend and WHEN. Great use of you visual documents to help stakeholders understand these relationships AND accurately estimate enough time to the project timeline. Create a workflow for your "What If Interactions?" (Related Article)

* *Component Architecture* - See an example for [this site](/docs/components.md)

[image](Balsamiq)

## Build - structure

Goal is MVP (minimal viable product), as a team, should have decided what that should look like. Truly agile, prioritize which features should launch first for delivery end of first sprint.

*Backend:* working local hello world. commit. pipeline. pass auto tests. Can retrieve/send data packets sucessfully from API endpoints. Roles, permissions to access. Troubleshoot. Rememeber your architectural documentation that decided what data format should be returned to frontend? Now's the time to build that. Remember all the testing tools we need to incorporate for local development and pipeline checks? Now's the time to implement that.

*Frontend*: Successful Hello world commit to confirm JS/CSS has been compiled, minified. Fetch data is successful. Time to troubleshoot errors.

1. Landmarks. Start with generic layout using accessible landmarks. Keep in mind having an accessible content flow.

2. Break up those landmarks into components usable across screens. Use semantic HTML5 elements (no classes yet). Practice navigating your components using the keyboard and address keyboard traps. Use dummy text (lorem ipsum) as placeholders. No images yet. What does the [document outline](related-link) look like so far?

> Warning: Don't get caught up in the design details at this point. Remember, your trying to get these components into MVP readiness asap. Tailwind CSS is a great way to get your components into shape without leaving your HTML code. This let's you focus without worrying about a Sass/CSS workflow. Be careful not to spend too much time on details. [Leave refinements last](#refinements-to-leave-last). Black and white (gray and white) with image placeholders is ok at this point. Focus on accurate dynamic data, responsiveness, fonts, sizing, padding, widths and responsiveness.

[image]

## Build - Populate

*Backend:* refine, "massage", parse, data. Data constructs. Create methods available in frontend to call data from endpoint. Pass tests. Build database schemas, set up fields and relationships. Import content from external sources.

*Frontend:*

1) _If backend data is ready_: start replacing lorem ipsum with actual data from backend. Refine components to be reusable (e.g. same list of data received as a json of 100 items but displayed differently) throught out the application. Latest item in the hero, list of latest 5 items on the homepage, list of 3 most popular items from each category, etc.). If you're repeating code over and over, that's a red flag you can refine it using loops, filters and parameters.
2) _If the backend data still isn't ready_, keep moving! (A mistake I've made many a time). Use semantic HTML5 landmarks and elements to outline your layout. Break out these landmarks into smaller and smaller reusable components. Add parameters to make components and flexible as possible. Most templating languages make this easy by using includes. Component driven development is the foundation of React.

[image]

## Build - Interactions

Once the basic layouts are broken out into reusable and responsive components, it's time for interactions. Here's where you implement your WII research. What happens if I enter text into this field? What if an unauthorized user lands on this page? What happens when a user clicks this button? Even if you're showing dummy data as results, the MVP still shows the workflow (and any necessary tweaks it needs). Links to other pages, navigation, buttons, accordions, modals. Not completely styled, but structure is in place. Javascript (or other). Errors.

## Test

Remember the testing tools we implemented in the build phase? Now you should have stuff to test! So, test! Test in multiple browsers and devices (should already have your list from the research). At this point, you should be using browser plugins or local dev tools on commit to perform accessibility and performance checks. Lighthouse is a browser plugin for this.  (Remember, what is your MVP? Spend time completing the structure of your MVP components first.

## Reiterate and Refine

> Research. Document. Build. Test. Reiterate and Refine.

After a few iterations of building and populating the structure, backend and frontend should be gelling together like a well oiled machine. Keep iterating. Once you have a working product you'd be proud to show stakeholders, incorporate your [refinements](/posts/tutorials/leave-these-style-refinements-for-last).
