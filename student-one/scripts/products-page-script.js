// colors for the buttons to add and remove products
let addButtonColor = "#00c421";
let removeButtonColor = "#ff2540";

// the total amount
let total = 0;

// keeping track of which products are selected
let isIronManSelected = false;
let isCaptainAmericaSelected = false;
let isThorSelected = false;

// keeping track of the amount of each product
let ironManQuantity = 1;
let captainAmericaQuantity = 1;
let thorQuantity = 1;

// price of each product
let IRON_MAN_PRICE = 18.99;
let CAPTAIN_AMERICA_PRICE = 14.99;
let THOR_PRICE = 16.99;

function switchProductButton(button, isSelected) {
    if (isSelected) {
        button.style.backgroundColor = removeButtonColor;
        button.innerText = "Remove";
    } else {
        button.style.backgroundColor = addButtonColor;
        button.innerText = "Add";
    }
}

function ironManOnClick() {
    let button = document.getElementById('ironMan');
    let option = document.getElementById('ironManQuantity');
    let amount = option.options[option.selectedIndex].value;

    if (!isIronManSelected) {
        isIronManSelected = true;
        total += amount * IRON_MAN_PRICE;
    } else {

        isIronManSelected = false;
        total -= amount * IRON_MAN_PRICE;
    }
    ironManQuantity = amount;
    total = Math.round(total * 100) / 100;

    document.getElementById('total').innerText = total;
    switchProductButton(button, isIronManSelected);
}

function captainAmericaOnClick() {
    let button = document.getElementById('captainAmerica');
    let option = document.getElementById('captainAmericaQuantity');
    let amount = option.options[option.selectedIndex].value;

    if (!isCaptainAmericaSelected) {
        isCaptainAmericaSelected = true;
        total += amount * CAPTAIN_AMERICA_PRICE;
    } else {

        isCaptainAmericaSelected = false;
        total -= amount * CAPTAIN_AMERICA_PRICE;
    }
    captainAmericaQuantity = amount;
    total = Math.round(total * 100) / 100;
    document.getElementById('total').innerText = total;
    switchProductButton(button, isCaptainAmericaSelected);
}

function thorOnClick() {
    let button = document.getElementById('thor');
    let option = document.getElementById('thorQuantity');
    let amount = option.options[option.selectedIndex].value;

    if (!isThorSelected) {
        isThorSelected = true;
        total += amount * THOR_PRICE;
    } else {

        isThorSelected = false;
        total -= amount * THOR_PRICE;
    }
    captainAmericaQuantity = amount;
    total = Math.round(total * 100) / 100;
    document.getElementById('total').innerText = total;
    switchProductButton(button, isThorSelected);
}

function ironManOnSelect() {
    let option = document.getElementById('ironManQuantity');
    let value = option.options[option.selectedIndex].value;

    if (isIronManSelected) {
        total -= ironManQuantity * IRON_MAN_PRICE;
        total += value * IRON_MAN_PRICE;
    }
    ironManQuantity = value;

    total = Math.round(total * 100) / 100;
    document.getElementById('total').innerText = total;
}

function captainAmericaOnSelect() {
    let option = document.getElementById('captainAmericaQuantity');
    let value = option.options[option.selectedIndex].value;

    if (isCaptainAmericaSelected) {
        total -= captainAmericaQuantity * CAPTAIN_AMERICA_PRICE;
        total += value * CAPTAIN_AMERICA_PRICE;
    }
    captainAmericaQuantity = value;

    total = Math.round(total * 100) / 100;
    document.getElementById('total').innerText = total;
}

function thorOnSelect() {
    let option = document.getElementById('thorQuantity');
    let value = option.options[option.selectedIndex].value;

    if (isThorSelected) {
        total -= thorQuantity * THOR_PRICE;
        total += value * THOR_PRICE;
    }
    thorQuantity = value;

    total = Math.round(total * 100) / 100;
    document.getElementById('total').innerText = total;
}

function placeOrder() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;

    if (name === "") {
        alert("Please enter your name!");
        return;
    } else if (email === "") {
        alert("Please enter your email address!");
        return;
    } else if (!email.toLocaleString().includes('@')) {
        alert("Please a valid email address!");
        return;
    } else if (address === "") {
        alert("Please enter your address!");
        return;
    }

    if (!isThorSelected && !isCaptainAmericaSelected && !isIronManSelected) {
        alert("Please select a product!");
        return;
    }

    let productAmount = ``;
    if (isCaptainAmericaSelected) {
        productAmount += `${captainAmericaQuantity} Captain America action figure(s)`
    }

    console.log(productAmount);

    if (isIronManSelected) {
        if (isCaptainAmericaSelected) {
            if (isThorSelected) {
                productAmount += `, ${ironManQuantity} Iron Man action figure(s)`
            } else {
                productAmount += ` & ${ironManQuantity} Iron Man action figure(s)`
            }
        } else {
            productAmount += `${ironManQuantity} Iron Man action figure(s)`
        }
    }
    if (isThorSelected) {
        if (isCaptainAmericaSelected || isIronManSelected) {
            productAmount += ` & ${thorQuantity} Thor action figure(s)`
        } else {
            productAmount += `${thorQuantity} Thor action figure(s)`
        }
    }


    let message = `Hello ${name}! You have ordered ${productAmount}. Your total bill is $${total}.`;
    alert(message);
}