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
    var xmlhttp = new XMLHttpRequest();
    var ObjArray = "https://raw.githubusercontent.com/tinker-camren/CIT261/master/WebAppSample/WebAppSample/XMLExample.txt";

    xmlhttp.onreadystatechange = function () {        
        var ExampleArray = JSON.parse(this.responseText);
        //element.innerHTML = this.responseText;
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