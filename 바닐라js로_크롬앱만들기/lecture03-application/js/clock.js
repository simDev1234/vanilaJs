const clock = document.querySelector("h2#clock");

// 매 2초마다 아래의 함수를 작동
function getClock() {
    const date = new Date();
    const hours = new String(date.getHours()).padStart(2, "0");
    const minutes = new String(date.getMinutes()).padStart(2, "0");
    const seconds = new String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval과 sayTimeout의 차이점
// : setInterval은 지정된 주기로 코드를 실행,
// : setTimeout은 지정된 초가 지난 후 코드를 1회 실행
getClock();
setInterval(getClock, 1000); 
// setTimeout(sayHello, 5000);

// 문자열의 padStart() 함수
"1".padStart(2, "0"); // 문자열 길이가 2가 아니면 "0"을 앞에 붙인다.
"1".padEnd(2, "0"); // 문자열 길이가 2가 아니면 "0"을 끝에 붙인다.