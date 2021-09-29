/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener('click', numberOfFridaythe13thsIn);

    function numberOfFridaythe13thsIn() {
        var Uyear =  document.getElementById("year").value;
        console.log(Uyear);
        var d = (new Date(Uyear)).getFullYear();
        console.log(d);
        var the_months = ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 
        var num = [];
        
        for(var m = 0; m < 12; m++){
            let full_d = new Date(Uyear, m , 13)
            //  d.setFullYear(Uyear, m , 13);
            console.log(full_d);
            if(full_d.getDay() == 5) {
                num.push(m);
                

            } 

            
        }
        console.log(the_months);
num.forEach(n=>document.getElementById("ym").innerText += the_months[n]+"\n");
        
    
    }

})();
