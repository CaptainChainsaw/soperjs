# Soper.js

Soper.js is a simple JavaScript framework/library that reads the contents of an unordered list and randomly places one of the values in the content of another html element (the demo uses a div element) and refreshes the content with the time delay passed to it.  The demo uses famous quotes as content.

[Check out the demo]

# Installation
   - Download the minified file and add it to your project
   - Ensure that jQuery is included in your project
 
# How to use this  
   
1 - First of all add your quotes (or any other text) to the html unordered list like so (this will be hidden when viewing the page.  You may also want to put display: none in your css):
```sh
    <ul id="soper">
      <li>"You can do anything, but not everything." —David Allen</li>
      <li>"The richest man is not he who has the most, but he who needs the least." —Unknown Author</li>
      <li>"You miss 100 percent of the shots you never take." —Wayne Gretzky</li>
      <li>"You must be the change you wish to see in the world." —Gandhi</li>
      <li>"The person who reads too much and uses his brain too little will fall into lazy habits of thinking." —Albert Einstein</li>    
      <li>"Don't ever wrestle with a pig. You’ll both get dirty, but the pig will enjoy it." —Cale Yarborough</li>    
      <li>"Advice is what we ask for when we already know the answer but wish we didn’t." —Erica Jong</li>    
      <li>"The trouble with the rat race is that even if you win, you’re still a rat." —Lily Tomlin</li>    
      <li>"Those who believe in telekinetics, raise my hand." —Kurt Vonnegut</li>    
      <li>"A wise man gets more use from his enemies than a fool from his friends." —Baltasar Gracian</li>    
    </ul>
```

2 - Add the html element that you want the random text value to appear:
```sh
    <div id="quotes"></div>
```

3 -  Include the code within the ready function:
```sh
$(document).ready(function(){
  g$().selectValues('#soper li').randomise().setValue('#quotes').refresh(5000);
});
```


# API:
```sh
    .selectValues(selector)
        This function selects the html element that contains the quotes (or other text).
        
    .randomise()
        This function selects a random value from the values selected in the .selectValues() function.
        
    .setValue(selector)
        This function sets the random value in the html using the selector passed to it.
        
    .refresh(delay)
        This function reruns all the above at the interval passed to it (in ms).  If no param is passed the default is 5 seconds (5000ms).
        
    .log()
       This is a function that you can log output to the console if you like.  It does not chain to the .refresh() function though.
```

Enjoy!

-CaptainChainsaw

   [Check out the demo]: <https://plnkr.co/edit/0bLXLgkKrMlasGuQL62N?p=preview>
   

