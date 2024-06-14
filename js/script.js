document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-form').addEventListener('submit', redirectToGoogleLogin);
});

function redirectToGoogleLogin(event) {
    event.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const email = username + '@ko.vc';
    const loginUrl = `https://accounts.google.com/signin/v2/identifier?identifier=${encodeURIComponent(email)}&hl=en&flowName=GlifWebSignIn&flowEntry=ServiceLogin`;
    window.location.href = loginUrl;
}
