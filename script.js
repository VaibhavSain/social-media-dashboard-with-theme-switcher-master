const modeBtn = document.querySelector("#modeBtn");
let mode = "black";

modeBtn.addEventListener("click",() => {
    black();
});

function black () {
    if(mode === "black") {
        mode = "white"
        document.querySelector("body").style.background = "#ffffff";
        document.querySelector("#bar").style.background = "#f8f9fe";
        document.querySelector(".heading").style.color = "#1f1f29";
        document.querySelector(".modename").style.color = "#acb0bc";
        document.querySelector(".follow").style.color = "#acb0bc";
        
        document.querySelectorAll(".facefull").forEach((div => {
            div.style.backgroundColor ="#f0f3fa";
        }));
        
        document.querySelectorAll(".short").forEach((short) => {
            short.style.backgroundColor ="#f0f3fa";
        });
        document.querySelectorAll(".follow").forEach((follow) => {
            follow.style.color = "#9597a3";
        });
        document.querySelectorAll(".info").forEach((info) => {
            info.style.color = "#9597a3";
        });
        document.querySelectorAll(".count").forEach((count) => {
            count.style.color = "#1f222b";
        });
        document.querySelectorAll(".count1").forEach((count) => {
            count.style.color = "#1f222b";
        });
        document.querySelectorAll(".fuck").forEach((fuck) => {
        fuck.style.color = "#838694";
        });

        console.log(color);
    }else {
        location.reload();
    }}

