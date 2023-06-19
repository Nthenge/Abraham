// const { clearInterval } = require("timers");

// play music button
const soundCloud = document.querySelector(".sound-cloud");
const off = document.querySelector('.off');
const on = document.querySelector('.on');
const myAudio = document.querySelector('.myAudio');

off.addEventListener('click', () =>  soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState)=>{
    if (soundState === 'off'){
        on.style.display = 'block';
        off.style.display = 'none';
        soundCloud.style.color = "#08fdd8";
        myAudio.play();
    }
    else if(soundState === 'on'){
        on.style.display = 'none';
        off.style.display = 'block';
        soundCloud.style.color = "#f50057";
        myAudio.pause();
    }
}

// play music functionality

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const sideNav = document.querySelector('.aside');

btnBars.addEventListener('click', ()=>myfunc('open'));
btnTimes.addEventListener('click', ()=>myfunc('close'));

const myfunc = (navCondition) =>{
    if (navCondition === 'open'){
        sideNav.classList.add('show-nav');
        btnTimes.style.display = 'block';
        btnBars.style.display= 'none';
    }
    else if(navCondition === 'close'){
        sideNav.classList.remove('show-nav');
        btnTimes.style.display = 'none';
        btnBars.style.display= 'block';
    }
}

// skills loading section
let line0=document.querySelector('.background-line0');
let line1=document.querySelector('.background-line1');
let line2=document.querySelector('.background-line2');
let line3=document.querySelector('.background-line3');
let px0 = 4;
let px1 = 4;
let px2 = 4;
let px3 = 4;

let loading = setInterval(animate, 50);
function animate(){
    if (px0 == 500){
        clearInterval(loading);
    }
    else{
        px0=px0+4;
        line0.style.width = px0 +"px"; 
    }
}

let loadi = setInterval(anima, 50);
function anima(){
    if (px3 == 560){
        clearInterval(loadi);
    }
    else{
        px3=px3+4;
        line3.style.width = px3 +"px"; 
    }
}

let load = setInterval(anim, 50);
function anim(){
    if (px3 == 280){
        clearInterval(load);
    }
    else{
        px3=px3+4;
        line2.style.width = px3 +"px"; 
    }
}

let loadin = setInterval(animat, 50);
function animat(){

    if (px1 == 460){
        clearInterval(loadin);
    }
    else{
        px1=px1+4;
        line1.style.width = px1 +"px"; 
    }
}


// rolling skill section
$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour:"#00FFFF",
        outlineColour:"transparent",
        reverse:true,
        depth:1,
        maxSpeed:0.09,
        weight:true,
    },)){
        //something went wrong. Hide the Canvas Conitaner
         $("#myCanvasContainer");
    }
})

// Contact navigation
const linkedInButton = document.getElementById('linkedInButton');
  linkedInButton.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/47made', '_blank');
  });

const twitterButton = document.getElementById('twitterButton');
  twitterButton.addEventListener('click', function() {
    window.open('https://twitter.com/Abraham47c?t=VLibWXokv2bDeKPzB-VUvA&s=09', '_blank');
  });

  const githubButton = document.getElementById('githubButton');
  githubButton.addEventListener('click', function() {
    window.open('https://github.com/Nthenge', '_blank');
  });
