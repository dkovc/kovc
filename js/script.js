function redirectToGoogleLogin(event) {
    event.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const email = username + '@ko.vc';
    const loginUrl = `https://accounts.google.com/ServiceLogin?Email=${encodeURIComponent(email)}`;
    window.location.href = loginUrl;
}
