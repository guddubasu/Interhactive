
function validation(){
    if(document.contacts.Username.value==""){
        document.contacts.Username.setCustomValidity('Please Enter Username*');
        return false;
    }
    else if(document.contacts.Username.value.length < 6){
        document.c.Username.setCustomValidity("At least six letter*");
        return false;
    }
    else{
        document.contacts.Username.setCustomValidity("");
    }
    
    if(document.contacts.email.value==""){
        document.contacts.email.setCustomValidity("Please Enter your Email*");
        return false;
    }
    else{
        document.contacts.email.setCustomValidity("");
    }
    
    if(document.contacts.message.value==""){
        document.contacts.message.setCustomValidity("Enter any message");
        return false;
    }
    else{
        document.contacts.message.setCustomValidity("");
    }
    return true;
}
function isTrue(){
    if(validation() == true){
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });

  }
        
}
