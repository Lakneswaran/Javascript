/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementById("run").addEventListener('click', Gage);
    function Gage(){
        var today = new Date();
        var Bday = document.getElementById("dob-day").value;
        var Bmonth = document.getElementById("dob-month").value;
        var Byear = document.getElementById("dob-year").value;
        
        var curday = today.getDate();
        var curmonth = today.getMonth()+1;
        var curyear = today.getFullYear();
    
        var age = curyear - Byear;
       /* document.getElementById("run").innerText = age; */
    
        if((curmonth < Bmonth) || ( (curmonth == Bmonth) && curday < Bday   )){
    
            age--;
        
    
        }
        document.getElementById("run").innerText = age;
    
        
       



    }

    
    




})();
