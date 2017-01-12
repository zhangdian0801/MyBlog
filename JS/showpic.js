function showPic(whichpic){
      var source = whichpic.getAttribute("href");
      var place = document.getElementById("place");
      place.setAttribute("src",source);
    }

var place = document.createElement("img");
place.setAttribute("id","place")
place.setAttribute("src","images/thumb_IMG_5242_1024.jpg")
place.setAttribute("alt","my image gallery")
var description = document.createElement("p")
description.setAttribute("id","description")
var desctext = document.createTextNode("choose an image")
description.appendChild(desctext);
document.body.appendChild(place);
document.body.appendChild(description);