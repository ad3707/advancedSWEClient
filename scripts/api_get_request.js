  //GET REQUEST FOR ALL QUESTIONS
  document.addEventListener("click", function (event) {
    if (!event.target.matches("#get_all_questions_button")) return;
  
    fetch('http://localhost:8080/questions')
      .then((response) => response.json())
      .then((data) => renderAllQuestions(data))
  });
  
  
  function renderAllQuestions(data) {
    for (question in data) {
      display(data[question]);
    }
  }

  function display(question) {
    $("#display_quiz").append("<p> Question: " + question.name + "</p>");
    $("#display_quiz").append("<p> A: " + question.a + "</p>");
    $("#display_quiz").append("<p> B: " + question.b + "</p>");
    $("#display_quiz").append("<p> C: " + question.c + "</p>");
    $("#display_quiz").append("<p> D: " + question.d + "</p>");
  }



  
  
  