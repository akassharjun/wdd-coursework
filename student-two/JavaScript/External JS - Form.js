function formValidation(){
    var nameCheck = document.forms["commentsForm"]["customerName"].value;
    var radioCheck = document.forms["commentsForm"]["rating"].value;
    var commentsOut = document.forms["commentsForm"]["comments"].value;
    
    if((nameCheck=="") && (radioCheck=="")){
        alert("Please fill-in the compulsory fields- \n \u2022Name \n \u2022Rating");
        return false;
    } else if(nameCheck==""){
        alert("Please fill-in the compulsory field- \n \u2022Name");
        return false;
    } else if(radioCheck==""){
        alert("Please fill-in the compulsory field- \n \u2022Rating");
        return false;
    } else{
        alert("Dear "+nameCheck+", Thank you very much for your feedback. You have rated our site as "+radioCheck+
        " and your comment was, \""+commentsOut+'\"');
    }
}

function starSelect(){
    var radioCheck = document.forms["commentsForm"]["rating"].value;

    switch(radioCheck){
        case "very poor":
            document.getElementById("labelVeryPoor").innerHTML = "<i class='material-icons' >star</i>";
            document.getElementById("labelPoor").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelOk").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelGood").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelVeryGood").innerHTML = "<i class='material-icons'>star_border</i>";

            document.getElementById("chosenRating").innerHTML = "Your rating: Very Poor";
            break;
        case "poor":
            document.getElementById("labelVeryPoor").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelPoor").innerHTML = "<i class='material-icons'>star</i>";
            document.getElementById("labelOk").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelGood").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelVeryGood").innerHTML = "<i class='material-icons'>star_border</i>";

            document.getElementById("chosenRating").innerHTML = "Your rating: Poor";
            break;
        case "ok":
            document.getElementById("labelVeryPoor").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelPoor").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelOk").innerHTML = "<i class='material-icons'>star</i>";
            document.getElementById("labelGood").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelVeryGood").innerHTML = "<i class='material-icons'>star_border</i>";
            
            document.getElementById("chosenRating").innerHTML = "Your rating: OK";
            break;
        case "good":
            document.getElementById("labelVeryPoor").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelPoor").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelOk").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelGood").innerHTML = "<i class='material-icons'>star</i>";
            document.getElementById("labelVeryGood").innerHTML = "<i class='material-icons'>star_border</i>";

            document.getElementById("chosenRating").innerHTML = "Your rating: Good";
            break;
        case "very good":
            document.getElementById("labelVeryPoor").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelPoor").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelOk").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelGood").innerHTML = "<i class='material-icons'>star_border</i>";
            document.getElementById("labelVeryGood").innerHTML = "<i class='material-icons'>star</i>";

            document.getElementById("chosenRating").innerHTML = "Your rating: Very Good";
            break;

    }
}

function resetStars(){
    document.getElementById("labelVeryPoor").innerHTML = "<i class='material-icons' >star_border</i>";
    document.getElementById("labelPoor").innerHTML = "<i class='material-icons'>star_border</i>";
    document.getElementById("labelOk").innerHTML = "<i class='material-icons'>star_border</i>";
    document.getElementById("labelGood").innerHTML = "<i class='material-icons'>star_border</i>";
    document.getElementById("labelVeryGood").innerHTML = "<i class='material-icons'>star_border</i>";

    document.getElementById("chosenRating").innerHTML = "";
}