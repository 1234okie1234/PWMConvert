function convert() {
    var val = document.getElementById('value').value;
    var conversionType = document.getElementById('conversion').value;
    var result;

    try {
        val = parseFloat(val);
        if (val < 0) {
            result = 'Invalid input! Enter a non-negative number.';
        } else {
            if (conversionType === 'dollars_to_gold') {
                result = val * 1000000 / 3.30;
            } else if (conversionType === 'dollars_to_unbound') {
                result = val * 6000 / 100;
            } else if (conversionType === 'dollars_to_bound') {
                result = val * 12000 / 100;
            } else if (conversionType === 'gold_to_bound') {
                result = val * 396 / 1000000;
            }
        }
    } catch (e) {
        result = 'Invalid input! Enter a number.';
    }

    document.getElementById('result').innerText = result;
}
