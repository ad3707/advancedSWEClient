  //GET REQUEST FOR LEADERBOARD
  document.addEventListener("click", function (event) {
    if (!event.target.matches("#leaderboard_button")) return;
    const k = document.getElementById("topK").value; 
    fetch('http://localhost:8080/leaderboard/' + k)
      .then((response) => response.json())
      .then((data) => renderTopUsers(data))
      console.log(data);
  });
  
  
  function renderTopUsers(data) {
    $('#display_leaderboard').empty();
    for (user in data) {
      displayLeaderboard(data[user]);
    }
  }

  function displayLeaderboard(user) {
    $("#display_leaderboard").append("<p> <b> " + user.name +  "</b> </p>");
    $("#display_leaderboard").append("<p> Student ID: " + user.id +  " </p>");
    $("#display_leaderboard").append("<p> Score: " + Math.round((user.percentCorrect) * 100) + "% </p>");
    $("#display_leaderboard").append("<hr>");
  }



  
  
  