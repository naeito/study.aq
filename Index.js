//ストップウォッチ
const time= document.getElementById('countup')
const start= document.getElementById('start')
const stop= document.getElementById('stop')
const reset= document.getElementById('reset')
let timeid
//ボタン
start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
// 開始時間の関数
let startTime;
//停止時間の関数
let stopTime = 0;
//カウントストップの関数
let timeoutID;
//各教科ごとの時間
let Mathtime = Number(localStorage.getItem("MT"))||0;
let Japanesetime = Number(localStorage.getItem("JT"))||0;
let Englishtime = Number(localStorage.getItem("ET"))||0;
let Physicstime = Number(localStorage.getItem("PT"))||0;
let Chemistrytime = Number(localStorage.getItem("CT"))||0;
let Geographytime = Number(localStorage.getItem("GT"))||0;
const Mathcalculation = document.getElementById('mathtime');
const Japanesecalculation = document.getElementById('japanesetime');
const Englishcalculation = document.getElementById('englishtime');
const Physicscalculation = document.getElementById('physicstime');
const Chemistrycalculation = document.getElementById('chemistrytime');
const Geographycalculation = document.getElementById('geographytime');
//
let puldown = document.getElementById('subject');
//現在のカウント時間
function displayTime(){
    const elapsed = new Date(Date.now() - startTime + stopTime);
    const h = String(Math.floor(elapsed/3600000)).padStart(2,'0');
    const m = String(Math.floor(elapsed%3600000/60000)).padStart(2,'0');
    const s = String(Math.floor(elapsed%60000/1000)).padStart(2,'0');
    time.textContent=`${h}:${m}:${s}`;
    timeoutID = setTimeout(displayTime);
}
//スタート
start.addEventListener('click',()=>{
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
    clearTimeout(timeoutID);
    startTime = Date.now();
    displayTime();
});
//ストップ
stop.addEventListener('click',function(){
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
    clearTimeout(timeoutID);
    clearInterval(timeid);
    stopTime += (Date.now() - startTime);
}); 
//累計時間
const totalTime= document.getElementById('totalTime')
let TotalTime = Number(localStorage.getItem("ALLTime"))||0;
totalUpdateDisplay();
    function totalUpdateDisplay(){
    const h2 = String(Math.floor(TotalTime / 3600000)).padStart(4,"0");
    const m2 = String(Math.floor((TotalTime % 3600000) /60000)).padStart(2,"0");
    const s2 = String(Math.floor((TotalTime % 60000)/1000)).padStart(2,"0");
    totalTime.textContent=`${h2}:${m2}:${s2}`;
};
//リセット
reset.addEventListener('click',function(){
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
    clearTimeout(timeoutID);
    TotalTime += stopTime;
    localStorage.setItem("ALLTime",TotalTime)
//各教科ごとの記録
if(puldown.value =="Math"){
    Mathtime += stopTime;
    localStorage.setItem("MT",Mathtime);
    MathDisplay();
      }else if(puldown.value=="Japanese"){
        Japanesetime += stopTime;
        localStorage.setItem("JT",Japanesetime);
       JapaneseDisplay(); 
    }else if(puldown.value=="English"){
        Englishtime += stopTime;
        localStorage.setItem("ET",Englishtime);
       EnglishDisplay(); 
    }else if(puldown.value== "Physics"){
    Physicstime += stopTime;
    localStorage.setItem("PT",Physicstime);
     PhysicsDisplay();
    }else if(puldown.value== "Chemistry"){
    Chemistrytime += stopTime;
    localStorage.setItem("CT",Chemistrytime);
     ChemistryDisplay();
    }else if(puldown.value== "Geography"){
    Geographytime += stopTime;
    localStorage.setItem("GT",Geographytime);
     GeographyDisplay();
     };
   
    totalUpdateDisplay();
    stopTime = 0;
    startTime=0;
    countup.textContent = '00:00:00';
   
});

//タイマー
const countdown= document.getElementById('countdown')
const hour= document.getElementById('hour')
const minute= document.getElementById('minute')
const second= document.getElementById('second')
const start1= document.getElementById('start1')
const stop1= document.getElementById('stop1')
const reset1= document.getElementById('reset1')
//ボタン
 hour.disabled = false;
    second.disabled = false;
    minute.disabled = false;
    start1.disabled = false;
    stop1.disabled = true;
    reset1.disabled= true;
