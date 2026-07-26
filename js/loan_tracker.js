/* ==========================================
   AI SMART FARMING PORTAL
   Loan & Subsidy Tracker
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    animateCards();

    showReminder();

    setupDownload();

    setupPrint();

});

/* ==========================================
   Card Animation
========================================== */

function animateCards(){

    const cards=document.querySelectorAll(".loan-card");

    cards.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(30px)";

        setTimeout(()=>{

            card.style.transition=".5s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*200);

    });

}

/* ==========================================
   EMI Reminder
========================================== */

function showReminder(){

    setTimeout(()=>{

        alert("🔔 Reminder : Your SBI Loan EMI is due in 5 days.");

    },1500);

}

/* ==========================================
   Apply Button
========================================== */

document.querySelectorAll(".scheme-card button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        alert("Application feature will be connected with Django Backend.");

    });

});

/* ==========================================
   View Button
========================================== */

document.querySelectorAll(".btn-primary").forEach(btn=>{

    btn.addEventListener("click",()=>{

        alert("Loan Details Page Coming Soon.");

    });

});

/* ==========================================
   Download Report
========================================== */

function setupDownload(){

    const buttons=document.querySelectorAll("button");

    buttons.forEach(btn=>{

        if(btn.innerText.includes("Download")){

            btn.addEventListener("click",()=>{

                const report=`

AI SMART FARMING PORTAL

Loan Summary

Total Loan : ₹4,50,000

Approved : ₹3,20,000

Pending : ₹80,000

Subsidy : ₹50,000

Generated Successfully

`;

                const blob=new Blob([report],{type:"text/plain"});

                const a=document.createElement("a");

                a.href=URL.createObjectURL(blob);

                a.download="Loan_Report.txt";

                a.click();

            });

        }

    });

}

/* ==========================================
   Print
========================================== */

function setupPrint(){

    const buttons=document.querySelectorAll("button");

    buttons.forEach(btn=>{

        if(btn.innerText.includes("Print")){

            btn.addEventListener("click",()=>{

                window.print();

            });

        }

    });

}

/* ==========================================
   Progress Animation
========================================== */

const progressBars=document.querySelectorAll(".progress-bar");

progressBars.forEach(bar=>{

    const value=parseInt(bar.innerHTML);

    bar.style.width="0%";

    let width=0;

    const interval=setInterval(()=>{

        if(width>=value){

            clearInterval(interval);

        }

        else{

            width++;

            bar.style.width=width+"%";

            bar.innerHTML=width+"%";

        }

    },15);

});