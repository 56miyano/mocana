// This is a JavaScript file
const addphoto = (imageURI) =>{
  document.getElementById("addtake").src = imageURI
  document.getElementById("list").style.display="none";
  document.getElementById("coord").style.display="none";
  document.getElementById("details").style.display="none";
  document.getElementById("edit").style.display="inherit";
  }
