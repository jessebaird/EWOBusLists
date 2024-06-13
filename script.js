document.addEventListener('DOMContentLoaded', function () {
    const data = [
        { id: 1, name: 'John Doe', age: 28, city: 'New York' },
        { id: 2, name: 'Jane Smith', age: 34, city: 'Los Angeles' },
        { id: 3, name: 'Michael Johnson', age: 45, city: 'Chicago' },
        { id: 4, name: 'Emily Davis', age: 23, city: 'Houston' }
    ];

    const dropdown = document.getElementById('dropdown');
    const dataDisplay = document.getElementById('dataDisplay');

    // Populate the dropdown
    data.forEach(person => {
        const option = document.createElement('option');
        option.value = person.id;
        option.textContent = person.name;
        dropdown.appendChild(option);
    });

    // Add event listener to dropdown
    dropdown.addEventListener('change', function () {
        const selectedId = parseInt(dropdown.value);
        const selectedPerson = data.find(person => person.id === selectedId);

        if (selectedPerson) {
            dataDisplay.innerHTML = `
                <p><strong>Name:</strong> ${selectedPerson.name}</p>
                <p><strong>Age:</strong> ${selectedPerson.age}</p>
                <p><strong>City:</strong> ${selectedPerson.city}</p>
            `;
        } else {
            dataDisplay.innerHTML = '';
        }
    });
});
