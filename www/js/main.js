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
   break;
  }
}

let photolist     = ["img/cloth/fuku.jpg","img/cloth/item2.jpg","img/cloth/JP-845_093.jpg","img/cloth/Screenshot_20190713_120603.jpg","img/cloth/doraemon.jpg","img/cloth/beruto.jpg","img/cloth/hukurou.jpg","img/cloth/kujo.jpg","img/cloth/kutu.jpg","img/cloth/suka-to.jpg","img/cloth/zubon.jpg"];
let placelist     = ["リビング","玄関","クローゼット","ベッドの下","床下収納","寝室","リビング","靴箱","収納","たんすの二段目","たんすの三段目"];
let washlist      = ["洗濯機使用不可","洗濯機使用可能","洗濯機使用不可","洗濯機使用可能","洗濯機使用不可","洗濯機使用可能","洗濯機使用不可","洗濯機使用可能","洗濯機使用不可","洗濯機使用可能","洗濯機使用不可"];
let attentionlist = ["なし","なし","なし","なし","なし","なし","なし","なし","なし","なし","なし"];
let seasonlist    = ["春","夏","秋","冬","春","夏","秋","冬","春","夏","秋"];
let genrelist     = ["シャツ","トップス","ズボン","靴","パーカー","ベルト","帽子","ジャンパー","靴","スカート","ズボン"];

let registered_clothes = [] ;