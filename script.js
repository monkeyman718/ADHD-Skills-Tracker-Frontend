const backendUrl = "https://adhd-skills-tracker.onrender.com";

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // prevent the form from refreshing the page

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(`${backendUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid credentials");
        }
        return response.json();
      })
      .then((data) => {
        document.getElementById("message").textContent = data.message;
        console.log(data);
      })
      .catch((error) => {
        document.getElementById("message").textContent = error.message;
      });
  });
