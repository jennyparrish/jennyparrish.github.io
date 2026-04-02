// wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", function() {

    const darkModeButton = document.querySelector("#toggleDarkMode");
    const flowerImage = document.querySelector("#flowerbkgd");

    // alternate image on click
    const darkModeImage = '/rhododendron/rhodo1-dark.jpeg';

    darkModeButton.addEventListener("click", function(e){
        // toggle dark mode class on body
        document.body.classList.toggle("darkMode");
        // Swap to a single alternate image

        // update button text to reflect state
        const isDark = document.body.classList.contains("darkMode");
        darkModeButton.innerHTML = `Turn <strong>"Dark Mode"</strong> ${isDark ? 'OFF' : 'ON'}`;
    });

    });
//    let oneItem = document.querySelector("#firstObject");
//    let twoItem = document.querySelector("#secondObject");

//    oneItem.addEventListener("mouseover", function (e) {
//        twoItem.classList.add("gotClicked");  // add class
//    });

//    oneItem.addEventListener("mouseout", function (e) {
//        twoItem.classList.remove("gotMoused");  // remove class
//    });

//});