/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const image = document.getElementsByTagName("img")[0];
    const fixedimage = image.getAttribute("src");
    const hoverimage = image.getAttribute("data-hover");

    image.onmouseover = () => { image.src = hoverimage; }
    image.onmouseout = () => { image.src = fixedimage; }


})();
