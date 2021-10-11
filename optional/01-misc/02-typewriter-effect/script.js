/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var i = 0;
    var text = []; 
    text  = document.getElementById("target").textContent;
   
    var txt = 'I am Lakneswaran & pursuing Web Developing course';
    var tt = text + txt;
    console.log(tt);
    var speed = 500;

    document.getElementById("target").innerHTML = " ";
    
    function typeWriter() {
        
      if (i < tt.length) {
          
         
        var saveletter = document.getElementById("target").textContent += tt[i];
        
        
   
      
        i++;
        setTimeout(typeWriter, speed);
      }
    }typeWriter();
    

})();
