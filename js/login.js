// =============================
// AI Smart Farming Portal
// Login JS
// =============================

// Password Show / Hide

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.innerHTML =
            '<i class="bi bi-eye-slash-fill"></i>';

    }

    else {

        password.type = "password";

        togglePassword.innerHTML =
            '<i class="bi bi-eye-fill"></i>';

    }

});



// Login Validation

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email =
        document.querySelector("input[type='email']").value;

    const pass =
        password.value;

    // Dummy Login

    if (
        email === "shubham@gmail.com"
        &&
        pass === "123456"
    ) {

        alert("Login Successful ✅");

        window.location.href = "dashboard.html";

    }

    else {

        alert("Invalid Email or Password ❌");

    }

});