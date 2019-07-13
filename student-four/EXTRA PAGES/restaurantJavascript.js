function changeDiningOption(){
    var diningOption;
    diningOption = document.getElementById("diningOption").value;
    //diningLocation = document.getElementById("select-location").value;
    console.log("the dining option is " + diningOption);
    //console.log("the dining location is " + diningLocation);
    switch(diningOption){
        case "SelectAnOption":
            console.log("inside Buffet case");
            document.getElementById("fastFood1").style.display = "block";
            document.getElementById("icecreamShop").style.display = "block";
            document.getElementById("fastFood2").style.display = "block";
            document.getElementById("restaurant1").style.display = "block";
            document.getElementById("restaurant2").style.display = "block";
            document.getElementById("buffetRestaurant").style.display = "block";
            document.getElementById("candyShop").style.display = "block";
            break;
        case "Buffet":
            console.log("inside Buffet case");
            document.getElementById("fastFood1").style.display = "none";
            document.getElementById("icecreamShop").style.display = "none";
            document.getElementById("fastFood2").style.display = "none";
            document.getElementById("restaurant1").style.display = "none";
            document.getElementById("restaurant2").style.display = "none";
            document.getElementById("buffetRestaurant").style.display = "block";
            document.getElementById("candyShop").style.display = "none";
            break;

        case "Restaurant":
            console.log("inside Restaurant case");
            document.getElementById("fastFood1").style.display = "none";
            document.getElementById("icecreamShop").style.display = "none";
            document.getElementById("fastFood2").style.display = "none";
            document.getElementById("restaurant1").style.display = "block";
            document.getElementById("restaurant2").style.display = "block";
            document.getElementById("buffetRestaurant").style.display = "block";
            document.getElementById("candyShop").style.display = "none";   
            break;

        case "Vegetarian":
            console.log("inside Restaurant case");
            document.getElementById("fastFood1").style.display = "none";
            document.getElementById("icecreamShop").style.display = "none";
            document.getElementById("fastFood2").style.display = "none";
            document.getElementById("restaurant1").style.display = "none";
            document.getElementById("restaurant2").style.display = "block";
            document.getElementById("buffetRestaurant").style.display = "block";
            document.getElementById("candyShop").style.display = "none";   
            break;   

        case "Candy":
            console.log("inside Restaurant case");
            document.getElementById("fastFood1").style.display = "none";
            document.getElementById("icecreamShop").style.display = "none";
            document.getElementById("fastFood2").style.display = "none";
            document.getElementById("restaurant1").style.display = "none";
            document.getElementById("restaurant2").style.display = "none";
            document.getElementById("buffetRestaurant").style.display = "none";
            document.getElementById("candyShop").style.display = "block";   
            break;

        case "Icecream":
            console.log("inside Restaurant case");
            document.getElementById("fastFood1").style.display = "none";
            document.getElementById("icecreamShop").style.display = "block";
            document.getElementById("fastFood2").style.display = "none";
            document.getElementById("restaurant1").style.display = "none";
            document.getElementById("restaurant2").style.display = "none";
            document.getElementById("buffetRestaurant").style.display = "none";
            document.getElementById("candyShop").style.display = "none";   
            break;       
    }
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

function resetDiningOption(){
    console.log("inside Restaurant case");
            document.getElementById("fastFood1").style.display = "block";
            document.getElementById("icecreamShop").style.display = "block";
            document.getElementById("fastFood2").style.display = "block";
            document.getElementById("restaurant1").style.display = "block";
            document.getElementById("restaurant2").style.display = "block";
            document.getElementById("buffetRestaurant").style.display = "block";
            document.getElementById("candyShop").style.display = "block";
}
