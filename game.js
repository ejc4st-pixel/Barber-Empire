"use strict";
const game = document.querySelector("#game");
const bg = document.querySelector("#shop-background");
bg.addEventListener("error",()=>{document.querySelector("#status").textContent="BACKGROUND ASSET MISSING";});
bg.addEventListener("load",()=>{console.log("Barber Empire Level 1 loaded");});
window.BarberEmpire={version:"0.1.0",stage:"foundation",game};