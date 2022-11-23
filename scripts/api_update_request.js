//POST REQUEST FOR UPDATING QUESTION
document.addEventListener("click", function (event) {
    event.preventDefault();

    if (!event.target.matches("#update_question_button")) return;
    const updated_question = {
        id: document.getElementById("question_id").value,
        name: document.getElementById("question_name").value,
        a: document.getElementById("ans1").value,
        b: document.getElementById("ans2").value,
        c: document.getElementById("ans3").value,
        d: document.getElementById("ans4").value,
        answer: document.getElementById("answer").value,
        };
  
        const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,PUT,OPTIONS'}

        const options = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(updated_question),
        };

    var id = document.getElementById("question_id").value; 
    fetch('http://localhost:8080/questions/' + id, options)
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      })
  });

  
  
  