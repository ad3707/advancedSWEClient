//POST REQUEST FOR UPDATING QUESTION
document.addEventListener("click", function (event) {

    if (!event.target.matches("#delete_question_button")) return;
    const deleted_question = {
        id: document.getElementById("question_idDelete").value,
        };
  
        const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,PUT,DELETE,OPTIONS'}

        const options = {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(deleted_question),
        };

    var id = document.getElementById("question_idDelete").value; 
    fetch('http://localhost:8080/questions/' + id, options)
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      })

      $('#delete_form').get(0).reset();
  });

  
  
  