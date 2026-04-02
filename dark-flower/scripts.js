// wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("toggleDarkMode");    // select the button that will toggle dark mode
    const root = document.getElementById("flowerbkgd");        // path to the alternate image for dark mode
    const body = document.body;              // path to the original image for light mode

    // paths for normal and dark background images
    const normalBg = "/dark-flower/rhodo1.jpg";
    const darkBg = "/dark-flower/rhodo1-dark.jpeg";

    // initialize button text based on body's class
    const updateButtonLabel = () => {
        if (body.classList.contains("darkMode")) {
            btn.innerHTML = 'Turn <strong>"Dark Mode"</strong> OFF';
        } else {
            btn.innerHTML = 'Turn <strong>"Dark Mode"</strong> ON';
        }
    };

    btn.addEventListener("click", () => {           // select the image element that will change
        // toggle dark mode class on body
        body.classList.toggle("darkMode");
        // change container background image
        if (body.classList.contains("darkMode")) {
            root.style.backgroundImage = `url(${darkBg})`;
        } else {
            root.style.backgroundImage = `url(${normalBg})`;
        }
        updateButtonLabel();
    });

    // ensure initial state uses correct image
    if (!root.style.backgroundImage) {
        root.style.backgroundImage = `url(${normalBg})`;
    }
    updateButtonLabel();
});
