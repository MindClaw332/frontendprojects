// write your JavaScript here
// var click = document.getElementById("function");
// click.addEventListener




function hamburgerMenu() {
    var links = document.getElementById("mobilelinks");
    var content = document.getElementById("content")
    if (links.style.display === "block") {
        content.style.display = "flex"
        links.style.display = "none"
    } else {
        links.style.display = "block"
        content.style.display = "none"
    }
}