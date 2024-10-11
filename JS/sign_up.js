const signUpForm = document.getElementById('signUpForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const privacyPolicyCheckbox = document.getElementById('privacyPolicy');

signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    let errorMessage = '';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage += 'Please enter a valid email address.\n';
    }

    if (password.length < 6) {
        errorMessage += 'Password must be at least 6 characters long.\n';
    }

    if (password !== confirmPassword) {
        errorMessage += 'Passwords do not match.\n';
    }

    if (!privacyPolicyCheckbox.checked) {
        errorMessage += 'You must agree to the Privacy Policy and Terms of Service.\n';
    }

    if (errorMessage) {
        alert(errorMessage);
        return;
    }

    alert('Account created successfully!');
});