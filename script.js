function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  // Example credentials
  const validUser = "admin";
  const validPass = "12345";

  if (username === validUser && password === validPass) {
    alert("Login Successful!");
    window.location.href = "welcome.html"; // redirect after login
  } else {
    error.style.display = "block";
  }
}
