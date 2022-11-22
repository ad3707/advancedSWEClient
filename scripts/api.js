const btnCreate = document.getElementById("create_question_button");
const nameInput = document.getElementById("question_name");
const aInput = document.getElementById("ans1");
const bInput = document.getElementById("ans2");
const cInput = document.getElementById("ans3");
const dInput = document.getElementById("ans4");
const answerInput = document.getElementById("answer");


btnCreate.addEventListener("click", () => {
    event.preventDefault(); 
  const name = nameInput.value;
  const a = aInput.value;
  const b = bInput.value;
  const c = cInput.value;
  const d = dInput.value;
  const answer = answerInput.value;
  
  axios.post("http://localhost8080/questions", {
      name: name,
      a: a,
      b: b,
      c: c,
      d: d,
      answer: answer
    })
    
    .then((response) => console.log(response));
});



  