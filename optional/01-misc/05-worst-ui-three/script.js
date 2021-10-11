/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var target = document.getElementById('target');

    var btn1 = document.getElementById('fix-part-one');
    var btn2 = document.getElementById('fix-part-two');
    var btn3 = document.getElementById('fix-part-three');
    var btn4 = document.getElementById('fix-part-four');

    var btncpyinput1 = document.getElementById('part-one');
    var btncpyinput2 = document.getElementById('part-two');
    var btncpyinput3 = document.getElementById('part-three');
    var btncpyinput4 = document.getElementById('part-four');
    
    var inputbtn = [btncpyinput1, btncpyinput2, btncpyinput3, btncpyinput4];


    inputbtn.forEach(btn => {

   

        var max = btn.getAttribute("data-max");
        var min = btn.getAttribute("data-min");
        window[btn.getAttribute("id").split("-")[1]] = setInterval(function(){              // called the id and spilt in two index. part[0] and one[1]

            btn.value = min;
            if(min == max){

             min = btn.getAttribute("data-min");
                
            }
            else{
                min++;
            }



         }, 30);

       
    });

    var arry = ["one", "two", "three", "four"];

    var var1 = "";
    var var2 = "";
    var var3 = "";
    var var4 = "";

    arry.forEach(str => {

        document.getElementById("fix-part-" + str).addEventListener("click", () =>{

            switch(str) {
                case "one":
                  clearInterval(one);
                  var1 = btncpyinput1.value;
                  break;
                case "two":
                    clearInterval(one);
                    var2 = btncpyinput2.value;
                  break;
                case "three":
                    clearInterval(one);
                    var3 = btncpyinput3.value;
                break;
                case "four":
                    clearInterval(one);
                    var4 = btncpyinput4.value;
                break;

              }

              target.innerHTML = var1 + var2 + var3 +var4;


            });

        });
   
    

})();
