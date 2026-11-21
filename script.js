// StudySync Home Page JavaScript

// Page load animation
document.addEventListener("DOMContentLoaded", function () {

    console.log("StudySync loaded successfully!");

});


// Button click message
const startButtons = document.querySelectorAll(".primary-btn");

startButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log("Welcome to StudySync!");

    });

});