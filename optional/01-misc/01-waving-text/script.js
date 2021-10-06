/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


var lettergroup = document.getElementById("target");
var letters = lettergroup.innerText;
    letters = letters.split("");
console.log(letters);



letters.forEach(function(letter, i){
    var wrap = document.createElement("span");
    wrap.innerText = letter;
    wrap.style.position = "relative";
    const fontsize =  Math.floor((Math.random() * 8)+2);
    console.log(fontsize);
    wrap.style.fontSize ="fontsize";
    
    lettergroup.appendChild(wrap);
  })





})();
