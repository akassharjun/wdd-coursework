function changeDiningOption(){
    var diningOption;
    diningOption = document.getElementById("select-type").value;
    //diningLocation = document.getElementById("select-location").value;
    console.log("the dining option is " + diningOption);
    //console.log("the dining location is " + diningLocation);
    switch(diningOption){
        case "Restaurant":
        console.log("inside Restaurant case");
        document.getElementById("fastFoodrestaurant1").style.display="none";
        document.getElementById("fastFoodrestaurant2").style.display="none";
        document.getElementById("fastFoodrestaurant3").style.display="none";
        document.getElementById("candyShop").style.display="none";
        document.getElementById("iceCreamShop").style.display="none";
        return;
        case "Buffet":
        console.log("inside Buffet case");
        document.getElementById("fastFoodrestaurant1").style.display="none";
        document.getElementById("fastFoodrestaurant2").style.display="none";
        document.getElementById("fastFoodrestaurant3").style.display="none";
        document.getElementById("iceCreamShop").style.display="none";
        return
        case "Vegetarian choices":
        console.log("inside Vegetarian case");
        return  
        case "Fast-food outlets":
        console.log("inside Fast-food case");
        return
        case "Ice cream and Sweets":
        console.log("inside Ice cream and Sweets case");
        return
    }
}
