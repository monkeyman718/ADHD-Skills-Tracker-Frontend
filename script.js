const backendUrl = "https://adhd-skills-tracker.onrender.com";

fetch(`${backendUrl}/users`)
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then((data) => {
    const list = document.getElementById("user-list");
    data.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `User ID: ${user.ID}, Email: ${user.email}`;
      list.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });
