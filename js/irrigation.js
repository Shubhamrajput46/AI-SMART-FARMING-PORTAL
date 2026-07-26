/* ==========================================
   AI SMART FARMING PORTAL
   Irrigation Management
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    animateProgressBars();

    setupButtons();

    showReminder();

});

/* ==========================================
   Progress Bar Animation
========================================== */

function animateProgressBars() {

    const bars = document.querySelectorAll(".progress-bar");

    bars.forEach(bar => {

        const target = parseInt(bar.textContent);

        let value = 0;

        bar.style.width = "0%";

        const timer = setInterval(() => {

            if (value >= target) {

                clearInterval(timer);

            } else {

                value++;

                bar.style.width = value + "%";

                bar.textContent = value + "%";

            }

        }, 15);

    });

}

/* ==========================================
   Add Irrigation Button
========================================== */

const addBtn = document.querySelector(".btn-success");

if(addBtn){

    addBtn.addEventListener("click",function(){

        alert("Add Irrigation feature will be connected with Django Backend.");

    });

}

/* ==========================================
   Download Report
========================================== */

const buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{

    if(btn.innerText.includes("Download")){

        btn.addEventListener("click",function(){

            const report = `

AI SMART FARMING PORTAL

IRRIGATION REPORT

----------------------------

Total Water Used : 12,500 L

Active Fields : 8

Water Saving : 18%

Next Irrigation :

Tomorrow 06:00 AM

Generated Successfully

`;

            const blob = new Blob([report],{

                type:"text/plain"

            });

            const a=document.createElement("a");

            a.href=URL.createObjectURL(blob);

            a.download="Irrigation_Report.txt";

            a.click();

        });

    }

});

/* ==========================================
   Print
========================================== */

buttons.forEach(btn=>{

    if(btn.innerText.includes("Print")){

        btn.addEventListener("click",function(){

            window.print();

        });

    }

});

/* ==========================================
   Water Reminder
========================================== */

function showReminder(){

    setTimeout(()=>{

        alert("💧 Reminder : Field B irrigation is scheduled today at 5:30 PM.");

    },2000);

}

/* ==========================================
   Row Hover Effect
========================================== */

const rows=document.querySelectorAll("tbody tr");

rows.forEach(row=>{

    row.addEventListener("mouseenter",function(){

        this.style.transform="scale(1.01)";

        this.style.transition=".2s";

    });

    row.addEventListener("mouseleave",function(){

        this.style.transform="scale(1)";

    });

});

/* ==========================================
   Live Time
========================================== */

function updateTime(){

    const now = new Date();

    console.log("Current Time :", now.toLocaleTimeString());

}

setInterval(updateTime,1000);