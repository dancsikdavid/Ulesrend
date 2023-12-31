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

function clearNames() {
    var namesContainer = document.getElementById('names');
    namesContainer.innerHTML = '';

    var seatElements = document.querySelectorAll('.seat');
    seatElements.forEach(function(seat) {
        seat.innerHTML = '';
    });

    var fileInput = document.getElementById('fileInput');
    fileInput.value = '';
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
                nameElement.id = "name" + index;
                nameElement.draggable = true;
                nameElement.innerText = name;
                nameElement.setAttribute("ondragstart", "drag(event)");
                namesContainer.appendChild(nameElement);
            });
        };
        reader.readAsText(file);
    }
}

var backButton = document.getElementById('back-to-main-button');


backButton.addEventListener('click', function() {

    window.history.back();
});
