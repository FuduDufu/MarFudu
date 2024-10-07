let peopleCount = 1;

function updatePeopleCount(change) {
    peopleCount += change;
    if (peopleCount < 1) {
        peopleCount = 1;
    }
    document.getElementById("peopleCount").innerText = peopleCount;
    calculateTotal();
}

const calculateTotal = () => {
    const billAmount = Number(document.getElementById("billtotalinput").value);
    const tipPercentage = Number(document.getElementById("tipPercentage").value);
    const totalPerPerson = ((billAmount * (1 + tipPercentage / 100)) / peopleCount).toFixed(2);
    document.getElementById("totalPerPerson").innerText = `$${totalPerPerson}`;
}

// Event listeners for buttons and inputs
document.getElementById("increase").onclick = () => updatePeopleCount(1);
document.getElementById("decrease").onclick = () => updatePeopleCount(-1);
document.getElementById("billtotalinput").oninput = calculateTotal;
document.getElementById("tipPercentage").oninput = calculateTotal;
