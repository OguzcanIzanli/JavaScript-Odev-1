// İsim Girme Ekranı

let userName = prompt("Lütfen İsminizi Giriniz")

if(userName.length === 0) {
        document.querySelector(".text1").innerText = "Merhaba, Misafir! Hoş geldin!"
} else {
        document.querySelector("#myName").innerText = userName
}


// Saat

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = time.getDay();

    let weekDays= ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = `${hour}:${min}:${sec} ${weekDays[day-1]}`
    document.querySelector("#myClock").innerHTML = currentTime;

}
showTime();