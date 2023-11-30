// JavaScript code
// Get references to the elements
var menu = document.getElementById("menu");
var openMenu = document.getElementById("openMenu");
var closeMenu = document.querySelector("#menu .close");
var menuItems = document.querySelectorAll("#menu li");

// Add event listener to open the menu
openMenu.addEventListener("click", function(e) {
    e.preventDefault();
    // Set opacity to 0.4 and display the menu
    menu.style.opacity = "0.4";
    menu.style.display = "block";
});

// Add event listener to close the menu
closeMenu.addEventListener("click", function(e) {
    e.preventDefault();
    // Set opacity back to 1 and hide the menu
    menu.style.opacity = "1";
    menu.style.display = "none";
});

// Add event listeners to close the menu when a menu item is clicked
menuItems.forEach(function(item) {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        // Set opacity back to 1 and hide the menu
        menu.style.opacity = "1";
        menu.style.display = "none";
    });
});
