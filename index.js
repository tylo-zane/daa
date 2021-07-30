(function() {
    "use strict";
 
    window.addEventListener("load", initialize);
 
   /**
    * Initializes the webpage by adding event listeners to each node.
    */
    function initialize() {
        let node = document.querySelectorAll(".node");
        for (let i = 0; i < node.length; i++) {
            node[i].addEventListener("click", toggleCheck);
            let box = node[i].querySelector(".check");
            addCheck(box);
          }
    }

    function toggleCheck() {
        this.classList.toggle("checked");
    }

    function addCheck(box) {
        let image = document.createElement("img");
        image.src = "img/check.png";
        image.alt = "A check mark";
        box.appendChild(image);
    }
 
 })();
 