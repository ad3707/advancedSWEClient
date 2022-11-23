  //GET REQUEST FOR ALL QUESTIONS
  document.addEventListener("click", function (event) {
    if (!event.target.matches("#get_all_users_button")) return;
    fetch('http://localhost:8080/users')
      .then((response) => response.json())
      .then((data) => renderAllUsers(data))
  });
  
  
  function renderAllUsers(data) {
    for (user in data) {
      display(data[user]);
    }
  }

  function display(user) {
    $("#display_students").append("<p> <b> " + user.name +  "</b> </p>");
    $("#display_students").append("<p> Attempted: " + user.attempted + "</p>");
    $("#display_students").append("<p> Correct: " + user.correct + "</p>");
    $("#display_students").append("<hr>");
  }



  
  
  