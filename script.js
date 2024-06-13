document.addEventListener('DOMContentLoaded', function () {
    const data = {
        Jesse: ["Benny", "Rental 2", "Benny", "Shac", "Benny", "Rac"],
        Kristi: ["Rac", "Benny", "Rental 2", "Rac", "Shac", "Benny"],
        Lexi: ["Rac", "Shac", "Rental 1", "Rental 2", "Rac", "Shac"],
        Ellie: ["Rac", "Rental 1", "Shac", "Benny", "Rac", "Rental 2"]
    };

    const nameDropdown = document.getElementById('nameDropdown');
    const busListDisplay = document.getElementById('busListDisplay');

    // Populate dropdown and set previously selected name
    const selectedName = localStorage.getItem('selectedName');
    for (const name in data) {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        if (name === selectedName) {
            option.selected = true;
        }
        nameDropdown.appendChild(option);
    }

    // Display bus list for the previously selected name
    if (selectedName) {
        displayBusList(selectedName);
    }

    nameDropdown.addEventListener('change', function () {
        const selectedName = nameDropdown.value;
        localStorage.setItem('selectedName', selectedName);
        displayBusList(selectedName);
    });

    function displayBusList(name) {
        const busList = data[name];
        if (busList) {
            busListDisplay.innerHTML = `
                <p><strong>Bus List for ${name}:</strong></p>
                <ol>${busList.map(bus => `<li>${bus}</li>`).join('')}</ol>
            `;
        } else {
            busListDisplay.innerHTML = '';
        }
    }
});
