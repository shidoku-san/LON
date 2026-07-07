// =========================
// SCREENS
// =========================

const loading = document.getElementById("loading");
const title = document.getElementById("title");
const opening = document.getElementById("opening");
const choice = document.getElementById("choice");
const creepy = document.getElementById("creepy");
const letterIntro = document.getElementById("letterIntro");
const letter = document.getElementById("letter");
const ending = document.getElementById("ending");

const continueBtn = document.getElementById("continueBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const openEnvelopeBtn = document.getElementById("openEnvelopeBtn");
const envelope = document.getElementById("envelope");
const nextBtn = document.getElementById("nextBtn");

// NEW
const blackScreen = document.getElementById("blackScreen");
const jumpscareImg = document.getElementById("jumpscareImg");
const horror = document.getElementById("horror");
const bgm = document.getElementById("bgm");
// =========================
// LOADING
// =========================

const progress = document.getElementById("progress");
const loadingText = document.getElementById("loadingText");

const loadingMessages = [

    "Hulat lang dhai",
    "I'll miss u beh",
    "Ayaw ko limta kung masakses naka",
    "Available ko always to talk~",
    "YIIIEE GRADUATE YAN SHA",
    "Cleaning up the battlefield"

];

let loadDots = 1;

loadingText.textContent =
loadingMessages[Math.floor(Math.random() * loadingMessages.length)];

const loadingDots = setInterval(() => {

    loadingText.textContent =
    loadingMessages[Math.floor(Math.random() * loadingMessages.length)] +
    ".".repeat(loadDots);

    loadDots++;

    if(loadDots > 3){

        loadDots = 1;

    }

},700);

let value = 0;

const loadBar = setInterval(()=>{

    value++;

    progress.style.width = value + "%";

    if(value >= 100){

        clearInterval(loadBar);
        clearInterval(loadingDots);

        loading.classList.remove("active");
title.classList.add("active");
    }

},20);

// =========================
// OPEN LETTER
// =========================

continueBtn.addEventListener("click",()=>{

    // Start background music after user interaction
    bgm.volume = 0.35;
    bgm.loop = true;
    bgm.currentTime = 0;
    bgm.play().catch(err => console.log(err));

    title.classList.remove("active");
    opening.classList.add("active");

    const openingText =
    document.getElementById("openingText");

    let dots = 1;

    const animate = setInterval(()=>{

        openingText.textContent =
        "Opening" + ".".repeat(dots);

        dots++;

        if(dots>3){

            dots=1;

        }

    },300);

    setTimeout(()=>{

        clearInterval(animate);

        opening.classList.remove("active");
        choice.classList.add("active");

    },1200);

});

// =========================
// YES
// =========================

yesBtn.addEventListener("click",()=>{

    choice.classList.remove("active");
    letterIntro.classList.add("active");

});

// =========================
// NO
// =========================

noBtn.addEventListener("click",()=>{

    choice.classList.remove("active");
creepy.classList.add("active");

bgm.pause();
bgm.currentTime = 0;

horror.volume = 0.35;
horror.currentTime = 0;
horror.loop = true;
horror.play().catch(() => {});
    // Start creepy background music
horror.currentTime = 0;
horror.volume = 0.35;
horror.loop = true;
horror.play().catch(() => {});

    const creepyText =
    document.getElementById("creepyText");

    creepyText.innerHTML = "...";

    setTimeout(()=>{

        creepyText.innerHTML =
        "That wasn't one of your options.";

    },1800);

    setTimeout(()=>{

        creepyText.innerHTML =
        "I don't think<br>that was the right choice.";

    },5000);

    setTimeout(()=>{

        creepyText.innerHTML =
        "Try again.";

    },8500);

    // JUMPSCARE
    setTimeout(()=>{

        blackScreen.style.display = "block";

    },10200);

    setTimeout(()=>{

        blackScreen.style.display = "none";

// Stop creepy ambience
horror.pause();
horror.currentTime = 0;

// Show jumpscare
jumpscareImg.style.display = "block";

    },10700);

    setTimeout(()=>{

        jumpscareImg.style.display = "none";

bgm.currentTime = 0;
bgm.play().catch(() => {});

creepy.classList.remove("active");
choice.classList.add("active");

noBtn.style.display = "none";

    },11500);

});

// =========================
// OPEN ENVELOPE
// =========================

openEnvelopeBtn.addEventListener("click",()=>{

    envelope.classList.add("open");

    openEnvelopeBtn.style.display = "none";

    setTimeout(()=>{

        letterIntro.classList.remove("active");
        letter.classList.add("active");

        startTyping();

    },700);

});

// =========================
// LETTER
// =========================

const letterContent =
document.getElementById("letterContent");

const message = `Dear Charo
-lon,

Lon, you were the one who believed 
in me even if I had no more 
plan on joining 
sa jazz chant. 

I know na naga recruit ka at that time pero I have zero regrets now nga niapil ko. If you told me 5 years ago na muapil ko aning Jazz chant, or theatre Athlon when I’m in college, I would’ve laughed, cuz I know I’d make a fool of myself, just like I did nung first year ako. Pero when you forced me in the auditions room I felt like calling sha, nung ginawa ko yung mga prompts and such. I felt alive, and realized that was something na I wanted to do and keep doing. Times sa practice dati is you made sure na I was okay kahit na you should think about yourself first, I felt cared for and gipakita mo gid toh sa tanan as a team leader and builder. 

I have no words left but only feelings of gratitude on how much you’ve done for many, including me. Also pa ingon ko kay Kiboy nga padayon siya sap ag alaga saimoha hehe salamat pud saiyahang kindness sauna dili jud ko ka feel ug others sa group tungod sa inyo duha. DABEST DUO ROAD TO FOREVER NA! I love you Lon and Kiboy, may God Bless you, always.
CONGRATS GRADUATE!


- Ruru`; 

let index = 0;

function startTyping(){

    letterContent.innerHTML = "";

    nextBtn.style.display = "none";

    index = 0;

    const typing = setInterval(()=>{

        letterContent.innerHTML =
        message.substring(0,index).replace(/\n/g,"<br>");

        index++;

        if(index > message.length){

            clearInterval(typing);

            setTimeout(()=>{

                nextBtn.style.display = "block";

            },3000);

        }

    },25);

}

// =========================
// LETTER -> ENDING
// =========================

nextBtn.addEventListener("click",()=>{

    letter.classList.remove("active");
    ending.classList.add("active");

});