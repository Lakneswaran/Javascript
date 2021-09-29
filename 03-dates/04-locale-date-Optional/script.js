/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const months =["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Now", "Dec"];
    const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    var d = new Date();

    var fdate = days[d.getDay()] + ' ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear( ) + ' ' + d.getHours() + 'h' + d.getMinutes();
    
    document.getElementById("target").innerHTML = fdate;


})();
