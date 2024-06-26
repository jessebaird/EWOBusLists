document.addEventListener('DOMContentLoaded', function () {
    const data = {
"Adam Jun": [" Snoof" , " Rac" , " Rac" , " Rac" , " Snoof" , " Rac" , " Benny" , " Shac" , " Snoof" , " Naomi" , " Snoof" , " Naomi" , " Shac" , " Shac" , " Benny" , " Snoof" ],
"Addy Jeffrey": [" Shac" , " Rac" , " Benny" , " Benny" , " Naomi" , " Benny" , " Shac" , " Naomi" , " Benny" , " Snoof" , " Snoof" , " Naomi" , " Snoof" , " Benny" , " Benny" , " Naomi" ],
"Aine Staggs": [" Naomi" , " Snoof" , " Naomi" , " Snoof" , " Naomi" , " Snoof" , " Rac" , " Snoof" , " Naomi" , " Shac" , " Shac" , " Shac" , " Shac" , " Rac" , " Naomi" , " Benny" ],
"Alyssa Thompson": [" Rac" , " Naomi" , " Snoof" , " Snoof" , " Benny" , " Shac" , " Snoof" , " Benny" , " Shac" , " Rac" , " Naomi" , " Rac" , " Naomi" , " Naomi" , " Rac" , " Shac" ],
"Amanda Andris": [" Naomi" , " Shac" , " Shac" , " Naomi" , " Shac" , " Benny" , " Snoof" , " Snoof" , " Shac" , " Benny" , " Naomi" , " Shac" , " Rac" , " Shac" , " Shac" , " Naomi" ],
"Amberly Herbst": [" Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" ],
"Amelia Masters": [" Naomi" , " Snoof" , " Benny" , " Benny" , " Rac" , " Rac" , " Rac" , " Shac" , " Snoof" , " Benny" , " Naomi" , " Naomi" , " Naomi" , " Rac" , " Rac" , " Rac" ],
"Annika Risinger": [" Benny" , " Benny" , " Rac" , " Naomi" , " Benny" , " Naomi" , " Benny" , " Naomi" , " Shac" , " Snoof" , " Shac" , " Naomi" , " Rac" , " Rac" , " Rac" , " Snoof" ],
"Ashlynn Feezor": [" Snoof" , " Rac" , " Shac" , " Naomi" , " Naomi" , " Benny" , " Shac" , " Shac" , " Rac" , " Snoof" , " Shac" , " Rac" , " Rac" , " Benny" , " Naomi" , " Naomi" ],
"Aubrey McClure": [" Shac" , " Naomi" , " Naomi" , " Benny" , " Snoof" , " Benny" , " Rac" , " Rac" , " Naomi" , " Rac" , " Rac" , " Benny" , " Snoof" , " Benny" , " Benny" , " Benny" ],
"Ben Shearin": [" Naomi" , " Shac" , " Benny" , " Snoof" , " Naomi" , " Rac" , " Shac" , " Benny" , " Snoof" , " Shac" , " Benny" , " Naomi" , " Snoof" , " Naomi" , " Rac" , " Snoof" ],
"Brandis Ulrich": [" Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" ],
"Carl Hoefer": [" Snoof" , " Snoof" , " Shac" , " Naomi" , " Shac" , " Rac" , " Naomi" , " Shac" , " Snoof" , " Rac" , " Shac" , " Snoof" , " Shac" , " Naomi" , " Benny" , " Naomi" ],
"Chaius Herbst": [" Snoof" , " Rac" , " Shac" , " Snoof" , " Snoof" , " Snoof" , " Naomi" , " Snoof" , " Rac" , " Shac" , " Rac" , " Rac" , " Naomi" , " Naomi" , " Naomi" , " Rac" ],
"Chris Michels": [" Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" ],
"Cooper White": [" Benny" , " Benny" , " Shac" , " Benny" , " Naomi" , " Snoof" , " Rac" , " Benny" , " Rac" , " Snoof" , " Benny" , " Benny" , " Benny" , " Benny" , " Shac" , " Shac" ],
"Daphne Yates": [" Benny" , " Snoof" , " Benny" , " Naomi" , " Rac" , " Rac" , " Benny" , " Snoof" , " Benny" , " Benny" , " Naomi" , " Rac" , " Naomi" , " Snoof" , " Shac" , " Shac" ],
"Donny Spaulding": [" Shac" , " Shac" , " Benny" , " Snoof" , " Rac" , " Benny" , " Naomi" , " Rac" , " Rac" , " Rac" , " Naomi" , " Shac" , " Shac" , " Snoof" , " Rac" , " Snoof" ],
"Eliana Woodman": [" Snoof" , " Shac" , " Rac" , " Naomi" , " Shac" , " Shac" , " Naomi" , " Rac" , " Shac" , " Rac" , " Naomi" , " Benny" , " Benny" , " Shac" , " Shac" , " Rac" ],
"Ellie Baird": [" Benny" , " Rac" , " Snoof" , " Shac" , " Naomi" , " Snoof" , " Naomi" , " Snoof" , " Snoof" , " Rac" , " Rac" , " Naomi" , " Shac" , " Rac" , " Naomi" , " Shac" ],
"Emilynn Combs": [" Benny" , " Rac" , " Snoof" , " Shac" , " Shac" , " Rac" , " Snoof" , " Naomi" , " Shac" , " Snoof" , " Snoof" , " Rac" , " Rac" , " Naomi" , " Rac" , " Naomi" ],
"Eric Herbst": [" Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" ],
"Evan Herbst": [" Shac" , " Rac" , " Benny" , " Snoof" , " Naomi" , " Snoof" , " Shac" , " Rac" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Naomi" , " Snoof" , " Shac" , " Naomi" ],
"Everett Woodman": [" Rac" , " Shac" , " Benny" , " Naomi" , " Shac" , " Benny" , " Shac" , " Benny" , " Rac" , " Naomi" , " Rac" , " Benny" , " Shac" , " Benny" , " Naomi" , " Rac" ],
"Evie Jenkins": [" Naomi" , " Benny" , " Snoof" , " Rac" , " Naomi" , " Naomi" , " Snoof" , " Benny" , " Benny" , " Naomi" , " Naomi" , " Shac" , " Shac" , " Rac" , " Shac" , " Snoof" ],
"Grace Masters": [" Rac" , " Naomi" , " Snoof" , " Rac" , " Snoof" , " Shac" , " Snoof" , " Shac" , " Snoof" , " Shac" , " Snoof" , " Shac" , " Rac" , " Shac" , " Rac" , " Rac" ],
"Griffin Moore": [" Shac" , " Shac" , " Naomi" , " Naomi" , " Rac" , " Snoof" , " Snoof" , " Naomi" , " Naomi" , " Snoof" , " Shac" , " Snoof" , " Benny" , " Naomi" , " Rac" , " Shac" ],
"Hannah Spaulding": [" Shac" , " Benny" , " Shac" , " Benny" , " Benny" , " Rac" , " Naomi" , " Naomi" , " Benny" , " Snoof" , " Rac" , " Benny" , " Shac" , " Shac" , " Shac" , " Shac" ],
"Harper McGowan": [" Rac" , " Naomi" , " Rac" , " Snoof" , " Rac" , " Shac" , " Snoof" , " Benny" , " Benny" , " Shac" , " Naomi" , " Rac" , " Snoof" , " Snoof" , " Snoof" , " Benny" ],
"Hayden Studnicki": [" Snoof" , " Benny" , " Shac" , " Shac" , " Snoof" , " Naomi" , " Naomi" , " Naomi" , " Shac" , " Shac" , " Snoof" , " Snoof" , " Shac" , " Rac" , " Naomi" , " Naomi" ],
"Hayley Michels": [" Rac" , " Rac" , " Shac" , " Naomi" , " Naomi" , " Shac" , " Rac" , " Shac" , " Snoof" , " Rac" , " Benny" , " Naomi" , " Naomi" , " Naomi" , " Snoof" , " Rac" ],
"Hunter Studnicki": [" Snoof" , " Benny" , " Rac" , " Shac" , " Naomi" , " Shac" , " Shac" , " Snoof" , " Benny" , " Rac" , " Snoof" , " Naomi" , " Benny" , " Naomi" , " Benny" , " Snoof" ],
"Isaiah Herbst": [" Shac" , " Naomi" , " Rac" , " Shac" , " Rac" , " Snoof" , " Naomi" , " Benny" , " Benny" , " Snoof" , " Benny" , " Benny" , " Benny" , " Naomi" , " Benny" , " Rac" ],
"Isaiah Schwoerer": [" Naomi" , " Benny" , " Benny" , " Rac" , " Rac" , " Benny" , " Rac" , " Naomi" , " Benny" , " Naomi" , " Shac" , " Snoof" , " Naomi" , " Rac" , " Benny" , " Naomi" ],
"Jacob Hughes": [" Shac" , " Benny" , " Snoof" , " Benny" , " Shac" , " Benny" , " Snoof" , " Shac" , " Shac" , " Rac" , " Naomi" , " Shac" , " Benny" , " Rac" , " Benny" , " Rac" ],
"Jacob Stanfield": [" Rac" , " Benny" , " Snoof" , " Rac" , " Benny" , " Naomi" , " Snoof" , " Snoof" , " Naomi" , " Shac" , " Benny" , " Snoof" , " Shac" , " Shac" , " Rac" , " Benny" ],
"Jesse Baird": [" Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" ],
"Jonathan Goodyear": [" Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" , " Rac" ],
"Kobi White": [" Shac" , " Shac" , " Rac" , " Rac" , " Benny" , " Shac" , " Naomi" , " Rac" , " Naomi" , " Snoof" , " Rac" , " Benny" , " Rac" , " Naomi" , " Rac" , " Benny" ],
"Lauren Fehr": [" Naomi" , " Snoof" , " Rac" , " Rac" , " Rac" , " Snoof" , " Rac" , " Shac" , " Naomi" , " Shac" , " Snoof" , " Shac" , " Benny" , " Benny" , " Shac" , " Snoof" ],
"Levi Landes": [" Shac" , " Naomi" , " Rac" , " Shac" , " Naomi" , " Benny" , " Shac" , " Naomi" , " Benny" , " Naomi" , " Benny" , " Rac" , " Rac" , " Snoof" , " Snoof" , " Benny" ],
"Lexi Baird": [" Naomi" , " Naomi" , " Naomi" , " Benny" , " Shac" , " Naomi" , " Shac" , " Naomi" , " Benny" , " Naomi" , " Snoof" , " Benny" , " Benny" , " Benny" , " Snoof" , " Snoof" ],
"Lexi Horton": [" Naomi" , " Snoof" , " Naomi" , " Shac" , " Rac" , " Rac" , " Benny" , " Snoof" , " Snoof" , " Shac" , " Benny" , " Shac" , " Snoof" , " Benny" , " Snoof" , " Shac" ],
"Lindsey Studnicki": [" Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" ],
"Lizzy Henard": [" Rac" , " Naomi" , " Benny" , " Shac" , " Snoof" , " Benny" , " Naomi" , " Shac" , " Shac" , " Naomi" , " Shac" , " Shac" , " Snoof" , " Shac" , " Shac" , " Rac" ],
"Lucy Kramer": [" Shac" , " Shac" , " Rac" , " Naomi" , " Shac" , " Naomi" , " Shac" , " Benny" , " Snoof" , " Naomi" , " Shac" , " Snoof" , " Benny" , " Snoof" , " Naomi" , " Rac" ],
"Luke Jun": [" Benny" , " Snoof" , " Naomi" , " Naomi" , " Benny" , " Benny" , " Benny" , " Rac" , " Benny" , " Rac" , " Rac" , " Naomi" , " Rac" , " Benny" , " Snoof" , " Shac" ],
"Lydia Hurd": [" Rac" , " Benny" , " Naomi" , " Snoof" , " Shac" , " Naomi" , " Snoof" , " Naomi" , " Naomi" , " Shac" , " Rac" , " Snoof" , " Benny" , " Snoof" , " Snoof" , " Shac" ],
"Mae Jones": [" Rac" , " Naomi" , " Rac" , " Shac" , " Naomi" , " Naomi" , " Rac" , " Benny" , " Shac" , " Benny" , " Snoof" , " Rac" , " Benny" , " Shac" , " Naomi" , " Snoof" ],
"Maggie Hughes": [" Benny" , " Shac" , " Snoof" , " Naomi" , " Benny" , " Naomi" , " Naomi" , " Naomi" , " Rac" , " Benny" , " Snoof" , " Benny" , " Rac" , " Rac" , " Benny" , " Shac" ],
"Max Hudson": [" Snoof" , " Naomi" , " Shac" , " Rac" , " Benny" , " Rac" , " Benny" , " Naomi" , " Naomi" , " Naomi" , " Benny" , " Snoof" , " Snoof" , " Rac" , " Naomi" , " Benny" ],
"Molly Kinzinger": [" Snoof" , " Snoof" , " Naomi" , " Shac" , " Benny" , " Shac" , " Naomi" , " Shac" , " Rac" , " Rac" , " Rac" , " Naomi" , " Snoof" , " Benny" , " Naomi" , " Shac" ],
"Natalie Heil": [" Benny" , " Naomi" , " Snoof" , " Snoof" , " Rac" , " Naomi" , " Rac" , " Rac" , " Snoof" , " Naomi" , " Benny" , " Shac" , " Naomi" , " Rac" , " Benny" , " Naomi" ],
"Paige Kinzinger": [" Naomi" , " Snoof" , " Naomi" , " Benny" , " Benny" , " Naomi" , " Benny" , " Snoof" , " Shac" , " Benny" , " Snoof" , " Shac" , " Rac" , " Snoof" , " Benny" , " Benny" ],
"Parker Michels": [" Snoof" , " Shac" , " Benny" , " Snoof" , " Snoof" , " Rac" , " Rac" , " Shac" , " Shac" , " Snoof" , " Shac" , " Naomi" , " Naomi" , " Naomi" , " Rac" , " Rac" ],
"Pierce Vrooman": [" Benny" , " Benny" , " Shac" , " Shac" , " Snoof" , " Naomi" , " Shac" , " Rac" , " Snoof" , " Benny" , " Benny" , " Rac" , " Naomi" , " Shac" , " Snoof" , " Naomi" ],
"Raymond Hoefer": [" Naomi" , " Rac" , " Benny" , " Rac" , " Benny" , " Shac" , " Benny" , " Snoof" , " Naomi" , " Shac" , " Naomi" , " Rac" , " Shac" , " Snoof" , " Snoof" , " Naomi" ],
"Reagan DeHaan": [" Rac" , " Snoof" , " Naomi" , " Benny" , " Snoof" , " Shac" , " Rac" , " Benny" , " Rac" , " Benny" , " Rac" , " Snoof" , " Snoof" , " Naomi" , " Shac" , " Snoof" ],
"Ryan Heil": [" Benny" , " Naomi" , " Snoof" , " Rac" , " Snoof" , " Shac" , " Benny" , " Snoof" , " Rac" , " Snoof" , " Naomi" , " Snoof" , " Naomi" , " Benny" , " Naomi" , " Benny" ],
"Sam Masters": [" Benny" , " Shac" , " Shac" , " Benny" , " Rac" , " Snoof" , " Shac" , " Rac" , " Naomi" , " Benny" , " Benny" , " Rac" , " Rac" , " Shac" , " Naomi" , " Snoof" ],
"Sarah Masters": [" Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" , " Shac" ],
"Sophie McCree": [" Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" , " Benny" ],
"Sophie Nussbaum": [" Rac" , " Rac" , " Snoof" , " Rac" , " Shac" , " Snoof" , " Snoof" , " Rac" , " Rac" , " Benny" , " Rac" , " Snoof" , " Snoof" , " Snoof" , " Shac" , " Naomi" ],
"Sydney Brown": [" Naomi" , " Snoof" , " Naomi" , " Snoof" , " Shac" , " Rac" , " Benny" , " Benny" , " Naomi" , " Benny" , " Shac" , " Benny" , " Snoof" , " Shac" , " Snoof" , " Benny" ],
"Walt Baertsch": [" Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" , " Snoof" ],
"Zander Hoefer": [" Snoof" , " Rac" , " Naomi" , " Benny" , " Snoof" , " Snoof" , " Benny" , " Rac" , " Rac" , " Naomi" , " Shac" , " Benny" , " Naomi" , " Snoof" , " Snoof" , " Benny" ],
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
            let html = `<p><h2><strong>Vehicles for ${name}:</strong></h2></p>`;
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
