// 1. 원시값 
// 1) Integer, Float, Text(String - 불변)
// 2) const, let *var은 아무대서나 변경이 가능함.
// 3) boolean
// 4) null
// ㄴ null과 undefined의 차이점 
// - null은 원시값 중 하나로, 어떤 값이 의도적으로 비어있음을 의미
// - undefined는 변수는 있는데 초기화되지 않은 경우를 의미한다. 

// 2. 배열 
// const player = ["nico", 101010, true, "not at all"];
// player.push("hello");
// player.push(10101010);
// console.log(player.length);
// player[player.length - 1] = "yo"; 
// player.pop();
// player.
// console.log(player);

// 2. 객체(Objects) 
// * Javascript 또한 최상위객체가 Object이다.
// const player = {
//     name: "nico",
//     points: 100,
//     fat:false,
// };

// console.log(player);
// console.log(player.name);
// console.log(player['name']);
// player.name = "hey"; // No Error : const 객체의 속성 변경 시 에러X
// console.log(player.name);
// player.name = 1;           // 타입 변환이 자유로움
// console.log(player.name);
// player.name += 10;
// console.log(player.name);

// 3. 함수(Function)
// const player = {
//     name: "nico",
//     sayHello: function(otherPersonName){
//         console.log("Hello " + otherPersonName + " nice to meet you!");
//     },
//     saySomething: function(something) {
//         return "hello, " + something;
//     }
// }

// player.sayHello("lynn");
// player.sayHello("Jimin");

// const sayingSomething = player.saySomething("blah blah blah");
// console.log(sayingSomething);

// function calculateKoreanAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }

// const koreanAge = calculateKoreanAge(24);
// console.log(koreanAge);
// console.log(2 ** 3);

// 4. 조건문
const age = parseInt(prompt("how old are you?"));
console.log(age); // "Not" 입력시 NaN (Not a Number)이 나타남
console.log(isNaN(age) ? "다시 입력해야합니다." : age);

if (isNaN(age)) {
    console.log("Please Write Number");
} else if (age < 20){
    console.log("You are too young");
} else {
    console.log("You can smoke and drink");
}