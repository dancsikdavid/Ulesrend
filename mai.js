function allowDrop(event) {
    event.preventDefault();
}


function drag(event) {
    event.dataTransfer.setData("text", event.target.innerText);
}


function drop(event) {
    var data = event.dataTransfer.getData("text");
    var target = event.target;


    if (target.innerText !== "") {

        var oldName = target.innerText;
        target.innerText = data;


        var namesContainer = document.getElementById("names");
        var nameElements = namesContainer.getElementsByClassName("name");
        for (var i = 0; i < nameElements.length; i++) {
            if (nameElements[i].innerText === oldName) {
                nameElements[i].innerText = data;
                break;
            }
        }
    } else {

        target.innerText = data;
    }
}



function handleFileSelect(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const fileContent = e.target.result;
            const namesArray = fileContent.split('\n').filter(name => name.trim() !== '');
            const namesContainer = document.getElementById("names");
            namesContainer.innerHTML = '';
            namesArray.forEach(function (name) {
                const nameElement = document.createElement("div");
                nameElement.className = "name";
                nameElement.draggable = true; 
                nameElement.innerText = name;
                nameElement.setAttribute("ondragstart", "drag(event)");
                namesContainer.appendChild(nameElement);
            });
        };
        reader.readAsText(file);
    }
}
