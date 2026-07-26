/* ==========================================
   AI SMART FARMING PORTAL
   Pest Detection JavaScript
========================================== */

const imageUpload = document.getElementById("imageUpload");
const previewImage = document.getElementById("previewImage");

const disease = document.getElementById("disease");
const crop = document.getElementById("crop");
const confidence = document.getElementById("confidence");
const confidenceBar = document.getElementById("confidenceBar");

const detectBtn = document.querySelector(".btn-success.btn-lg");

/* =============================
Image Preview
============================= */

imageUpload.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        previewImage.src = e.target.result;

    }

    reader.readAsDataURL(file);

});

/* =============================
Detect Disease
============================= */

detectBtn.addEventListener("click", function () {

    if (!imageUpload.files.length) {

        alert("Please upload a crop image first.");

        return;

    }

    startLoading();

});

/* =============================
Loading Animation
============================= */

function startLoading() {

    detectBtn.disabled = true;

    detectBtn.innerHTML =
        '<span class="spinner-border spinner-border-sm"></span> AI is analyzing...';

    confidenceBar.style.width = "0%";
    confidence.innerHTML = "0%";

    setTimeout(showResult, 2500);

}

/* =============================
Fake AI Result
============================= */

function showResult() {

    const data = [

        {
            disease: "Tomato Early Blight",
            crop: "Tomato",
            confidence: 96,
            severity: "High",
            color: "danger"
        },

        {
            disease: "Healthy Plant",
            crop: "Potato",
            confidence: 99,
            severity: "Safe",
            color: "success"
        },

        {
            disease: "Leaf Rust",
            crop: "Wheat",
            confidence: 91,
            severity: "Medium",
            color: "warning"
        },

        {
            disease: "Powdery Mildew",
            crop: "Cucumber",
            confidence: 94,
            severity: "High",
            color: "danger"
        }

    ];

    const result = data[Math.floor(Math.random() * data.length)];

    disease.innerHTML = result.disease;

    crop.innerHTML = result.crop;

    animateProgress(result.confidence);

    document.querySelector(".severity").innerHTML =

        `Severity
        <span class="badge bg-${result.color}">
            ${result.severity}
        </span>`;

    detectBtn.disabled = false;

    detectBtn.innerHTML =
        '<i class="bi bi-search"></i> Detect Disease';

}

/* =============================
Progress Animation
============================= */

function animateProgress(value) {

    let width = 0;

    let interval = setInterval(function () {

        if (width >= value) {

            clearInterval(interval);

        } else {

            width++;

            confidenceBar.style.width = width + "%";

            confidence.innerHTML = width + "%";

        }

    }, 15);

}

/* =============================
Download Report
============================= */

const downloadBtn = document.querySelector(".text-end button");

if (downloadBtn) {

    downloadBtn.addEventListener("click", function () {

        const report = `
AI SMART FARMING PORTAL

Disease : ${disease.innerText}

Crop : ${crop.innerText}

Confidence : ${confidence.innerText}

Generated Successfully
        `;

        const blob = new Blob([report], { type: "text/plain" });

        const a = document.createElement("a");

        a.href = URL.createObjectURL(blob);

        a.download = "AI_Disease_Report.txt";

        a.click();

    });

}

/* =============================
Drag & Drop
============================= */

const uploadBox = document.querySelector(".upload-box");

uploadBox.addEventListener("dragover", function(e){

    e.preventDefault();

    uploadBox.style.background="#e8f5e9";

});

uploadBox.addEventListener("dragleave", function(){

    uploadBox.style.background="#fff";

});

uploadBox.addEventListener("drop", function(e){

    e.preventDefault();

    uploadBox.style.background="#fff";

    imageUpload.files = e.dataTransfer.files;

    const file = e.dataTransfer.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(event){

            previewImage.src = event.target.result;

        }

        reader.readAsDataURL(file);

    }

});