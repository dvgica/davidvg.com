--- 
layout: post
title: Excluding all attributes in options for to_json
typo_id: 51
comments: true
---

Ran across a strange gotcha while working in Rails 3.0 today, having to 
do with the `:only` option to the `to_json` method.

Let's say you have a Widget on which you call `to_json`.  You don't want
_any_ of the widget's attributes to appear in the JSON (maybe you only 
want some method results).  Normally, one would expect this to do the trick:

``` ruby
{:only => [], :methods => [:foo, :bar]}
```

Strangely, this didn't work.  I found I needed to put a nil in the empty
`:only` array, like so: 

``` ruby
{:only => [nil], :methods => [:foo, :bar]}
```

for everything to work as expected.

This might have something to do with the fact that I'm using the json 
gem, but I haven't had the time to dive into that.
