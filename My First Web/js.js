document.getElementById('back').addEventListener('click', function(){
    window.location.href="index.html";

})

const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach(function(button) { button.addEventListener('click', function() 
    { window.location.href = "buy.html"; 

}); });