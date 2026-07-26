/* ===================================
   AI Recommendation Dashboard
=================================== */

// Welcome Message

window.addEventListener("load", () => {

    showMessage();

    animatePrediction();

    rotateTips();

});

// ===============================
// AI Welcome Message
// ===============================

function showMessage(){

    console.log("🤖 AI Smart Farming System Loaded Successfully");

}

// ===============================
// Yield Prediction Animation
// ===============================

function animatePrediction(){

    let value = 0;

    const target = 520;

    const element = document.getElementById("yieldPrediction");

    if(!element) return;

    const timer = setInterval(()=>{

        value += 5;

        element.innerHTML = value + " Quintals";

        if(value >= target){

            element.innerHTML = target + " Quintals";

            clearInterval(timer);

        }

    },20);

}

// ===============================
// Profit Animation
// ===============================

let profit = 0;

const finalProfit = 680000;

const profitElement = document.getElementById("profitPrediction");

if(profitElement){

const profitTimer = setInterval(()=>{

profit += 5000;

profitElement.innerHTML = "₹" + profit.toLocaleString();

if(profit >= finalProfit){

profitElement.innerHTML = "₹" + finalProfit.toLocaleString();

clearInterval(profitTimer);

}

},25);

}

// ===============================
// Dynamic AI Tips
// ===============================

const tips=[

"🌧 Rain expected after 2 days.",

"💧 Irrigate tomorrow morning.",

"🌾 Soybean is best for this season.",

"🧪 Apply Urea after irrigation.",

"🌱 Soil moisture is good.",

"☀ Temperature is suitable for Wheat."

];

let current=0;

const tipBox=document.getElementById("aiTip");

if(tipBox){

tipBox.innerHTML=tips[current];

setInterval(()=>{

current++;

if(current>=tips.length){

current=0;

}

tipBox.innerHTML=tips[current];

},4000);

}

// ===============================
// Recommendation Progress
// ===============================

const progress=document.getElementById("aiProgress");

let width=0;

if(progress){

const loading=setInterval(()=>{

width++;

progress.style.width=width+"%";

progress.innerHTML=width+"%";

if(width>=95){

clearInterval(loading);

}

},40);

}
function recommendFertilizer(){

let n=parseInt(document.getElementById("nitrogen").value);

let p=parseInt(document.getElementById("phosphorus").value);

let k=parseInt(document.getElementById("potassium").value);

let result=document.getElementById("result");

if(isNaN(n)||isNaN(p)||isNaN(k)){

result.innerHTML="<div class='alert alert-danger'>Please fill all values.</div>";

return;

}

if(n<50){

result.innerHTML=`

<div class="alert alert-success">

<h4>Recommended Fertilizer</h4>

<hr>

<h3>🌱 Urea</h3>

<p>Nitrogen is low.</p>

</div>

`;

}

else if(p<40){

result.innerHTML=`

<div class="alert alert-warning">

<h4>Recommended Fertilizer</h4>

<hr>

<h3>🧪 DAP</h3>

<p>Phosphorus level is low.</p>

</div>

`;

}

else if(k<40){

result.innerHTML=`

<div class="alert alert-primary">

<h4>Recommended Fertilizer</h4>

<hr>

<h3>🌾 Potash</h3>

<p>Potassium level is low.</p>

</div>

`;

}

else{

result.innerHTML=`

<div class="alert alert-success">

<h4>Excellent Soil Health</h4>

<hr>

<p>No additional fertilizer required now.</p>

</div>

`;

}

}
function predictYield(){

let land=parseFloat(document.getElementById("landArea").value);

let crop=document.getElementById("crop").value;

let result=document.getElementById("yieldResult");

if(isNaN(land)||land<=0){

result.innerHTML=`
<div class="alert alert-danger">

Please enter valid land area.

</div>`;

return;

}

let yieldValue=0;

let price=0;

if(crop==="Wheat"){

yieldValue=land*45;

price=yieldValue*2200;

}

else if(crop==="Rice"){

yieldValue=land*55;

price=yieldValue*2000;

}

else if(crop==="Soybean"){

yieldValue=land*20;

price=yieldValue*5000;

}

else if(crop==="Cotton"){

yieldValue=land*18;

price=yieldValue*7000;

}

else{

yieldValue=land*35;

price=yieldValue*1800;

}

result.innerHTML=`

<div class="alert alert-success">

<h4>Prediction Completed ✅</h4>

<hr>

<p><b>Crop :</b> ${crop}</p>

<p><b>Expected Yield :</b> ${yieldValue} Quintals</p>

<p><b>Estimated Revenue :</b> ₹${price.toLocaleString()}</p>

<p><b>AI Confidence :</b> 94%</p>

<p><b>Harvest Time :</b> 110 Days</p>

</div>

`;

}