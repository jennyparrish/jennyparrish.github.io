// JS for responsive nav menu

// function to hide/show menu items
function clickNav(bodyClicked) {
    let burgerWasClicked = document.querySelector("nav").classList.contains("clicked");
    document.querySelector("nav").classList.toggle("clicked");

    // remove menu .clicked if burger is closed
    if (burgerWasClicked || bodyClicked) {
        let allMenus = document.querySelectorAll("nav > ul > li");
        for (const eachMenu of allMenus) {
            eachMenu.classList.remove("clicked");
        }
    }
}
// wait until DOM is loaded before we can start adding event listeners
document.addEventListener("DOMContentLoaded", function() {

    // respond to clicks on burger icon
    document.querySelector("#navBurger").addEventListener("click", function(e){
        document.querySelector("nav").classList.toggle("clicked");
    });
});