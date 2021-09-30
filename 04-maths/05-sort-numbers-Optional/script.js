/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value
   /* const a_num = [];
    const c_num = [];
    a_num = document.getElementById("numbers");
    console.log(a_num);*/

    document.getElementById("run").addEventListener("click", function() {

      /*  for(var i = 0; i < a_num.length; i++) {

            if(a_num.value[i] < a_num[i+1]){
                c_num [i] = a_num.value[i];
            }
            else{
                c_num [i] = a_num.value[i];
            }
            


        }*/

        var num = document.getElementById("numbers").value.split(",");
        num.sort((a, b) => a - b);
        console.log(num);

        // document.getElementById('numbers').removeAttribute('readonly');          ==> working
        document.getElementById("numbers").readOnly = false; 


        document.getElementById('numbers').value = num;

         document.getElementById("numbers").readOnly =  true;




    });

})();
