document.addEventListener('DOMContentLoaded', function () {
    const data = {
"Adam Jun": [ {  " Rental 1" }, { " Rental 2" }, { " Rental 1" }, { " Rac" }, { " Benny" }, { " Rental 2" }, { " Shac" } ],
"Addy Jeffrey": [ {  " Benny" }, { " Rac" }, { " Benny" }, { " Shac" }, { " Rac" }, { " Shac" }, { " Rac" } ],
"Aine Staggs": [ {  " Rac" }, { " Benny" }, { " Rental 2" }, { " Rental 2" }, { " Shac" }, { " Rental 2" }, { " Benny" } ],
"Alyssa Thompson": [ {  " Rac" }, { " Shac" }, { " Shac" }, { " Rac" }, { " Rac" }, { " Rental 2" }, { " Benny" } ],
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
