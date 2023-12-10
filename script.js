const selectFields = document.querySelectorAll("select"),
content = document.querySelector(".content"),
text = document.querySelector(".wrapper h1"),
button = document.querySelector(".wrapper button");
let ringtone = new Audio("./SnapSave.io - no lie - sean paul ft. dua lipa [edit audio] (128 kbps).mp3");
let alarmTime, isAlarmSet = false;
for(let i = 11; i >= 0; i--){
    i = i < 10 ? "0" + i : i;
    selectFields[0].insertAdjacentHTML("afterbegin", `<option value="${i}">${i}</option>`)
}
for(let i = 59; i >= 0; i--){
    i = i < 10 ? "0" + i : i;
    selectFields[1].insertAdjacentHTML("afterbegin", `<option value="${i}">${i}</option>`)
}
for(let i = 2; i > 0; i--){
    let amOrPm = i > 1 ? "PM" : "AM";
    selectFields[2].insertAdjacentHTML("afterbegin", `<option value="${amOrPm}">${amOrPm}</option>`)
}
setInterval(()=>{
    let time = new Date();
    let h = time.getHours();
    let amOrPm = h > 12 ? "PM" : "AM";
    let m = time.getMinutes();
    let s = time.getSeconds();
    h = h > 12 ? h - 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    text.textContent = `${h}:${m}:${s} ${amOrPm}`;
    console.log(alarmTime == `${h}:${m} ${amOrPm}`);
    if(alarmTime == `${h}:${m} ${amOrPm}`){
    ringtone.play();
    console.log("Music playing...");
    }
}, 1000);
//Clicking the button
button.addEventListener("click", alarm);
function alarm(){
    if(isAlarmSet){
        content.classList.remove("disable");
        ringtone.pause();
        ringtone.load();
        alarmTime = "";
        button.textContent = "Set Alarm";
        return isAlarmSet = false;
    }
    let time = `${selectFields[0].value}:${selectFields[1].value} ${selectFields[2].value}`;
    if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM"))
    return alert("Enter a valid time!");
    isAlarmSet = true;
    alarmTime = time;
    console.log(alarmTime);
    content.classList.add("disable");
    button.textContent = "Cancel Alarm";
}