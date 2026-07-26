/* ==========================================
   AI SMART FARMING - REPORTS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadCropChart();
    loadExpenseChart();
    searchReport();
    buttonEvents();
    animateCards();

});

/* ==========================================
   Crop Production Chart
========================================== */

function loadCropChart(){

    const ctx = document.getElementById("cropChart");

    if(!ctx) return;

    new Chart(ctx,{

        type:"bar",

        data:{

            labels:["Wheat","Rice","Soybean","Maize","Cotton"],

            datasets:[{

                label:"Production",

                data:[120,95,82,70,55],

                backgroundColor:[
                    "#2E7D32",
                    "#43A047",
                    "#66BB6A",
                    "#81C784",
                    "#A5D6A7"
                ],

                borderRadius:8

            }]

        },

        options:{

            responsive:true,

            plugins:{

                legend:{
                    display:false
                }

            }

        }

    });

}

/* ==========================================
   Expense Chart
========================================== */

function loadExpenseChart(){

    const ctx=document.getElementById("expenseChart");

    if(!ctx) return;

    new Chart(ctx,{

        type:"doughnut",

        data:{

            labels:[
                "Seeds",
                "Fertilizer",
                "Workers",
                "Irrigation",
                "Others"
            ],

            datasets:[{

                data:[20,25,18,22,15],

                backgroundColor:[
                    "#2E7D32",
                    "#1E88E5",
                    "#FB8C00",
                    "#8E24AA",
                    "#E53935"
                ]

            }]

        },

        options:{

            responsive:true

        }

    });

}

/* ==========================================
   Search
========================================== */

function searchReport(){

    const input=document.getElementById("searchReport");

    if(!input) return;

    input.addEventListener("keyup",function(){

        let filter=this.value.toLowerCase();

        let rows=document.querySelectorAll("tbody tr");

        rows.forEach(row=>{

            let txt=row.innerText.toLowerCase();

            row.style.display=
                txt.includes(filter) ? "" : "none";

        });

    });

}

/* ==========================================
   Buttons
========================================== */

function buttonEvents(){

    document.querySelectorAll(".btn").forEach(btn=>{

        let txt=btn.innerText;

        if(txt.includes("Print")){

            btn.onclick=()=>window.print();

        }

        if(txt.includes("Download")){

            btn.onclick=downloadReport;

        }

        if(txt.includes("Share")){

            btn.onclick=()=>{

                alert("Report Shared Successfully");

            }

        }

        if(txt.includes("Generate")){

            btn.onclick=()=>{

                alert("New Report Generated Successfully");

            }

        }

    });

}

/* ==========================================
   Download Report
========================================== */

function downloadReport(){

let text=`

AI SMART FARMING PORTAL

===========================

Farm Report

Income : ₹4.8L

Expense : ₹1.9L

Profit : ₹2.9L

Generated Successfully

`;

let blob=new Blob([text],{

type:"text/plain"

});

let a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="Farm_Report.txt";

a.click();

}

/* ==========================================
   Card Animation
========================================== */

function animateCards(){

const cards=document.querySelectorAll(".card-box");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(30px)";

setTimeout(()=>{

card.style.transition=".5s";

card.style.opacity="1";

card.style.transform="translateY(0px)";

},index*150);

});

}