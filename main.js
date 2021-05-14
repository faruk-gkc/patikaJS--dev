const askName = () => {
    let name = prompt("Adınız nedir?","Lütfen Adınızı Giriniz");
    let getName = document.querySelector("#getName")
    getName.innerText = `Welcome ${name}!`
    getName.classList.add("#myName")
}

const showTime = () => {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = date.getDay();

    switch ( session ) {
        case 0:
            session = "Pazar";
            break;
        case 1:
            session = "Pazartesi";
            break;
        case 2:
            session = "Salı";
            break;
        case 3:
            session = "Çarşamba";
            break;
        case 4:
            session = "Perşembe";
            break;
        case 5:
            session = "Cuma";
            break;
        case 6:
            session = "Cumartesi";
            break;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    const time = h + ":" + m + ":" + s + " " + session;
    document.querySelector("#clock").innerText = time;
    document.querySelector("#clock").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();
askName()