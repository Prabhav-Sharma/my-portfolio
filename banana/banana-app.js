var btnTranslate = document.querySelector("#btn-translate");
var txtTranslate = document.querySelector("#txt-input");
var outputBox = document.querySelector("#output-box");

btnTranslate.addEventListener("click", clicked);

function getUrl(text) {
    var url = "https://api.funtranslations.com/translate/minion.json"
    return url + "?text=" + text
}

function clicked() {
    var userInput = txtTranslate.value;
    fetch(getUrl(userInput)).then(response => response.json()).then(json => outputBox.innerText = json.contents.translated);
}