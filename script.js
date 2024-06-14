document.addEventListener('DOMContentLoaded', function () {
    const data = {
    "Jesse Smith": [
        { busList: "Bus List 1", vehicle: "Rental 2" },
        { busList: "Bus List 2", vehicle: "Shac" },
        { busList: "Bus List 3", vehicle: "Rac" }
    ],
    "Kristi Johnson": [
        { busList: "Bus List 4", vehicle: "Rac" },
        { busList: "Bus List 5", vehicle: "Benny" },
        { busList: "Bus List 6", vehicle: "Shac" }
    ],
    // Add more names and their corresponding data as needed
};



    const nameDropdown = document.getElementById('nameDropdown');
    const busListDisplay = document.getElementById('busListDisplay');

    // Populate dropdown with names
    for (const name in data) {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        nameDropdown.appendChild(option);
    }

    // Event listener for dropdown change
    nameDropdown.addEventListener('change', function () {
        const selectedName = nameDropdown.value;
        displayBusListAndVehicles(selectedName);
    });

    function displayBusListAndVehicles(name) {
        const entries = data[name];
        if (entries) {
            let html = `<p><strong>Bus List and Vehicle for ${name}:</strong></p>`;
            html += '<ol>';
            entries.forEach(entry => {
                html += `<li>${entry}</li>`;
            });
            html += '</ol>';
            busListDisplay.innerHTML = html;
        } else {
            busListDisplay.innerHTML = '';
        }
    }
});
