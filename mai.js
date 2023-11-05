function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var target = event.target;

    if (target.className === "seat") {
        var oldName = target.innerText;
        var draggedSeat = document.getElementById(data);
        var seatContent = target.innerText;

        target.innerText = draggedSeat.innerText;
        draggedSeat.innerText = seatContent;
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
            namesArray.forEach(function (name, index) {
                const nameElement = document.createElement("div");
                nameElement.className = "name";
                nameElement.id = "name" + index; // Egyedi azonosítók
                nameElement.draggable = true;
                nameElement.innerText = name;
                nameElement.setAttribute("ondragstart", "drag(event)");
                namesContainer.appendChild(nameElement);
            });
        };
        reader.readAsText(file);
    }
}