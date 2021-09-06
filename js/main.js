$(document).ready(function(){
    $("form").submit(function(event){
        //console.log($("#firstName").val());
        let test=false;
        if($("firstName").val().length >= 2){
            alert(this.val());
            return;
        }else{
            event.PreventDefault();//stops the default behaviour
        }
        if($("lastName").val().length >= 2){
            return;
        }else{
            event.PreventDefault();//stops the default behaviour
        }
    
    });
});

//incase of $("form").submit()
//it submits the data to server
//calling event.PreventDefault() indicates we want to stop the
//default behaviour
//as we want to send the request to server only if
//the form has valid data