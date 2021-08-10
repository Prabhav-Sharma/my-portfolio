var button= document.querySelector("#button");
var txtInput= document.querySelector("#txt-input");
var outputBox= document.querySelector("#output-box");


var serverUrl="https://api.funtranslations.com/translate/pirate.json";

function getTranslationUrl(text){
    return serverUrl +"?text=" +text;
}

function errorHandler(error){
    console.log("error occured", error)
}

function fetchData(){
    var userInput= txtInput.value;
fetch(getTranslationUrl(userInput)).then(response=> response.json()).then(json=>outputBox.innerText = json.contents.translated).catch(errorHandler);
}

button.addEventListener("click", fetchData);
