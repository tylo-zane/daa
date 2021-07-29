(function() {
    "use strict";
 
    window.addEventListener("load", initialize);
 
   /**
    * Initializes the webpage by adding event listeners to each node.
    */
    function initialize() {
        let node = document.querySelectorAll(".node");
        for (let i = 0; i < node.length; i++) {
            node[i].onclick = function() {
              this.classList.toggle('checked');
            }
          }
    }
 
 
 })();
 