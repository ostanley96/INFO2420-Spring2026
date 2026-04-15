// JavaScript Document
	PrintButton1 = new Image;
	PrintButton2 = new Image;
	logo1 = new Image;
	logo2 = new Image;
if (document.images) {
	PrintButton1.src = "images/print1.png"
	PrintButton2.src = "images/print2.png"
	logo1.src = "Images/logo1.png"
	logo2.src = "Images/logo2.png"
}


		var imgArray = new Array(
			'image1lg.jpg',
			'image2lg.jpg',
			'image3lg.jpg',
			'image4lg.jpg'
			

		);


		var titleArray = new Array(
			'Dog Performing a Trick',
			'Two Dogs',
			'Dog and Two Boys Portrait',
			'Woman and Dog'
			
		);
			
		var imgPath = "Images/FullSize/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
		