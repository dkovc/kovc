document.getElementById('login-button').addEventListener('click', function() {
    console.log("Login button clicked");
    var form = document.getElementById('login-form');
    form.classList.toggle('hidden');
    console.log("Form visibility toggled");
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    console.log("Form submitted");
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value.trim();
    emailInput.value = emailValue + '@ko.vc';
    console.log("Email input value set to: " + emailInput.value);
});
