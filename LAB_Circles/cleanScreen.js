var counter=0;

var globalArr = [];

window.onload = ()=> {
    document.getElementById("idStart").onclick = start;
    generateCircle(50,10,250);
    
}

function clickCircle(){
    let c = document.getElementById(this.id);
    c.remove();  
    clearInterval(globalArr[this.id].int);  
    
}

function start(){
    let width = document.getElementById("idWidth").value;
    let g = document.getElementById("idGrowth").value;
    let interval = document.getElementById("idInterval").value;
    let number = document.getElementById("idNumber").value;
    for(let i=0; i<number; i++){
        console.log(width, g, interval);        
        generateCircle(width,parseInt(g),interval);
    }
}

const make_increaser=function(id,growth,interval){
    function increase(){
        let current = document.getElementById(id).style.width;
        document.getElementById(id).style.width = parseInt(current) + growth + "px";   
        document.getElementById(id).style.height = parseInt(current) + growth + "px";
    }
    let int=setInterval(increase,interval);
    return {
        int:int
    }
};

function generateCircle(width, growth, interval){    
    let obj = document.createElement("div");
    obj.id = "Circle_"+counter;
    obj.className ="circle";    
    obj.style.width = width+"px";
    obj.style.height = width+"px";    
    obj.style.top=generateNumber(0,300)+"px";
    obj.style.left=generateNumber(0,300)+"px";
    obj.style.backgroundColor = "rgb("+generateNumber(0, 255)+","+ generateNumber(0, 255) +","+ generateNumber(0, 255) + ")";
    obj.onclick = clickCircle;
    document.getElementById("content").appendChild(obj);  
    
    
    globalArr["Circle_"+counter]=make_increaser("Circle_"+counter,growth,interval);
    counter++;

}

function generateNumber(min, max){
    let v = Math.floor(Math.random() * (max - min) + min);
    return v;
}

