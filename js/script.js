document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-form').addEventListener('submit', redirectToGoogleLogin);
});

function redirectToGoogleLogin(event) {
    event.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const email = username + '@ko.vc';
    const loginUrl = `https://accounts.google.com/a/ko.vc/ServiceLogin?Email=${encodeURIComponent(email)}`;
    window.location.href = loginUrl;
}
