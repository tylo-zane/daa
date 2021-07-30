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

   /**
    * Toggles the 'checked' class of the given element.
    */
    function toggleCheck() {
        this.classList.toggle("checked");
    }

   /**
    * Appends a checkmark image to a DOM element.
    * @param {Object} box - the DOM Element to add onto 
    */
    function addCheck(box) {
        let image = document.createElement("img");
        image.src = "img/check.png";
        image.alt = "A check mark";
        box.appendChild(image);
    }
 
 })();
 