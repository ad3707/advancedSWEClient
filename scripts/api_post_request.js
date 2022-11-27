
//POST REQUEST FOR ADDING QUESTION
document.addEventListener("click", function (event) {

    if (!event.target.matches("#create_question_button")) return;
    const created_question = {
        name: document.getElementById("question_name").value,
        a: document.getElementById("ans1").value,
        b: document.getElementById("ans2").value,
        c: document.getElementById("ans3").value,
        d: document.getElementById("ans4").value,
        answer: document.getElementById("answer").value,
        };
  
        const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}

        const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(created_question),
        };

    fetch('http://localhost:8080/questions', options)
    .then((response) => response.json())
    .then((data) => renderQuestion(data))
    .then(data => {
      console.log(data);
      //  return data.json();
      })
      $('#create_form').get(0).reset();
  });
  
  function renderQuestion(data) {
    console.log(data);
    const name = document.getElementById("question_name").value;
    const a = document.getElementById("ans1").value;
    const b = document.getElementById("ans2").value;
    const c = document.getElementById("ans3").value;
    const d = document.getElementById("ans4").value;

    $("#display_quiz").append("<p>" + name + "</p>");
    $("#display_quiz").append("<p>" + a + "</p>");
    $("#display_quiz").append("<p>" + b + "</p>");
    $("#display_quiz").append("<p>" + c + "</p>");
    $("#display_quiz").append("<p>" + d + "</p>");
    $("#display_quiz").append("<hr>");
  }

  
  
  