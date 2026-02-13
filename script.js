const heartsContainer = document.querySelector(".hearts");

for(let i=0;i<30;i++){
  const heart = document.createElement("span");
  heart.innerHTML="❤️";
  heart.style.left=Math.random()*100+"%";
  heart.style.fontSize=(15+Math.random()*25)+"px";
  heart.style.animationDuration=(6+Math.random()*5)+"s";
  heartsContainer.appendChild(heart);
}

const menu=document.getElementById("menu");
const valentine=document.getElementById("valentine");
const single=document.getElementById("single");
const loveResult=document.getElementById("loveResult");
const backBtn=document.getElementById("backBtn");

function openValentine(){
  menu.classList.remove("active");
  valentine.classList.add("active");
  backBtn.style.display="block";
}

function openSingle(){
  menu.classList.remove("active");
  single.classList.add("active");
  backBtn.style.display="block";
  generateSingle();
}

function goBack(){
  valentine.classList.remove("active");
  single.classList.remove("active");
  loveResult.classList.remove("active");
  menu.classList.add("active");
  backBtn.style.display="none";
}

const loveQuotes=[
"Every love story is beautiful, but ours is my favorite.",
"You are my today and all my tomorrows.",
"With you, every moment feels magical.",
"I found my forever in you.",
"You are my heart’s favorite place.",
"Love looks perfect when I look at you.",
"You make my world brighter.",
"Forever feels short with you.",
"You're my sweetest hello.",
"My heart chose you."
];

const singleQuotes=[
"Single but shining.",
"Independent and powerful.",
"Self-love is the best love.",
"Proud to be me.",
"Living my best single life.",
"Freedom feels good.",
"Building my own empire.",
"Happiness starts within.",
"Single and unstoppable.",
"My vibe, my rules."
];

const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");

yesBtn.addEventListener("click",()=>{
  valentine.classList.remove("active");
  loveResult.classList.add("active");
  document.getElementById("loveQuote").innerText=
  loveQuotes[Math.floor(Math.random()*loveQuotes.length)];
});

function moveButton(){
  const maxX=window.innerWidth-noBtn.offsetWidth;
  const maxY=window.innerHeight-noBtn.offsetHeight;
  noBtn.style.position="fixed";
  noBtn.style.left=Math.random()*maxX+"px";
  noBtn.style.top=Math.random()*maxY+"px";
}

noBtn.addEventListener("mouseover",moveButton);
noBtn.addEventListener("touchstart",moveButton);

function generateSingle(){
  document.getElementById("singleQuote").innerText=
  singleQuotes[Math.floor(Math.random()*singleQuotes.length)];

  document.getElementById("count").innerText=
  Math.floor(100000+Math.random()*900000);
}
