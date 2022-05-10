let titleIsInvisible = false;

let titleRect = document.querySelector("main kb\\:title").getBoundingClientRect();
let headerTitle = document.querySelector("header kb\\:title");
let headerRect = document.querySelector("header").getBoundingClientRect();
let titleScrollLength = titleRect.bottom - headerRect.bottom;

window.addEventListener('scroll', function(e) {
    if (window.scrollY < titleScrollLength && titleIsInvisible) {
        headerTitle.style.opacity = 0;
        titleIsInvisible = false;
    } else if (window.scrollY > titleScrollLength && !titleIsInvisible) {
        headerTitle.style.opacity = 1;
        titleIsInvisible = true;
    }
});
