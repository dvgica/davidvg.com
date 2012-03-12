--- 
layout: post
title: Converting a Git repo to SVN
typo_id: 54
comments: true
---

I know, usually people go the other way.  This is a bit of special case though: 
a contractor had a project in git which we needed to import on our SVN server. 
The contractor was only able to provide a zip of his repo, for various reasons. 
This seems to preclude the widely used method detailed [here](http://code.google.com/p/support/wiki/ImportingFromGit).
I'm not enough of a git wizard to modify that for our specific situation.

Ironically enough, Mercurial provided the easiest solution.

Install Mercurial and a python subversion lib if you haven't already (I'm using Ubuntu, adjust as necessary):

``` bash
sudo apt-get install mercurial python-subversion
```

Configure Mercurial to use the ConvertExtension.  Add this to ~/.hgrc:

``` bash
[extensions]
hgext.convert=
```

Use Mercurial to covert from git to svn:

``` bash
hg convert --dest-type svn path/to/git/repo path/to/new/svn/repo
```

Now you should have a directory with a full SVN repo, complete with commit history.  
Note that the commit times will not be correct.

If needed, you can move your new SVN repo to another server using the 
excellent instructions [here](http://www.petefreitag.com/item/665.cfm).
