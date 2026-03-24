// JS for responsive nav menu

// wait until DOM is loaded before we can start adding event listeners
document.addEventListener("DOMContentLoaded", function() {

    // respond to clicks on burger icon
    document.querySelector("navBurger").addEventListener("click", function(e){
        document.querySelector("nav").classList.toggle("clicked");
    });
});