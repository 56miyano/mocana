// This is a JavaScript file
const listArrange = () => {
  const list_cloth = document.getElementById("list_cloth");
  document.getElementById("list_cloth").innerHTML = "";
  for (let i= 0;i<photolist.length;i++){
    const new_cloth = document.createElement('li');
    new_cloth.innerHTML = '<img src="' + photolist[i] + '"class="list_img">';
    list_cloth.appendChild(new_cloth);
  }

  const addButton = document.createElement('li');
  addButton.id ="addButton";
  addButton.innerHTML = 
  '<img src="' + '../img/icon/plus.png"'+ 'width="100vw"' +'style="' + 'background-color: #ddddff"' + "; >"
  +  "<br>服を追加";
  //functionで囲まないと動かない
  addButton.addEventListener('touchend',function() {transition(3)},'false');
  list_cloth.appendChild(addButton);
}

const addCloth = () => {
    
}