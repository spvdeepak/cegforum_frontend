// User Image Menu

document.querySelector(".user-b-info").onclick = function () {
    if (document.querySelector(".user-top-menu").style.visibility == "visible") {
        document.querySelector(".user-top-menu").style.visibility = "hidden";
    }
    else {
        document.querySelector(".user-top-menu").style.visibility = "visible";
    }
}

// Theme Changer Auto
window.onload = function () {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.toggle("dark-theme");
    document.querySelector(".dark-status").innerHTML = "Default";
    }
}

// Theme-Changer Manual
document.querySelector(".dark-switch").onclick = () => {
    document.body.classList.toggle("dark-theme");
    var dvalue = document.querySelector(".dark-status").innerHTML;
    document.querySelector(".user-top-menu").style.visibility = "hidden";
    if (dvalue == "Off") {
        document.querySelector(".dark-status").innerHTML = "On";
    }
    else {
        document.querySelector(".dark-status").innerHTML = "Off";
    }
}

// Event banner Show or Hide
document.querySelector(".eve-banner-hide").onclick = () => {
    document.querySelector(".user-top-menu").style.visibility = "hidden";
    var status = document.querySelector(".adv-div1").style.display;
    if (status == "none") {
        document.querySelector(".adv-div1").style.display = "block";
        document.querySelector(".adv-div2").style.display = "block";
        document.querySelector(".eve-banner-hide-txt").innerHTML = "Hide Event Banner";
    }
    else {
        document.querySelector(".adv-div1").style.display = "none";
        document.querySelector(".adv-div2").style.display = "none";
        document.querySelector(".eve-banner-hide-txt").innerHTML = "Show Event Banner";
    }

    var icon = document.querySelector(".eve-eye-i");
    if(icon.classList.contains("fa-eye-slash")){
        icon.classList.replace("fa-eye-slash", "fa-eye");
    }
    else{
        icon.classList.replace("fa-eye", "fa-eye-slash");
    }
}
