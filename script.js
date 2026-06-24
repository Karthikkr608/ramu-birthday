const typingText =
"Someone very special has a birthday today...";

let i = 0;

function typeEffect(){

    if(i < typingText.length){

        document.getElementById("typing").innerHTML +=
        typingText.charAt(i);

        i++;

        setTimeout(typeEffect,70);
    }
}

typeEffect();

const photos = [
    "photos/photo1.jpg",
    "photos/photo2.jpg",
    "photos/photo3.jpg"
];

const messages = [

"😂 Ramu, don't count the candles. The cake may run out of space!",

"🤝 From childhood memories to today's adventures, every moment has been fun with you.",

"❤️ Some people are family by relation, some are friends by choice. You are both."
];

let current = 0;

function startSurprise(){

    document.getElementById("music").play();

    document.getElementById("startScreen").style.display="none";

    document.getElementById("gallery").style.display="block";

    document.getElementById("message").innerHTML =
    messages[0];
}

function nextSlide(){

    current++;

    if(current < photos.length){

        document.getElementById("photo").src =
        photos[current];

        document.getElementById("message").innerHTML =
        messages[current];

    }else{

        showFinalPage();
    }
}

function showFinalPage(){

    document.getElementById("gallery").style.display="none";

    document.getElementById("finalPage").style.display="block";

    confetti({
        particleCount:300,
        spread:180
    });

    document.getElementById("finalMessage").innerHTML =

`You may be my sister's son,
but to me you have always been more like a best friend.

Thank you for all the memories and laughs.

May your life be filled with happiness,
success and good health.

With lots of love and best wishes,
Karthi ❤️`;
}