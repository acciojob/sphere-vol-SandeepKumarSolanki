function volume_sphere() {
    // Retrieve the radius value entered by the user
    let radiusBox = document.getElementById('radius');
    let radius = parseFloat(radiusBox.value);

    // Validate if the input is a non-negative number
    if (isNaN(radius) || radius < 0) {
        return 'NaN'; // If the input is invalid, return 'NaN'
    }

    // Calculate the volume of the sphere using the correct formula
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Return the volume rounded to 4 decimal places
    return volume.toFixed(4);
}

// Add an event listener to the form to prevent default submission
let form = document.querySelector('form');
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from actually submitting
    let volumeField = document.getElementById('volume');
    volumeField.value = volume_sphere(); // Update the volume input field with the result
});
