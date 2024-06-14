document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-form').addEventListener('submit', redirectToGoogleLogin);
});

function redirectToGoogleLogin(event) {
    event.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const email = username + '@ko.vc';
    const loginUrl = `https://accounts.google.com/ServiceLogin?identifier=${encodeURIComponent(email)}&continue=https://mail.google.com/a/ko.vc`;
    window.location.href = loginUrl;
}
