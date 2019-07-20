// window.onscroll = function() {toTopDisplay(); hideWelcome();}

function hideWelcome(){            //to hide cover text, while scrolling down
    if(document.documentElement.scrollTop > 180){
        document.getElementById("coverText").style.display = "none";
    }else{
        document.getElementById("coverText").style.display = "block";
    }
}