document.addEventListener('DOMContentLoaded', function () {
    const data = {
"Adam Jun": [" Rental 1" , " Rental 2" , " Rental 1" , " Rac" , " Benny" , " Rental 2" , " Shac" , " Rental 1" , " Rac" , " Benny" , " Benny" , " Shac" , " Rental 1" , " Benny" , " Rac" , " Shac" ],
"Addy Jeffrey": [" Benny" , " Rac" , " Benny" , " Shac" , " Rac" , " Shac" , " Rac" , " Rental 1" , " Rental 2" , " Rental 1" , " Rental 1" , " Rental 2" , " Benny" , " Rac" , " Rental 1" , " Rental 2" ],
"Aine Staggs": [" Rac" , " Benny" , " Rental 2" , " Rental 2" , " Shac" , " Rental 2" , " Benny" , " Shac" , " Rental 2" , " Shac" , " Shac" , " Rac" , " Benny" , " Rac" , " Rac" , " Rental 2" ],
"Alyssa Thompson": [" Rac" , " Shac" , " Shac" , " Rac" , " Rac" , " Rental 2" , " Benny" , " Shac" , " Benny" , " Benny" , " Rental 2" , " Rac" , " Rental 2" , " Rental 2" , " Rental 2" , " Benny" ],
"Amanda Andris": [" Rental 1" , " Rental 1" , " Rac" , " Rental 2" , " Rental 2" , " Shac" , " Rac" , " Benny" , " Rental 2" , " Benny" , " Rental 1" , " Benny" , " Rental 1" , " Benny" , " Benny" , " Rac" ],
"Amberly Herbst": [" Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" ],
"Amelia Masters": [" Rental 2" , " Rac" , " Rental 1" , " Benny" , " Shac" , " Benny" , " Benny" , " Rental 1" , " Benny" , " Rental 1" , " Rac" , " Rental 1" , " Rental 1" , " Shac" , " Rental 1" , " Rac" ],
"Annika Risinger": [" Rac" , " Rac" , " Benny" , " Rental 2" , " Rental 1" , " Shac" , " Shac" , " Rac" , " Shac" , " Rental 1" , " Rac" , " Rental 2" , " Rental 2" , " Rental 2" , " Rac" , " Rac" ],
"Ashlynn Feezor": [" Benny" , " Rac" , " Shac" , " Rac" , " Rac" , " Benny" , " Benny" , " Rental 2" , " Rental 2" , " Benny" , " Benny" , " Benny" , " Benny" , " Rac" , " Shac" , " Rental 1" ],
"Aubrey McClure": [" Shac" , " Benny" , " Rental 1" , " Shac" , " Rac" , " Shac" , " Rental 1" , " Benny" , " Shac" , " Rental 2" , " Rac" , " Rental 1" , " Rental 2" , " Rac" , " Rental 1" , " Shac" ],
"Ben Shearin": [" Rac" , " Rental 1" , " Rental 1" , " Rental 2" , " Rac" , " Rac" , " Rental 1" , " Benny" , " Rental 1" , " Shac" , " Shac" , " Shac" , " Rental 1" , " Rental 1" , " Rac" , " Benny" ],
"Brad Horton": [" Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" ],
"Brandis Ulrich": [" Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" ],
"Carl Hoefer": [" Benny" , " Rac" , " Rental 2" , " Benny" , " Shac" , " Rac" , " Rac" , " Rac" , " Benny" , " Benny" , " Shac" , " Benny" , " Rental 2" , " Rental 1" , " Rental 2" , " Rental 2" ],
"Chaius Herbst": [" Rental 2" , " Rental 1" , " Benny" , " Rac" , " Benny" , " Rental 2" , " Rental 1" , " Shac" , " Rental 1" , " Shac" , " Benny" , " Rental 1" , " Rental 1" , " Rental 1" , " Shac" , " Shac" ],
"Chris Michels": [" Benny" , " Shac" , " Shac" , " Rental 1" , " Shac" , " Rental 2" , " Shac" , " Shac" , " Rac" , " Rental 1" , " Rental 1" , " Rental 2" , " Rental 1" , " Benny" , " Rac" , " Benny" ],
"Cooper White": [" Benny" , " Rac" , " Benny" , " Shac" , " Benny" , " Benny" , " Rental 2" , " Shac" , " Shac" , " Shac" , " Rac" , " Shac" , " Shac" , " Rac" , " Rac" , " Benny" ],
"Daphne Yates": [" Rac" , " Rac" , " Rental 2" , " Shac" , " Benny" , " Rental 1" , " Rental 2" , " Rental 2" , " Benny" , " Rental 1" , " Shac" , " Rental 2" , " Rental 2" , " Rental 1" , " Benny" , " Rac" ],
"Donny Spaulding": [" Rental 2" , " Shac" , " Rac" , " Shac" , " Benny" , " Shac" , " Rental 1" , " Rac" , " Rental 1" , " Rac" , " Benny" , " Rental 1" , " Rental 2" , " Shac" , " Shac" , " Benny" ],
"Eliana Woodman": [" Rental 2" , " Benny" , " Rental 2" , " Rental 1" , " Shac" , " Benny" , " Benny" , " Rental 1" , " Rental 1" , " Rac" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Shac" , " Rac" ],
"Ellie Baird": [" Benny" , " Rental 2" , " Rental 2" , " Rental 1" , " Benny" , " Shac" , " Benny" , " Rental 2" , " Rental 2" , " Rental 2" , " Rac" , " Benny" , " Shac" , " Rac" , " Benny" , " Rental 1" ],
"Emilynn Combs": [" Rental 1" , " Rental 2" , " Rental 1" , " Rac" , " Benny" , " Rental 2" , " Shac" , " Shac" , " Benny" , " Rac" , " Rac" , " Rental 2" , " Benny" , " Benny" , " Benny" , " Rental 1" ],
"Eric Herbst": [" Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" ],
"Evan Herbst": [" Rental 1" , " Rental 2" , " Shac" , " Rental 2" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Rac" , " Shac" , " Shac" , " Shac" , " Rac" , " Rental 2" , " Rac" , " Rental 2" ],
"Everett Woodman": [" Benny" , " Benny" , " Benny" , " Rac" , " Rental 2" , " Rac" , " Rental 1" , " Shac" , " Shac" , " Rac" , " Rental 2" , " Rental 1" , " Rac" , " Rental 2" , " Shac" , " Rental 2" ],
"Evie Jenkins": [" Rental 1" , " Shac" , " Rental 2" , " Rental 1" , " Shac" , " Rac" , " Shac" , " Rental 2" , " Rental 1" , " Rental 1" , " Benny" , " Benny" , " Benny" , " Rental 2" , " Rac" , " Rental 2" ],
"Grace Masters": [" Rental 2" , " Shac" , " Rental 1" , " Rental 2" , " Benny" , " Rental 1" , " Rac" , " Shac" , " Shac" , " Benny" , " Benny" , " Rental 1" , " Shac" , " Shac" , " Rental 2" , " Benny" ],
"Griffin Moore": [" Rental 2" , " Benny" , " Rac" , " Benny" , " Rental 1" , " Rac" , " Rental 2" , " Rac" , " Shac" , " Rental 2" , " Rac" , " Benny" , " Shac" , " Rac" , " Rental 1" , " Rental 2" ],
"Hannah Spaulding": [" Benny" , " Rental 1" , " Rental 2" , " Benny" , " Rental 1" , " Rac" , " Rental 2" , " Benny" , " Benny" , " Rac" , " Rental 2" , " Shac" , " Rac" , " Shac" , " Rental 1" , " Rac" ],
"Harper McGowan": [" Rac" , " Rental 2" , " Benny" , " Rac" , " Rental 2" , " Rental 1" , " Rac" , " Benny" , " Shac" , " Rental 1" , " Rental 1" , " Rental 2" , " Rac" , " Benny" , " Rental 2" , " Rental 2" ],
"Hayden Studnicki": [" Benny" , " Benny" , " Rac" , " Rental 1" , " Rental 1" , " Benny" , " Rac" , " Rac" , " Shac" , " Rental 2" , " Rental 1" , " Shac" , " Rental 1" , " Shac" , " Rental 2" , " Rental 2" ],
"Hayley Michels": [" Rental 1" , " Rental 1" , " Rental 1" , " Shac" , " Shac" , " Rac" , " Shac" , " Rac" , " Rac" , " Benny" , " Benny" , " Benny" , " Shac" , " Benny" , " Rac" , " Rental 1" ],
"Hunter Studnicki": [" Rental 2" , " Shac" , " Rental 1" , " Rental 1" , " Rental 1" , " Rental 1" , " Shac" , " Shac" , " Rental 2" , " Shac" , " Shac" , " Rac" , " Rac" , " Rental 1" , " Rac" , " Rental 1" ],
"Isaiah Herbst": [" Rac" , " Rental 1" , " Shac" , " Rental 1" , " Rental 2" , " Benny" , " Shac" , " Rac" , " Shac" , " Rental 2" , " Rental 1" , " Rental 1" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 1" ],
"Isaiah Schwoerer": [" Benny" , " Benny" , " Rac" , " Benny" , " Rental 2" , " Shac" , " Rental 2" , " Rental 2" , " Benny" , " Rac" , " Benny" , " Rac" , " Benny" , " Rental 1" , " Rental 2" , " Shac" ],
"Jacob Hughes": [" Rental 1" , " Rac" , " Shac" , " Shac" , " Benny" , " Rental 2" , " Rental 1" , " Rental 2" , " Rac" , " Rental 2" , " Rental 2" , " Rental 1" , " Rac" , " Rental 2" , " Shac" , " Rac" ],
"Jacob Stanfield": [" Shac" , " Shac" , " Rac" , " Rental 1" , " Rac" , " Benny" , " Rac" , " Benny" , " Rac" , " Rac" , " Shac" , " Rental 1" , " Rac" , " Rental 1" , " Rental 1" , " Rental 2" ],
"Jesse Baird": [" Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" ],
"Jonathan Goodyear": [" Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" , " Rental 2" ],
"Karis Wolfe": [" Shac" , " Rental 2" , " Rac" , " Benny" , " Rac" , " Rac" , " Rental 2" , " Rental 1" , " Shac" , " Shac" , " Benny" , " Rac" , " Shac" , " Rental 1" , " Benny" , " Shac" ],
"Kobi White": [" Shac" , " Rental 1" , " Shac" , " Rental 2" , " Shac" , " Rac" , " Rac" , " Rental 1" , " Rental 2" , " Rental 1" , " Rental 2" , " Rental 2" , " Benny" , " Shac" , " Benny" , " Benny" ],
"Lauren Fehr": [" Benny" , " Shac" , " Rental 1" , " Shac" , " Rental 1" , " Shac" , " Shac" , " Benny" , " Rental 1" , " Shac" , " Rac" , " Rental 1" , " Rental 2" , " Rental 1" , " Benny" , " Benny" ],
"Levi Landes": [" Rental 2" , " Benny" , " Rac" , " Rac" , " Rental 2" , " Benny" , " Rental 2" , " Rac" , " Rental 2" , " Benny" , " Benny" , " Shac" , " Shac" , " Benny" , " Rental 2" , " Rac" ],
"Lexi Baird": [" Shac" , " Shac" , " Shac" , " Benny" , " Rental 2" , " Rental 1" , " Rac" , " Benny" , " Benny" , " Rental 2" , " Rac" , " Rental 2" , " Benny" , " Shac" , " Benny" , " Benny" ],
"Lexi Horton": [" Shac" , " Rac" , " Shac" , " Benny" , " Rac" , " Shac" , " Benny" , " Rac" , " Rac" , " Rac" , " Rental 2" , " Shac" , " Rac" , " Rental 2" , " Rental 1" , " Rac" ],
"Lindsey Studnicki": [" Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" ],
"Lizzy Henard": [" Benny" , " Benny" , " Benny" , " Benny" , " Rental 2" , " Rental 2" , " Benny" , " Rental 1" , " Benny" , " Rental 1" , " Shac" , " Rental 2" , " Rental 2" , " Benny" , " Benny" , " Rac" ],
"Lucy Kramer": [" Shac" , " Rac" , " Rac" , " Rental 1" , " Rental 2" , " Benny" , " Shac" , " Rental 1" , " Rental 2" , " Benny" , " Rental 1" , " Rac" , " Rac" , " Shac" , " Rental 1" , " Rental 2" ],
"Luke Jun": [" Rac" , " Rental 2" , " Benny" , " Rac" , " Rental 1" , " Rac" , " Rental 1" , " Rental 1" , " Rac" , " Benny" , " Rac" , " Benny" , " Rental 1" , " Shac" , " Shac" , " Shac" ],
"Lydia Hurd": [" Rental 1" , " Shac" , " Rental 2" , " Benny" , " Rental 1" , " Rental 1" , " Shac" , " Rental 2" , " Rental 2" , " Rental 1" , " Benny" , " Benny" , " Rental 1" , " Rental 1" , " Rac" , " Benny" ],
"Mae Jones": [" Rac" , " Rac" , " Rental 2" , " Rental 2" , " Rental 2" , " Shac" , " Benny" , " Rac" , " Benny" , " Shac" , " Shac" , " Shac" , " Shac" , " Rental 2" , " Rac" , " Rac" ],
"Maggie Hughes": [" Rac" , " Benny" , " Rac" , " Rental 2" , " Shac" , " Benny" , " Rac" , " Benny" , " Shac" , " Rac" , " Shac" , " Rac" , " Rental 2" , " Benny" , " Rental 2" , " Rental 1" ],
"Max Hudson": [" Rental 2" , " Benny" , " Rental 1" , " Rental 2" , " Rac" , " Benny" , " Benny" , " Rac" , " Benny" , " Rac" , " Rental 2" , " Shac" , " Benny" , " Rental 2" , " Rental 1" , " Benny" ],
"Molly Kinzinger": [" Rental 1" , " Rental 2" , " Rac" , " Shac" , " Rental 1" , " Rental 2" , " Rac" , " Benny" , " Rental 2" , " Shac" , " Shac" , " Rac" , " Benny" , " Rac" , " Rental 2" , " Rental 1" ],
"Natalie Heil": [" Rac" , " Shac" , " Benny" , " Rac" , " Shac" , " Rental 1" , " Rental 1" , " Benny" , " Rental 1" , " Rac" , " Shac" , " Rac" , " Rac" , " Benny" , " Shac" , " Benny" ],
"Paige Kinzinger": [" Rental 2" , " Rental 1" , " Rac" , " Benny" , " Benny" , " Shac" , " Benny" , " Rental 2" , " Rental 1" , " Rental 2" , " Rac" , " Benny" , " Benny" , " Rac" , " Rental 2" , " Shac" ],
"Parker Michels": [" Shac" , " Rental 1" , " Shac" , " Shac" , " Rental 2" , " Rac" , " Rental 1" , " Shac" , " Rental 1" , " Benny" , " Rental 2" , " Rac" , " Rental 1" , " Benny" , " Shac" , " Shac" ],
"Pierce Vrooman": [" Shac" , " Rental 1" , " Benny" , " Rac" , " Rac" , " Benny" , " Rental 2" , " Rental 1" , " Rac" , " Rac" , " Rental 2" , " Shac" , " Rac" , " Rac" , " Benny" , " Rac" ],
"Raymond Hoefer": [" Rac" , " Rental 2" , " Rental 2" , " Shac" , " Shac" , " Rental 2" , " Rental 2" , " Rental 2" , " Rac" , " Rental 1" , " Benny" , " Rac" , " Shac" , " Rac" , " Benny" , " Shac" ],
"Reagan DeHaan": [" Shac" , " Benny" , " Shac" , " Shac" , " Rac" , " Rental 2" , " Rental 1" , " Shac" , " Rac" , " Rental 2" , " Rental 1" , " Rental 2" , " Shac" , " Rac" , " Shac" , " Rental 1" ],
"Ryan Heil": [" Shac" , " Shac" , " Rental 2" , " Rental 2" , " Benny" , " Rac" , " Rental 2" , " Rental 2" , " Shac" , " Benny" , " Rental 1" , " Benny" , " Benny" , " Shac" , " Shac" , " Shac" ],
"Sam Masters": [" Rental 1" , " Rental 2" , " Rental 1" , " Rental 1" , " Benny" , " Rental 1" , " Rac" , " Rental 2" , " Rental 1" , " Rental 2" , " Rental 2" , " Benny" , " Rental 1" , " Shac" , " Rental 1" , " Rental 1" ],
"Sarah Masters": [" Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" ],
"Sophie McCree": [" Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" ],
"Sophie Nussbaum": [" Rental 2" , " Rental 2" , " Benny" , " Rental 1" , " Shac" , " Shac" , " Shac" , " Rac" , " Benny" , " Rental 2" , " Rental 1" , " Rac" , " Shac" , " Shac" , " Benny" , " Shac" ],
"Sydney Brown": [" Shac" , " Rental 1" , " Benny" , " Rac" , " Rental 1" , " Rental 1" , " Benny" , " Shac" , " Rac" , " Shac" , " Rac" , " Rental 1" , " Rac" , " Rental 1" , " Shac" , " Shac" ],
"Walt Baertsch": [" Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" ],
"Zander Hoefer": [" Rental 1" , " Rac" , " Shac" , " Benny" , " Rac" , " Rental 1" , " Rental 2" , " Benny" , " Rental 1" , " Shac" , " Rental 1" , " Shac" , " Shac" , " Benny" , " Rental 1" , " Rental 1" ],
        // Add more names and their corresponding data as needed
    };

    const nameDropdown = document.getElementById('nameDropdown');
    const vehicleDisplay = document.getElementById('vehicleDisplay');

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
        localStorage.setItem('selectedName', selectedName);
        displayVehicles(selectedName);
    });

    // Display vehicles for the previously selected name
    const selectedName = localStorage.getItem('selectedName');
    if (selectedName) {
        nameDropdown.value = selectedName;
        displayVehicles(selectedName);
    }

    function displayVehicles(name) {
        const vehicles = data[name];
        if (vehicles) {
            let html = `<p><strong>Vehicles for ${name}:</strong></p>`;
            html += '<table>';
            html += '<tr><th>Bus List</th><th>Vehicle</th></tr>';
            vehicles.forEach((vehicle, index) => {
                html += `<tr><td>${index + 1}</td><td>${vehicle}</td></tr>`;
            });
            html += '</table>';
            vehicleDisplay.innerHTML = html;
        } else {
            vehicleDisplay.innerHTML = '';
        }
    }
});
