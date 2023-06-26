// imagecontainer
const imagecontainer = document.querySelector(".image-container");
const prevBtn = document.getElementById("prev");
const nxtBtn = document.getElementById("nxt");
// console.log(imagecontainer);
// console.log(prevBtn);
// console.log(nxtBtn); 
let x=0;
prevBtn.addEventListener(`click`,()=>{
    x=x+45;
    rotate();
})
nxtBtn.addEventListener(`click`,()=>{
    x=x-45;
    rotate();
})
function rotate(){
    imagecontainer.style.transform=`perspective(1000px) rotateY(${x}deg)`;
}