function readMore(button) {
    var dots = document.getElementsByClassName("dots");
    var moreText = document.getElementsByClassName("more");
    var btnText = document.getElementsByClassName("myBtn");

    if (dots[button].style.display === "none") {
        dots[button].style.display = "inline";
        btnText[button].innerHTML = "Leer más";
        moreText[button].style.display = "none";
    } else {
        dots[button].style.display = "none";
        btnText[button].innerHTML = "Leer menos";
        moreText[button].style.display = "inline";
    }
}