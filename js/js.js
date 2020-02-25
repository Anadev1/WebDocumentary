window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//gallery
let theGallery = ["DSC06397.JPG", "DSC06402.JPG", "DSC06406.JPG",
                 "DSC06395.JPG", "DSC06403.JPG", "DSC06398.JPG"];
let gal = document.getElementById("gallery");

for (let i = 0; i < theGallery.length; i++) {
    gal.innerHTML += '<img src="images/' +
        theGallery[i] +
        '" alt="pictures from the store" class="gallery_pics">';
}

//videos & audio 

window.addEventListener("scroll", function () { 

    var mySound1 = document.getElementById("myaudio1");
    var mySound2 = document.getElementById("myaudio2");
    var sound1 = document.getElementById("sound1");
    var sound2 = document.getElementById("sound2");
    var vid = document.getElementById("video1");
    var vid2 = document.getElementById("video2");
    

    vid.muted = true;
    vid2.muted = true;


    if (elFllVsbl(sound1)) {
        if (!(mySound1.curentTime > 0)) {
            mySound1.play();
        }

    } else {
        mySound1.pause();
        mySound1.currentTime = 0;
    }
    
    if (elFllVsbl(sound2)) {
        if (!(mySound2.curentTime > 0)) {
            mySound2.play();
        }

    } else {
        mySound2.pause();
        mySound2.currentTime = 0;
    }
    

    if (elFllVsbl(vid)) {
        if (!(vid.curentTime >= 0)) {
            vid.play();
        }

    } else {
        vid.pause();
        vid.currentTime = 0;
    }

    if (elFllVsbl(vid2)) {
        if (!(vid2.curentTime >= 0)) {
            vid2.play();
        }

    } else {
        vid2.pause();
        vid2.currentTime = 0;
    }

})


function elFllVsbl(el) {
    return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}

//home
var elementBGhome = document.getElementById('elementBGhome');
var img_locker_home = document.getElementById('img_locker_home');
var home = document.getElementById('mainvideo_container');

elementBGhome.addEventListener('mouseover', function () {
    img_locker_home.setAttribute("style", "content: url('../media/opened.png');")
});
elementBGhome.addEventListener('mouseover', function () {
    elementBGhome.setAttribute("style", "background: white;");
});
elementBGhome.addEventListener('mouseout', function () {
    img_locker_home.setAttribute("style", "content: url('../media/closed.png');")
});
elementBGhome.addEventListener('mouseout', function () {
    elementBGhome.setAttribute("style", "background: lightgray;")
});
elementBGhome.addEventListener("click", function () {
    img_locker_home.setAttribute("style", "content: url('../media/opened.png');")
});
elementBGhome.addEventListener("click", function () {
    elementBGhome.setAttribute("style", "background: white;")
});
home.addEventListener("mouseover", function () {
    elementBGhome.setAttribute("style", "background: white;")
});
home.addEventListener("mouseover", function () {
    img_locker_home.setAttribute("style", "content: url('../media/opened.png');")
});
home.addEventListener('mouseout', function () {
    elementBGhome.setAttribute("style", "background: lightgray;")
});
home.addEventListener('mouseout', function () {
    img_locker_home.setAttribute("style", "content: url('../media/closed.png');");
});


//about

var elementBGabout = document.getElementById('elementBGabout');
var img_locker_about = document.getElementById('img_locker_about');
var about = document.getElementById('about');

elementBGabout.addEventListener('mouseover', function () {
    img_locker_about.setAttribute("style", "content: url('../media/opened.png');");
    elementBGabout.setAttribute("style", "background: white;");
});
elementBGabout.addEventListener('mouseout', function () {
    img_locker_about.setAttribute("style", "content: url('../media/closed.png');");
    elementBGabout.setAttribute("style", "background: lightgray;");
});
elementBGabout.addEventListener("click", function () {
    img_locker_about.setAttribute("style", "content: url('../media/opened.png');")
});
elementBGabout.addEventListener("click", function () {
    elementBGabout.setAttribute("style", "background: white;")
});
about.addEventListener("mouseover", function () {
    elementBGabout.setAttribute("style", "background: white;");
    img_locker_about.setAttribute("style", "content: url('../media/opened.png');")
});
about.addEventListener('mouseout', function () {
    elementBGabout.setAttribute("style", "background: lightgray;");
    img_locker_about.setAttribute("style", "content: url('../media/closed.png');");
});

