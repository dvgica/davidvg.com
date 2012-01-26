---
layout: post
title: "New city, new site!"
date: 2012-01-26 15:55
comments: true
categories: 
---

So Jo and I moved to Toronto at the beginning of December, and things are going swimmingly.  I'm still working for 
[Spindance](http://www.spindance.com), but now from the comfort of our home study.

Once things settled down a little, I got to work revamping davidvg.com.  Astute readers might note that I did the same thing last year,
[moving from 60cycleCMS to Typo](http://davidvg.com/2011/03/11/60cycle-net-is-now-davidvg-com/), and ask why I'm changing it up again.

One of the bigger problems was trying to host a full-blown Rails site on Dreamhost.  I like Dreamhost for the most part, but they're really
not set up for Rails sites.  I sporadically had random application crashes, and the site was really slow at times.  Installing the right gems
was downright painful, although I imagine using Bundler would mitigate that considerably (I haven't actually tried it).
What I really wanted to do was move davidvg.com to [Heroku](http://www.heroku.com).  I had previously moved [pvanreenen.com](http://pvanreenen.com)
there (as well as porting it from PHP to Sinatra), and it was a very pleasent experience.

Typo is good, but it was really starting to bug me.  It's weighed down by a lot of legacy code (although they're working on that),
and I kept finding bugs that seemed to be un-squashable because of the huge and complex codebase.  There were some missing or non-functional features too,
like decent syntax highlighting and a comments system that played well with others.  That said, I was using an older version,
and I'm sure the newer versions are a lot better, but the thought of trying to upgrade Typo and merge my changes was making me ill.

A little bit of Googling revealed [Octopress](http://octopress.org).  It's a static site generator based on [Jekyll](https://github.com/mojombo/jekyll) that uses a lot of my favourite tools,
like Ruby and [Sinatra](http://www.sinatrarb.com/).  It had all the features I wanted, it was dead-easy to use, and it's a great fit for Heroku.  I was hooked pretty quickly.

So, welcome to the new Heroku-hosted, Octopress-baked version of davidvg.com.  Do let me know if you see any rough edges!

