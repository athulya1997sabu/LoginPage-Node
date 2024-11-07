const form = document.querySelector("form");
const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
  if (email.value === "" || password === "") {
    e.preventDefault();
    alert("Fill properly");
    return false
  }
}
