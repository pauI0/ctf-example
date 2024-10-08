// Simulate a basic SQL Injection vulnerability
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Do not publish! This is the test admin's username and password
    const storedUsername = "admin";
    const storedPassword = "password123";

    // SQL injection simulation: if password contains a typical SQL injection attempt
    if (username === storedUsername && password === storedPassword) {
      document.getElementById("message").textContent =
        "Login successful! Here is your flag: flag{Nice_guess}";
    } else if (password.includes("' OR 1=1 --")) {
      document.getElementById("message").textContent =
        "Login successful! Here is your flag: flag{SQL_injection_win}";
    } else {
      document.getElementById("message").textContent =
        "Invalid username or password.";
    }
  });
