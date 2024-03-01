document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");

    // Change style on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 70) {
            navbar.style.backgroundColor = "#555";
        } else {
            navbar.style.backgroundColor = "#333";
        }
    });

    // Change style on hover
    var navLinks = navbar.getElementsByTagName("a");
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("mouseenter", function() {
            this.style.backgroundColor = "#89473c";
            this.style.color = "#ffffff";
        });

        navLinks[i].addEventListener("mouseleave", function() {
            this.style.backgroundColor = "";
            this.style.color = "";
        });
        
    }
});