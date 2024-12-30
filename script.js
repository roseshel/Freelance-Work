const button = document.getElementById('clickButton');
const message = document.getElementById('message');
button.addEventListener('click',function(){
    message.textContent = "You Clicked the button!";

});