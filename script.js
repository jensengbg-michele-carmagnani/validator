const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// chack email is valid
function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log("this is the email", email.value.trim());
  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, "Email is not valid");
  }
}
// Check required fild
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFildName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//Check inputn length
function checkLengh(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFildName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFildName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// check password match
function checkPasswordMatch(input1, input2) {
  console.log(input1.value, input2.value);
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  }
}
// get Fildname
function getFildName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// event linstener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLengh(username, 3, 15);
  checkLengh(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);

  // if (username.value === "") {
  //   showError(username, "Username is required");
  // } else {
  //   showSuccess(username);
  // }
  // if (email.value === "") {
  //   showError(email, "Email is required");
  // } else if (!isValidEmail(email.value)) {
  //   showError(email, "Email is not valid");
  // } else {
  //   showSuccess(email);
  // }
  // if (password.value === "") {
  //   showError(password, "Password is required");
  // } else {
  //   showSuccess(password);
  // }
  // if (password2.value === "") {
  //   showError(password2, "Password2 is required");
  // } else {
  //   showSuccess(password2);
  // }
});
