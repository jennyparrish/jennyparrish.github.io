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
        clickNav(false);
    });

    // handles to all topline nav items
    let allMenus = document.querySelectorAll("nav > ul > li");
    for (const eachMenu of allMenus) {
        // loop through collection of handles individually
        eachMenu.addEventListener("click", function(e) {
            let wasClicked = eachMenu.classList.contains("clicked");
            let allMenus2 = document.querySelectorAll("nav > ul > li");
            for (const eachMenu2 of allMenus2) {
                eachMenu2.classList.remove("clicked");
            }
            if (!wasClicked) {
                eachMenu.classList.add("clicked");      // if this is newly clicked, add click class back
            }
        });
    }


    // close nav is user clicks outside of nav
    document.querySelector("html").addEventListener("click", function(e) {
        if ( !e.target.closest("nav") && document.querySelector("nav").classList.contains("clicked") ) {
            clickNav(true);
        }
    });

});
