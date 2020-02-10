// This is a JavaScript file
const coordArrange = () => {
  document.getElementById("coordArrange").innerHTML ="";
  for(i= 0;i<5;i++) {
    //li
    let coord_li = document.createElement("li");
    coord_li.id = i;
    coord_li.className = "coord_added";
    document.getElementById("coordArrange").appendChild(coord_li);
    //画像
    const img = document.createElement("img");
    img.src = photolist[registered_clothes[i]];
    img.className = "coord_added_img";
    document.getElementById(i).appendChild(img);
    //ボタンとテキスト
    let coord_added_button_text = document.createElement("div");
    coord_added_button_text.id= "j"+i;
    coord_added_button_text.className="coord_added_button_text.id";
    document.getElementById(i).appendChild(coord_added_button_text); 
    //四つのボタンの処理
    const place = document.createElement("button");
    place.id = "coord_added_button_put"+i;
    place.className = "coord_added_button_put";
    place.innerHTML = "場所";
    const adv = document.createElement("button");
    adv.id = "coord_added_button_adv"+i;
    adv.className = "coord_added_button_adv";
    adv.innerHTML = "注意";
    const edi = document.createElement("button");
    edi.className = "coord_added_button_edi";
    edi.innerHTML = "編集";
    const del = document.createElement("button");
    del.className = "coord_added_button_del";
    del.innerHTML = "削除";
    const p = document.createElement("p");
    p.id = "coord_add_text"+i;
    p.className ="coord_added_text";
    p.innerHTML= placelist[registered_clothes[i]];
    //ボタンとテキストのappendchild
    document.getElementById("j"+i).appendChild(place);
    document.getElementById("j"+i).appendChild(adv);
    document.getElementById("j"+i).appendChild(edi);
    document.getElementById("j"+i).appendChild(del);
    document.getElementById("j"+i).appendChild(p);
    //addEventListerはappendChild(p)より後に作る関数で作らないとiが常に最大値になる
    create_coord_button(i);
  }  
}

//コードページのボタンを作る
const create_coord_button = (i) => {
  document.getElementById("coord_added_button_put"+i).addEventListener('touchend',function(p){
      document.getElementById("coord_add_text"+i).innerHTML = placelist[registered_clothes[i]];
    },false);
  document.getElementById("coord_added_button_adv"+i).addEventListener('touchend',function(p){
      document.getElementById("coord_add_text"+i).innerHTML = attentionlist[registered_clothes[i]];
    },false);
}

//コードページのボタン処理
const change_place_text = (i) => {
  console.log("coord_add_text"+i);
  document.getElementById("coord_add_text"+i).innerHTML = placelist[registered_clothes[i]];
}

const change_adv_text = (i) => {
  document.getElementById("coord_add_text"+i).innerHTML = attentionlist[registered_clothes[i]];
}