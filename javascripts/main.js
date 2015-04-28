console.log('This would be the main JS file.');

function buttonClick() {
    alert("Well, hello there JS");
}

$('#jQueryBtn').click(function() {
    alert("Well, hello there jQuery");
});

var el = document.getElementById("EventListener");
el.addEventListener("click", buttonClick, false);
