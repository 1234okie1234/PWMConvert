// Function for conversion calculations
function convert() {
    var sourceValue = document.getElementById('sourceValue').value;
    var conversionType = document.getElementById('conversion').value;
    var customRateValue = document.getElementById('customRate').value || 3.33;
    var destinationValue;

    try {
        sourceValue = parseFloat(sourceValue);
        customRateValue = parseFloat(customRateValue);

        if (isNaN(sourceValue) || isNaN(customRateValue)) {
            throw new Error('Invalid input');
        }

        if (sourceValue < 0) {
            destinationValue = 'Invalid input! Enter a non-negative number.';
        } else {
            switch (conversionType) {
                case 'bound_to_dollars': destinationValue = sourceValue * 100 / 12000; break;
                case 'bound_to_gold': destinationValue = sourceValue * 1000000 / 396; break;
                case 'bound_to_unbound': destinationValue = sourceValue * 6000 / 12000; break;
                case 'dollars_to_bound': destinationValue = sourceValue * 12000 / 100; break;
                case 'dollars_to_gold': destinationValue = sourceValue * 1000000 / customRateValue; break;
                case 'dollars_to_unbound': destinationValue = sourceValue * 6000 / 100; break;
                case 'gold_to_bound': destinationValue = sourceValue * 396 / 1000000; break;
                case 'gold_to_dollars': destinationValue = sourceValue * customRateValue / 1000000; break;
                case 'gold_to_unbound': destinationValue = sourceValue * 198 / 1000000; break;
                case 'unbound_to_bound': destinationValue = sourceValue * 12000 / 6000; break;
                case 'unbound_to_dollars': destinationValue = sourceValue * 100 / 6000; break;
                case 'unbound_to_gold': destinationValue = sourceValue * 1000000 / 198; break;
            }
        }

        if (typeof destinationValue === 'number') {
            destinationValue = destinationValue.toLocaleString('en-US');
        }
    } catch (e) {
        destinationValue = 'Invalid input! Enter a number.';
    }

    document.getElementById('destinationValue').value = destinationValue;
}

// Function to handle tab switching
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Function to populate elixirs
function populateElixirs() {
    const elixirsDiv = document.getElementById('Elixirs');
    const coreElixirs = [
        "Avatar",
        "Body Indestructible",
        "Dispelling Power",
        "Enemy’s Bane",
        "Singing Phoenix",
        "Slicer",
        "Selfless Servitude"
    ];
    const regularElixirs = [
        "Allying Blade",
        "Allying Shield",
        "Certainty",
        "Dispelling Evil",
        "Energy Thief",
        "Getaway",
        "Impulse",
        "Late Strike",
        "Stand your Ground",
        "Suden Strike",
        "Unbreakable",
        "Unstoppable Force",
        "Void Might",
        "Warsoul"
    ];

    let html = '<h2>Core Elixir</h2>';
    coreElixirs.forEach((title, index) => {
        html += `<div class="elixir-item">
                    <img src="${index + 1}.png" alt="${title}" />
                    <p>${title}</p>
                </div>`;
    });

    html += '<h2>Regular Elixir</h2>';
    regularElixirs.forEach((title, index) => {
        html += `<div class="elixir-item">
                    <img src="${index + 1 + coreElixirs.length}.png" alt="${title}" />
                    <p>${title}</p>
                </div>`;
    });

    elixirsDiv.innerHTML = html;
}

// Make the "Conversion" tab active by default when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
    populateElixirs();
});
