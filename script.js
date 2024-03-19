let song = document.getElementById("song");
let progress = document.getElementById("progress-bar");
let playbtn = document.getElementById("play");
let heart = document.getElementById("heart");
let repeatBtn= document.getElementById("repeat");
let disc= document.getElementById("disc");





song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;

}

function playPause() {

    if (playbtn.classList.contains("fa-pause")) {
        song.pause();
        playbtn.className = "fa-solid fa-play";
        document.querySelector("#playBox").style.boxShadow = "8px 8px 16px #c3c3c3 ,-8px -8px 16px #fdfdfd";
        disc.className = "discImg";
        


    }
    else {
        song.play();
        playbtn.className = "fa-solid fa-pause";
        document.querySelector("#playBox").style.boxShadow = "inset 7px 7px 14px #b5b5b5 , inset -7px -7px 14px #ffffff";
        disc.className = "discImg spin";
    }

}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;

    }, 500);

}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    playbtn.className = "fa-solid fa-pause";
        document.querySelector("#playBox").style.boxShadow = "inset 7px 7px 14px #b5b5b5 , inset -7px -7px 14px #ffffff";
    
}

heartBtn = document.querySelector(".heart");

heartBtn.onclick = function() {
    if (heart.classList.contains("fa-regular")) {
        heart.className ="fa-sharp fa-solid fa-heart";
    }

    else{
        heart.className ="fa-sharp fa-regular fa-heart";

    }
    
    
}



