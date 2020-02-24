//function lockchange() {
//
//    if (document.getElementByClassName("nav_locker").src == "closed.png") {
//        document.getElementByClassName("nav_locker").src = "opened.png";
//    } else {
//        document.getElementByClassName("nav_locker").src = "closed.png";
//    }
//}


var projectsnav = document.getElementById('elementBG');
var projects = document.getElementById('img_locker');

elementBG.addEventListener('mouseover', function () {
    img_locker.setAttribute("style", "content: url('opened.png');")
});
elementBG.addEventListener('mouseout', function () {
    img_locker.setAttribute("style", "content: url('closed.png');")
});
elementBG.addEventListener("click", function () {
    img_locker.setAttribute("style", "content: url('opened.png');")
});
elementBG.addEventListener("click", function () {
    elementBG.setAttribute("style", "background: white;")
});
elementBG.addEventListener("mouseover", function () {
    elementBG.setAttribute("style", "background: white;")
});
elementBG.addEventListener('mouseout', function () {
    elementBG.setAttribute("style", "background: lightgray;")
});
