---
title: A Build Process FTW!
description: After many, many trials and failures, this method has worked for me.
date: 2021-05-01
tags:
  - html
  - css
  - a11y
---

Question I've been asked by newer engineers is, how do you get started? Truth is every engineer has their own process. I prefer one that gets everyone on the team included AND gives high visibility to what I'm working on. I recently tried this on my website redesign, wearing hats of PM, devops, backend, frontend and tester.

## Research
No design necessary. Iterative process of information gathering before you write one line of code. Figure out content. Information infrastructure. Determine tech stack. Goals of site. User research. Who's your audience.

Build stack. Hosting, code repo, Task runners, accessibility checks, automated processes, build pipeline. SSG or database. Style structure (sass/root), templating systems (nunjucks, liquid), react.

Server side Information architecture (more than just labels of things). How pages, posts, data feeds organized. Where will this be hosted? Do we have space? Any upcoming freezes or outages? Do we have access to the boxes? Do we need load balancers? *Back to Devops*. Data sources. Data maintenance. Who will access? What permissions are needed? *Back to Devops*. Tech or non-tech content maintainers? Need CMS? Research what goes with stack and what's comfortable to users. Test. *Research* .Multilanguage? How many? What browser versions need support. Need analytics. *Back to Researcher*. Do you have fonts to support? *Back to designer*. External data support. Are APIs currently maintained? Who to contact which software issues? If they go down, what are the failsafes that this app doesn't go down (or show empty data). *Back to 3rd party support team* Learning new software or skills? Need to bring on new developers? *Talk to product manager to add sufficient time*

[image](Ideation)

## Document Architecture
Don't wait for a full fledged design. Better if work together with designers to create a wireframe or low-fi mockup. Working with a low-fi mockup as your blueprint (see Related article _"Getting developers involved..."_), start laying the foundation---to DOCUMENT. Again, no code (except where needed to test or confirm).

* *Backend Architecture* - database, schemas, json meta data, data types, content types, API calls, software, Classes, plugins, pipeline setup, multi-dev environment (prod, dev, uat), cloud, repos, etc.
* *Frontend Architecture* - API calls, Frameworks, plugins, exports, main methods, component parameters, variables, configs, tests, design systems, CMS fields related to which data, etc. CSS naming methodology (BEM, SMACCS. Choose one and have all your devs stick to it. Add a pipeline check, if possible.)
* *Relational Architecture* - so important and often missed. What parts of the frontend need to talk to the backend and WHEN. Great use of you visual documents to help stakeholders understand these relationships AND accurately estimate enough time to the project timeline. Create a workflow for your "What If Interactions?" (Related Article)

[image](Balsamiq)

## Build structure
Goal is MVP (minimal viable product), as a team, should have decided what that should look like. Truly agile, prioritize which features should launch first for delivery end of first sprint.
*Backend:* working local hello world. commit. pipeline. pass auto tests. Can retrieve/send data packets sucessfully. Troubleshoot.
*Frontend*: Successful Hello world commit to confirm JS/CSS has been compiled, minified. Fetch data is successful. Time to troubleshoot errors. Start with generic layout using accessible landmarks. Keep in mind having an accessible content flow. Build components with semantic HTML elements (no classes yet). Practice navigating your components using the keyboard and address keyboard traps. Use dummy text (lorem ipsum) as placeholders. No images yet. What does the [document outline](related-link) look like so far?
[image]

Once the basic component layouts are complete, it's time for interactions. Here's where you implement your WII research. What happens if I enter text into this field? What if an unauthorized user lands on this page? What happens when a user clicks this button? Even if you're showing dummy data as results, the MVP still shows the workflow (and any necessary tweaks it needs). Links to other pages, navigation, buttons, accordions, modals. Not completely styled, but structure is in place.

## Populate structure
*Backend:* refine, "massage", parse, data. Data constructs. Create methods available to frontend. Pass tests.
*Frontend:* 1) If backend data is ready: start replacing lorem ipsum with actual data from backend. Refine components to be reusable (e.g. same list of data received as a json of 100 items but displayed differently) throught out the application. Latest item in the hero, list of latest 5 items on the homepage, list of 3 most popular items from each category, etc.). If you're repeating code over and over, that's a red flag you can refine it using loops, filters and parameters.
2) If the backend data still isn't ready, keep moving! (A mistake I've made many a time). Use CSS to flesh out your layout into a responsive grid. Test in multiple browsers and devices (should already have your list from the research). Use the CSS naming method you've documented for your team (I prefer BEM). Remember, what is your MVP? Spend time completing the structure of your MVP components first. [Leave refinements last](#refinements-to-leave-last).*
[image]

## Test
You've notice I've mentioned several tests throughout this process. These shouldn't be left for last.
* Developer setup
* CI/CD Pipeline
* Accessibility Automated Checks
* Accessibility Manual Checks
* Responsive design across devices
* Cross browser testing
* Version testing


## Reiterate and Refine
> Research. Document. Build. Populate. Test. Iterate.
After a few iterations of building and populating the structure, backend and frontend should be gelling together like a well oiled machine. (Should be). It's time to test your WII workflows. Are the frontend and backend talking to each other. Can a user navigate through the application successfully?


### Leave Style Refinements last
I know, I know. This is highly controversial, and I'm going to get pushback mainly from designers that want to see pixel perfect representation of their designs and from project managers promised their stakeholders they'd deliver a fancy finished product on XYZ date. Both of these expectations are typical of a waterfall project. But we're in Agile, right?

So to be truly successful as an agile engineer on a SDLC, ask yourself, if we had to a demo a functioning application to the board tomorrow, what would I leave out? The answer is usually:
* Color
* images
* videos
* borders
* animations

So leave these for last. And remember that none of these features should detract from the accessibility of your product. An inclusive product is a great product. (Related articles)
