let titleEl = document.getElementById("title");

let submit = document.getElementById("submit-btn");
let email = document.getElementById("email");
let password = document.getElementById("password");
let forgetPass = document.getElementById("forget-btn");

let user = "";
let pass = "";

let msgEl = document.getElementById("hide");

email.onchange = (e) => {
  user = e.target.value;
  msgEl.style.display = "none";
};

password.onchange = (e) => {
  pass = e.target.value;
  msgEl.style.display = "none";
};

function submitForm() {
  if (user == "" || pass == "") {
    msgEl.style.display = "flex";
  } else if (user == "cenachi" && pass == "1234") {
    msgEl.style.display = "none";
    window.location.replace("/pages/app.html");
  } else {
    window.location.replace("/pages/erro.html");
  }
}

function forgetPassword() {}
