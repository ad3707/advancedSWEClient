//POST REQUEST FOR UPDATING USER
document.addEventListener("click", function (event) {

    if (!event.target.matches("#update_user_button")) return;
    const updated_user = {
        id: document.getElementById("user_idUpdate").value,
        name: document.getElementById("user_nameUpdate").value,
        attempted: document.getElementById("attemptedUpdate").value,
        correct: document.getElementById("correctUpdate").value,
        };
  
        const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,PUT,OPTIONS'}

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

  
  
  