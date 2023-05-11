document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform login validation
    if (username === "Umbc Student" && password === "UMBC") {
      // Successful login, redirect to start_survey.html
      window.location.href = "start_survey.html";
    } else {
      // Invalid credentials, display an error message
      alert("Invalid username or password. Please try again.");
    }
  });
  