//Makes my life much easier with presenting everything on a page
function hideShow(elementID) {
    var x = document.getElementById(elementID);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function xmlHttpExample() {
    var element = document.getElementById('xmlHttpExample');
    var outstring = "<h5>Computer Parts List:</h5>";
    var xmlhttp = new XMLHttpRequest();
    var ObjArray = "https://raw.githubusercontent.com/tinker-camren/CIT261/master/WebAppSample/WebAppSample/XMLExample.txt";

    xmlhttp.onreadystatechange = function () {        
        var ExampleArray = JSON.parse(this.responseText);
        element.innerHTML = this.responseText;
        convertObjToText(ExampleArray);        
    };
    xmlhttp.open("GET", ObjArray, true);
    xmlhttp.send();

    //
}

function convertObjToText(ObjArray) {
    var outstring = "";
    var i;
    for (i = 0; i < ObjArray.length; i++) {
        outstring += '<li>' + ObjArray[i].mobo + '</li>' +
            '<li>' + ObjArray[i].case + '</li>' +
            '<li>' + ObjArray[i].PSU + '</li>' +
            '<li>' + ObjArray[i].CPU + '</li>' +
            '<li>' + ObjArray[i].RAM + '</li>' +
            '<li>' + ObjArray[i].vidcard + '</li>' +
            '<li>' + ObjArray[i].hdd + '</li>';
    }
    document.getElementById("xmlHttpExample").innerHTML = outstring;
}