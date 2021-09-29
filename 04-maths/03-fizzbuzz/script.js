/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var n100 = [];
    var fizzbizz = ["fizz", "bizz"];
    for(var i=1; i<101; i++){
        
        if(i % 3 === 0 && i % 5 === 0){

            document.getElementById("new").innerHTML += i + "   FizzBuzz<br>";
            console.log(i + 'FizzBizz')
        }
        else if(i % 5 === 0){
            document.getElementById("new").innerHTML += i + "   Buzz <br>";

        }
        else if(i % 3 === 0){
            document.open();
            document.write("<p>i + 'FizzBizz'</p>");
            document.close();
            document.getElementById("new").innerHTML += i + "   Fizz <br>";
        }
        else{
            document.open();
            document.write("<p>i</p>");
            document.close();
            document.getElementById("new").innerHTML += i + "   <br>";
        }



    }

})();
