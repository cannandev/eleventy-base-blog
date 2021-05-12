---
title: Keep your build process grooving by leaving these style refinements last.
description: After many, many trials and failures, this method has worked for me.
date: 2021-05-10
draft: true
tags:
  - workflow
  - css
---


### Leave Style Refinements last

I know, I know. This is highly controversial, and I'm going to get pushback mainly from designers that want to see pixel perfect representation of their designs and from project managers promised their stakeholders they'd deliver a fancy finished product on XYZ date. Both of these expectations are typical of a waterfall project. But we're in Agile, right?

So to be truly successful as an agile engineer on a SDLC, ask yourself, if we had to a demo a functioning application to the board tomorrow, what would I leave out? The answer is usually:

* Foreground Colors
* Background colors
* Interactive states (active, hover, visited)
* Gradients
* images
* videos
* border radius
* animations
* mobile interactions (swipe, tap). Although we try to build mobile firs, these mobile-only interactions should never replace normal interaction. Always provide instructions and defaults. (progressive enhancement)

So leave these for last. And remember that none of these features should detract from the accessibility of your product. An inclusive product is a great product.

### Related articles
