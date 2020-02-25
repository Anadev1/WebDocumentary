//gallery
let theGallery = [ "DSC06397.JPG", "DSC06402.JPG", "DSC06406.JPG",
                 "DSC06395.JPG", "DSC06403.JPG", "DSC06398.JPG" ];

for (i = 0; i < theGallery.length; i++) {
  gallery.innerHTML += '<img src="images/' + theGallery[i] + '"alt="pictures from the store" class="gallery_pics">';
}

var myVideo = document.getElementById("video1");

function startVideo() {
    myVideo.play();
}


myVideo.addEventListener("click", startVideo(myVideo));