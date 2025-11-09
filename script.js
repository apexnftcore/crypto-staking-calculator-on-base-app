document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculatorForm');
    const results = document.getElementById('results');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const amount = parseFloat(document.getElementById('amount').value);
        const apy = parseFloat(document.getElementById('apy').value);
        
        if (isNaN(amount) || isNaN(apy) || amount <= 0 || apy <= 0) {
            alert('Please enter valid positive numbers for amount and APY.');
            return;
        }
        
        // Calculate rewards (simple interest)
        const daily = (amount * (apy / 100)) / 365;
        const weekly = (amount * (apy / 100)) / 52;
        const monthly = (amount * (apy / 100)) / 12;
        const yearly = amount * (apy / 100);
        
        // Update table
        document.getElementById('dailyReward').textContent = daily.toFixed(4);
        document.getElementById('weeklyReward').textContent = weekly.toFixed(4);
        document.getElementById('monthlyReward').textContent = monthly.toFixed(4);
        document.getElementById('yearlyReward').textContent = yearly.toFixed(4);
        
        // Show results
        results.classList.remove('hidden');
    });
});
