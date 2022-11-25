//POST REQUEST FOR UPDATING QUESTION
document.addEventListener("click", function (event) {

    if (!event.target.matches("#update_question_button")) return;
    const updated_question = {
        id: document.getElementById("question_idUpdate").value,
        name: document.getElementById("question_nameUpdate").value,
        a: document.getElementById("ans1Update").value,
        b: document.getElementById("ans2Update").value,
        c: document.getElementById("ans3Update").value,
        d: document.getElementById("ans4Update").value,
        answer: document.getElementById("answerUpdate").value,
        };
  
        const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,PUT,OPTIONS'}

        const options = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(updated_question),
        };

    var id = document.getElementById("question_idUpdate").value; 
    fetch('http://localhost:8080/questions/' + id, options)
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      })

      $('#update_form').get(0).reset();
  });

  
  
  