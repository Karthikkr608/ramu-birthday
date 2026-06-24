
const typingText='Someone very special has a birthday today...';
let i=0;
function typeEffect(){
 if(i<typingText.length){
  document.getElementById('typing').innerHTML+=typingText.charAt(i++);
  setTimeout(typeEffect,60);
 }
}
window.onload=typeEffect;

const photos=['photos/photo1.jpg','photos/photo2.jpg','photos/photo3.jpg'];
const messages=[
'😂 Loo Baamaida ning ivaga 21 Varsha. Now you are eligible for marriage!',
'🤝 From childhood memories to today\'s adventures, every moment has been fun with you.',
'❤️ Some people are family by relation, some are friends by choice. You are both.'
];
let current=0;

function startSurprise(){
 document.getElementById('music').play().catch(()=>{});
 document.getElementById('startScreen').style.display='none';
 document.getElementById('gallery').style.display='block';
 document.getElementById('message').innerHTML=messages[0];
}

function nextSlide(){
 current++;
 if(current<photos.length){
   document.getElementById('photo').src=photos[current];
   document.getElementById('message').innerHTML=messages[current];
   document.getElementById('memoryNumber').innerText=current+1;
 }else{
   showFinalPage();
 }
}

function showFinalPage(){
 document.getElementById('gallery').style.display='none';
 document.getElementById('finalPage').style.display='block';
 confetti({particleCount:300,spread:180});
 document.getElementById("finalMessage").innerHTML = `

You are not just my sister's son,

you are one of my best friends ❤️

<br><br>

Thank you for all the memories,

laughs and adventures.

<br><br>

May this year bring you happiness,

success and good health.

<br><br>

<div style="
font-size:28px;
color:#ffb3d9;
font-family:cursive;">

With lots of love,<br>
Karthi ❤️

</div>

`;
}
