window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});


const info = document.querySelector(".info");
const infoArea = document.querySelector(".info-area");

info.addEventListener("click", () => {
    infoArea.classList.toggle("info-area-hidden");
});


const education = document.querySelector(".education");
const educationArea = document.querySelector(".education-area");

education.addEventListener("click", () => {
    educationArea.classList.toggle("education-area-hidden");
});


const career = document.querySelector(".career");
const careerSide = document.querySelector(".career-side");
const contentSide = document.querySelector("#content-side");

career.addEventListener("click", () => {
    career.classList.add("career-hidden");
    contentSide.classList.remove("career-side-hidden");
});

careerSide.addEventListener("click", () => {
    contentSide.classList.add("career-side-hidden");
    career.classList.remove("career-hidden");
});