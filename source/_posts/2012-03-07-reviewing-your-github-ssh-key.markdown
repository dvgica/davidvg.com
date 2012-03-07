---
layout: post
title: "Reviewing your GitHub SSH key"
date: 2012-03-07 13:26
comments: true
categories: 
---

Those of you living in a cave may not have heard that someone recently 
hacked GitHub to prove a point about default Rails mass-assignment settings.
You can read all the gory details [here](https://github.com/blog/1068-public-key-security-vulnerability-and-mitigation)
and [here](https://github.com/blog/1069-responsible-disclosure-policy).

At any rate, GitHub sent an email notifying everyone that they are performing
an SSH key audit, and included a link to the audit page.

The page shows the SSH key's fingerprint, but neglects to explain what it is
or how to check the fingerprint on your own system.  Here's what you need to do:

 * Locate your public SSH key, it's likely at ~/.ssh/id\_rsa.pub
 * Run this command (or similar, depending on your system) to get the key fingerprint, replacing id\_rsa.pub with the location of your public key:
 
``` bash
 ssh-keygen -lf id_rsa.pub
```
 
  * If the printed key fingerprint matches the fingerprint on GitHub, you're good!  If not... follow their instructions and hope for the best :-P.

 
