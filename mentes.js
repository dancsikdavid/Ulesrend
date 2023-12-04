// exportSeatsToCSV.js

function downloadCSV(csv, filename) {
    var csvFile = new Blob([csv], { type: 'text/csv' });
    var downloadLink = document.createElement('a');
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function exportSeatsToCSV() {
    var rows = document.querySelectorAll('table tr');
    var csv = [];

    rows.forEach(function (row) {
        var seatElements = row.querySelectorAll('.seat');
        var rowValues = [];

        seatElements.forEach(function (seat) {
            // Get the data from the seat element (modify this part based on your data structure)
            var seatData = seat.innerText;

            // Quote the data to handle commas or other special characters
            var quotedData = '"' + seatData + '"';

            // Add the quoted data to the row values
            rowValues.push(quotedData);
        });

        // Combine row values into a CSV row
        csv.push(rowValues.join(','));
    });

    // Combine data into a CSV string
    var csvString = csv.join('\n');

    // Download the CSV file
    downloadCSV(csvString, 'seats_data.csv');
}

document.addEventListener('DOMContentLoaded', function () {
    var exportButton = document.createElement('button');
    exportButton.textContent = 'Export CSV-be';
    exportButton.addEventListener('click', exportSeatsToCSV);

    // Assuming you have a div with the class "sav" to place the button
    var savDiv = document.querySelector('.sav');
    savDiv.appendChild(exportButton);
});
