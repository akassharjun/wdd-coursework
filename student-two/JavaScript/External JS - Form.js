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