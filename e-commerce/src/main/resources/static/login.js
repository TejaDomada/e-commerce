document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!username || !password) {
      alert("Both fields are required.");
      return;
    }
  
    console.log("Login submitted with:");
    console.log("Username:", username);
    console.log("Password:", password);

    alert("login successful!");
  });
  