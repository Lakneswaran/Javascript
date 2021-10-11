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

var letter=[""];


    for(let i=0; i<letters.length; i++){
        lettergroup.innerHTML += `<span>${letters[i]}</span>`;


    }

    for(let i =1; i< letters.length+1;i++){

        var fontsize =  Math.floor((Math.random() * 50)+1);
        console.log(fontsize);

        document.querySelector(`span:nth-child(${i})`).style.fontSize = fontsize+"px";   

    }



})();
