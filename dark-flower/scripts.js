/* DuckDuckGo.ai and VSCode assisted the author (me, Jenny) in the building of this javascript */

// wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("toggleDarkMode");    // select the button that will toggle dark mode
    const root = document.getElementById("flowerbkgd");        // path to the alternate image for dark mode
    const body = document.body;              // path to the original image for light mode

    // paths for normal and dark background images
    const normalBg = "/dark-flower/rhodo1.jpg";     // path to the normal image for light mode
    const darkBg = "/dark-flower/rhodo1-dk.jpeg";   // path to the alternate image for dark mode

    // initialize button text based on body's class
    const updateButtonLabel = () => {       // function to update the button label based on the current mode
        if (body.classList.contains("darkMode")) {      // if dark mode is active, set the button label to indicate it can be turned off
            btn.innerHTML = 'Turn <strong>"Dark Mode"</strong> OFF';        // if dark mode is not active, set the button label to indicate it can be turned on
        } else {
            btn.innerHTML = 'Turn <strong>"Dark Mode"</strong> ON';     // if dark mode is active, set the button label to indicate it can be turned off
        }
    };

    btn.addEventListener("click", () => {           // select the image element that will change

        body.classList.toggle("darkMode");          // toggle the dark mode class on the body element to switch between modes

        if (body.classList.contains("darkMode")) {      // if dark mode is active, set the background to the dark image
            root.style.backgroundImage = `url(${darkBg})`;  // change the background image to the dark version
        } else {                // if dark mode is not active, set the background to the normal image
            root.style.backgroundImage = `url(${normalBg})`;        // change the background image back to the normal version
        }
        updateButtonLabel();        // update the button label to reflect the current mode
    });

    // ensure initial state uses correct image
    if (!root.style.backgroundImage) {
        root.style.backgroundImage = `url(${normalBg})`;
    }
    updateButtonLabel();
});
