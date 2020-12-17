function changeName(){
    let elventa = document.getElementById("elventa-name");
    elventa.innerText = "Empty";
}

function openNewTab(){
    let tab = window.open("./more.html");
    tab.focus();
}

function openCertGIRATab() {
    let tab = window.open("https://drive.google.com/drive/folders/11SlX769R2dzAb9Odvb1VDI-jgKXse8c6?usp=sharing");
    tab.focus();
}

function openCertKNXTab() {
    let tab = window.open("https://drive.google.com/file/d/0B1YSwGAeOJLuQ1JFMmx5aVdFVjdxMnFsSGxfaFk1VXRFZ2Jr/view?usp=sharing");
    tab.focus();
}

function main() {
    document.querySelector("#more-button").addEventListener("click", openNewTab);
    document.querySelector("#certificate_GIRA").addEventListener("click", openCertGIRATab);
    document.querySelector("#certificate_KNX").addEventListener("click", openCertKNXTab);
}
document.addEventListener("DOMContentLoaded", main);