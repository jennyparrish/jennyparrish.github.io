let oneItem = document.querySelector("#firstObject");
let twoItem = document.querySelector("#secondObject");

oneItem.aaddEventListener("mouseover", function(e) {
    twoItem.classList.add("gotMoused");  // add class
});

oneItem.addEventListener("mouseout", function(e) {
    twoItem.classList.remove("gotMoused");  // remove class
})