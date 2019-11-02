//Makes my life much easier with presenting everything on a page
function hideShow(elementID) {
    var x = document.getElementById(elementID);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//Demonstrate a simple loop and simple array
function loopArray() {    
    var element = document.getElementById('arrayLoopDiv');
    var outstring = "<h5>Computer Parts List:</h5>";
    var computerParts = new Array();

    computerParts[0] = "motherboard";
    computerParts[1] = "case";
    computerParts[2] = "PSU";
    computerParts[3] = "processor";
    computerParts[4] = "RAM";
    computerParts[5] = "video card";
    computerParts[6] = "hard drive";

    for (var i = 0; i < computerParts.length; i++) {
        outstring += computerParts[i] + "<br>";
    }
    element.innerHTML = outstring;
}

//Demonstrate an associative array
function assocArray() {
    var element = document.getElementById('assocArrayDiv');
    var outstring = "<h5>Computer Parts List:</h5>";
    var computerParts = new Array();

    computerParts["mobo"] = "MSI X470 Pro";
    computerParts["case"] = "CM Storm Stryker";
    computerParts["PSU"] = "Rosewill 800W Gold";
    computerParts["CPU"] = "AMD Ryzen 2700x";
    computerParts["RAM"] = "Patriot Sniper X 16GB (2x8 GB)";
    computerParts["vidcard"] = "EVGA nVidia RTX 2060";
    computerParts["hdd"] = "Samsung EVO m.2 500GB";

    outstring += computerParts.mobo + "<br>";
    outstring += computerParts.case + "<br>";
    outstring += computerParts.PSU + "<br>";
    outstring += computerParts.CPU + "<br>";
    outstring += computerParts.RAM + "<br>";
    outstring += computerParts.vidcard + "<br>";
    outstring += computerParts.hdd + "<br>";

    element.innerHTML = outstring;
}

//Demonstrate a simple conditional statement
function condStatement() {
    var uname = document.getElementById("uname").value;
    formCorrect = "false";

    if (uname.length > 5) {
        formCorrect = "true";
    } else {
        alert("Username must be at least 6 characters");
    }

    return formCorrect;
}

//Demonstrate initalizing and object vs instantiating in the next 2 functions
function objInit() {
    var element = document.getElementById('objInit');
    var outstring = "<h5>Computer Parts List:</h5>";
    var computerParts = {
        mobo: "MSI X470 Pro",
        case: "CM Storm Stryker",
        PSU: "Rosewill 800W Gold",
        CPU: "AMD Ryzen 2700x",
        RAM: "Patriot Sniper X 16GB (2x8 GB)",
        vidcard: "EVGA nVidia RTX 2060",
        hdd: "Samsung EVO m.2 500GB"
    };

    outstring += computerParts.mobo + "<br>";
    outstring += computerParts.case + "<br>";
    outstring += computerParts.PSU + "<br>";
    outstring += computerParts.CPU + "<br>";
    outstring += computerParts.RAM + "<br>";
    outstring += computerParts.vidcard + "<br>";
    outstring += computerParts.hdd + "<br>";

    element.innerHTML = outstring;
}

//Object to be instantiated
function ComputerParts(mobo, Case, PSU, CPU, RAM, vidcard, hdd) {
    this.mobo = mobo;
    this.Case = Case;
    this.PSU = PSU;
    this.CPU = CPU;
    this.RAM = RAM;
    this.vidcard = vidcard;
    this.hdd = hdd;
}

//Demonstrate creating an object by instantiation
function objInst() {
    var element = document.getElementById('objInst');
    var outstring = "<h5>Computer Parts List:</h5>";
    var computerParts = new ComputerParts(
        "MSI X470 Pro",
        "CM Storm Stryker",
        "Rosewill 800W Gold",
        "AMD Ryzen 2700x",
        "Patriot Sniper X 16GB (2x8 GB)",
        "EVGA nVidia RTX 2060",
        "Samsung EVO m.2 500GB"
    )

    //Add a new property to the instantiated object
    computerParts.dvdtray = "ASUS DVD RW Drive";

    for (var i in computerParts) {
        outstring += computerParts[i] + "<br>";
    }

    element.innerHTML = outstring;
}

//Demonstrate how inheritance can work
function objInherit() {
    var element = document.getElementById('objInherit');
    var outstring = "<h5>Computer Parts List:</h5>";
    var computerParts = new ComputerParts(
        "MSI X470 Pro",
        "CM Storm Stryker",
        "Rosewill 800W Gold",
        "AMD Ryzen 2700x",
        "Patriot Sniper X 16GB (2x8 GB)",
        "EVGA nVidia RTX 2060",
        "Samsung EVO m.2 500GB"
    );
    //Create a new computerParts object that inherits from the old one
    var computerPartsInherit = Object.create(computerParts);

    //Add a new method to the inherited object to create a string from properties
    //that it inherited
    computerPartsInherit.BuildList = function () {
        var output = "";
        output += this.mobo + "<br>";
        output += this.Case + "<br>";
        output += this.PSU + "<br>";
        output += this.CPU + "<br>";
        output += this.RAM + "<br>";
        output += this.vidcard + "<br>";
        output += this.hdd + "<br>";

        return output;
    };

    outstring += computerPartsInherit.BuildList();

    element.innerHTML = outstring;
}

//Demonstrate JSON Stringify and Parse
function jsonExample() {
    var element = document.getElementById('jsonExample');
    var objString = "<h5>Computer Parts List (Starting Object):</h5>";
    var arrString = "<h5>Computer Parts List (Starting Array):</h5>";
    var stringifyObjString = "<h5>Computer Parts List (Stringified Object):</h5>";
    var stringifyArrString = "<h5>Computer Parts List (Stringified Array):</h5>";
    var parseObjString = "<h5>Computer Parts List (Parsed Object):</h5>";
    var parseArrString = "<h5>Computer Parts List (Parsed Array):</h5>";
    var outstring = "<h5>Stringified Example:</h5>"
    var computerPartsObj = new ComputerParts(
        "MSI X470 Pro",
        "CM Storm Stryker",
        "Rosewill 800W Gold",
        "AMD Ryzen 2700x",
        "Patriot Sniper X 16GB (2x8 GB)",
        "EVGA nVidia RTX 2060",
        "Samsung EVO m.2 500GB"
    );

    var computerPartsArr = new Array();
    computerPartsArr[0] = "motherboard";
    computerPartsArr[1] = "case";
    computerPartsArr[2] = "PSU";
    computerPartsArr[3] = "processor";
    computerPartsArr[4] = "RAM";
    computerPartsArr[5] = "video card";
    computerPartsArr[6] = "hard drive";

    //Stringify an object
    var stringifyComputerPartsObj = JSON.stringify(computerPartsObj);

    //Stringify an array
    var stringifyComputerPartsArr = JSON.stringify(computerPartsArr);

    //Parse the object
    var parseComputerPartsObj = JSON.parse(stringifyComputerPartsObj);

    //Parse the array
    var parseComputerPartsArr = JSON.parse(stringifyComputerPartsArr);

    //Getting all the data ready to be output
    //Using these loops so that when these displays in the HTML, it doesn't just show 'Object'
    for (var i in computerPartsObj) {
        objString += computerPartsObj[i] + "<br>";
    };
    for (var i in parseComputerPartsObj) {
        parseObjString += parseComputerPartsObj[i] + "<br>";
    };

    //The rest of this can just be slapped together
    arrString += computerPartsArr;
    stringifyObjString += stringifyComputerPartsObj;
    stringifyArrString += stringifyComputerPartsArr;
    parseArrString += parseComputerPartsArr;

    //The final long string that will be output
    outstring += objString + arrString + stringifyArrString + stringifyObjString + parseObjString + parseArrString;

    element.innerHTML = outstring;
}