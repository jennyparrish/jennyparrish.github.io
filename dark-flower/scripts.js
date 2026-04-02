// wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", function() {

    const darkModeButton = document.querySelector("#toggleDarkMode");   // select the button that will toggle dark mode
    const darkModeImage = "/rhododendron/rhodo1-dark.jpeg";         // path to the alternate image for dark mode
    const lightModeImage = "/rhododendron/rhodo1.jpg";              // path to the original image for light mode

    darkModeButton.addEventListener("click", function(e){           // select the image element that will change
        // toggle dark mode class on body
        document.body.classList.toggle("darkMode");
        // alternate image
        flowerImage.style.backgroundImage = `url(${})`;

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