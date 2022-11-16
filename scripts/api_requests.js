
//POST REQUEST FOR ADDING QUESTION
document.addEventListener("click", function (event) {
    if (!event.target.matches("#button")) return;
    const created_question = {
        name: document.getElementById("question_name"),
        a: document.getElementById("ans1"),
        b: document.getElementById("ans2"),
        c: document.getElementById("ans3"),
        d: document.getElementById("ans4"),
        answer: document.getElementById("answer"),
        };
    
        const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(created_question),
        };

    fetch('localhost:8080/questions', options)
  .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(update => {
      console.log(update);
      }).catch(e => {
      console.log(e);
      });
  });


  //GET REQUEST FOR ALL QUESTIONS
  document.addEventListener("click", function (event) {
    // Checking if the button was clicked
    if (!event.target.matches("#get_all_questions_button")) return;
  
    fetch("localhost:8080/questions")
      .then((response) => response.json())
      .then((data) => renderQuestion(data))
  });
  
  function renderQuestion(data) {
    const name = document.getElementById("question_name");
    const a = document.getElementById("ans1");
    const b = document.getElementById("ans2");
    const c = document.getElementById("ans3");
    const d = document.getElementById("ans4");
    const answer = document.getElementById("answer");
    setup.innerHTML = data.setup;
    display_name.innerHTML = data.name;
    display_a.innerHTML = data.a;
    display_b.innerHTML = data.b;
    display_c.innerHTML = data.c;
    display_d.innerHTML = data.d;
  }
  
  
  