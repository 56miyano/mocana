// This is a JavaScript file
const transition = (x) =>{
  switch (x) {
   case x = 0:
   document.getElementById("coord").style.display="inherit";
   document.getElementById("list").style.display="none";
   document.getElementById("details").style.display="none";
   document.getElementById("edit").style.display="none";
   break;
   case x = 1:
   document.getElementById("list").style.display="inherit";
   document.getElementById("coord").style.display="none";
   document.getElementById("details").style.display="none";
   document.getElementById("edit").style.display="none";
   listArrange();
   break;
   case x = 2:
   document.getElementById("list").style.display="none";
   document.getElementById("coord").style.display="none";
   document.getElementById("details").style.display="inherit";
   document.getElementById("edit").style.display="none";
   break;
   case x = 3:
   shoot();
   document.getElementById("list").style.display="none";
   document.getElementById("coord").style.display="none";
   document.getElementById("details").style.display="none";
   document.getElementById("edit").style.display="inherit";
   break;
  }
}

let photolist = [];