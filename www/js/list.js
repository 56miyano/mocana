// This is a JavaScript file
const listArrange = () => {
  for (let i= 0;photolist.length;i++){
    const list_cloth = document.getElementById("list_cloth");
    const new_cloth = document.createElement('li');
    new_cloth.innerHTML = '<img src="' + photolist[i] + '"class="list_img">';
    list_cloth.appendChild(new_cloth);
  }
}
