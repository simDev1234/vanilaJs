// 1. HTML Element 및 속성 조회

console.dir(document); // Document는 HTML의 최상위 객체
console.log(document.title); // HTML의 속성

document.title = "Hi From JS!";
console.log(document.location);

const title = document.getElementById("title");
console.dir(title);
title.className = "hello";
title.innerText = "Got You!";
console.log(title.className);

const hellos = document.getElementsByClassName("hello"); // HTMLCollection 반환
console.log(hellos);
console.log(hellos[0]);

const lists = document.getElementsByTagName("li");
console.log(lists);

const firstElement = document.querySelector("li.hello");
//const firstElement = document.querySelector("#hello");
console.log(firstElement);

// 2. HTML Element CSS 수정하기
// console.dir(firstElement);
// firstElement.style.backgroundColor = "aqua";

// 3. Listener 
Array.from(lists)
    .forEach(element => element.addEventListener("click", handleTitleClick));

function handleTitleClick(){
    if (this.classList == "active") {
        this.className = "";
    } else {
        this.className = "active";
    }
}

const h1 = document.querySelector("div.halo:first-child h1");

console.log(h1);

function handleh1TitleClick(){
    h1.classList.toggle("clicked");
    // const clickedClass = "clicked";
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
}

h1.addEventListener("click", handleh1TitleClick);

// function handleMouseEnter(){
//     this.innerText = "Mouse is Here!";
// }

// function handleMouseLeave(){
//     this.innerText = "Mouse is gone!";
// }


// firstElement.addEventListener("mouseenter", handleMouseEnter);
// firstElement.addEventListener("mouseleave", handleMouseLeave);
//firstElement.removeEventListener("click", handleTitleClick);
//firstElement.onClick = handleTitleClick;

// 4. Window
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("copied!");
// }

// function handleWindowOffline(){
//     alert("SOS no WIFI");
// }

// function handleWindowOnline(){
//     alert("All Good!");
// }

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);