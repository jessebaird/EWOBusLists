document.addEventListener('DOMContentLoaded', function () {
    const data = {
"Adam Jun": [" Benny" , " Rental" , " Rac" , " Rental" , " Shac" , " Benny" , " Rac" , " Benny" , " Rental" , " Benny" , " Rac" , " Naomi" , " Naomi" , " Shac" , " Benny" , " Rac" ],
"Addy Jeffrey": [" Benny" , " Rental" , " Rental" , " Rac" , " Benny" , " Naomi" , " Benny" , " Shac" , " Naomi" , " Rental" , " Shac" , " Naomi" , " Naomi" , " Benny" , " Rental" , " Shac" ],
"Aine Staggs": [" Naomi" , " Benny" , " Rental" , " Rac" , " Naomi" , " Rac" , " Naomi" , " Rac" , " Rac" , " Benny" , " Benny" , " Benny" , " Shac" , " Benny" , " Rac" , " Rental" ],
"Alyssa Thompson": [" Benny" , " Shac" , " Benny" , " Naomi" , " Shac" , " Rac" , " Naomi" , " Benny" , " Naomi" , " Shac" , " Rental" , " Rac" , " Rac" , " Rental" , " Benny" , " Naomi" ],
"Amanda Andris": [" Rental" , " Rac" , " Naomi" , " Shac" , " Rac" , " Shac" , " Naomi" , " Benny" , " Naomi" , " Rental" , " Benny" , " Rac" , " Shac" , " Naomi" , " Naomi" , " Rac" ],
"Amberly Herbst": [" Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" ],
"Amelia Masters": [" Shac" , " Shac" , " Rac" , " Shac" , " Rac" , " Shac" , " Rac" , " Naomi" , " Naomi" , " Rental" , " Shac" , " Rac" , " Shac" , " Naomi" , " Naomi" , " Rac" ],
"Annika Risinger": [" Shac" , " Shac" , " Benny" , " Rac" , " Benny" , " Rental" , " Shac" , " Shac" , " Shac" , " Naomi" , " Benny" , " Rental" , " Rac" , " Naomi" , " Rental" , " Naomi" ],
"Ashlynn Feezor": [" Shac" , " Naomi" , " Benny" , " Rac" , " Rental" , " Shac" , " Naomi" , " Shac" , " Shac" , " Naomi" , " Rental" , " Rac" , " Shac" , " Shac" , " Rental" , " Rental" ],
"Aubrey McClure": [" Rac" , " Naomi" , " Rac" , " Benny" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Shac" , " Rental" , " Benny" , " Shac" , " Rental" , " Shac" , " Naomi" , " Shac" ],
"Ben Shearin": [" Shac" , " Naomi" , " Shac" , " Rental" , " Shac" , " Rac" , " Rental" , " Benny" , " Rac" , " Rac" , " Naomi" , " Rac" , " Rac" , " Naomi" , " Rac" , " Rental" ],
"Brandis Ulrich": [" Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" ],
"Carl Hoefer": [" Benny" , " Naomi" , " Benny" , " Naomi" , " Rac" , " Rental" , " Shac" , " Shac" , " Benny" , " Shac" , " Benny" , " Rental" , " Rac" , " Shac" , " Naomi" , " Benny" ],
"Chaius Herbst": [" Naomi" , " Shac" , " Shac" , " Benny" , " Shac" , " Benny" , " Naomi" , " Rac" , " Rental" , " Benny" , " Rac" , " Naomi" , " Shac" , " Rac" , " Naomi" , " Rac" ],
"Chris Michels": [" Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" ],
"Cooper White": [" Naomi" , " Benny" , " Naomi" , " Shac" , " Naomi" , " Rac" , " Rac" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Naomi" , " Benny" , " Shac" , " Rac" ],
"Daphne Yates": [" Shac" , " Naomi" , " Naomi" , " Benny" , " Rac" , " Rac" , " Rac" , " Rental" , " Rac" , " Shac" , " Naomi" , " Shac" , " Naomi" , " Naomi" , " Shac" , " Naomi" ],
"Donny Spaulding": [" Shac" , " Benny" , " Benny" , " Naomi" , " Benny" , " Naomi" , " Rental" , " Shac" , " Shac" , " Rental" , " Rental" , " Naomi" , " Benny" , " Rac" , " Rac" , " Rac" ],
"Eliana Woodman": [" Naomi" , " Shac" , " Shac" , " Naomi" , " Rental" , " Rental" , " Rental" , " Rac" , " Naomi" , " Benny" , " Benny" , " Shac" , " Rental" , " Benny" , " Shac" , " Shac" ],
"Ellie Baird": [" Naomi" , " Shac" , " Benny" , " Rental" , " Rental" , " Benny" , " Benny" , " Naomi" , " Naomi" , " Rac" , " Naomi" , " Shac" , " Rental" , " Rac" , " Rental" , " Rental" ],
"Emilynn Combs": [" Rac" , " Rac" , " Benny" , " Naomi" , " Shac" , " Shac" , " Shac" , " Rental" , " Rac" , " Rental" , " Rental" , " Shac" , " Rental" , " Naomi" , " Benny" , " Naomi" ],
"Eric Herbst": [" Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" ],
"Evan Herbst": [" Benny" , " Rac" , " Rental" , " Shac" , " Benny" , " Rental" , " Rental" , " Rac" , " Rental" , " Shac" , " Shac" , " Naomi" , " Benny" , " Benny" , " Naomi" , " Shac" ],
"Everett Woodman": [" Benny" , " Shac" , " Shac" , " Rental" , " Naomi" , " Rental" , " Benny" , " Shac" , " Shac" , " Naomi" , " Shac" , " Benny" , " Shac" , " Rac" , " Shac" , " Rac" ],
"Evie Jenkins": [" Rental" , " Benny" , " Rental" , " Rental" , " Naomi" , " Naomi" , " Benny" , " Benny" , " Rental" , " Rental" , " Naomi" , " Shac" , " Rac" , " Rental" , " Naomi" , " Rental" ],
"Grace Masters": [" Shac" , " Rac" , " Rental" , " Rac" , " Benny" , " Shac" , " Benny" , " Rac" , " Benny" , " Benny" , " Rental" , " Naomi" , " Benny" , " Rac" , " Naomi" , " Rental" ],
"Griffin Moore": [" Rental" , " Rental" , " Shac" , " Benny" , " Shac" , " Rental" , " Benny" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Benny" , " Rac" , " Rac" , " Benny" , " Naomi" ],
"Hannah Spaulding": [" Naomi" , " Rental" , " Shac" , " Rac" , " Naomi" , " Naomi" , " Rental" , " Shac" , " Shac" , " Benny" , " Naomi" , " Shac" , " Rental" , " Naomi" , " Rental" , " Benny" ],
"Harper McGowan": [" Rental" , " Rental" , " Naomi" , " Naomi" , " Rental" , " Benny" , " Naomi" , " Shac" , " Benny" , " Benny" , " Naomi" , " Benny" , " Naomi" , " Rental" , " Rental" , " Shac" ],
"Hayden Studnicki": [" Shac" , " Naomi" , " Benny" , " Benny" , " Rental" , " Rental" , " Benny" , " Benny" , " Shac" , " Rac" , " Rac" , " Rental" , " Benny" , " Benny" , " Rental" , " Shac" ],
"Hayley Michels": [" Shac" , " Rental" , " Naomi" , " Naomi" , " Rac" , " Rac" , " Shac" , " Rental" , " Rac" , " Naomi" , " Rac" , " Naomi" , " Rac" , " Shac" , " Rac" , " Shac" ],
"Hunter Studnicki": [" Benny" , " Rac" , " Shac" , " Benny" , " Shac" , " Shac" , " Rac" , " Rental" , " Rac" , " Shac" , " Rac" , " Rac" , " Rac" , " Naomi" , " Benny" , " Rac" ],
"Isaiah Herbst": [" Rental" , " Naomi" , " Rac" , " Benny" , " Benny" , " Shac" , " Shac" , " Naomi" , " Benny" , " Naomi" , " Shac" , " Naomi" , " Naomi" , " Rac" , " Shac" , " Naomi" ],
"Isaiah Schwoerer": [" Rental" , " Shac" , " Rental" , " Shac" , " Shac" , " Naomi" , " Rac" , " Rac" , " Benny" , " Naomi" , " Rac" , " Shac" , " Naomi" , " Shac" , " Benny" , " Benny" ],
"Jacob Hughes": [" Benny" , " Naomi" , " Rac" , " Rac" , " Naomi" , " Rac" , " Rac" , " Naomi" , " Rental" , " Rac" , " Shac" , " Rental" , " Naomi" , " Benny" , " Benny" , " Benny" ],
"Jacob Stanfield": [" Rental" , " Rac" , " Rac" , " Rental" , " Benny" , " Rac" , " Shac" , " Shac" , " Benny" , " Shac" , " Shac" , " Rac" , " Rental" , " Rac" , " Rac" , " Naomi" ],
"Jesse Baird": [" Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" ],
"Jonathan Goodyear": [" Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" , " Rental" ],
"Karis Wolfe": [" Naomi" , " Benny" , " Shac" , " Rental" , " Rental" , " Rac" , " Benny" , " Shac" , " Benny" , " Rental" , " Rac" , " Benny" , " Rental" , " Shac" , " Naomi" , " Rental" ],
"Kobi White": [" Shac" , " Shac" , " Rental" , " Rental" , " Rental" , " Naomi" , " Naomi" , " Rental" , " Shac" , " Naomi" , " Rental" , " Shac" , " Naomi" , " Rental" , " Shac" , " Benny" ],
"Lauren Fehr": [" Rac" , " Rental" , " Benny" , " Benny" , " Shac" , " Shac" , " Rental" , " Benny" , " Rental" , " Benny" , " Benny" , " Naomi" , " Naomi" , " Benny" , " Rac" , " Rac" ],
"Levi Landes": [" Rac" , " Shac" , " Naomi" , " Rental" , " Shac" , " Shac" , " Shac" , " Benny" , " Rac" , " Benny" , " Rac" , " Rac" , " Shac" , " Benny" , " Benny" , " Benny" ],
"Lexi Baird": [" Shac" , " Benny" , " Rac" , " Shac" , " Benny" , " Benny" , " Benny" , " Naomi" , " Rac" , " Rac" , " Rental" , " Benny" , " Shac" , " Benny" , " Naomi" , " Benny" ],
"Lexi Horton": [" Naomi" , " Benny" , " Naomi" , " Rac" , " Rental" , " Rac" , " Shac" , " Rental" , " Shac" , " Naomi" , " Shac" , " Rac" , " Benny" , " Benny" , " Rac" , " Benny" ],
"Lindsey Studnicki": [" Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" ],
"Lizzy Henard": [" Rental" , " Benny" , " Benny" , " Shac" , " Shac" , " Benny" , " Shac" , " Shac" , " Rental" , " Rac" , " Benny" , " Rental" , " Rental" , " Rac" , " Rac" , " Rac" ],
"Lucy Kramer": [" Benny" , " Naomi" , " Naomi" , " Naomi" , " Rac" , " Rental" , " Rac" , " Naomi" , " Benny" , " Shac" , " Benny" , " Rental" , " Benny" , " Rac" , " Rental" , " Shac" ],
"Luke Jun": [" Rental" , " Rac" , " Shac" , " Shac" , " Shac" , " Rental" , " Benny" , " Rac" , " Benny" , " Rac" , " Rac" , " Benny" , " Benny" , " Shac" , " Benny" , " Rac" ],
"Lydia Hurd": [" Rac" , " Benny" , " Rac" , " Shac" , " Naomi" , " Benny" , " Rental" , " Rac" , " Shac" , " Shac" , " Naomi" , " Rac" , " Shac" , " Shac" , " Benny" , " Shac" ],
"Mae Jones": [" Rac" , " Benny" , " Benny" , " Shac" , " Rac" , " Benny" , " Rac" , " Rac" , " Naomi" , " Rac" , " Shac" , " Benny" , " Benny" , " Shac" , " Shac" , " Benny" ],
"Maggie Hughes": [" Rac" , " Rac" , " Shac" , " Rac" , " Rac" , " Benny" , " Shac" , " Rac" , " Rac" , " Rac" , " Rac" , " Benny" , " Shac" , " Benny" , " Shac" , " Rental" ],
"Max Hudson": [" Shac" , " Rental" , " Rac" , " Rac" , " Rac" , " Naomi" , " Naomi" , " Shac" , " Naomi" , " Shac" , " Benny" , " Benny" , " Rac" , " Naomi" , " Shac" , " Benny" ],
"Molly Kinzinger": [" Benny" , " Naomi" , " Rental" , " Benny" , " Benny" , " Benny" , " Benny" , " Naomi" , " Naomi" , " Rac" , " Naomi" , " Benny" , " Rac" , " Shac" , " Benny" , " Rental" ],
"Natalie Heil": [" Naomi" , " Rac" , " Rental" , " Rac" , " Rac" , " Rac" , " Shac" , " Rac" , " Rac" , " Benny" , " Rental" , " Shac" , " Rental" , " Rac" , " Rental" , " Benny" ],
"Paige Kinzinger": [" Naomi" , " Shac" , " Shac" , " Shac" , " Naomi" , " Rac" , " Benny" , " Naomi" , " Benny" , " Benny" , " Shac" , " Rac" , " Benny" , " Naomi" , " Naomi" , " Naomi" ],
"Parker Michels": [" Rac" , " Benny" , " Rac" , " Benny" , " Benny" , " Naomi" , " Naomi" , " Rac" , " Shac" , " Shac" , " Rac" , " Benny" , " Shac" , " Naomi" , " Rental" , " Shac" ],
"Pierce Vrooman": [" Rac" , " Rac" , " Rac" , " Shac" , " Benny" , " Benny" , " Rental" , " Benny" , " Benny" , " Shac" , " Rental" , " Naomi" , " Benny" , " Rental" , " Rac" , " Benny" ],
"Raymond Hoefer": [" Naomi" , " Shac" , " Benny" , " Naomi" , " Rental" , " Shac" , " Rac" , " Benny" , " Rental" , " Benny" , " Rac" , " Rac" , " Rac" , " Rental" , " Rac" , " Rental" ],
"Reagan DeHaan": [" Rac" , " Rac" , " Naomi" , " Naomi" , " Rac" , " Rental" , " Rac" , " Benny" , " Rac" , " Rental" , " Benny" , " Shac" , " Benny" , " Shac" , " Shac" , " Shac" ],
"Ryan Heil": [" Benny" , " Naomi" , " Rental" , " Benny" , " Rac" , " Shac" , " Rac" , " Naomi" , " Rac" , " Naomi" , " Benny" , " Rental" , " Benny" , " Rental" , " Shac" , " Naomi" ],
"Sam Masters": [" Benny" , " Benny" , " Shac" , " Benny" , " Naomi" , " Benny" , " Naomi" , " Benny" , " Benny" , " Rac" , " Naomi" , " Naomi" , " Naomi" , " Rental" , " Rac" , " Rac" ],
"Sarah Masters": [" Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" ],
"Sophie McCree": [" Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" ],
"Sophie Nussbaum": [" Rental" , " Rental" , " Naomi" , " Rental" , " Rental" , " Naomi" , " Rental" , " Rental" , " Rental" , " Shac" , " Shac" , " Rental" , " Rac" , " Rental" , " Rac" , " Shac" ],
"Sydney Brown": [" Rac" , " Rac" , " Rac" , " Rac" , " Benny" , " Shac" , " Shac" , " Rental" , " Naomi" , " Rac" , " Naomi" , " Rental" , " Shac" , " Rental" , " Shac" , " Naomi" ],
"Walt Baertsch": [" Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" ],
"Zander Hoefer": [" Rac" , " Rental" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Rental" , " Rental" , " Shac" , " Naomi" , " Shac" , " Shac" , " Rental" , " Rac" , " Benny" , " Naomi" ],
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
