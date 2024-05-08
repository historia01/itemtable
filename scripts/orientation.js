let windowVar = $(".rotationWarning");

$(function() {
    window.onload = function() {
        console.log("WEBPAGE LOADED!")
        $('#loading-screen').addClass('hide');
    }
});
$(document).ready(function(){
    setTimeout(function(){
        $('#loading-screen').addClass('hide');
        console.log("x")
    },6000)
    let destroyMe = $("#destroyMe");
    //$(".rotationWarning").css("display", "unset"); 
    if (!window.orientation == 0 || window.orientation == 180) {
        console.log("Device is in portrait mode"); 
        $(".rotationWarning").css("display", "unset"); 
    } else {
        console.log("Device is in landscape mode");
        $(".rotationWarning").remove();
        destroyMe.remove();
    }
    $("#closePrompt").click(function(){
        windowVar.remove();
        destroyMe.remove();
        requestFS();
    });  
});