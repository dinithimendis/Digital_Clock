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

    if (hr == 0){
        hr = 12;
    }
    if (hr > 12){
        hr = hr - 12;
        ap = "PM";
    }

    Number.prototype.pad = function(digits) {
        for (var d = this.toString(); d.length < digits; d = 0 + d);
        return d;
    }
    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dname", "month", "dnum", "year", "hour", "minute", "second", "ampm"];
    var values = [week[named], months[mon], numd, yr, hr.pad(2), min.pad(2), sec.pad(2), ap];

    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}