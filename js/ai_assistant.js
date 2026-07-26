/* ==========================================
   AI SMART FARMING PORTAL
   AI Assistant
========================================== */

const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearChat");
const typingArea = document.getElementById("typingArea");

/* ==========================================
   AI Demo Responses
========================================== */

const aiResponses = {

    "crop advice":
        "🌾 Choose certified seeds, test your soil before sowing, and follow the recommended fertilizer schedule for better yield.",

    "fertilizer":
        "🌱 Apply fertilizer based on soil testing. Avoid overuse of urea and use balanced NPK nutrients.",

    "pest control":
        "🐛 Regularly inspect crops. Remove infected leaves and use recommended pesticides or organic neem spray when required.",

    "weather":
        "🌦 Check the local weather forecast before irrigation or spraying pesticides to reduce losses.",

    "irrigation":
        "💧 Irrigate according to the crop stage. Drip irrigation helps save water and improves efficiency."

};

/* ==========================================
   Send Button
========================================== */

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});

/* ==========================================
   Send Message
========================================== */

function sendMessage(){

    const text = userInput.value.trim();

    if(text==="") return;

    addUserMessage(text);

    userInput.value="";

    showTyping();

    setTimeout(()=>{

        hideTyping();

        addAIMessage(getReply(text));

    },1500);

}

/* ==========================================
   User Message
========================================== */

function addUserMessage(message){

    chatBody.innerHTML += `

    <div class="message user-message">

        <div class="message-box">

            ${message}

        </div>

        <div class="avatar user-avatar">

            👨‍🌾

        </div>

    </div>

    `;

    scrollBottom();

}

/* ==========================================
   AI Message
========================================== */

function addAIMessage(message){

    chatBody.innerHTML += `

    <div class="message ai-message">

        <div class="avatar">

            🤖

        </div>

        <div class="message-box">

            ${message}

        </div>

    </div>

    `;

    scrollBottom();

}

/* ==========================================
   Reply Logic
========================================== */

function getReply(question){

    const q = question.toLowerCase();

    if(q.includes("crop"))

        return aiResponses["crop advice"];

    if(q.includes("fertilizer"))

        return aiResponses["fertilizer"];

    if(q.includes("pest"))

        return aiResponses["pest control"];

    if(q.includes("weather"))

        return aiResponses["weather"];

    if(q.includes("water") || q.includes("irrigation"))

        return aiResponses["irrigation"];

    return "🤖 Thank you for your question. This is a demo AI response. After connecting the Django backend with OpenAI or Gemini API, you'll receive intelligent farming advice.";

}

/* ==========================================
   Typing
========================================== */

function showTyping(){

    typingArea.style.display="flex";

    scrollBottom();

}

function hideTyping(){

    typingArea.style.display="none";

}

/* ==========================================
   Suggestions
========================================== */

document.querySelectorAll(".suggestion").forEach(btn=>{

    btn.addEventListener("click",()=>{

        userInput.value=btn.innerText;

        sendMessage();

    });

});

/* ==========================================
   Clear Chat
========================================== */

clearBtn.addEventListener("click",()=>{

    location.reload();

});

/* ==========================================
   Auto Scroll
========================================== */

function scrollBottom(){

    chatBody.scrollTop = chatBody.scrollHeight;

}