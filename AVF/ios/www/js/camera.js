/*
Patricia Dacosta
AVF 1303
camera.js
March 21, 2013
*/

/* Reset page */

$("#takePic").on("click", function(){
	takePhoto();
	
});

	var picSource;   
    var destinationType; 

    document.addEventListener("deviceready",devIsReady,false);
    
    function devIsReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    function phDataWorks(imageData) {
      var smImg = document.getElementById('imgPop');

      smImg.style.display = 'block';

      smImg.src = "data:image/jpeg;base64," + imageData;
    }

    function picUriWorks(imageURI) {
    
      var lgImg = document.getElementById('lgImg');

      lgImg.style.display = 'block';

      lgImg.src = imageURI;
    }

    function takePhoto() {
      navigator.camera.getPicture(phDataWorks, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }


    function onFail(message) {
      alert('Oops! ' + message);
    }


