const signInForm = document.getElementById('signInForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('rememberMe');

window.onload = function() {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail) {
        emailInput.value = storedEmail;
        passwordInput.value = storedPassword;
        rememberMeCheckbox.checked = true;
    }
};

signInForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let errorMessage = '';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage += 'Please enter a valid email address.\n';
    }

    if (password.length < 6) {
        errorMessage += 'Password must be at least 6 characters long.\n';
    }

    if (errorMessage) {
        alert(errorMessage);
        return;
    }

    if (rememberMeCheckbox.checked) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
    }

    alert('Form submitted successfully!');
});