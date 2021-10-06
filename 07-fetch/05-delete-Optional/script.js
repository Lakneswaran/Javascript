/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   
    document.getElementById("run").addEventListener("click", function(){


        async function getApi(){

            let data = await fetch('http://localhost:3000/heroes/');
            let main = await data.json();

            var heroID = parseInt(document.getElementById('hero-id').value);

            if(heroID == ""){
                console.log("fil the blanks");
            }
            else if(heroID <= main.length){

                for(let i = 0; i< main.length;i++){
                    if (main[i].id == heroID){
                        main.splice(i,1);
                        console.table(main);
                    }
                  
                }
            }
            else{
                    console.log("wrong ID");
                }    
               
            

        }
        getApi();  
    })


})();
