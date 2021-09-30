/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



   function show(){

      var number,fact;
      fact=1;
      number=Number(document.getElementById("number").value);
      console.log(number);
      for(var i = 1;i<=number;i++)
      {
          fact=+fact*i;
  
      }
     
      document.getElementById("number").value = fact;
  } 