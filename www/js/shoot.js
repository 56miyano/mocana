// This is a JavaScript file
const shoot = () => {
    var option = {
        saveToPhotoAlbum: true, //撮影後端末に保存
        correctOrientation: true
    };
    
    //カメラを起動
    navigator.camera.getPicture(onSuccess, onError, option);
        
    //成功時に呼び出されるコールバック関数
    function onSuccess(imageURI){
        document.querySelector("#take").src = imageURI;
        photolist.push(imageURI);
        addphoto(imageURI);
    }
        
    //失敗時に呼び出されるコールバック関数
    function onError(message){
        alert("Error:" + message);
    }
}
