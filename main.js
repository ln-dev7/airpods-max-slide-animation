import "./style.scss";
import gsap from "gsap";
gsap.registerPlugin(MotionPathPlugin);

const nextBtn = document.querySelector(".navigation .next");
const prevBtn = document.querySelector(".navigation .prev");
const imagesContainer = document.querySelector(".images");
const images = document.querySelectorAll(".images img");

const img1 = document.querySelector(".image-1");
const img2 = document.querySelector(".image-2");
const img3 = document.querySelector(".image-3");

const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
const color3 = document.querySelector(".color-3");

/*
img1.style = `
  width: 200px;
  top: -10px;
  left: -150px;
  transform: rotate(28deg);
`;
img2.style = `
  width: 700px;
  top: 50%;
  transform: translateY(calc(-50% + 50px));
`;
img3.style = `
  width: 200px;
  bottom: -70px;
  left: -150px;
  transform: rotate(120deg);
`;
*/

nextBtn.addEventListener("click", () => {
  if (img2.classList.contains("active")) {
    const centerX = 150;
    const centerY = 20;
    const radius = 50;

    gsap.to(img1, {
      width: "700px",
      rotate: 0,
      motionPath: {
        path: [
          { x: centerX, y: centerY - radius },
          { x: centerX, y: centerY - radius },
        ],
        align: img1,
        ease: "linear",
      },
      duration: 2,
    });

    gsap.to(img2, {
      width: "200px",
      rotate: 0,
      motionPath: {
        path: [
          { x: centerX, y: centerY - radius },
          { x: centerX, y: centerY - radius },
        ],
        align: img1,
        ease: "linear",
      },
      duration: 2,
    });

    gsap.to(img3, {
      width: "200px",
      rotate: 0,
      motionPath: {
        path: [
          { x: centerX, y: centerY - radius },
          { x: centerX, y: centerY - radius },
        ],
        align: img1,
        ease: "linear",
      },
      duration: 2,
    });
  }
});

prevBtn.addEventListener("click", () => {
  imagesContainer.style = `
  
  `;
});

//

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
