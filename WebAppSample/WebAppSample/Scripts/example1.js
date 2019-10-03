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
    )
    //Create a new computerParts object that inherits from the old one
    var computerPartsInherit = Object.create(computerParts);

    //Add a new method to the inherited object
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