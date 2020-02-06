// This is a JavaScript file
const listArrange = () => {
  const list_cloth = document.getElementById("list_cloth");
  document.getElementById("list_cloth").innerHTML = "";
  for (let i= 0;i<photolist.length;i++){
    const new_cloth = document.createElement('a');
    new_cloth.href = "#modal01";
    new_cloth.className = "list_modal_open";
    new_cloth.innerHTML = '<li>'+'<img src="' + photolist[i] + '"class="list_img">'+'</li>';
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

$(function(){
 //$(document).on("click", ".add-btn", function () {
// モーダルウィンドウが開くときの処理    
$(document).on("click",".list_modal_open",function(){
      console.log("雨が躍るバスストップ");
    var navClass = $(this).attr("class"),
        href = $(this).attr("href");
            
        $(href).fadeIn();
    $(this).addClass("open");
    return false;
});
 
// モーダルウィンドウが閉じるときの処理    
$(".modalClose").click(function(){
    $(this).parents(".modal").fadeOut();
    $(".modalOpen").removeClass("open");
    return false;
});  
    
});

const addCloth = () => {
    
}