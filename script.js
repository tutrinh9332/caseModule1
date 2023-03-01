let Question = function (image, answer) {
    this.image = image;
    this.answer = answer;
};
let Image = [
    "https://files.vforum.vn/2014/T10/img/vforum.vn-133676-10269476-756426614409590-3959686404124209037-n.jpg",
    "https://files.vforum.vn/2014/T10/img/vforum.vn-133676-10312792-756427114409540-7541904233260875923-n.jpg",
    "https://files.vforum.vn/2014/T10/img/vforum.vn-133676-10348548-756427071076211-3320896448313432089-n.jpg",
    "https://files.vforum.vn/2014/T10/img/vforum.vn-133676-10365762-756426887742896-4051556388426351029-n.jpg",
    "https://files.vforum.vn/2014/T10/img/vforum.vn-133676-10395859-756427127742872-5852045631498248904-n.jpg"
];
let answer = ["mật mã", "tăng ca", "bán đảo", "quy củ", "mã hóa"];
let question1 = new Question(Image[0], answer[0]);
let question2 = new Question(Image[1], answer[1]);
let question3 = new Question(Image[2], answer[2]);
let question4 = new Question(Image[3], answer[3]);
let question5 = new Question(Image[4], answer[4]);

let arrayQuestion = [];
let totalPoint = 0;
let count = 0;
let LP = 3;
arrayQuestion.push(question1, question2, question3, question4, question5);
let currentQuestion = arrayQuestion[0];
document.getElementById(`score`).innerText = totalPoint;
document.getElementById(`input1`).innerText = LP;

function checkAnswer() {
    const answer = document.getElementById(`input`).value;
    if (answer === currentQuestion.answer)
    {
        count++;
        currentQuestion = arrayQuestion[count];
        if (count < arrayQuestion.length)
        {
            document.getElementById(`picture`).src = currentQuestion.image;
            document.getElementById(`input`).value = ``;
            totalPoint += 10;
            document.getElementById(`score`).innerText = totalPoint;
        }else{
            alert("Win");
            document.getElementById(`input`).value = ``;
            resetGame();
        }
    }
    else if (answer === "") {
        alert("Bạn chưa nhập câu trả lời");
    }
    else {
        alert("Sai mất rồi. Hãy thử lại")
        LP--;
        document.getElementById(`input1`).innerText = LP;
        if (LP == 0) {
            alert("Game Over");
            resetGame();
        }
    }
}
function resetGame() {
    currentQuestion = arrayQuestion[0];
    count = 0;
    LP = 3;
    totalPoint = 0;
    document.getElementById(`picture`).src = currentQuestion.image;
    document.getElementById(`input`).value = ``;
    document.getElementById(`score`).innerText = totalPoint;
    document.getElementById(`input1`).innerText = LP;
}