import "./style.scss";
import gsap from "gsap";
gsap.registerPlugin(MotionPathPlugin);

const nextBtn = document.querySelector(".navigation .next");
const prevBtn = document.querySelector(".navigation .prev");
const images = document.querySelector(".images");
const imagesContainer = document.querySelector(".images-container");
const allImages = document.querySelectorAll(".images img");

const nextOrder = [[1 , 2 , 3] , [3 , 1 , 2] , [2 , 3 , 1]];
const prevOrder = [[2 , 3 , 1] , [1 , 2 , 3] , [3 , 1 , 2]];
const transformObjects = [
    {
        width: "700px",
        top: "-20px",
        left: "100px",
        transform: "rotate(0deg)"
    },

    {
        width: "250px",
        top: "500px",
        left: "-80px",
        transform: "rotate(120deg)"
    },

    {
        width: "250px",
        top: "-100px",
        left: "-80px",
        transform: "rotate(28deg)"
    }
]; 

function animation(current){

  const order = this.classList.contains('next') ? nextOrder : prevOrder;
  
  for(let j = 0 ; j < 3 ; j++){
      console.log(`.image-${order[current-1][j]}` , ' : ' , transformObjects[j]);
      const img = document.querySelector(`.image-${order[current-1][j]}`);
      gsap.to(img , transformObjects[j]);
  }
}

let current = 0;
nextBtn.addEventListener("click", () => {

  current++;
  if(current > 3 ){
    current = 1;
  }
  animation.call(nextBtn , current);

});

prevBtn.addEventListener("click", () => {
  current--;
  if(current < 0 ){
    current = 1;
  }
  animation.call(nextBtn , current);

});

nextBtn.addEventListener("click", () => {
  const activeColor = document.querySelector(".color.active");
  const nextColor = document.querySelector(".color.next");
  const prevColor = document.querySelector(".color.prev");
  activeColor.classList.remove("active");
  activeColor.classList.add("prev");
  nextColor.classList.remove("next");
  nextColor.classList.add("active");
  prevColor.classList.remove("prev");
  prevColor.classList.add("next");
});

prevBtn.addEventListener("click", () => {
  const activeColor = document.querySelector(".color.active");
  const nextColor = document.querySelector(".color.next");
  const prevColor = document.querySelector(".color.prev");
  activeColor.classList.remove("active");
  activeColor.classList.add("next");
  nextColor.classList.remove("next");
  nextColor.classList.add("prev");
  prevColor.classList.remove("prev");
  prevColor.classList.add("active");
});