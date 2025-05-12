document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Phone number must be exactly 10 digits.");
    return;
  }

  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Password must be at least 8 characters, include a number and a special character.");
    return;
  }

  alert("Registration successful!");

});
