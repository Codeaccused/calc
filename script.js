function calculate() {
    const holdingsInput = document.getElementById('holdings');
    const volumeInput = document.getElementById('volume');
    const resultDisplay = document.getElementById('result');

    const holdings = parseFloat(holdingsInput.value);
    const volume = parseFloat(volumeInput.value);

    // Input validation
    if (isNaN(holdings) || isNaN(volume)) {
        resultDisplay.value = "Please enter valid numbers";
        return;
    }

    if (holdings < 0 || holdings > 1000000000) {
        resultDisplay.value = "Holdings must be between 0 and 1,000,000,000";
        return;
    }

    if (volume < 0) {
        resultDisplay.value = "Volume cannot be negative";
        return;
    }

    // Calculation: (5% of Volume / 1,000,000,000) * Holdings
    const result = (0.05 * volume / 1000000000) * holdings;
    resultDisplay.value = result.toFixed(2); // Display with 2 decimal places
}
