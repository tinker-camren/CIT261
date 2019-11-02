function xmlHttpExample() {
    var xmlhttp = new XMLHttpRequest();
    var ObjArray = "https://raw.githubusercontent.com/tinker-camren/CIT261/master/WebAppSample/WebAppSample/XMLExample.txt";

    xmlhttp.onreadystatechange = function () {        
        var ExampleArray = JSON.parse(this.responseText);
        convertObjToText(ExampleArray);        
    };
    xmlhttp.open("GET", ObjArray, true);
    xmlhttp.send();
}

function convertObjToText(ObjArray) {
    var outstring = "";
    var i;
    for (i = 0; i < ObjArray.length; i++) {
        outstring += '<li> Motherboard: ' + ObjArray[i].mobo + '</li>' +
            '<li> Case: ' + ObjArray[i].Case + '</li>' +
            '<li> PSU: ' + ObjArray[i].PSU + '</li>' +
            '<li> CPU: ' + ObjArray[i].CPU + '</li>' +
            '<li> RAM: ' + ObjArray[i].RAM + '</li>' +
            '<li> Video Card: ' + ObjArray[i].vidcard + '</li>' +
            '<li> Hard Drive: ' + ObjArray[i].hdd + '</li><br>';
    }
    document.getElementById("xmlHttpExample").innerHTML = outstring;
}

function toString(object) {
    out
}

function CSSManipExample() {
    element = document.getElementById('CSSManipExample2');

    if (element.style.borderRadius != "50%") {
        element.style.borderRadius = '50%';
        element.style.display = 'flex';
        element.style.justifyContent = 'center';
        element.style.alignItems = 'center';
    } else {
        element.style.borderRadius = '0%';
        element.style.justifyContent = 'start';
        element.style.alignItems = 'start';
    }
    
}

function LocalStorageAdd(key, item) {
    element = document.getElementById('WebStorageDiv');
    localStorage.setItem(key, item);
    element.innerHTML = "<p class=\"break\">Item with key of " + key + " added successfully!</p>";

    var storageItem = localStorage.getItem(key);
    element.innerHTML += "<p class=\"break\">Item in local storage: </p>" + storageItem;
}

function LocalStorageRemove(key) {
    element = document.getElementById('WebStorageDiv');
    localStorage.removeItem(key);
    element.innerHTML = "<p class=\"break\">Item with key of " + key + " removed successfully!</p>";

    var storageComputerParts = localStorage.getItem('computerParts');
    element.innerHTML += "<p class=\"break\">Computer parts in local storage: </p>" + storageComputerParts;
}

function SessionStorageAdd(key, item) {
    element = document.getElementById('WebStorageDiv');
    sessionStorage.setItem(key, item);
    element.innerHTML = "<p class=\"break\">Item with key of " + key + " added successfully!</p>";

    var storageItem = sessionStorage.getItem(key);
    element.innerHTML += "<p class=\"break\">Item in local storage: </p>" + storageItem;
}

function SessionStorageRemove(key) {
    element = document.getElementById('WebStorageDiv');
    sessionStorage.removeItem(key);
    element.innerHTML = "<p class=\"break\">Item with key of " + key + " removed successfully!</p>";

    var storageItem = sessionStorage.getItem(key);
    element.innerHTML += "<p class=\"break\">Item in session storage: </p>" + storageItem;
}

function LocalStorageView(key) {
    element = document.getElementById('WebStorageDiv');
    var storageItem = localStorage.getItem(key);
    element.innerHTML = "<p class=\"break\">Item in local storage with key of " + key + ": </p>" + storageItem;
}

function SessionStorageView(key) {
    element = document.getElementById('WebStorageDiv');
    var storageItem = sessionStorage.getItem(key);
    element.innerHTML = "<p class=\"break\">Item in session storage with key of " + key + ": </p>" + storageItem;
}

var computerParts = new ComputerParts(
    "MSI X470 Pro",
    "CM Storm Stryker",
    "Rosewill 800W Gold",
    "AMD Ryzen 2700x",
    "Patriot Sniper X 16GB (2x8 GB)",
    "EVGA nVidia RTX 2060",
    "Samsung EVO m.2 500GB"
)    
//This makes it so the object can be returned as a string
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
ComputerParts.prototype.toString = function computerPartsToString() {
    var ret = "Case: " + this.Case +
        "<br>CPU: " + this.CPU +
        "<br>HDD: " + this.hdd +
        "<br>Motherboard: " + this.mobo +
        "<br>PSU: " + this.PSU +
        "<br>RAM: " + this.RAM +
        "<br>Video Card: " + this.vidcard;
    return ret;
}

document.getElementById("WebStorageDiv").innerHTML = "<h5 class=\"flex-row mx-auto\">Object to be added to storage: </h5> <div class=\"break\"></div> <p class=\"flex-row mx-auto\">" + computerParts + "</p>";