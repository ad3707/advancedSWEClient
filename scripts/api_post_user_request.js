//POST REQUEST FOR ADDING USER
document.addEventListener("click", function (event) {

    if (!event.target.matches("#create_user_button")) return;
    const created_user = {
        name: document.getElementById("user_name").value,
        attempted: document.getElementById("attempted").value,
        correct: document.getElementById("correct").value,
        };
  
        const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}

        const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(created_user),
        };

    fetch('http://localhost:8080/users', options)
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      })
      $('#create_form').get(0).reset();
  });
  
 
  
  
  