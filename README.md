# kyrnen.github.io

## Synopsis
I wanted to take a stab at creating a website for myself--partly because I needed a place to show off my projects, and partly because I have been doing so much web development at my internship that I felt like I could probably make one I would be satisfied with and add more value to it (ie: maybe adding a blog eventually for things I do). I tried a couple of times before using bootstrap, but I didn't end up liking how it felt when I went on the page, so I thought I would try to do it myself from the start.

### Day 1
Tried boostrap and a couple of things and realized it really didn't feel like it was for me. I wanted something more simple, and maybe a little more versatile, so I remade this directory and tried to do it from scratch.

I started with putting my name in the center of the page (inspired by another page that I saw paulkim.io). Then I thought about what I thought would really make the page be something that I liked and what I could do from there. Maybe it's because I'm such a visual person sometimes, but I decided on some animations at this point. I wanted something simple so you weren't just hit with a bunch of icons and directories at once, so I thought a typing animation would be pretty cool. I actually found a couple of examples for it on codepen.io and replicated something like that initially. I added a space in between my name and where the bar was in the animation just to give it some separation.

At this point, the bar kind of flashed next to my name forever. Thinking from a user perspective, it felt like the user was supposed to be waiting for something else to appear afterwards. I felt like the screen needed some resolution, so I went and found some documentation on animation in css to expand on what I had currently and decided that after creating the extra space, the bar would eventually remove itself by fading out and just not appearing again. I added color to it for debugging purposes, but I liked how it looked, and felt like it opened up the option for me to use color on the page so I decided to keep it.

I then looked towards what I would like the directory to look like from there. I knew that the page would have to have at least four items: Something about myself, something about my projects (one of the major reasons for having this site), something for hobbies, and some way for people to either contact me or view my resume. With the fading of the bar at the end, it lead to a couple of decision choices. For one thing, I wanted the website to be a little more minimalistic. Since the page had been going right with the typing animation, it only seemed right that it continue to go right for the directory, however, at the same time, if it continued expanding the directory to the right, I was worried that it would grow cluttered. The page could make another line horizontally across as well, but it felt like an unoriginal idea, so I made the decision to go vertical at this point in time. I pretty much formatted it so that I could do that the next time I worked on it and then left it at that for the day and looked at some icons for the rest of the night. I am currently leaning towards the icons at thenounproject.com. While material.io is a great standard, I felt that it lacked the diversity I would like for my icons. I also found feathericons.com had some nice icons for social media.

### Day 2
I decided on a couple of adjustments. One thing I felt was important about this website was that for recruiters, or anyone who wanted to go to my site, they should easily be able to find things that are important to them. For recruiters, I wanted a project directory and contact for sure (the about me is a bonus). I was thinking of eventually creating a blog summarizing major events in the Dungeons and Dragons campaign that we all played together (have been playing for half a year at this point), and making it broad enough extends the idea that this page is about me and things that I do or like --thus hobbies. I was pretty satisfied with everything...except for the contact button. I felt that in some ways, it could be tedious to click once to enter a page with all my contact information and my resume, and then click again to get what you want. Rather than doing that, I decided it would be better to create a contact bar on the bottom and have the resume as a directory option. The hope is that this way, you will be able to acces my contact information from any page, and you can get to my resume immediatley from the home screen.

I did a couple of layouts of the contact bar and directory bar with filled circles. I liked the vertical look on the directory (for now at least), but I was skeptical about placement for the contact bar. I wanted it to be low profile and out of the way unless you were looking for it. Keeping it all in one row made it fit that role, and placing it in the right corner seemed to keep it out of sight and out of mind. Thinking about the flow of the website, it kind of makes sense, as the typing flow goes to the right followed by a large vertical bar in the center of the page. The user's focus should be directed towards the center, and following the left to right flow (and eventually up and down with animation), they should find the contact bar last.

After laying out the icon locations, the first thing I wanted to do was work on animating the directory icons. I wanted them to fade in kind of in contrast to how the bar faded out, and I decided to have them all fade in at once with a similar color scheme into a light grey. I ended up working with javascript, since it didn't seem like you could start with an invisible icon and end with a filled out one with pure css (I may be wrong). While it did work, I felt like it kind of disrupted the flow of the website. I scrapped the idea for the time being and decided I would attempt a more complicated idea at a later time and moved onto icons.

I found some icons that I felt would be suitable for the aesthetic that I am going for, but I'm getting this nagging sense that they don't quite match. I am leaving them as temporary and will decide what I want to do later (maybe I will make my own if I can't find something I am completely satisfied with). After adding the icons in instead of just having bubbles, I was actually satisfied with the contact bar despite prior skepticism because it was much less intrusive than it had initially seemed (I ended up halving the size of the icons, so that may have played a role).

A new problem that I have run into is that the buttons are too small to click on a phone-sized screen. I have adjusted from px to em, but there were similar results, and adjusting the size depending on the vh (vertical height) did not produce the outcome I was looking for. This will be a problem for tomorrow 

### Day 3
I basically spent time looking up a lot of different examples on codepen.io for the kind of transition I wanted to do. I wanted it to both move to the right and make a curve upwards before landing at the appropriate position--staggered from each other (because why not). I was really looking for a good example of the stagger animation to go with the kind of animation that I had been doing. After going through a couple of different examples, I found something similar to it [here](https://codepen.io/Nekto/pen/GBEGOm). I actually ended up scrapping all of the work that I had done previously towards the animation and started from scratch here (since I already knew how to do animation stuff from **Day 1**), because it just wasn't turning out the way I wanted it to. I learned how to use SASS in a .scss file to make my code more "dynamic". I then realized that you can't just use .scss directly in your code, so I compiled it into a .css file from there and re-implemented the .js animation I had put in previously.

This is a first for me using HTML, CSS, and javaScript altogether, as I had learned it in the past, but never really thought to apply it before. There were a lot of bugs trying to get them all to integrate appropriately (the code worked properly on codepen, but not on github). Just remember that if you're going to animate stuff with a .js script, the script should be placed after the item you are calling in-script has been declared. It will save you a lot of trouble.
