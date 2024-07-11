function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");
const form = document.getElementById("reserve"); //select form



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Close modal
closeModal.addEventListener("click", function() {
  modalbg.style.display = "none"; // hide modal
  window.location.href = 'index.html'; // Redirect home page
});

// validate form
form.addEventListener('submit', function(event) {
  event.preventDefault()
  if (validateForm()) {
    form.style.display = "none";
    showSuccessModal();
  }
});

function validateForm() {
    let valid = true;

    const first = document.getElementById("first");
    const last = document.getElementById("last");
    const email = document.getElementById("email");
    const birthdate = document.getElementById("birthdate");
    const quantity = document.getElementById("quantity");
    const location = document.querySelector('input[name="location"]:checked');
    const checkbox1 = document.getElementById("checkbox1");

    clearErrors(); // if condition is true than clear the error message otherwise the error keep remaining

    if (first.value.trim().length < 2 || first.value.trim() === "") {
        valid = false;
        showError("first-error", "Prénom doit contenir au moins 2 caractères.");
    }
    if (last.value.trim() === "" || last.value.trim().length < 2) {
        valid = false;
        showError("last-error", "Nom  doit contenir au moins 2 caractères.");
    }
    if (!email.value.includes("@") || !email.value.includes(".")) {
        valid = false;
        showError("email-error", "E-mail est invalide.");
    }
    if (!isValidDate(birthdate.value)) {
      valid = false;
      showError("birth-error", "Date de naissance est invalide.");
  }
    if (quantity.value === "" || isNaN(quantity.value)) {
        valid = false;
        showError("quantity-error", "Veuillez entrer une quantité numérique valide.");
    }
    if (!location) {
        valid = false;
        showError("location-error", "Veuillez choisir une location.");
    }
    if (!checkbox1.checked) {
        valid = false;
        showError("checkbox1-error", "Vous devez accepter les conditions d'utilisation.");
    }
    

    return valid;
    
}

function showError(elementId, message) { // Display an error message
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearErrors() { // Remove error message if the condition true
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(error) {
        error.textContent = "";
    });
}
function isValidDate(dateString) { // Check if is a  valide date
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}
function showSuccessModal() {
  const successModal = document.getElementById("success-modal");
  successModal.style.display = "block";
}
function closeSuccessModal() {
  const successModal = document.getElementById("success-modal");
  modalbg.style.display = "none";
  window.location.href = 'index.html'; // Redirection après fermeture du modal
}
