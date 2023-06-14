const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width=800;
canvas.height=800;

// 1. 사각형 도형 그리기
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();

// ctx.beginPath();
// ctx.rect(350, 350, 100, 100);
// ctx.rect(450, 450, 100, 100);
// ctx.fillStyle = "red";
// ctx.fill();

// 2. 선 그리기
// ctx.moveTo(50, 50); // 페인트브러쉬 위치 지정
// ctx.lineTo(150, 50); // (x, y) 좌표로 가는 선을 그리기
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// // ctx.stroke();
// ctx.fill();

// 3. 집 그리기
// ctx.fillStyle = "aqua";
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.strokeRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

// 4. 얼굴 그리기
ctx.fillRect(210 - 40, 200 - 50, 15, 100);
ctx.fillRect(350 - 40, 200 - 50, 15, 100);
ctx.fillRect(260 - 40, 200 - 50, 60, 200);

ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(220, 100, 5, Math.PI, 2 * Math.PI);
ctx.arc(280, 100, 5, Math.PI, 2 * Math.PI);
ctx.fill();