document.addEventListener('DOMContentLoaded', function () {
    const data = {
        "Bus List 1": [
            { vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Aubrey McClure", "Emilynn Combs", "Lauren Fehr", "Levi Landes", "Lydia Hurd", "Mae Jones", "Maggie Hughes", "Parker Michels", "Pierce Vrooman", "Reagan DeHaan", "Sydney Brown", "Zander Hoefer"] },
            { vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Amelia Masters", "Annika Risinger", "Ashlynn Feezor", "Ben Shearin", "Daphne Yates", "Donny Spaulding", "Grace Masters", "Hayden Studnicki", "Hayley Michels", "Kobi White", "Lexi Baird", "Max Hudson"] },
            { vehicle: "Benny", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Adam Jun", "Addy Jeffrey", "Alyssa Thompson", "Carl Hoefer", "Evan Herbst", "Everett Woodman", "Hunter Studnicki", "Jacob Hughes", "Lucy Kramer", "Molly Kinzinger", "Ryan Heil", "Sam Masters"] },
            { vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Aine Staggs", "Chaius Herbst", "Cooper White", "Eliana Woodman", "Ellie Baird", "Hannah Spaulding", "Karis Wolfe", "Lexi Horton", "Natalie Heil", "Paige Kinzinger", "Raymond Hoefer"] },
            { vehicle: "Rental", passengers: ["Chris Michels", "Jonathan Goodyear", "Amanda Andris", "Evie Jenkins", "Griffin Moore", "Harper McGowan", "Isaiah Herbst", "Isaiah Schwoerer", "Jacob Stanfield", "Lizzy Henard", "Luke Jun", "Sophie Nussbaum"] },
        ],
        "Bus List 2": [
            { vehicle: "Rac", passengers: ["Brandis Ulrich", "Sophie McCree", "Amanda Andris", "Emilynn Combs", "Evan Herbst", "Grace Masters", "Hunter Studnicki", "Jacob Stanfield", "Luke Jun", "Maggie Hughes", "Natalie Heil", "Pierce Vrooman", "Reagan DeHaan", "Sydney Brown"] },
            { vehicle: "Shac", passengers: ["Jesse Baird", "Sarah Masters", "Alyssa Thompson", "Amelia Masters", "Annika Risinger", "Chaius Herbst", "Eliana Woodman", "Ellie Baird", "Everett Woodman", "Isaiah Schwoerer", "Kobi White", "Levi Landes", "Paige Kinzinger", "Raymond Hoefer"] },
            { vehicle: "Benny", passengers: ["Walt Baertsch", "Lindsey Studnicki", "Aine Staggs", "Cooper White", "Donny Spaulding", "Evie Jenkins", "Karis Wolfe", "Lexi Baird", "Lexi Horton", "Lizzy Henard", "Lydia Hurd", "Mae Jones", "Parker Michels", "Sam Masters"] },
            { vehicle: "Naomi", passengers: ["Eric Herbst", "Amberly Herbst", "Ashlynn Feezor", "Aubrey McClure", "Ben Shearin", "Carl Hoefer", "Daphne Yates", "Hayden Studnicki", "Isaiah Herbst", "Jacob Hughes", "Lucy Kramer", "Molly Kinzinger", "Ryan Heil"] },
            { vehicle: "Rental", passengers: ["Chris Michels", "Jonathan Goodyear", "Adam Jun", "Addy Jeffrey", "Griffin Moore", "Hannah Spaulding", "Harper McGowan", "Hayley Michels", "Lauren Fehr", "Max Hudson", "Sophie Nussbaum", "Zander Hoefer"] },
        ]
    };

    const busListDropdown = document.getElementById('busListDropdown');
    const passengerDisplay = document.getElementById('passengerDisplay');

    // Populate dropdown with bus lists
    for (const busList in data) {
        const option = document.createElement('option');
        option.value = busList;
        option.textContent = busList;
        busListDropdown.appendChild(option);
    }

    // Event listener for dropdown change
    busListDropdown.addEventListener('change', function () {
        const selectedBusList = busListDropdown.value;
        localStorage.setItem('selectedBusList', selectedBusList);
        displayPassengers(selectedBusList);
    });

    // Display passengers for the previously selected bus list
    const selectedBusList = localStorage.getItem('selectedBusList');
    if (selectedBusList) {
        busListDropdown.value = selectedBusList;
        displayPassengers(selectedBusList);
    }

    function displayPassengers(busList) {
        const vehicles = data[busList];
        if (vehicles) {
            let html = `<p><strong>Passengers for ${busList}:</strong></p>`;
            html += '<table>';
            html += '<thead><tr>';
            vehicles.forEach(vehicle => {
                html += `<th>${vehicle.vehicle}</th>`;
            });
            html += '</tr></thead><tbody>';

            const maxPassengers = Math.max(...vehicles.map(vehicle => vehicle.passengers.length));

            for (let i = 0; i < maxPassengers; i++) {
                html += '<tr>';
                vehicles.forEach(vehicle => {
                    html += `<td>${vehicle.passengers[i] || ''}</td>`;
                });
                html += '</tr>';
            }

            html += '</tbody></table>';
            passengerDisplay.innerHTML = html;
        } else {
            passengerDisplay.innerHTML = '';
        }
    }
});
