// EXERCISE 1
const userForm = document.getElementById("date");
const list = document.getElementById("saveDateUsers");
const deleteBtn = document.querySelector(".btn-danger");

const STORAGE_KEY = "user_data";

const loadList = () => {
  const data = localStorage.getItem(STORAGE_KEY);

  list.innerHTML = "";

  if (data) {
    const users = JSON.parse(data);

    users.forEach((user) => {
      list.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center mb-2">
                <div>
                    <strong>${user.firstName} ${user.lastName}</strong><br>
                    <small>Age: ${user.age} | Nationality: ${user.location}</small>
                </div>
                <span class="badge bg-primary rounded-pill">Saved</span>
            </li> `;
    });
  }
};

userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    age: document.getElementById("age").value,
    location: document.getElementById("location").value,
  };

  const currentData = localStorage.getItem(STORAGE_KEY);
  const usersList = currentData ? JSON.parse(currentData) : [];

  usersList.push(userData);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(usersList));

  userForm.reset();
  loadList();
});

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  loadList();
});

window.addEventListener("DOMContentLoaded", loadList);

// EXERCISE 2
const timerSaveDate = document.getElementById("timer");

const startCounter = () => {
  let counter = Number(sessionStorage.getItem("myTimer")) || 0;
  timerSaveDate.innerText = counter;
  setInterval(() => {
    counter++;
    timerSaveDate.innerText = counter;
    sessionStorage.setItem("myTimer", counter);
  }, 1000);
};

window.addEventListener("DOMContentLoaded", startCounter);
