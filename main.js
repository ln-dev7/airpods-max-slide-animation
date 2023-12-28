import "./style.scss";
import gsap from "gsap";
gsap.registerPlugin(MotionPathPlugin);

const nextBtn = document.querySelector(".navigation .next");
const prevBtn = document.querySelector(".navigation .prev");
const images = document.querySelector(".images");
const imagesContainer = document.querySelector(".images-container");
const allImages = document.querySelectorAll(".images img");

const img1 = document.querySelector(".image-1");
const img2 = document.querySelector(".image-2");
const img3 = document.querySelector(".image-3");

let current = 1;

nextBtn.addEventListener("click", () => {
  if (current < 4) {
    current++;
    switch (current) {
      case 1:
        break;
      case 2:
        gsap.to(img1, {
          width: "700px",
          top: "-20px",
          left: "100px",
          transform: "rotate(0deg)",
          //duration: .75,
        });
        gsap.to(img2, {
          width: "250px",
          top: "500px",
          left: "-80px",
          transform: "rotate(120deg)",
          //duration: .75,
        });
        gsap.to(img3, {
          width: "250px",
          top: "-100px",
          left: "-80px",
          transform: "rotate(28deg)",
          //duration: .75,
        });
        break;
      case 3:
        gsap.to(img3, {
          width: "700px",
          top: "-20px",
          left: "100px",
          transform: "rotate(0deg)",
          //duration: .75,
        });
        gsap.to(img1, {
          width: "250px",
          top: "500px",
          left: "-80px",
          transform: "rotate(120deg)",
          //duration: .75,
        });
        gsap.to(img2, {
          width: "250px",
          top: "-100px",
          left: "-80px",
          transform: "rotate(28deg)",
          //duration: .75,
        });
        break;
      default:
        gsap.to(img2, {
          width: "700px",
          top: "-20px",
          left: "100px",
          transform: "rotate(0deg)",
          //duration: .75,
        });
        gsap.to(img3, {
          width: "250px",
          top: "500px",
          left: "-80px",
          transform: "rotate(120deg)",
          //duration: .75,
        });
        gsap.to(img1, {
          width: "250px",
          top: "-100px",
          left: "-80px",
          transform: "rotate(28deg)",
          //duration: .75,
        });
        break;
    }
  }
});

prevBtn.addEventListener("click", () => {
  if (current > 1) {
    current--;
    switch (current) {
      case 1:
        gsap.to(img2, {
          width: "700px",
          top: "-20px",
          left: "100px",
          transform: "rotate(0deg)",
          //duration: .75,
        });
        gsap.to(img3, {
          width: "250px",
          top: "500px",
          left: "-80px",
          transform: "rotate(120deg)",
          //duration: .75,
        });
        gsap.to(img1, {
          width: "250px",
          top: "-100px",
          left: "-80px",
          transform: "rotate(28deg)",
          //duration: .75,
        });
        break;
      case 2:
        gsap.to(img1, {
          width: "700px",
          top: "-20px",
          left: "100px",
          transform: "rotate(0deg)",
          //duration: .75,
        });
        gsap.to(img2, {
          width: "250px",
          top: "500px",
          left: "-80px",
          transform: "rotate(120deg)",
          //duration: .75,
        });
        gsap.to(img3, {
          width: "250px",
          top: "-100px",
          left: "-80px",
          transform: "rotate(28deg)",
          //duration: .75,
        });
        break;
      case 3:
        gsap.to(img3, {
          width: "700px",
          top: "-20px",
          left: "100px",
          transform: "rotate(0deg)",
          //duration: .75,
        });
        gsap.to(img1, {
          width: "250px",
          top: "500px",
          left: "-80px",
          transform: "rotate(120deg)",
          //duration: .75,
        });
        gsap.to(img2, {
          width: "250px",
          top: "-100px",
          left: "-80px",
          transform: "rotate(28deg)",
          //duration: .75,
        });
        break;
      default:
        break;
    }
  }
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
