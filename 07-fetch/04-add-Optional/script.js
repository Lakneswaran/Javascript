/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
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

            var uname = document.getElementById("hero-name").value;
            var uheroEgo = document.getElementById("hero-alter-ego").value;
            var upower = document.getElementById("hero-powers").value;

            if(uname == "" || uheroEgo == "" || upower == ""){
                console.log("fill all the blanks");
            }
            else{

                    let newhero={
                        id: main.length+1,
                        name: uname,
                        alterEgo: uheroEgo,
                        abilities: upower.split(', ')
                    }

                    main.push(newhero);
                    console.table(main);

                 }


            }
        getApi();  
    })



})();
