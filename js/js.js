
//gallery
var theGallery = [ "DSC06397.JPG", "DSC06402.JPG", "DSC06406.JPG",
                 "DSC06395.JPG", "DSC06403.JPG", "DSC06398.JPG" ];

for (i = 0; i < theGallery.length; i++) {
  gallery.innerHTML += '<img src="images/' + theGallery[i] + '"alt="pictures from the store" class="gallery_pics">';
}

//home
var elementBGhome = document.getElementById('elementBGhome');
var img_locker_home = document.getElementById('img_locker_home');
var home = document.getElementById('mainvideo_container');

elementBGhome.addEventListener('mouseover', function () {
    img_locker_home.setAttribute("style", "content: url('../media/opened.svg');")
});
elementBGhome.addEventListener('mouseover', function () {
    elementBGhome.setAttribute("style", "background: white;");
});
elementBGhome.addEventListener('mouseout', function () {
    img_locker_home.setAttribute("style", "content: url('../media/closed.svg');")
});
elementBGhome.addEventListener('mouseout', function () {
    elementBGhome.setAttribute("style", "background: lightgray;")
});
elementBGhome.addEventListener("click", function () {
    img_locker_home.setAttribute("style", "content: url('../media/closed.svg');")
});
elementBGhome.addEventListener("click", function () {
    elementBGhome.setAttribute("style", "background: white;")
});
home.addEventListener("mouseover", function () {
    elementBGhome.setAttribute("style", "background: white;")
});
home.addEventListener("mouseover", function () {
    img_locker_home.setAttribute("style", "content: url('../media/closed.svg');")
});
home.addEventListener('mouseout', function () {
    elementBGhome.setAttribute("style", "background: lightgray;")
});
home.addEventListener('mouseout', function () {
    img_locker_home.setAttribute("style", "content: url('../media/closed.svg');");
});


//about

var elementBGabout = document.getElementById('elementBGabout');
var img_locker_about = document.getElementById('img_locker_about');
var about = document.getElementById('about');

elementBGabout.addEventListener('mouseover', function () {
    img_locker_about.setAttribute("style", "content: url('../media/opened.svg');");
    elementBGabout.setAttribute("style", "background: white;");
});
elementBGabout.addEventListener('mouseout', function () {
    img_locker_about.setAttribute("style", "content: url('../media/closed.svg');");
    elementBGabout.setAttribute("style", "background: lightgray;");
});
elementBGabout.addEventListener("click", function () {
    img_locker_about.setAttribute("style", "content: url('../media/opened.svg');")
});
elementBGabout.addEventListener("click", function () {
    elementBGabout.setAttribute("style", "background: white;")
});
about.addEventListener("mouseover", function () {
    elementBGabout.setAttribute("style", "background: white;");
    img_locker_about.setAttribute("style", "content: url('../media/opened.svg');")
});
about.addEventListener('mouseout', function () {
    elementBGabout.setAttribute("style", "background: lightgray;");
    img_locker_about.setAttribute("style", "content: url('../media/closed.svg');");
});

//work

var elementBGwork = document.getElementById('elementBGwork');
var img_locker_work = document.getElementById('img_locker_work');
var work = document.getElementById('videos_section');

elementBGwork.addEventListener('mouseover', function () {
    img_locker_work.setAttribute("style", "content: url('../media/opened.svg');");
    elementBGwork.setAttribute("style", "background: white;")
});
elementBGwork.addEventListener('mouseout', function () {
    img_locker_work.setAttribute("style", "content: url('../media/closed.svg');");
    elementBGwork.setAttribute("style", "background: lightgray;")
});
elementBGwork.addEventListener("click", function () {
    img_locker_work.setAttribute("style", "content: url('../media/opened.svg');");
    elementBGwork.setAttribute("style", "background: white;")
});

work.addEventListener("mouseover", function () {
    img_locker_work.setAttribute("style", "content: url('../media/opened.svg');");
    elementBGwork.setAttribute("style", "background: white;")
});
work.addEventListener('mouseout', function () {
    img_locker_work.setAttribute("style", "content: url('../media/closed.svg');");
    elementBGwork.setAttribute("style", "background: lightgray;")
});



//gallery

var elementBGgallery = document.getElementById('elementBGgallery');
var img_locker_gallery = document.getElementById('img_locker_gallery');
var gallery = document.getElementById('gallery_container');

elementBGgallery.addEventListener('mouseover', function () {
    img_locker_gallery.setAttribute("style", "content: url('../media/opened.svg');");
    elementBGgallery.setAttribute("style", "background: white;")
});
elementBGgallery.addEventListener('mouseout', function () {
    img_locker_gallery.setAttribute("style", "content: url('../media/closed.svg');");
    elementBGgallery.setAttribute("style", "background: lightgray;")
});
elementBGgallery.addEventListener("click", function () {
    img_locker_gallery.setAttribute("style", "content: url('../media/opened.svg');");
    elementBGgallery.setAttribute("style", "background: white;")
});

gallery.addEventListener("mouseover", function () {
    img_locker_gallery.setAttribute("style", "content: url('../media/opened.svg');");
    elementBGgallery.setAttribute("style", "background: white;")
});
gallery.addEventListener('mouseout', function () {
    img_locker_gallery.setAttribute("style", "content: url('../media/closed.svg');");
    elementBGgallery.setAttribute("style", "background: lightgray;")
});
//contact

var elementBGcontact = document.getElementById('elementBGcontact');
var img_locker_contact = document.getElementById('img_locker_contact');
var contact = document.getElementById('contact');

elementBGcontact.addEventListener('mouseover', function () {
    img_locker_contact.setAttribute("style", "content: url('../media/opened.svg');");
    elementBGcontact.setAttribute("style", "background: white;")
});
elementBGcontact.addEventListener('mouseout', function () {
    img_locker_contact.setAttribute("style", "content: url('../media/closed.svg');");
    elementBGcontact.setAttribute("style", "background: lightgray;")
});
elementBGcontact.addEventListener("click", function () {
    img_locker_contact.setAttribute("style", "content: url('../media/opened.svg');");
    elementBGcontact.setAttribute("style", "background: white;")
});

contact.addEventListener("mouseover", function () {
    img_locker_contact.setAttribute("style", "content: url('../media/opened.svg');");
    elementBGcontact.setAttribute("style", "background: white;")
});
contact.addEventListener('mouseout', function () {
    img_locker_contact.setAttribute("style", "content: url('../media/closed.svg');");
    elementBGcontact.setAttribute("style", "background: lightgray;")
});
