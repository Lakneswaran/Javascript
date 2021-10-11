/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var target = document.getElementById('target');
    var btnone = document.getElementById('part-one');
    var btntwo = document.getElementById('part-two');
    var btnthree = document.getElementById('part-three');
    var btnfour = document.getElementById('part-four');



    var switchbtn =  [btnone, btntwo, btnthree, btnfour];


    switchbtn.forEach(btn => {

    btn.addEventListener('click', ( ) => {
       
        var add = 0;
        add = parseInt(btn.innerHTML) + 1;
        


        if(add > btn.getAttribute("data-max")){

            add = btn.getAttribute("data-min");
            
        }
        if(add < 10){
            btn.innerHTML = "0"+add;
        }
        else{
            btn.innerHTML = add;
        }

        target.innerHTML = btnone.innerHTML + btntwo.innerHTML + btnthree.innerHTML + btnfour.innerHTML;

        


        

    
        });






   });


})();
