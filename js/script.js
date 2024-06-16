document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#login-form button');
    const sphere = document.querySelector('.sphere');

    button.addEventListener('mouseenter', () => {
        sphere.style.background = 'radial-gradient(circle at 50% 50%, var(--button-hover-bg-start), var(--button-hover-bg-end) 70%)';
    });

    button.addEventListener('mouseleave', () => {
        sphere.style.background = 'radial-gradient(circle at 50% 50%, var(--button-bg-start), var(--button-bg-end) 70%)';
    });

    document.getElementById('login-form').addEventListener('submit', redirectToGoogleLogin);
});

function redirectToGoogleLogin(event) {
    event.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const email = username + '@ko.vc';
    const loginUrl = `https://accounts.google.com/AccountChooser?Email=${encodeURIComponent(email)}&continue=https://mail.google.com/a/ko.vc`;
    window.location.href = loginUrl;
}
