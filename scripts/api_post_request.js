
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
  

        const headers = {'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InEyM0NreTdaTjROdEQ0R0Z6TGhhVSJ9.eyJpc3MiOiJodHRwczovL2Rldi1sYjBhaWJhYmZodWM2ZTZqLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJMc1ZBeFJtdnJtOHl4a3RxWE96ZERXV242bWxBeGQ2UEBjbGllbnRzIiwiYXVkIjoibG9jYWxob3N0OjgwODAiLCJpYXQiOjE2Njk2ODY2MDIsImV4cCI6MTY3MjI3ODYwMiwiYXpwIjoiTHNWQXhSbXZybTh5eGt0cVhPemREV1duNm1sQXhkNlAiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.4PAO24a_wuuJbhZUfM6nDdBG7AjwsQcmp8dHYOa6ObKelzu9B_jwU6BrOjFD7FNkDfp6mNDWO8rLE62rrPDhnlTCop6E85CApOIcfpYc3VjiWr3SMNeCK4gasFoZv82UmvlK_kbo8CAPNAHMYeJjouxYKcZWGh4O7PLMjofS3fYMzVtqjH9qtb0kvodRjd4XmDVac_rUxtgHHsCFZhx27rS_v0iGog_TcKjZMEhYtHTBJY5YA-E0RW92OWDh69sjACXs_m0ks8Y9PLXGiMYei7UKDCMWrrtrw2jJXW-woTWemBWB-20qxjc7bJRqAJX902OD9-EhY6h9kINSGNvDUg',
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/',
        'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
        'Access-Control-Allow-Headers':'Origin, Content-Type, OPTIONS, Authorization, x-auth-token'
        }

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

  
  
  