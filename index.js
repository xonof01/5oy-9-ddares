const myData = JSON.parse(localStorage.getItem("data")) || [];

// False qiymatlar: undefined, null, false, "", 0

uiChanger(myData);
myForm.onsubmit = (event) => {
  event.preventDefault();
  if (!username.value || !age.value || !email.value) {
    alert("Ma'lumotlarni to'liq to'ldiring");
  } else {
    const data = {
      username: username.value,
      age: age.value,
      email: email.value,
    };
    myData.push(data);
    localStorage.setItem("data", JSON.stringify(myData));
    uiChanger(myData);
    myForm.reset();
  }
};

function uiChanger(myData) {
  ui.innerHTML = null;
  if (myData.length === 0) ui.innerHTML = `<h3>Ma'lumot mavjud emas</h3>`;
  myData.forEach((element) => {
    const card = `<span>
      <h3>${element.username}</h3>
      <span>${element.age}</span>
      <p>${element.email}</p>
    </span>
    `;
    ui.innerHTML += card;
  });
}