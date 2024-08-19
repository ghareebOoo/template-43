let iconDark = document.querySelector(".fa-moon");
let iconWhite = document.querySelector(".fa-sun");
let header = document.querySelector("header");
let active = document.querySelector(".active");
let backBlack = document.querySelectorAll(".b-black");
let colorWhite = document.querySelectorAll(".c-white");
let backGray = document.querySelectorAll(".b-gray");

iconDark.onclick = function(){
    iconDark.style.display = "none";
    iconWhite.style.display = "flex";
    window.localStorage.setItem("background-color" , "black");
    backBlack.forEach(function(ele){
        ele.style.backgroundColor = "black";
        let pcBlack = ele.value;
    })
    window.localStorage.setItem("color" , "white");
    colorWhite.forEach(function(ele){
        ele.style.color = "white";
        let cWhite = ele.value;
    })
}
iconWhite.onclick = function(){
    iconWhite.style.display = "none";
    iconDark.style.display = "flex";
    window.localStorage.setItem("background-color" , "white");
    backBlack.forEach(function(ele){
        ele.style.backgroundColor = "white";
        let pcWhite = ele.value;
    })
    window.localStorage.setItem("color" , "black");
    colorWhite.forEach(function(ele){
        ele.style.color = "black";
        let cBlack = ele.value;
    })
    window.localStorage.setItem("background-color" , "#ddd");
    backGray.forEach(function(ele){
        ele.style.backgroundColor = "#ddd";
        let pcGray = ele.value
    })
}








