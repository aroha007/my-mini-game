
// 함수 정의
// function 함수면(입력 매개변수 {
//  입력매개변수를 사용한 처리문. . .
// }

// 이벤트를 만드는(생성하는) 태그
// 1. html태그를 자바스크립트에서 쓸려면
// 2. html태그를 찾는 querySelector(셀렉터이름)
// 3. 모든 html태그는 document object Model이라는
//    자바스크립트에 들어 있습니다
// 4. document객체를 DOM이라고 약자로 부름

const helloButton = document.querySelector("#helloButton");

// 내가 만든 처리함수 이벤트가 발생하면 실행될 함수
function sayHello() {
  alert("안녕하세요");
}
// html 객체와 이벤트(실제 마우스 누름 같은 click 이라고함)
// 이벤트 연결등록 그러면 이벤트를 감시하다.
// 이벤트가 발생하면(예로 click이벤트) 실행할 할수 등록

helloButton.addEventListener("click", sayHello)

 // 섹션 12 예제
 // 1. 컬러 배열 선언
 const buttonColor = ["pink", "green", "yellow", "white", "red"];
 // 2. HTML 태그 button1, button2, button3 찾기
 const button1 = document.querySelector("#button1");
 const button2 = document.querySelector("#button2");
 const button3 = document.querySelector("#button3");
 const button4 = document.querySelector("#button4");
 const button5 = document.querySelector("#button5");
 // 3. 버튼을 누르면 처리(실행)할 함수정의
 function button1Click(){
	alert("버튼1이 눌렸어요 " + buttonColor[0]);
 }
 function button2Click(){
	alert("버튼2이 눌렸어요 " + buttonColor[1]);
 }
 function button3Click(){
	alert("버튼3이 눌렸어요 " + buttonColor[2]);
 }
 function button4Click(){
	alert("버튼4이 눌렸어요 " + buttonColor[3]);
 }
 function button5Click(){
	alert("버튼5이 눌렸어요 " + buttonColor[4]);
 }
 // 4. 이벤트(지금 'click')가 발생하면 처리할 함수가 실행
 //    되도록 모니터 예약등록 
 button1.addEventListener("click", button1Click);
 button2.addEventListener("click", button2Click);
 button3.addEventListener("click", button3Click);
 button4.addEventListener("click", button4Click);
 button5.addEventListener("click", button5Click);
 
 
 // toList 제어하기
 // 1. 추가버튼 찾기
  const addButton = document.querySelector("#addButton");
 // 2. #addButton 태그를 눌렀는가 모니터링
  addButton.addEventListener("click", function() {
  alert("버튼을 클릭했어요!");
  });
  
  const input = document.querySelector("#taskInput");
  console.log(input.value);
 
