const waveIcon = document.getElementsByClassName('waveicon');
// const curDate = document.getElementsByClassName('date');
const curDate = document.querySelector(".date")

const temStatus = '{#tempStatus#}';

if (temStatus == 'Sunny') {
    waveIcon.innerHTML = `<ion-icon name="sunny-outline" style="color: yellow;"></ion-icon>`
}
else if (temStatus == 'Clouds') {
    waveIcon.innerHTML = `<ion-icon name="sunny-outline" style="color: blue;"></ion-icon>`
}
else if (temStatus == 'Rainy') {
    waveIcon.innerHTML = `<ion-icon name="sunny-outline" style="color: white;"></ion-icon>`
}
else {
    waveIcon.innerHTML = `<ion-icon name="sunny-outline" style="color: black;"></ion-icon>`
}

const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    let curentTime = new Date();
    // console.log(weekday[curentTime.getDay()]);
    let day = weekday[curentTime.getDay()];
    return day;
}
// getCurrentDay();

const getCurrentTime = () => {
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    var now = new Date();
    var day = now.getDate();
    var month = months[now.getMonth() + 1];
    console.log(month + '/' + day);

    let hours = now.getHours();
    let min = now.getMinutes();

    let period = 'AM';

    if (hours > 11) {
        period = 'PM';
        if (hours > 12) hours -= 12;
    }
    if (min < 10) {
        min = "0" + min;
    }

    return `${month} ${day} | ${hours}:${min}${period}`
}
// getCurrentTime();

curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();
