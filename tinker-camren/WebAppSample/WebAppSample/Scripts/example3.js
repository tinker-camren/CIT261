function appendChildExample() {
    element = document.getElementById('DomManipExampleDiv');    
    var button = document.createElement('button');
    button.className = "btn-info row mx-auto";
    button.innerHTML = "Insert Before Example";
    button.onclick = function insertBeforeExample() {
        var button2 = document.createElement('button');
        button2.className = "btn-info row mx-auto";
        button2.innerHTML = "Remove Child Example";
        button2.onclick = function removeChildExample() {
            element.removeChild(button2);
        }
        element.insertBefore(button2, button);        
    }
    element.appendChild(button);
}





