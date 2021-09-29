/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const el1 =  document.getElementById("op-one");
    const el2 =  document.getElementById("op-two");
    
    document.getElementById("addition").addEventListener("click", function() {
        var x = parseInt(el1.value);
        console.log(x); 
        var y = parseInt(el2.value);
        console.log(y);
        var z = x + y;
        console.log(z);
        document.getElementById("result").innerHTML = z;
    });

    document.getElementById("substraction").addEventListener("click", function() {
        var x = el1.value;
        console.log(x); 
        var y = el2.value;
        console.log(y);
        var z = x - y;
        console.log(z);
        document.getElementById("result").innerHTML = z;
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        var x = el1.value;
        console.log(x); 
        var y = el2.value;
        console.log(y);
        var z = x * y;
        console.log(z);
        document.getElementById("result").innerHTML = z;
    });

    document.getElementById("division").addEventListener("click", function() {
        var x = el1.value;
        console.log(x); 
        var y = el2.value;
        console.log(y);
        var z = x / y;
        console.log(z);
        document.getElementById("result").innerHTML = z;
    });
})();
