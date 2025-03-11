    // JavaScript code for form validation
    document.addEventListener("DOMContentLoaded", function () {

      // Retrieve the input field value
      let form = document.getElementById("myForm");
      let inputField = document.getElementById("inputField");
      let errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.style.display = "none";
    form.appendChild(errorMessage);
    
      // Regular expression pattern for alphanumeric input
      let alphaNumericPattern = /^[a-zA-Z0-9]+$/;

      form.addEventListener("submit", function (event) {
        let inputValue = inputField.value.trim();

        if (!alphaNumericPattern.test(inputValue)) {
          // Invalid input: display error message and prevent submission
          errorMessage.textContent = "Error: Please enter only alphanumeric characters.";
          errorMessage.style.display = "block";
          event.preventDefault();
      } else {
          // Valid input: display confirmation and 'submit' the form
          errorMessage.style.display = "none";
          alert("Form submitted successfully!");
      }
      });
    });
