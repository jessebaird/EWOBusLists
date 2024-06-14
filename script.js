document.addEventListener('DOMContentLoaded', function () {
    const data = {
        "Jesse Smith": [
            { "Rental 2" },
            { "Shac" },
            { "Rac" }
        ],
        "Kristi Johnson": [
            { "Rac" },
            { "Benny" },
            { "Shac" }
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
            html += '<ul>';
            entries.forEach(entry => {
                html += `<li>${entry}</li>`;
            });
            html += '</ul>';
            busListDisplay.innerHTML = html;
        } else {
            busListDisplay.innerHTML = '';
        }
    }
});
