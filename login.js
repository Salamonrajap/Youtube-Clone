const form = document.getElementById("form-validate");


let emailpatteren = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;


if (!localStorage.getItem("users")) {
  const users = [
    { email: "siva@gmail.com", password: "123456" },
    { email: "sabarish@gmail.com", password: "123456" },
    { email: "salamon@gmail.com", password: "123456" },
    { email: "pavithra@gmail.com", password: "123456" },
    { email: "deva@gmail.com", password: "123456" }
  ];

  localStorage.setItem("users", JSON.stringify(users));
}

if (localStorage.getItem("isLoggedIn") === "true") {
  window.location.href = "index.html";
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const email = document.getElementById("Email").value.trim();
  const password = document.getElementById("Password").value.trim();

  let isValid = true;

 
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is Required";
    isValid = false;
  } else if (!emailpatteren.test(email)) {
    document.getElementById("emailError").innerText = "Enter correct Email";
    isValid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }


  if (password === "") {
    document.getElementById("passwordError").innerText = "Password is Required";
    isValid = false;
  } else if (password.length < 4 || password.length > 10) {
    document.getElementById("passwordError").innerText = "Password must be 4 to 10 characters";
    isValid = false;
  } else {
    document.getElementById("passwordError").innerText = "";
  }

  if (isValid) {
    const users = JSON.parse(localStorage.getItem("users"));

    const validUser = users.find(user =>
      user.email === email && user.password === password
    );

    if (validUser) {
     
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", email);

      window.location.href = "index.html";
    } else {
      document.getElementById("passwordError").innerText = "Invalid email or password";
    }
  }
});