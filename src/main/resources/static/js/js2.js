// 1. 점수를 저장할 변수 score 선언
let score = 0;

// 1. 요소 찾기 
// 2. 기능 함수 정의 
// 3. 요소와 기능 연결 = 이벤트핸들러로 연결 

// index2.html에서 id=startButton인 태그를 찾아라.
const startButton = document.querySelector("#startButton");
const endButton = document.querySelector(".endButton");
const greeting = document.querySelector("#greeting");
const message = document.querySelector("#message");
const copyButton = document.querySelector("#copyButton");

// 클릭 점수 게임 요소
const scoreElement = document.querySelector("#score");
const clickButton = document.querySelector("#clickButton");
const resetButton = document.querySelector("#resetButton");
const messageElement = document.querySelector("#message");


// startButton을 누르면 자동으로 실행됩니다.
// 이벤트핸들러 이벤트처리함수

function startGame() {
	// 메세지창을 화면에 띄웁니다. 그 창을 닫아야 다른 작업이 가능
	//modal(모달) 대화창
	alert("게임 버튼을 눌렀어요. 게임을 시작합니다.");
	}

// endButton이 눌리면 실행할 기능
function endGame() {
	alert("엔드버튼을 클릭! 게임을 종료합니다!");
	}
	
function copy() {
	message.textContent = greeting.value;
	alert("인사말: " + message.textContent);
}

// clickButton을 누르면 score +1 
function addScore() {
score = score + 1;
scoreElement.textContent = score;
messageElement.textContent = "좋아요! 한 점을 얻었습니다.";
}
// score를 초기화

function resetGame() {
score = 0;
scoreElement.textContent = score;
messageElement.textContent = "점수가 초기화되었습니다.";
}

// 이벤트를 감시하는 감시대행을 등록합니다.
// 모든 이벤트 감시는 무리 그래서 하나만 감시
// startButton이 마우스로 눌렀는지만, 누르면 startGame() 자동실행
// 태그명.addEventLister("이벤트명", 이벤트핸들)
startButton.addEventListener("click", startGame);
endButton.addEventListener("click", endGame);
copyButton.addEventListener("click", copy);

clickButton.addEventListener("click", addScore);
resetButton.addEventListener("click", resetGame);