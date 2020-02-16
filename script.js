const myform = document.querySelector("#booking");
const myformSubmit = myform.querySelector("button");
const myformReset = myform.querySelector("#reset");

function showForm() {
  let name = document.querySelector("#customer_name").value;
  let phone = document.querySelector("#phone_number").value;
  let email = document.querySelector("#email_address").value;
  let boxTypeRadio = document.querySelectorAll("input[name='box']");

  let boxType = "";
  boxTypeRadio.forEach((v, k) => {
    if (boxTypeRadio[k].checked) {
      boxType = boxTypeRadio[k].value;
    }
  });

  let suggests = document.querySelectorAll("input[type='number']");
  let suggest = [];
  var sum = 0;

  console.log(suggests);

  function TotalBalls() {
    for (let number of suggests) {
      if (number.value != "") {
        console.log("Number is" + number);
        console.log(number.value);

        sum += parseInt(number.value);
      }
    }
    return sum;
  }

  console.log(TotalBalls());

  if (sum > 5) {
    alert("Too much balls!");
  }

  suggests.forEach((v, k) => {
    console.log("v=" + v.value);
    if (suggests[k].value != 0) {
      console.log("v=" + v.name);

      suggest.push(suggests[k].name, suggests[k].value);

      console.log("sum=" + sum);
      if (suggests[k].value > 5) {
        alert("Too much balls!");
      }
    }
  });

  let date = document.querySelector("input[name='pickup_time']").value;

  let comments = document.querySelector("textarea[name='comments']").value;

  var myResults = [];
  myResults.push(name, phone, email, boxType, suggest, date, comments);

  var myObjectResults = {
    "Name:": name,
    "Phone:": phone,
    "Email:": email,
    "Type:": boxType,
    "You choose:": suggest,
    "Date:": date,
    "Comments:": comments
  };

  var output = document.querySelector("#resultForm");
  var resultsUl = document.createElement("ul");
  resultsUl.classList.add("form-results");
  output.appendChild(resultsUl);

  myResults.forEach((v, k) => {
    let resultLi = document.createElement("li");
    let resultContent = document.createTextNode(v);
    // resultLi.appendChild(resultContent);
    resultsUl.appendChild(resultLi);
  });

  var resultsObjectUl = document.createElement("ul");
  resultsObjectUl.classList.add("form-results");
  output.appendChild(resultsObjectUl);

  let myObjectEntries = Object.entries(myObjectResults);
  for (const [label, result] of myObjectEntries) {
    let resultObjectLi = document.createElement("li");
    let resultObjectLabelElement = document.createElement("label");

    let resultObjectContentLabel = document.createTextNode(label);
    let resultObjectContentResult = document.createTextNode(result);

    resultObjectLabelElement.appendChild(resultObjectContentLabel);
    resultObjectLi.appendChild(resultObjectLabelElement);
    resultObjectLi.appendChild(resultObjectContentResult);

    resultsObjectUl.appendChild(resultObjectLi);
  }

  window.scrollTo(0, document.body.scrollHeight);
}

myformSubmit.addEventListener("click", function(e) {
  e.preventDefault();

  showForm();
});

myformReset.addEventListener("click", function(e) {
  document.getElementById("booking").reset();
});
