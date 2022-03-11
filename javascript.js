const container = document.getElementById("container");
let gridCount = 16;
let totalCount = gridCount * gridCount;
let div = [];

for (let i = 0; i < totalCount; i++){
    div[i] = document.createElement("div");
    div[i].className = "square";
    container.appendChild(div[i]);
}

function paint(e){
    this.classList.add('paint');


}

const divs = document.querySelectorAll('.square')
divs.forEach((div)=>{
    div.addEventListener('mouseenter', paint);
});
