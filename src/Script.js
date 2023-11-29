function updateClock() {
    var clock = new Date();
    var named =clock.getDay();
    var mon =clock.getMonth();
    var yr =clock.getFullYear();
    var numd =clock.getDate();
    var hr =clock.getHours();
    var min =clock.getMinutes();
    var sec =clock.getSeconds();
    var ap ="AM";

    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dname", "month", "year", "dnum", "hour", "minute", "second", "ampm"];
    var values = [named, mon, yr, numd, hr, min, sec, ap];

}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}