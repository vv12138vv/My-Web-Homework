let msg1="Welcome!";
let msg2="Here's Real Madrid";

let imgIndex=0;
const imgCount=5;
function refreshSlideBar(){
    if(imgIndex<0){
        imgIndex=imgCount-1;
    }else if(imgIndex>imgCount-1){
        imgIndex=0;
    }

    let slidebar=document.querySelector(".shell_main_slidebar")
    let width=getComputedStyle(slidebar).width;
    width=Number(width.slice(0,-2));
    console.log(width);
    slidebar.querySelector(".shell_main_slidebar_content").style.left=
        imgIndex*width*(-1)+"px";

}
function imgLeft(){
    imgIndex-=1;
    refreshSlideBar();
}
function imgRight(){
    imgIndex+=1;
    refreshSlideBar();
}
function setImgIndex(i){
    imgIndex=i;
    refreshSlideBar();
}

const slidebar_selector=document.querySelector(".shell_slidebar_selector")
for(let i=0;i<imgCount;i++){
    const indicator=document.createElement("div");
    indicator.classList.add("indicator");
    indicator.onclick=()=>setImgIndex(i);

    slidebar_selector.append(indicator);
}

let i=0;
function welcomePlay(){
    let text1=document.getElementById("welcome_text1");
    let text2=document.getElementById("welcome_text2");
    if(i<=8){
        text1.innerText=msg1.substring(0,i);
        setTimeout("welcomePlay()",150);
        i++;
    }else if(i>50){

    }else{
        text2.innerText=msg2.substring(0,i-8);
        setTimeout("welcomePlay()",150);
        i++;
    }
}


