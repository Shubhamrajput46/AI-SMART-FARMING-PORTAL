// Profile Image Preview

const imageInput = document.getElementById("profileImage");

const preview = document.getElementById("previewImage");

if(imageInput){

imageInput.addEventListener("change",function(e){

const file=e.target.files[0];

if(file){

preview.src=URL.createObjectURL(file);

}

});

}
// Show / Hide Password

function togglePassword(id){

const input=document.getElementById(id);

if(input.type==="password"){

input.type="text";

}else{

input.type="password";

}

}

// Password Strength

function checkStrength(){

const pass=document.getElementById("newPassword").value;

const bar=document.getElementById("strengthBar");

const text=document.getElementById("strengthText");

if(pass.length<4){

bar.style.width="25%";

bar.className="progress-bar bg-danger";

text.innerHTML="Weak Password";

}

else if(pass.length<8){

bar.style.width="60%";

bar.className="progress-bar bg-warning";

text.innerHTML="Medium Password";

}

else{

bar.style.width="100%";

bar.className="progress-bar bg-success";

text.innerHTML="Strong Password";

}

}

// Validation

function changePassword(){

const newPass=document.getElementById("newPassword").value;

const confirm=document.getElementById("confirmPassword").value;

if(newPass!==confirm){

alert("Passwords do not match!");

return;

}

alert("Password Updated Successfully!");

}