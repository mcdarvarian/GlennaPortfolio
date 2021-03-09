Whats up fuckers! Heres how youre gonna update your portfolio!!

Not everything is final and Im still working out some of the details

So in the src folder, there is a folder titled "Contents". Info.js is going to be where all the information is collected

To make a new project, copy Boilerplate.js and change the name to whatever your heart desires. 

    Title is self explanitory to make

    Icon is going to be the main image. Make sure any new images you add are in the "images" folder within "public" and always lead your images with "/images" and then any
        other path you may or may not have. This currently only works with pngs, if you want to make them be pdfs we can maybe make that work but as of now only pngs

    Short is going to be your small descriptions that you put on the links within the lists. Pretty straight forward

    Long is going to be the Whole ass write up and the main thing youre going to work with. As of right now it is set up to be able to simply take what you put in and 
        translate it into html with a bit of my own translation. No need to worry about break tags to try to get the spacing between paragraphs, just hit enter and itll translate for you.
            To make a header, start the line with "HEADD" and everything before the next time you hit enter will be the header
            To make and image simply start the line with "IMG" and the path to the image, for rule of thumb '/image/ANYfOLDERS/IMAGEfILEnAME'
            To make a link, surround the text you want to have with "<a>" Like you would html, but for this link just make the destination url the first thing you have typed  after that tag. Be sure to check the links start with "https:www." cause otherwise things bad happen

Once you have your project's file made, travel back into Info.js. Copy and paste (import proj from './proj';) and change "proj" to the what you've named your file and follow tagging instructions below.

To delete a project, simply remove the import line at the top of Info.js, as well as any references within the tags, You can delete the file as well if you want or not I dont really care. 

Now for tags I understood it as a way to not have to copy and paste a shitton of html every time you make, change, or delete a project. So Instead of tags like tumblr or twitter uses, I made them lists that are going to be easier to manage how things so up while being easy to follow and read. Also dont worry about array initializing javascript is neat like that.

    "Main" is going to be your landing page projects so put your favorites there, dont worry about having more or less than 3 by accident as I'm going to make it so that the landing page only shows 3 or less depending on how much you have in there.

    The next two Tags you can change the name of at your leisure and that will automatically update the header and redirection links. Like "Main" this just takes the list of names but with no cap on how many you can put in

    "All" is the final array and will contain every project you have. At the moment I dont have a way to automatically populate it so be sure to add any projects there as well. 

If you want I can also make it that your resume and About Me also automatically populate but atm they are just hard coded but we can talk about that.

To set up thing to run on glenna's computer:

download node.js
pull the repo
type: "npm i"
type: "npm start" 

then it should run unless it doesnt