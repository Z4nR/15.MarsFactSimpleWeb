const listDrop = document.getElementById("list-drop");
listDrop.style.display = "none";

function getData() {
    if (listDrop.style.display === "none") {
        listDrop.style.display = "block";
    } else {
        listDrop.style.display = "none";
    }
}

const topBtn = document.getElementById("top-img")

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () { scrollDown() };

function scrollDown() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}