function increaseFontSize() {
    console.log("INCREASE FONT SIZE");
    // for (let element in document.body.getElementsByClassName('productCard')) {
    //     console.log(document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize);
    //     document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize = document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize + (0.5 * 0.2) + "em";
    //     document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize = document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize + (0.5 * 0.2) + "em";
    // }
    if (document.body.style.fontSize === "") {
        document.body.style.fontSize = "1.0px";
    }
    console.log(document.body.style.fontSize);
    let fontSize = document.body.style.fontSize.split(' ')[0];
    document.body.style.fontSize = parseFloat(fontSize) + (0.2) + "px";
}

function decreaseFontSize() {
    console.log("DECREASE FONT SIZE");
    if (document.body.style.fontSize === "") {
        document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) - (0.2) + "em";
}

// console.log(document.body.getElementsByClassName('productCard'));
// for (let element in document.body.getElementsByClassName('productCard')) {
// 	console.log(document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize);
// 	document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize = document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize + (multiplier * 0.2) + "em";
// 	document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize = document.body.getElementsByClassName('productCard').item(element).getElementsByClassName('productTitle').item(0).style.fontSize + (multiplier * 0.2) + "em";
// }
// .style.fontSize = parseFloat(document.body.getElementsByClassName('productCard').style.fontSize) + (multiplier * 0.2) + "em";