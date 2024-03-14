function checkPassword() {
    var password = document.getElementById("password").value;
    var strengthBadge = document.getElementById("strength");
    var passwordDisplay = document.getElementById("passwordDisplay");
  
    
    var strength = 0;
  
    if (password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[~<>?]+/)) {
      strength += 1;
    }
    if (password.match(/[!@#$%^&*()]+/)) {
      strength += 1;
    }
    if (password.length > 4) {
      strength += 1;
    }
    if (password.length > 8) {
      strength += 1;
    }
  
    
    var strengthStr;
    var strengthClass;
    switch (strength) {
      case 0:
      case 1:
        strengthStr = "Weak";
        strengthClass = "weak";
        
        break;
      case 2:
        strengthStr = "Moderate";
        strengthClass = "moderate";
        break;
      case 3:
        strengthStr = "Good";
        strengthClass = "good";
        break;
      case 4:
        strengthStr = "Strong";
        strengthClass = "strong";
        break;
      case 5:
        strengthStr = "Very Strong";
        strengthClass = "very-strong";
        break;
      default:
        strengthStr = "Weak";
        strengthClass = "weak";
    }
  
    strengthBadge.innerHTML = strengthStr;
    strengthBadge.className = strengthClass;s
    
   
    passwordDisplay.innerHTML = "Password: " + password;
  }

  function togglePassword() {
    var passwordInput = document.getElementById("password");
    var toggleIcon = document.getElementById("togglePassword");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";

      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
       
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
     
    }
  }
  

  document.getElementById("togglePassword").addEventListener("click", togglePassword);