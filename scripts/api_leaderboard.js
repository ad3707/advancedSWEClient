  //GET REQUEST FOR LEADERBOARD
  document.addEventListener("click", function (event) {
    if (!event.target.matches("#leaderboard_button")) return;
    const k = document.getElementById("topK").value; 

    const headers = {'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InEyM0NreTdaTjROdEQ0R0Z6TGhhVSJ9.eyJpc3MiOiJodHRwczovL2Rldi1sYjBhaWJhYmZodWM2ZTZqLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJMc1ZBeFJtdnJtOHl4a3RxWE96ZERXV242bWxBeGQ2UEBjbGllbnRzIiwiYXVkIjoibG9jYWxob3N0OjgwODAiLCJpYXQiOjE2Njk2ODY2MDIsImV4cCI6MTY3MjI3ODYwMiwiYXpwIjoiTHNWQXhSbXZybTh5eGt0cVhPemREV1duNm1sQXhkNlAiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.4PAO24a_wuuJbhZUfM6nDdBG7AjwsQcmp8dHYOa6ObKelzu9B_jwU6BrOjFD7FNkDfp6mNDWO8rLE62rrPDhnlTCop6E85CApOIcfpYc3VjiWr3SMNeCK4gasFoZv82UmvlK_kbo8CAPNAHMYeJjouxYKcZWGh4O7PLMjofS3fYMzVtqjH9qtb0kvodRjd4XmDVac_rUxtgHHsCFZhx27rS_v0iGog_TcKjZMEhYtHTBJY5YA-E0RW92OWDh69sjACXs_m0ks8Y9PLXGiMYei7UKDCMWrrtrw2jJXW-woTWemBWB-20qxjc7bJRqAJX902OD9-EhY6h9kINSGNvDUg',
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/',
    'Access-Control-Allow-Methods':'GET,POST,PATCH,OPTIONS',
    'Access-Control-Allow-Headers':'Origin, Content-Type, OPTIONS, Authorization, x-auth-token'
    }

    const options = {
    method: 'GET',
    headers: headers,
    };

    fetch('http://localhost:8080/leaderboard/' + k, options)
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



  
  
  