welcomeMessage();
function welcomeMessage() {
    let name = prompt("Please enter your name:");

    if (name != null) {

    document.getElementById('welcome-speech').innerHTML = 'Hello ' + name +', welcome to afrida company!';
    }
}

function validateForm() {
    
}