function openMenu() {
    document.getElementById("myMenu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("myMenu").style.width = "0";
}

function calculateLevels() {
    var inputNumber = document.getElementById("numberInput").value;
    var messageElement = document.getElementById("message");

    if (inputNumber.length === 5) {
        var number = parseFloat(inputNumber);
        var supportLevel = Math.pow(Math.sqrt(number) - 0.5, 2);
        var resistanceLevel = Math.pow(Math.sqrt(number) + 0.5, 2);

        document.getElementById("support").textContent = supportLevel.toFixed(2);
        document.getElementById("resistance").textContent = resistanceLevel.toFixed(2);
        messageElement.textContent = '';
    } else {
        messageElement.textContent = 'Enter appropriate Levels';
        document.getElementById("support").textContent = '';
        document.getElementById("resistance").textContent = '';
    }
}