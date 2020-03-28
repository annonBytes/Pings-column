const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const email = form["email"];
  const emailValue = email.value;
  const small = form.querySelector("small");

  if (!emailValue) {
    //say error
    email.classList.add("error");
    small.innerText = "email field cannot be empty";
    small.style.display = "inline-block";
  } else if (!validEmail(email)) {
    // invalid email
    email.classList.add("error");
    small.innerText = "please provide a valid email address";
    small.style.display = "inline-block";
  } else {
    //submit
    email.classList.remove("error");
    small.innerText = "";
    small.style.display = "none";
  }
});

function validEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
