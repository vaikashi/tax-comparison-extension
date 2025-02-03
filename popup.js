document.getElementById("calculate").addEventListener("click", function() {
    let income = parseFloat(document.getElementById("income").value);
    if (isNaN(income) || income <= 0) {
        document.getElementById("results").innerHTML = "<p>Please enter a valid income.</p>";
        return;
    }

    function calculateTax2024_25(income) {
        if (income <= 250000) return 0;
        if (income <= 500000) return (income - 250000) * 0.05;
        if (income <= 750000) return 12500 + (income - 500000) * 0.1;
        if (income <= 1000000) return 37500 + (income - 750000) * 0.15;
        if (income <= 1250000) return 75000 + (income - 1000000) * 0.2;
        if (income <= 1500000) return 125000 + (income - 1250000) * 0.25;
        return 187500 + (income - 1500000) * 0.3;
    }

    function calculateTax2025_26(income) {
        if (income <= 400000) return 0;
        if (income <= 800000) return (income - 400000) * 0.05;
        if (income <= 1200000) return 20000 + (income - 800000) * 0.1;
        if (income <= 1600000) return 60000 + (income - 1200000) * 0.15;
        if (income <= 2000000) return 120000 + (income - 1600000) * 0.2;
        if (income <= 2400000) return 200000 + (income - 2000000) * 0.25;
        return 300000 + (income - 2400000) * 0.3;
    }

    let tax2024_25 = calculateTax2024_25(income);
    let tax2025_26 = calculateTax2025_26(income);

    document.getElementById("results").innerHTML = `
        <h3>Results</h3>
        <p>Tax under 2024-25 Regime: ₹${tax2024_25.toLocaleString()}</p>
        <p>Tax under 2025-26 Regime: ₹${tax2025_26.toLocaleString()}</p>
        <p>Difference: ₹${(tax2024_25 - tax2025_26).toLocaleString()}</p>
    `;
});
