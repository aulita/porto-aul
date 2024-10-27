document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Thank you for your message!"); // Simple alert for demonstration
    // You can add further processing here, like sending the data to a server
  });
