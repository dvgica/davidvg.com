--- 
layout: post
title: Installing the StarCraft 2 Demo on Linux Mint
typo_id: 44
comments: true
---

I'm an infrequent gamer, but occasionally I get bored enough to fire 
something up, generally an RTS of some variety. Today was a rainy 
Sunday, so I figured I would give StarCraft II a try. I don't own the 
game, and didn't intend to buy it without trying it out on Linux, so I 
installed the demo using [Wine](http://www.winehq.org/).

There's a few walk-throughs on the web that I followed to get this 
going, but none of them specifically addressed the demo. If you're 
trying to install the full version of the game, I suspect that 
[PlayOnLinux](http://www.playonlinux.com/) would be easier (see the 
referenced walkthroughs for instructions).  But since PlayOnLinux 
doesn't support the demo, here's what I did.  These instructions are for
Linux Mint, but they should work fine on Ubuntu without modification, or
other distros with a few small changes.

 * To get the audio working correctly, I had to install wine1.3,
   compiled with PulseAudio support (instead of wine1.2 which is in the
   Mint 9 repositories).  I found a PPA for that [here](https://launchpad.net/~c-korn/+archive/ppa).
   If you want, you can just download and install the .deb instead of 
   adding the whole PPA.

 * Get the latest winetricks script:

``` bash
wget http://winezeug.googlecode.com/svn/trunk/winetricks
```

 * Make it executable, and install some extras not included with Wine.
   I'm not sure if all of these are needed, but these installed without 
   error for me:

``` bash
chmod +x winetricks
./winetricks droid fontfix fontsmooth-rgb vcrun2005 allfonts d3dx9 win7
```

 * Some walk-throughs suggest installing gecko for wine, I did that the 
   following way:

``` bash
wget  http://winezeug.googlecode.com/svn/trunk/install-gecko.sh
chmod +x install-gecko.sh 
sudo ./install-gecko.sh
```

 * Configure Wine to use PulseAudio, if necessary:

``` bash
winecfg
```

   Then go to the 'Audio' tab and select the PulseAudio Driver in the 
   Sound Drivers tree.

 * Configure Wine to disable mmdevapi.  In the Libraries tab, under 
   Existing Overrides, you may have mmdevapi listed.  Select it, click 
   Edit, and choose Disabled.  If it's not in the list, some people 
   recommend adding it by finding mmdevapi in the above drop-down and 
   clicking Add, then disabling it as before.

 * Download the demo downloader from 
   [here](https://us.battle.net/account/sc2-demo.html).

 * Run the demo downloader using wine:

``` bash
chmod +x SC2-WingsOfLibertyDemo-enUS-downloader.exe 
wine SC2-WingsOfLibertyDemo-enUS-downloader.exe
```

 * The download is pretty big.  Go play outside :-).

 * When the downloader is complete, it will give you the option to 
  install the demo.  Go ahead and do that.
  
 * The demo installer adds a Desktop icon, and an icon in your Wine 
   menu.  At this point, you are hopefully good to go.  Performance 
   under Wine is not as good as on Windows, so you may have to tweak 
   your graphics settings.

The demo was enjoyable, if a little tame.  I might consider buying the 
game in the unlikely event that I suddenly find myself with a lot of 
free time :-).  For reference, I used the following two sites to put 
these steps together:

 * [http://jeffhoogland.blogspot.com/2010/07/howto-starcraft-2-on-linux-with-wine.html](http://jeffhoogland.blogspot.com/2010/07/howto-starcraft-2-on-linux-with-wine.html)
 * [http://www.retrohive.com/2010/08/20/play-starcraft-ii-linux/](http://www.retrohive.com/2010/08/20/play-starcraft-ii-linux/)
