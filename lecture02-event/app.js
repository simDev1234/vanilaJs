const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width=CANVAS_WIDTH;
canvas.height=CANVAS_HEIGHT;

// 1. 특정 좌표부터 시작하여, 선을 그리기
// ctx.lineWidth = 2;

// const colors = [
//     "#cd84f1",
//     "#ffcccc",
//     "#ff4d4d",
//     "#ffaf40",
//     "#fffa65",
//     "#32ff7e",
//     "#7efff5",
//     "#18dcff",
//     "#4b4b4b"
// ]

// let x = 0;
// let y = 0;

// function onMove(event){
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }

// function onClick(event) {
//     x = event.offsetX;
//     y = event.offsetY;
// }

// canvas.addEventListener("click", onClick);
// canvas.addEventListener("mousemove", onMove);

// 2. 그림판 만들기
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-option")); // document.getElementsByClass 는 Collection을 반환 -> Array.from으로 배열로 전환
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const erasorBtn = document.getElementById("erasor-btn");
let isPainting = false;
let isFilling = false;

function onMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;  
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown(event) {
    isPainting = true;
}

function cancelPainting(event) {
    isPainting = false;
    ctx.beginPath();
}

function onCanvasClick(event) {
    if (isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
}

function onColorClick(event) {
    //console.dir(event.target);
    //console.log(event.target.dataset.color);
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

function onModeBtnClick(event) {
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    }
    else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

function onDestroyBtnClick(event) {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onErasorBtnClick(event) {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting); // Error! canvas 밖으로 나가면 mouseup 인식X
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);

color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);
erasorBtn.addEventListener("click", onErasorBtnClick);
