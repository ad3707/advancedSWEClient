//POST REQUEST FOR UPDATING USER
document.addEventListener("click", function (event) {
    event.preventDefault();

    if (!event.target.matches("#delete_user_button")) return;
    const deleted_user = {
        id: document.getElementById("user_idDelete").value,
        };
  
        const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,PUT,DELETE,OPTIONS'}

        const options = {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(deleted_user),
        };

    const user_id = document.getElementById("user_idDelete").value; 
    fetch('http://localhost:8080/users/' + user_id, options)
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      })

    $('#delete').get(0).reset();
  });

  
  
  