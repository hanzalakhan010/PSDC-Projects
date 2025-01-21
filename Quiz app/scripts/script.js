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
  document.getElementById('hint').style.visibility = 'hidden'
  document.getElementById('ans').style.visibility = 'hidden'
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
function toggleAnswer(){
  console.log('ffdfs')
  if (document.getElementById('ans').style.visibility = 'visible'){
      document.getElementById('ans').style.visibility = 'hidden'
      document.getElementById('que').style.visibility = 'visible'


  }
  else{
    document.getElementById('ans').style.visibility = 'visible'
    document.getElementById('hint').style.visibility = 'hidden'
    document.getElementById('que').style.visibility = 'hidden'

    
  }
}
function showHint(){
    document.getElementById('hint').style.visibility = 'visible'

}