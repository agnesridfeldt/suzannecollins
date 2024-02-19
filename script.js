/*
Task 1
Lägger till en pop-up alert när man klicka rpå knappen.
*/
function showMessage() {
    alert("Hello, JavaScript!");
}

/*
Task 3
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
Task 4
Lyser upp ett event på "Timeline"-sidan när man hovrar med muspearen över det.
*/
$(document).ready(function () {
    $('.content').hover(
        function () { // Mouse enter
            $(this).animate({
                'fontSize': '22px',
                'backgroundColor': '#65759e',
            }, 400);
        },

        function () {
            $(this).animate({
                'fontSize': '20px',
                'backgroundColor': '#3F4D70',
            }, 400);
        }
    );
});

/*
Task 4
Svaren till varje fråga är gömda för att sedan visas när men klickar på frågan.
*/
$(document).ready(function(){
    // Dölj alla svar från början
    $('.answer').hide();

    // När man klickar på frågna visas svaret
    $('.questions').click(function(){
        $(this).next('.answer').slideToggle('slow');
    });

    // Hover-effekt för frågorna
    $('.questions').hover(
        function() {
            $(this).css({
                'background-color': '#57698a',
                'color': '#FFFDFA'
            });
        },

        function() {
            $(this).css({
                'background-color': '',
                'color': ''
            });
        }
    );
});

/*
Task 5

*/
$(document).ready(function() {
    $("#draggable-video").draggable({
        containment: ".video-container", /* Begränsar dragbarheten inom denna behållare */
        scroll: false /* Förhindrar skrollning när du drar */
    });
});