---
layout: post
title: "Removing newlines from Logging events"
date: 2012-04-13 15:53
comments: true
categories: 
---

I added the [Logging gem](https://github.com/TwP/logging) to a project 
I'm working on, and so far I like it a lot.  It is modelled after 
[log4j](http://logging.apache.org/log4j/)
and, as such, allows you to send logs to syslog (our main usage for it).

One issue that I've run into with using syslog(-ng) as a Rails logger is
that Rails tends to spit out multi-line log events.  Unless you have a 
very new version of syslog-ng, this may cause syslog to interpret each 
new line as a new event.  Unfortunately subsequent lines get written 
with a blank program identification, which can cause filtering rules in
syslog-ng to break.

My solution to this was to monkeypatch the `Logging::LogEvent` with an
Around Alias.  This causes the `data` accessor to return a string with
the newlines substituted with a different delimiter, ` << ` in this 
case.  I added the Around Alias to the end of the `config/logging.rb` 
file:

``` ruby config/logging.rb
# Other config here...

# This is a hack to remove new lines from our log data
module Logging
  class LogEvent
 
    def data_with_stripped_newlines
      self.data_without_stripped_newlines.gsub("\n", " >> ")
    end
    
    alias_method_chain :data, :stripped_newlines

  end
end
```

So far it's working quite nicely.  Any better ways of doing it?  Let me
know!
