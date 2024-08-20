document.getElementById('generateButton').addEventListener('click', function() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    const result = document.getElementById('result');
    
    if (isNaN(minValue) || isNaN(maxValue)) {
        result.textContent = "Please enter valid numbers.";
        result.style.color = "pink";
    } else if (minValue >= maxValue) {
        result.textContent = "Minimum value should be less than maximum value.";
        result.style.color = "red";
    } else {
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        result.textContent = `Random Number: ${randomNumber}`;
        result.style.color = "black";
    }
});
