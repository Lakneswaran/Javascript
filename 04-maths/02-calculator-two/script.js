/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const el1 =  document.getElementById("op-one");
    const el2 =  document.getElementById("op-two");

    var performOperation = function(operation) {
        switch(operation) {
            case "addition":
                var x = parseInt(el1.value);
                console.log(x); 
                var y = parseInt(el2.value);
                console.log(y);
                var z = x + y;
                console.log(z);
                document.getElementById("result").innerHTML = z;
              break;
            case "substraction":
                var x = el1.value;
                console.log(x); 
                var y = el2.value;
                console.log(y);
                var z = x - y;
                console.log(z);
                document.getElementById("result").innerHTML = z;
              break;
              case "multiplication":
                var x = el1.value;
                console.log(x); 
                var y = el2.value;
                console.log(y);
                var z = x * y;
                console.log(z);
                document.getElementById("result").innerHTML = z;
              break;
              case "division":
                var x = el1.value;
                console.log(x); 
                var y = el2.value;
                console.log(y);
                var z = x / y;
                console.log(z);
                document.getElementById("result").innerHTML = z;
              break;

          }
    };

    Array.from(document.querySelectorAll(".actions button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
