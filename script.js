function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const successMessage = document.getElementById("successMessage");

    const email = emailInput.value;
    if (email.length > 3 && email.includes("@") && email.includes(".")) {
        emailError.textContent = "";
        successMessage.textContent = "All good to go!";
    } else {
        emailError.textContent = "Email must be more than 3 characters and contain '@' and '.'.";
        successMessage.textContent = "";
    }
}

function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    const password = passwordInput.value;
    if (password.length > 8) {
        passwordError.textContent = "";
        successMessage.textContent = "All good to go!";
    } else {
        passwordError.textContent = "Password must be more than 8 characters.";
        successMessage.textContent = "";
    }
}

function handleSubmit() {
    const emailError = document.getElementById("emailError").textContent;
    const passwordError = document.getElementById("passwordError").textContent;

    if (!emailError && !passwordError) {
        const confirmed = confirm("Are you sure you want to sign up?");
        if (confirmed) {
            alert("Successful signup!");
        } else {
            clearForm();
        }
    } else {
        alert("Please fix the errors before submitting.");
    }
}

function clearForm() {
    document.getElementById("signupForm").reset();
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("successMessage").textContent = "";
}
