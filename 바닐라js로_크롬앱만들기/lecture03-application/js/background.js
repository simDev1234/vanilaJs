const images = [
    "background1.jpg",
    "background2.jpg",
    "background3.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImage}`;
// console.log(bgImg); // 존재하나 화면에 나타나지 않음
document.body.appendChild(bgImg);