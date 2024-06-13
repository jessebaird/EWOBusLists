document.addEventListener('DOMContentLoaded', function () {
    const data = {
        Jesse: ["Benny", "Rental 2", "Benny", "Shac", "Benny", "Rac"],
        Kristi: ["Rac", "Benny", "Rental 2", "Rac", "Shac", "Benny"],
        Lexi: ["Rac", "Shac", "Rental 1", "Rental 2", "Rac", "Shac"],
        Ellie: ["Rac", "Rental 1", "Shac", "Benny", "Rac", "Rental 2"]
    };

    const nameDropdown = document.getElementById('nameDropdown');
    const busListDisplay = document.getElementById('busListDisplay');

    nameDropdown.addEventListener('change', function () {
        const selectedName = nameDropdown.value;
        const busList = data[selectedName];

        if (busList) {
            busListDisplay.innerHTML = `<p><strong>Bus List for ${selectedName}:</strong></p><ol>${busList.map(bus => `<li>${bus}</li>`).join('')}</ol>`;
        } else {
            busListDisplay.innerHTML = '';
        }
    });
});
