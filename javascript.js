const container = document.getElementById("container");
let gridCount = 16;
let totalCount = gridCount * gridCount;
let div = [];

//build initial page
for (let i = 0; i < totalCount; i++){
        div[i] = document.createElement("div");
        div[i].className = "square";
        div[i].style.height = `${640/gridCount}px`;
        div[i].style.width = `${640/gridCount}px`;
        container.appendChild(div[i]);
    }

//add paint class (color squares)
function paint(e){
    this.classList.add('paint');
}

//function to run on click of reset button
function reset(e){
    removeAllChildNodes(container);
    let gridCount = prompt("Choose square amount between 16 and 100");
    let totalCount = gridCount * gridCount;
    for (let i = 0; i < totalCount; i++){
        div[i] = document.createElement("div");
        div[i].className = "square";
        div[i].style.height = `${640/gridCount}px`;
        div[i].style.width = `${640/gridCount}px`;
        container.appendChild(div[i])
    }
    //reapply event listeners
    let divs = document.querySelectorAll('.square')
    divs.forEach((div) => div.classList.remove('paint'));  
    divs.forEach((div)=>{div.addEventListener('mouseenter', paint);});
}

//removes all squares from container
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let divs = document.querySelectorAll('.square')
divs.forEach((div)=>{div.addEventListener('mouseenter', paint);});
document.getElementById("reset").addEventListener('click', reset);