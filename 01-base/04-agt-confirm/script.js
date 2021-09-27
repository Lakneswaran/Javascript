/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function repeat_question() {

    var age = prompt("What is your age?");
    var gender = prompt("What is your gender?");
    var live = prompt("Where do you live?");

    if(age === "" || gender ==="" || live ==="")     //(document.getElementById("repeat_question").value.length == 0)
    {
        alert("empty");
        repeat_question();
    }
    else{

    alert("Your age is "+age+"\nYour gender is "+gender+  "\nYou live in " +live);

    }
  




  
  

})();
