function convert() {
    var sourceValue = document.getElementById('sourceValue').value;
    var conversionType = document.getElementById('conversion').value;
    var destinationValue;

    try {
        sourceValue = parseFloat(sourceValue);
        if (sourceValue < 0) {
            destinationValue = 'Invalid input! Enter a non-negative number.';
        } else {
            switch (conversionType) {
                case 'bound_to_dollars': destinationValue = sourceValue * 100 / 12000; break;
                case 'bound_to_gold': destinationValue = sourceValue * 1000000 / 396; break;
                case 'bound_to_unbound': destinationValue = sourceValue * 6000 / 12000; break;
                case 'dollars_to_bound': destinationValue = sourceValue * 12000 / 100; break;
                case 'dollars_to_gold': destinationValue = sourceValue * 1000000 / 3.3; break;
                case 'dollars_to_unbound': destinationValue = sourceValue * 6000 / 100; break;
                case 'gold_to_bound': destinationValue = sourceValue * 396 / 1000000; break;
                case 'gold_to_dollars': destinationValue = sourceValue * 3.3 / 1000000; break;
                case 'gold_to_unbound': destinationValue = sourceValue * 198 / 1000000; break;
                case 'unbound_to_bound': destinationValue = sourceValue * 12000 / 6000; break;
                case 'unbound_to_dollars': destinationValue = sourceValue * 100 / 6000; break;
                case 'unbound_to_gold': destinationValue = sourceValue * 1000000 / 198; break; // Corrected rate
            }
        }

        // Format the result with commas
        if (typeof destinationValue === 'number') {
            destinationValue = destinationValue.toLocaleString('en-US');
        }
    } catch (e) {
        destinationValue = 'Invalid input! Enter a number.';
    }

    document.getElementById('destinationValue').value = destinationValue;
}