//開始時間
let startTime1 = 0;
//停止
//カウントストップ
//時間を増やす
function updateDisplay(){
    const h1 = String(Math.floor(startTime1 / 3600)).padStart(2,"0");
    const m1 = String(Math.floor((startTime1 % 3600) /60)).padStart(2,"0");
    const s1 = String(startTime1 % 60).padStart(2,"0");
    countdown.textContent=`${h1}:${m1}:${s1}`;
}
document.getElementById("hour").addEventListener("click",() => {
    console.log("hour clicked")
    startTime1 += 3600;
    updateDisplay();
});
document.getElementById("minute").addEventListener("click",() => {
    startTime1 += 600;
    updateDisplay();
});
document.getElementById("second").addEventListener("click",() => {
    startTime1 += 60;
    updateDisplay();
});
updateDisplay();
//スタート
let uptime = 0;
let timer;
start1.addEventListener('click',function(){
    hour.disabled = true;
    second.disabled = true;
    minute.disabled = true;
    start1.disabled = true;
    stop1.disabled = false;
    reset1.disabled= true;
     timer = setInterval(function(){
        if(startTime1>0){
        uptime++;
        startTime1--;
        h1 = String(Math.floor(startTime1 / 3600)).padStart(2,"0");
        m1 = String(Math.floor((startTime1 % 3600) /60)).padStart(2,"0");
        s1 = String(startTime1 % 60).padStart(2,"0");
    countdown.textContent=`${h1}:${m1}:${s1}`;
}else{
    hour.disabled = true;
    second.disabled = true;
    minute.disabled = true
    start1.disabled = true;
    stop1.disabled = false;
    reset1.disabled= true;
    clearInterval(timer);
    clearInterval(uptime);
    alert("時間になりました");
};
},1000);
});
//タイマーストップ
stop1.addEventListener('click',function(){
     hour.disabled = false;
    second.disabled = false;
    minute.disabled = false;
    start1.disabled = false;
    stop1.disabled = true;
    reset1.disabled= false;
    clearInterval(timer);
    clearInterval(uptime);
    uptime = uptime*1000;
    TotalTime += uptime;
    localStorage.setItem("ALLTime",TotalTime)
    //タイマーの分割
     if(puldown.value== "Math"){
    Mathtime += uptime;
    localStorage.setItem("MT",Mathtime);
     MathDisplay();
     }else if(puldown.value== "Japanese"){
    Japanesetime += uptime;
    localStorage.setItem("JT",Japanesetime);
     JapaneseDisplay();
     }else if(puldown.value== "English"){
    Englishtime += uptime;
     localStorage.setItem("ET",Englishtime);
     EnglishDisplay();
     }else if(puldown.value== "Physics"){
    Physicstime += uptime;
    localStorage.setItem("PT",Physicstime);
     PhysicsDisplay();
     }else if(puldown.value== "Chemistry"){
    Chemistrytime += uptime;
    localStorage.setItem("CT",Chemistrytime);
     ChemistryDisplay();
     }else if(puldown.value== "Geography"){
    Geographytime += uptime;
    localStorage.setItem("GT",Geographytime);
     GeographyDisplay();
     };
    totalUpdateDisplay();
    uptime = 0;
});

reset1.addEventListener('click',function(){
     hour.disabled = false;
    second.disabled = false;
    minute.disabled = false;
    start1.disabled = false;
    stop1.disabled = true;
    reset1.disabled= true;
    countdown.textContent='00:00:00';
uptime = 0
startTime1=0    
});
//教科ごとの時間の表示
MathDisplay();
 function MathDisplay(){
    const hM =String(Math.floor(Mathtime/3600000)).padStart(2,"0");
    const mM =String(Math.floor((Mathtime%3600000)/60000)).padStart(2,"0");
    const sM =String(Math.floor((Mathtime%60000)/1000)).padStart(2,"0");
    Mathcalculation.textContent=`${hM}:${mM}:${sM}`;
 }
 JapaneseDisplay();
 function JapaneseDisplay(){
    const hJ =String(Math.floor(Japanesetime/3600000)).padStart(2,"0");
    const mJ =String(Math.floor((Japanesetime%3600000)/60000)).padStart(2,"0");
    const sJ =String(Math.floor((Japanesetime%60000)/1000)).padStart(2,"0");
    Japanesecalculation.textContent=`${hJ}:${mJ}:${sJ}`;
 }
  EnglishDisplay();
 function EnglishDisplay(){
    const hE =String(Math.floor(Englishtime/3600000)).padStart(2,"0");
    const mE =String(Math.floor((Englishtime%3600000)/60000)).padStart(2,"0");
    const sE =String(Math.floor((Englishtime%60000)/1000)).padStart(2,"0");
    Englishcalculation.textContent=`${hE}:${mE}:${sE}`;
 }
 PhysicsDisplay();
 function PhysicsDisplay(){
    const hP =String(Math.floor(Physicstime/3600000)).padStart(2,"0");
    const mP =String(Math.floor((Physicstime%3600000)/60000)).padStart(2,"0");
    const sP =String(Math.floor((Physicstime%60000)/1000)).padStart(2,"0");
    Physicscalculation.textContent=`${hP}:${mP}:${sP}`;
 }
 ChemistryDisplay();
 function ChemistryDisplay(){
    const hC =String(Math.floor(Chemistrytime/3600000)).padStart(2,"0");
    const mC =String(Math.floor((Chemistrytime%3600000)/60000)).padStart(2,"0");
    const sC =String(Math.floor((Chemistrytime%60000)/1000)).padStart(2,"0");
    Chemistrycalculation.textContent=`${hC}:${mC}:${sC}`;
 }
 GeographyDisplay();
 function GeographyDisplay(){
    const hG =String(Math.floor(Geographytime/3600000)).padStart(2,"0");
    const mG =String(Math.floor((Geographytime%3600000)/60000)).padStart(2,"0");
    const sG =String(Math.floor((Geographytime%60000)/1000)).padStart(2,"0");
    Geographycalculation.textContent=`${hG}:${mG}:${sG}`;
 }
