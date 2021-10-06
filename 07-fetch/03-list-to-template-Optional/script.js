/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   
    document.getElementById('run').addEventListener("click", function(){
      

    
        async function getApi(){
    
    
                let data = await fetch('http://localhost:3000/heroes/');
                let main = await data.json();
                var target = document.getElementById('target');
    
                for(let i = 0; i< main.length;i++){
                var templet = document.getElementById("tpl-hero").content.cloneNode(true);
    
                
                    var list = main[i];
    
                    templet.querySelector('.name').innerText = list.name;
                    templet.querySelector('.alter-ego').innerText = list.alterEgo;
                    templet.querySelector('.powers').innerText = list.abilities;
    
    
                    target.appendChild(templet);
    
    
                           
                         }
                      }   
    
                getApi();      
            });


})();
