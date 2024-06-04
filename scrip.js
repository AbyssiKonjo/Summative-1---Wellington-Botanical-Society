console.log("javascript is working");

// Open & Close Hamburger Menu
let openHam = document.getElementById('openHam');
let closeHam = document.getElementById('closeHam');
let navigationItems = document.getElementById('navigation-items');
let overlay = document.getElementById('overlay');

const hamburgerEvent = (navigation, close, open, overlayDisplay) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
    overlay.style.display = overlayDisplay;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none", "block"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block", "none"));

// Open & Close Dropdown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});
