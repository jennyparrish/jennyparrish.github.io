// wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", function() {

    let darkModeButton = document.querySelector("#toggleDarkMode");
    darkModeButton.addEventListener("click", function(e){
        document.body.classList.toggle("darkMode");
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