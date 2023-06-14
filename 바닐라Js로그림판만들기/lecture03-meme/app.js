const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width=CANVAS_WIDTH;
canvas.height=CANVAS_HEIGHT;
ctx.lineCap = "round"; // 라인 끝이 네모 아닌 둥근 모양

const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-option")); // document.getElementsByClass 는 Collection을 반환 -> Array.from으로 배열로 전환
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const erasorBtn = document.getElementById("erasor-btn");
const saveBtn = document.getElementById("save");
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");
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

function onDoubleClick(event) {
    const text = textInput.value;
    if (text !== "") {
        ctx.save(); // 현재 상태를 저장한다. (컬러, 라인 굵기 등)
        ctx.lineWidth = 1; 
        ctx.font = "68px serif";
        //ctx.strokeText(text, event.offsetX, event.offsetY);
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore(); // 위에서 이전에 저장된 사항이 돌아온다.
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
        modeBtn.innerText = "💧 Fill";
    }
    else {
        isFilling = true;
        modeBtn.innerText = "🖌️ Draw";
    }
}

function onDestroyBtnClick(event) {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onErasorBtnClick(event) {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "💧 Fill";
}

function onSaveClick(event) {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
}

function onFileChange(event) {
    const file = event.target.files[0]; // 브라우저 메모리에 이미지가 저장된다. (해당 브라우저에서만 Access 되는 상태)
    const url = URL.createObjectURL(file); // blob:http://127.0.0.1:5500/e7cb0e7a-031d-4a2a-9063-0005633df620
    const image = new Image();
    image.src = url;
    image.onload = function(){
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
    fileInput.value = null;
}

// canvas.onmousemove = function(){} --> 한가지 listener만 넣는경우
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting); // Error! canvas 밖으로 나가면 mouseup 인식X
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("dblclick", onDoubleClick);

lineWidth.addEventListener("change", onLineWidthChange);

color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);
erasorBtn.addEventListener("click", onErasorBtnClick);
saveBtn.addEventListener("click", onSaveClick);

fileInput.addEventListener("change", onFileChange);
