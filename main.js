import "./style.scss";
import gsap from "gsap";
gsap.registerPlugin(MotionPathPlugin);

const nextBtn = document.querySelector(".navigation .next");
const prevBtn = document.querySelector(".navigation .prev");
const productTitle = document.querySelector(".product-title");
const productName = document.querySelector(".product-name");
const productModel = document.querySelector(".product-model");
const productPrice = document.querySelector(".product-price");

const nextOrder = [
  [1, 2, 3],
  [3, 1, 2],
  [2, 3, 1],
];
const prevOrder = [
  [2, 3, 1],
  [1, 2, 3],
  [3, 1, 2],
];

const airpodsData = [
  {
    name: "AirPods Max",
    model: "Rose Gold",
    price: "$899",
    color: "Rose",
  },
  {
    name: "AirPods Max",
    model: "Sky Blue",
    price: "$748",
    color: "Blue sky",
  },
  {
    name: "AirPods Max",
    model: "Silver Pro",
    price: "$564",
    color: "Silver",
  },
];
const transformObjects = [
  {
    width: "700px",
    top: "-20px",
    left: "100px",
    transform: "rotate(0deg)",
  },

  {
    width: "250px",
    top: "500px",
    left: "-80px",
    transform: "rotate(120deg)",
  },

  {
    width: "250px",
    top: "-100px",
    left: "-80px",
    transform: "rotate(28deg)",
  },
];

function animation(current) {
  const order = this.classList.contains("next") ? nextOrder : prevOrder;
  for (let j = 0; j < 3; j++) {
    const img = document.querySelector(`.image-${order[current - 1][j]}`);
    gsap.to(img, transformObjects[j]);
  }
}

let current = 0;

nextBtn.addEventListener("click", () => {
  current++;
  if (current > 3) {
    current = 1;
  }
  animation.call(nextBtn, current);
});

prevBtn.addEventListener("click", () => {
  current--;
  if (current < 0) {
    current = 2;
  } else if (current === 0) {
    current = 3;
  }
  animation.call(nextBtn, current);
});

function updateProductInfo(colorIndex) {
  productTitle.classList.add("changing");
  productPrice.classList.add("changing");

  setTimeout(() => {
    productName.textContent = airpodsData[colorIndex].name;
    productModel.textContent = airpodsData[colorIndex].model;
    productPrice.textContent = airpodsData[colorIndex].price;

    productTitle.classList.remove("changing");
    productPrice.classList.remove("changing");
  }, 400);
}

nextBtn.addEventListener("click", () => {
  const activeColor = document.querySelector(".color.active");
  const nextColor = document.querySelector(".color.next");
  const prevColor = document.querySelector(".color.prev");

  const nextColorName = nextColor.querySelector("span").textContent;
  const nextColorIndex = airpodsData.findIndex(
    (item) => item.color === nextColorName
  );

  updateProductInfo(nextColorIndex);

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

  const prevColorName = prevColor.querySelector("span").textContent;
  const prevColorIndex = airpodsData.findIndex(
    (item) => item.color === prevColorName
  );

  updateProductInfo(prevColorIndex);

  activeColor.classList.remove("active");
  activeColor.classList.add("next");
  nextColor.classList.remove("next");
  nextColor.classList.add("prev");
  prevColor.classList.remove("prev");
  prevColor.classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const activeColor = document.querySelector(".color.active");
  const activeColorName = activeColor.querySelector("span").textContent;
  const activeColorIndex = airpodsData.findIndex(
    (item) => item.color === activeColorName
  );

  productName.textContent = airpodsData[activeColorIndex].name;
  productModel.textContent = airpodsData[activeColorIndex].model;
  productPrice.textContent = airpodsData[activeColorIndex].price;
});
