
function clearImagesAndDescription(){
    document.getElementById("imageDiv").innerHTML = "";
    document.getElementById("description").innerHTML = "";
}
function image1Description(){
    console.log('inside function')
    document.getElementById("imageDiv").innerHTML = document.getElementById("hiddenImage1").innerHTML;
    document.getElementById("description").innerHTML = document.getElementById("description1").innerHTML;

}
function image2Description(){
    console.log('inside function')
    document.getElementById("imageDiv").innerHTML = document.getElementById("hiddenImage2").innerHTML;     
    document.getElementById("description").innerHTML = document.getElementById("description2").innerHTML;           
}
function image3Description(){
    console.log('inside function')
    document.getElementById("imageDiv").innerHTML = document.getElementById("hiddenImage3").innerHTML;
    document.getElementById("description").innerHTML = document.getElementById("description3").innerHTML;
}
function image4Description(){
    console.log('inside function')
    document.getElementById("imageDiv").innerHTML = document.getElementById("hiddenImage4").innerHTML;
    document.getElementById("description").innerHTML = document.getElementById("description4").innerHTML;
}
function image5Description(){
    console.log('inside function')
    document.getElementById("imageDiv").innerHTML = document.getElementById("hiddenImage5").innerHTML
    document.getElementById("description").innerHTML = document.getElementById("description5").innerHTML;

}
//function to call when colours change is requested
function changeBGColour(){
    console.log("within changeBGColour function");
    //variables assigned to the values of the chosen options
    var chosenBGColour;
    var chosenFontColour;
    chosenBGColour = document.getElementById("BGColourSelection").value;
    chosenFontColour = document.getElementById("fontColourSelection").value;

    console.log("bg colour is" + chosenBGColour);
    console.log("font colour is" + chosenFontColour);
    //document.body.style.backgroundColor = "#000000";

    //using switch case to change background and font colour
    switch (chosenBGColour){
        case "SelectBGColour":
            console.log("inside switchcase")
            document.body.style.backgroundColor = "#ffffff";
            document.getElementById("imageDescription").style.backgroundColor = "#f8f8fb";
            document.getElementById("formDivision").style.backgroundColor = "#f8f8fb";
            document.getElementById("description").style.color = "#000000";
            document.getElementById("breadCrumb").style.color = "#000000";
            document.getElementById("colorSwitchGuide").style.color = "#000000";
            console.log("bg colour is white");
            break;
        case "BGColour1":
            console.log("inside switchcase")
            document.body.style.backgroundColor = "#000000";
            document.getElementById("imageDescription").style.backgroundColor = "#3a3a3a";
            document.getElementById("formDivision").style.backgroundColor = "#3a3a3a";
            document.getElementById("description").style.color = "#ffffff";
            document.getElementById("breadCrumb").style.color = "#ffffff";
            document.getElementById("colorSwitchGuide").style.color = "#ffffff";
            console.log("bg colour is blacK");
            break;
        case "BGColour2":
            console.log("inside switchcase")
            document.body.style.backgroundColor = "#f4a341";
            document.getElementById("imageDescription").style.backgroundColor = "#f4d341";
            document.getElementById("formDivision").style.backgroundColor = "#f4d341";
            document.getElementById("description").style.color = "#000000";
            document.getElementById("breadCrumb").style.color = "#000000";
            document.getElementById("colorSwitchGuide").style.color = "#000000";
            console.log("bg colour is yellow ochre");
            break;
        case "BGColour3":
            console.log("inside switchcase")
            document.body.style.backgroundColor = "#ce2525";
            document.getElementById("imageDescription").style.backgroundColor = "#ed5353";
            document.getElementById("formDivision").style.backgroundColor = "#ed5353";
            document.getElementById("description").style.color = "#000000";
            document.getElementById("colorSwitchGuide").style.color = "#000000";
            console.log("bg colour is crimson");
            break;
        case "BGColour4":
            console.log("inside switchcase")
            document.body.style.backgroundColor = "#6bbeff";
            document.getElementById("imageDescription").style.backgroundColor = "#0072cc";
            document.getElementById("formDivision").style.backgroundColor = "#0072cc";
            document.getElementById("description").style.color = "#ffffff";
            document.getElementById("breadCrumb").style.color = "#000000";
            document.getElementById("colorSwitchGuide").style.color = "#000000";
            console.log("bg colour is seablue");
            break;
        case "BGColour5":
            console.log("inside switchcase")
            document.body.style.backgroundColor = "#999999";
            document.getElementById("imageDescription").style.backgroundColor = "#5e5e5e";
            document.getElementById("formDivision").style.backgroundColor = "#5e5e5e";
            document.getElementById("description").style.color = "#ffffff";
            document.getElementById("colorSwitchGuide").style.color = "#ffffff";
            console.log("bg colour is grey");
            break;
        case "BGColour6":
            console.log("inside switchcase")
            document.body.style.backgroundColor = "#ffa3f4";
            document.getElementById("imageDescription").style.backgroundColor = "#9b2d8e";
            document.getElementById("formDivision").style.backgroundColor = "#9b2d8e";
            document.getElementById("description").style.color = "#ffffff";
            document.getElementById("colorSwitchGuide").style.color = "#000000";
            console.log("bg colour is pink");
            break;
        
    }
    //Font color manipulation
    switch (chosenFontColour){
        case "fontColour1":
            console.log("inside font change");
            document.getElementById("description").style.color = "#f4d742";
            break;
            break;
        case "fontColour2":
            console.log("inside font change");
            document.getElementById("description").style.color = "#ce1212";
            break;
        case "fontColour3":
            console.log("inside font change");
            document.getElementById("description").style.color = "#4f4f4f";
            break;
        case "fontColour4":
            console.log("inside font change");
            document.getElementById("description").style.color = "#1db758";
            break;
        case "fontColour5":
            console.log("inside font change");
            document.getElementById("description").style.color = "#2e3bb2";
            break;
        case "fontColour6":
            console.log("inside font change");
            document.getElementById("description").style.color = "#ffffff";
            break;
    }
}

//function to reset the page
function resetPage(){
    console.log("inside resetPage function")
    document.body.style.backgroundColor = "#ffffff";
    document.getElementById("imageDescription").style.backgroundColor = "#f8f8fb";
    document.getElementById("formDivision").style.backgroundColor = "#f8f8fb";
    document.getElementById("description").style.color = "#000000";
    console.log("page has been reset");
}

//Font Size Manipulation
function increaseFontSize() {
    console.log("INCREASE FONT SIZE");
    if (document.body.style.fontSize === "") {
        document.body.style.fontSize = "1.0em";
    }
    console.log(document.body.style.fontSize);
    let fontSize = document.body.style.fontSize.split(' ')[0];
    document.body.style.fontSize = parseFloat(fontSize) + (0.2) + "em   ";
}

function decreaseFontSize() {
    console.log("DECREASE FONT SIZE");
    if (document.body.style.fontSize === "") {
        document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) - (0.2) + "em";
}


