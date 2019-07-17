function filterDisplay(){                           /*used to filter out rides and display*/
    var rideOption = document.getElementById("selectRide").value;

    switch(rideOption){
        case "Roller Coaster Rides":
            document.getElementById("ride1").style.display = "block";
            document.getElementById("ride2").style.display = "block";
            document.getElementById("ride3").style.display = "none";
            document.getElementById("ride4").style.display = "none";
            document.getElementById("ride5").style.display = "block";
            document.getElementById("ride6").style.display = "none";
            return;

        case "First-Person Experience":
            document.getElementById("ride1").style.display = "none";
            document.getElementById("ride2").style.display = "block";
            document.getElementById("ride3").style.display = "block";
            document.getElementById("ride4").style.display = "block";
            document.getElementById("ride5").style.display = "block";
            document.getElementById("ride6").style.display = "none";
            return;

        case "Adventure":
            document.getElementById("ride1").style.display = "none";
            document.getElementById("ride2").style.display = "block";
            document.getElementById("ride3").style.display = "block";
            document.getElementById("ride4").style.display = "block";
            document.getElementById("ride5").style.display = "none";
            document.getElementById("ride6").style.display = "none";
            return;

        default:
            document.getElementById("ride1").style.display = "block";
            document.getElementById("ride2").style.display = "block";
            document.getElementById("ride3").style.display = "block";
            document.getElementById("ride4").style.display = "block";
            document.getElementById("ride5").style.display = "block";
            document.getElementById("ride6").style.display = "block";
            return;

    }
}

displayLastEdit();
function displayLastEdit() {
    var x = document.lastModified;
    document.getElementById("lastEdit").innerHTML = "Last Modified: "+x;
}