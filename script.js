function showImages(e, info) {
   var i, content, links;
   content = document.getElementsByClassName("tabcontent");
   for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
   }
   links = document.getElementsByClassName("nav-link");
   for (i = 0; i < links.length; i++) {
      links[i].className = links[i].className.replace(" active", "");
   }
   document.getElementById(info).style.display = "block";
   e.currentTarget.className += " active";
}
