function increaseFontSize() {
    let bodyFontSize = document.body.style.fontSize;
    if (bodyFontSize === "1.25em") {
        alert("You have reached the maximum size!");
        return;
    }
    if (bodyFontSize === "") {
        bodyFontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(bodyFontSize) + (0.05) + "em";
}

function decreaseFontSize() {
    let bodyFontSize = document.body.style.fontSize;
    if (bodyFontSize === "0.75em") {
        alert("You have reached the minimum size!");
        return;
    }
    if (bodyFontSize === "") {
        bodyFontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(bodyFontSize) - (0.05) + "em";
}