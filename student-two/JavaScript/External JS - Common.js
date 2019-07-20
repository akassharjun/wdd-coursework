window.onscroll = function() {toTopDisplay();}

function toTopDisplay(){            //to display toTopButton only when scrolled below the entrance screen
    if(document.documentElement.scrollTop > 150){
        document.getElementById("toTopButton").style.display = "block";
    }else{
        document.getElementById("toTopButton").style.display = "none";
    }
}

function scrollToTop(){         //scroll top top of web page
    document.documentElement.scrollTop = 0;
}     
