const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from being submitted

  // get the name and email values from the form inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // store the name and email in the data.js file
  storeData(name, email);
});

import { writeFileSync } from "fs";

function storeData(name, email) {
  // create an object with the name and email
  const data = { name, email };

  // convert the object to a JSON string
  const dataString = JSON.stringify(data);

  // write the JSON string to the data.js file
  writeFileSync("data.js", dataString);
}
