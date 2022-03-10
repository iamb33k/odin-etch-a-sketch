const container = document.getElementById("container");
let gridCount = 16;
let totalDivs = gridCount * gridCount;
let div = [];

for (let i = 0; i < totalDivs; i++){
    div[i] = document.createElement("div");
    div[i].className = "square";
    container.appendChild(div[i]);
}


