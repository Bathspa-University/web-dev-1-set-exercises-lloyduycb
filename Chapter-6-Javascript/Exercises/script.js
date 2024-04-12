document.addEventListener('DOMContentLoaded', function() {
    const costInput = document.getElementById('cost');
    const litersInput = document.getElementById('liters');
    const calculateBtn = document.getElementById('calculateBtn');
    const totalCostOutput = document.getElementById('totalCost');
    const modal = document.getElementById('myModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const fillAgainBtn = document.getElementById('fillAgainBtn');

    let initialCostPerLiter = parseFloat(costInput.value); // Store initial cost per liter

    // This function calculates the total cost of the amount of liters purchased
    function calculateTotalCost() {
        const costPerLiter = parseFloat(costInput.value);
        const liters = parseFloat(litersInput.value);
        const totalCost = costPerLiter * liters;
        totalCostOutput.textContent = `Total cost: $${totalCost.toFixed(2)}`;
        
        // Show modal with total cost
        if (!isNaN(totalCost)) {
            modal.style.display = 'block';
        } else {
            alert('Please enter valid numbers for cost per liter and liters purchased.');
        }
    }

    // Event listener for button click
    calculateBtn.addEventListener('click', calculateTotalCost);

    // Event listener for close button in modal
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Event listener for fill again button in modal
    fillAgainBtn.addEventListener('click', function() {
        // Clear liters input and total cost output, keep cost per liter
        litersInput.value = '';
        totalCostOutput.textContent = 'Total cost:';
        costInput.value = initialCostPerLiter.toFixed(2); // Reset cost per liter to initial value
        modal.style.display = 'none';
    });
});
