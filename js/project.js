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


function Github(){
	// let options = "width=500, height=600, top=100,left=500";
    window.open("https://github.com/taewoon123/LIVELY");
}


const infoText = document.querySelector(".project-info-text");
const info = document.querySelector(".info");
infoText.addEventListener("click", () => {
    info.classList.toggle("info-hidden");
});

const development = document.querySelector(".project-development");
const developmentEnvironment = document.querySelector(".development-environment");
development.addEventListener("click", () => {
    developmentEnvironment.classList.toggle("development-environment-hidden");
});

const skill = document.querySelector(".project-skill");


