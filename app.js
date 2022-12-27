const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from being submitted

  // get the name and email values from the form inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  console.log(name);
  console.log(email);

  // store the name and email in the data.js file
  storeData(name, email);
});

const fs = require("fs");

function storeData(name, email) {
  // create an object with the name and email
  const data = { name, email };

  console.log(data);

  // convert the object to a JSON string
  const dataString = JSON.stringify(data);

  console.log(dataString);

  // write the JSON string to the data.js file
  fs.writeFileSync("data.js", dataString);
}
