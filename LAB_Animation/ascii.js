var arr;
var indexArr;
var interval=null;
var speedInterval=250;
var beforeAnimation;
function fnPlayButton(){
    beforeAnimation=document.getElementById("text-area").value;    
    arr=beforeAnimation.split("=====\n");
    indexArr=0;
    document.getElementById("stop").disabled=false;
    document.getElementById("start").disabled=true;
    document.getElementById("animation").disabled=true;
    interval=setInterval(playAnimation,speedInterval);
}
function incrementIndexArr(){
    if (indexArr>=arr.length-1) {
        indexArr=0;
    }else{
        indexArr++;
    }
}
function changeFrame(){
    document.getElementById("text-area").value="";
    document.getElementById("text-area").value=arr[indexArr];
}
function playAnimation(){
    changeFrame();
    incrementIndexArr();
}
function fnStopButton(){
    document.getElementById("stop").disabled=true;
    document.getElementById("start").disabled=false;
    document.getElementById("animation").disabled=false;
    document.getElementById("text-area").value=beforeAnimation;
    clearInterval(interval);
    interval=null;
}
function changeSpeedInterval(){
    clearInterval(interval);
    interval=null;
    interval=setInterval(playAnimation,speedInterval);

}
function fnTurboClick(){
    if (this.checked) {
        speedInterval=50;
        //if it is running start again with new speed
        if (interval) {
            changeSpeedInterval();
        }
      } else {
        speedInterval=250;
        //if it is running start again with new speed
        if (interval) {
            changeSpeedInterval();
        }
      }
}
function fnAnimChange(){
    document.getElementById("text-area").value=ANIMATIONS[this.value];
}
function fnSizeChange(){
    document.getElementById("text-area").className="fs"+this.value;    
}
window.onload = function(){
    "use strict";
    // put all of your code here
    document.getElementById("start").onclick=fnPlayButton;
    document.getElementById("stop").onclick=fnStopButton;
    document.getElementById("turbo").onchange=fnTurboClick;
    document.getElementById("animation").onchange=fnAnimChange;
    document.getElementById("fontsize").onchange=fnSizeChange;
}
