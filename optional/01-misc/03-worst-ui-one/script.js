/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var target1 = document.getElementById('target');
    var slider1 = document.getElementById('slider');

    slider1.addEventListener("input", () => {
        target1.innerHTML = slider1.value;
    });

})();
