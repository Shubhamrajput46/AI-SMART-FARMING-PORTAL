// =======================================
// AI Smart Farming Portal
// Register Page
// =======================================

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(e){

    e.preventDefault();

    // Get Values

    const name =
        document.querySelector("input[type='text']").value.trim();

    const mobile =
        document.querySelectorAll("input[type='text']")[1].value.trim();

    const email =
        document.querySelector("input[type='email']").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    // Validation

    if(name.length < 3){

        alert("Name should be at least 3 characters.");

        return;

    }

    if(!/^[6-9]\d{9}$/.test(mobile)){

        alert("Enter Valid Mobile Number");

        return;

    }

    if(password.length < 6){

        alert("Password should be at least 6 characters.");

        return;

    }

    if(password !== confirmPassword){

        alert("Passwords do not match.");

        return;

    }

    alert("Registration Successful ✅");

    window.location.href="login.html";

});