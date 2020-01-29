// This is a JavaScript file
const listArrange = () => {
  console.log(photolist);
  document.getElementById("list_cloth").innerHTML = "";
  for (let i= 0;i<photolist.length;i++){
    const list_cloth = document.getElementById("list_cloth");
    console.log(photolist);
    const new_cloth = document.createElement('li');
    new_cloth.innerHTML = '<img src="' + photolist[i] + '"class="list_img">';
    list_cloth.appendChild(new_cloth);
  }
}