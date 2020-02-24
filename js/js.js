var theGallery = [ "DSC06397.JPG", "DSC06402.JPG", "DSC06406.JPG",
                 "DSC06395.JPG", "DSC06403.JPG", "DSC06398.JPG" ];

for (i = 0; i < theGallery.length; i++) {
	// note the shorthand code below
  gallery.innerHTML += '<img src="images/'
  + theGallery[i]
  + '" alt="pictures from the store">';
}
