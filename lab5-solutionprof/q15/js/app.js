/**
 * app.js
 * 
 * @author okalu
 * @since 2022-6-2
 */
"use strict";

console.log("Lab5-Q15");

window.onload = function() {
    setInterval(getDateTime, 1000);
    function getDateTime() {
        const clock = document.getElementById("clock");
        clock.innerHTML = new Date();
    }
}