//work

var elementBGwork = document.getElementById('elementBGwork');
var img_locker_work = document.getElementById('img_locker_work');
var work = document.getElementById('videos_section');

elementBGwork.addEventListener('mouseover', function () {
    img_locker_work.setAttribute("style", "content: url('../media/opened.png');");
    elementBGwork.setAttribute("style", "background: white;")
});
elementBGwork.addEventListener('mouseout', function () {
    img_locker_work.setAttribute("style", "content: url('../media/closed.png');");
    elementBGwork.setAttribute("style", "background: lightgray;")
});
elementBGwork.addEventListener("click", function () {
    img_locker_work.setAttribute("style", "content: url('../media/opened.png');");
    elementBGwork.setAttribute("style", "background: white;")
});

work.addEventListener("mouseover", function () {
    img_locker_work.setAttribute("style", "content: url('../media/opened.png');");
    elementBGwork.setAttribute("style", "background: white;")
});
work.addEventListener('mouseout', function () {
    img_locker_work.setAttribute("style", "content: url('../media/closed.png');");
    elementBGwork.setAttribute("style", "background: lightgray;")
});



//gallery

var elementBGgallery = document.getElementById('elementBGgallery');
var img_locker_gallery = document.getElementById('img_locker_gallery');
var gallery = document.getElementById('gallery_container');

elementBGgallery.addEventListener('mouseover', function () {
    img_locker_gallery.setAttribute("style", "content: url('../media/opened.png');");
    elementBGgallery.setAttribute("style", "background: white;")
});
elementBGgallery.addEventListener('mouseout', function () {
    img_locker_gallery.setAttribute("style", "content: url('../media/closed.png');");
    elementBGgallery.setAttribute("style", "background: lightgray;")
});
elementBGgallery.addEventListener("click", function () {
    img_locker_gallery.setAttribute("style", "content: url('../media/opened.png');");
    elementBGgallery.setAttribute("style", "background: white;")
});

gallery.addEventListener("mouseover", function () {
    img_locker_gallery.setAttribute("style", "content: url('../media/opened.png');");
    elementBGgallery.setAttribute("style", "background: white;")
});
gallery.addEventListener('mouseout', function () {
    img_locker_gallery.setAttribute("style", "content: url('../media/closed.png');");
    elementBGgallery.setAttribute("style", "background: lightgray;")
});

//contact

var elementBGcontact = document.getElementById('elementBGcontact');
var img_locker_contact = document.getElementById('img_locker_contact');
var contact = document.getElementById('contact');

elementBGcontact.addEventListener('mouseover', function () {
    img_locker_contact.setAttribute("style", "content: url('../media/opened.png');");
    elementBGcontact.setAttribute("style", "background: white;")
});
elementBGcontact.addEventListener('mouseout', function () {
    img_locker_contact.setAttribute("style", "content: url('../media/closed.png');");
    elementBGcontact.setAttribute("style", "background: lightgray;")
});
elementBGcontact.addEventListener("click", function () {
    img_locker_contact.setAttribute("style", "content: url('../media/opened.png');");
    elementBGcontact.setAttribute("style", "background: white;")
});

contact.addEventListener("mouseover", function () {
    img_locker_contact.setAttribute("style", "content: url('../media/opened.png');");
    elementBGcontact.setAttribute("style", "background: white;")
});
contact.addEventListener('mouseout', function () {
    img_locker_contact.setAttribute("style", "content: url('../media/closed.png');");
    elementBGcontact.setAttribute("style", "background: lightgray;")
});

