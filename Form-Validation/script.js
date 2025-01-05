document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('pwd').value;
    const passwordInput2 = document.getElementById('pwd2').value;
    const phoneInput = document.getElementById('phone')?.value.trim();
    const ageInput = document.getElementById('age')?.value;
    const genderInput = document.getElementById('gender')?.value;

    let valid = true;

    // Name Validation
    if (nameInput.length < 6) {
        alert("Name should be at least 6 characters");
        valid = false;
    }

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(emailInput)) {
        document.getElementById('emailError').textContent = "Please enter a valid email";
        valid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // Password Match Validation
    if (passwordInput !== passwordInput2) {
        alert("Passwords do not match");
        valid = false;
    }

    // Phone Validation
    const phoneRegex = /^[0-9]{10}$/;
    if (phoneInput && !phoneRegex.test(phoneInput)) {
        document.getElementById('phoneError').textContent = "Please enter a valid phone number";
        valid = false;
    } else {
        document.getElementById('phoneError').textContent = "";
    }

    // Gender Validation
    if (!genderInput) {
        alert("Please select a gender");
        valid = false;
    }

    // Age Validation
    if (ageInput && (ageInput < 1 || isNaN(ageInput))) {
        alert("Please enter a valid age");
        valid = false;
    }

    if (valid) {
        alert("Form Submitted Successfully!");
    }
});

// Password Reveal
function revealPassword() {
    const pwd = document.getElementById("pwd2");
    pwd.type = pwd.type === "text" ? "password" : "text";
}
