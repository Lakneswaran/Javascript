/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var numbers = [];
    console.log(numbers);

    document.getElementById("run").addEventListener("click", function() {


        for(var i =1;i<11;i++){
            var newnumber = Math.floor(Math.random()*100)+1;
            numbers.push(newnumber);
            var id = "n-" + i
            document.getElementById(id).innerHTML = newnumber;
            console.log(numbers);
        }




        // document.getElementsByClassName("material").innerHTML = numbers;
        
        var small_number = Math.min.apply(Math, numbers);
        document.getElementById('min').innerHTML = small_number;

        console.log(small_number);
        
        var big_number =  Math.max.apply(Math, numbers);
        document.getElementById('max').innerHTML = big_number;
        console.log(big_number);
        
        var sum =  numbers.reduce(function(a, b){
            return a + b;
        }, 0);         
        document.getElementById('sum').innerHTML = sum;
        console.log(sum);
        
        var average =  (sum / numbers.length);
        document.getElementById('average').innerHTML = average;
        console.log(average);
        


    });

})();
