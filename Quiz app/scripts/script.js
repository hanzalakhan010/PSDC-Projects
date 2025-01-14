let questionNo = 0;
function LoadQuestions() {
  fetch("../scripts/questions.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("que", JSON.stringify(data.questions));
    });
}
function setQuestion() {
  let questions = JSON.parse(localStorage.getItem("que"));
  document.getElementById("que").innerHTML = "Question: " + questions[questionNo]["question"];
  document.getElementById("hint").innerHTML = "Hint: " + questions[questionNo]["hint"];
  document.getElementById("ans").innerHTML = "Answer: " + questions[questionNo]["answer"];
}
function next() {
  if (questionNo >= 19) {
    questionNo = 0;
    setQuestion();
  } else {
    questionNo += 1;
    setQuestion();
  }
}
function previous(){
    if (questionNo <= 0) {
        questionNo = 19;
        setQuestion();
      } else {
        questionNo -= 1;
        setQuestion();
      } 
}
function showAnswer(){
    document.getElementById('ans').style.visibility = 'visible'
}
function showHint(){
    document.getElementById('hint').style.visibility = 'visible'

}