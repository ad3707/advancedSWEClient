//POST REQUEST FOR UPDATING USER
document.addEventListener("click", function (event) {

    if (!event.target.matches("#update_user_button")) return;
    const updated_user = {
        id: document.getElementById("user_idUpdate").value,
        name: document.getElementById("user_nameUpdate").value,
        attempted: document.getElementById("attemptedUpdate").value,
        correct: document.getElementById("correctUpdate").value,
        };
  
        const headers = {'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InEyM0NreTdaTjROdEQ0R0Z6TGhhVSJ9.eyJpc3MiOiJodHRwczovL2Rldi1sYjBhaWJhYmZodWM2ZTZqLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJMc1ZBeFJtdnJtOHl4a3RxWE96ZERXV242bWxBeGQ2UEBjbGllbnRzIiwiYXVkIjoibG9jYWxob3N0OjgwODAiLCJpYXQiOjE2Njk2ODY2MDIsImV4cCI6MTY3MjI3ODYwMiwiYXpwIjoiTHNWQXhSbXZybTh5eGt0cVhPemREV1duNm1sQXhkNlAiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.4PAO24a_wuuJbhZUfM6nDdBG7AjwsQcmp8dHYOa6ObKelzu9B_jwU6BrOjFD7FNkDfp6mNDWO8rLE62rrPDhnlTCop6E85CApOIcfpYc3VjiWr3SMNeCK4gasFoZv82UmvlK_kbo8CAPNAHMYeJjouxYKcZWGh4O7PLMjofS3fYMzVtqjH9qtb0kvodRjd4XmDVac_rUxtgHHsCFZhx27rS_v0iGog_TcKjZMEhYtHTBJY5YA-E0RW92OWDh69sjACXs_m0ks8Y9PLXGiMYei7UKDCMWrrtrw2jJXW-woTWemBWB-20qxjc7bJRqAJX902OD9-EhY6h9kINSGNvDUg',
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/',
        'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS,PUT',
        'Access-Control-Allow-Headers':'Origin, Content-Type, OPTIONS, Authorization, x-auth-token'
      }
        const options = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(updated_user),
        };

    const user_id = document.getElementById("user_idUpdate").value; 
    fetch('http://localhost:8080/users/' + user_id, options)
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      })

    $('#update_form').get(0).reset();
  });

  
  
  