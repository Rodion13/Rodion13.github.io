console.log('This would be the main JS file.');

function buttonClick() {
    alert("Well, hello there JS");
}

$('#jQueryBtn').click(function() {
    alert("Well, hello there jQuery");
});

var el = document.getElementById("EventListener");
el.addEventListener("click", buttonClick, false);

var successClass = '.alert.alert-dismissible.alert-success';
var dangerClass = '.alert.alert-dismissible.alert-danger';

$(successClass).hide();
$(dangerClass).hide();

$('#SuccessBtn').click(function(){
    var input = $('#inputSmall').val()

    if(input) {
        $(dangerClass).hide();
        $(successClass).show(200);
        $('#display').text(input);
    }
    else {
        $(successClass).hide();
        $(dangerClass).show(200);
    }
});

$('.close').click(function(){
   $(this).parent().hide(200);
});



