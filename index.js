/*
Task 1
Funktioner som styr den karusell som finns på "Index"-sidan.
*/
let slideIndex = 1;
showSlides(slideIndex);

// Knapar för föregående/nästa slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Bild-kontroll
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/*
Task 2
Funktionen lägger till stil för när man hovrar över menyn.
*/
document.addEventListener('DOMContentLoaded', function() {
    var menuLinks = document.querySelectorAll('.menu a');

    // Lägger till stil för när man hovrar över länken
    function addHoverStyle() {
        this.style.backgroundColor = '#3F4D70';
        this.style.color = '#f2f2f2';
    }

    // Tar bort stil för när man hovrar över länken
    function removeHoverStyle() {
        this.style.backgroundColor = '';
        this.style.color = '#f2f2f2';
    }

    // Loopa igenom varje menylänk och tilldela händelsehanterare
    menuLinks.forEach(function(link) {
        link.onmouseover = addHoverStyle;
        link.onmouseout = removeHoverStyle;
    });
});

/*
Task 2
När ett fält är markerat ändras dess bakgrundsfärg till ljusblå. 
När fältet tappar fokus återgår färgen till dess ursprungliga värde.
Något överfldig eftersom den inte ändrar för hela sidan.
*/
document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('input[type="text"], input[type="email"]');

    inputs.forEach(function(input) {
        input.onfocus = function() {
            this.style.backgroundColor = "#e8f0fe";
        };

        input.onblur = function() {
            this.style.backgroundColor = "";
        };
    });
});