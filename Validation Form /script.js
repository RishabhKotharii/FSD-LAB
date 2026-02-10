const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    // Get values
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const terms = document.getElementById("terms").checked;

    // Clear previous errors
    clearErrors();

    // Full Name
    if (fullname.length < 3) {
        setError("fullname", "Name must be at least 3 characters.");
        isValid = false;
    }

    // Email
    if (!email.includes("@") || !email.includes(".")) {
        setError("email", "Enter a valid email.");
        isValid = false;
    }

    // Phone
    if (phone.length !== 10 || isNaN(phone)) {
        setError("phone", "Phone must be 10 digits.");
        isValid = false;
    }

    // Password
    if (password.length < 6) {
        setError("password", "Password must be at least 6 characters.");
        isValid = false;
    }

    // Confirm Password
    if (password !== confirmPassword) {
        setError("confirmPassword", "Passwords do not match.");
        isValid = false;
    }

    // Age
    if (age < 18 || age > 60) {
        setError("age", "Age must be between 18 and 60.");
        isValid = false;
    }

    // Gender
    if (gender === "") {
        setError("gender", "Please select gender.");
        isValid = false;
    }

    // Terms
    if (!terms) {
        setError("terms", "You must agree to terms.");
        isValid = false;
    }

    if (isValid) {
        alert("Form Submitted Successfully!");
        form.reset();
    }
});

function setError(id, message) {
    const element = document.getElementById(id);
    const error = element.parentElement.querySelector(".error");
    error.innerText = message;
}

function clearErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach(function(error) {
        error.innerText = "";
    });
}
