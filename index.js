$(document).ready(function(){
var object;
    object = {
        "firstname":"Nidhi",
        "lastname": "Sharma",
        "dob" : "19/08/1994"
    };
    $("#firstname").text(object.firstname);
    $("#lastname").text(object.lastname);
    $("#dob").text(object.dob);
});