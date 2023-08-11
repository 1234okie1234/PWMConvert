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
                case 'dollars_to_gold': destinationValue = sourceValue * 1000000 / 3.30; break;
                case 'gold_to_dollars': destinationValue = sourceValue * 3.30 / 1000000; break;
                case 'dollars_to_unbound': destinationValue = sourceValue * 6000 / 100; break;
                case 'unbound_to_dollars': destinationValue = sourceValue * 100 / 6000; break;
                case 'dollars_to_bound': destinationValue = sourceValue * 12000 / 100; break;
                case 'bound_to_dollars': destinationValue = sourceValue * 100 / 12000; break;
                case 'gold_to_bound': destinationValue = sourceValue * 396 / 1000000; break;
                case 'bound_to_gold': destinationValue = sourceValue * 1000000 / 396; break;
                case 'gold_to_unbound': destinationValue = sourceValue * 6000 / 3.30; break;
                case 'unbound_to_gold': destinationValue = sourceValue * 3.30 / 6000; break;
                case 'unbound_to_bound': destinationValue = sourceValue * 2; break;
                case 'bound_to_unbound': destinationValue = sourceValue / 2; break;
            }
        }
    } catch (e) {
        destinationValue = 'Invalid input! Enter a number.';
    }

    document.getElementById('destinationValue').value = destinationValue;
}
