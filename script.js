const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
document.querySelector('.sign-in-form').addEventListener('submit', function(event) {
    var username = document.querySelector('.sign-in-form input[type="text"]').value;
    var password = document.querySelector('.sign-in-form input[type="password"]').value;

    if (username === '' || password === '') {
      event.preventDefault(); // Prevent form submission
      alert('Please enter both username and password!');
    }
  });

  document.querySelector('.sign-up-form').addEventListener('submit', function(event) {
    var username = document.querySelector('.sign-up-form input[type="text"]').value;
    var email = document.querySelector('.sign-up-form input[type="email"]').value;
    var password = document.querySelector('.sign-up-form input[type="password"]').value;

    if (username === '' || email === '' || password === '') {
      event.preventDefault(); // Prevent form submission
      alert('Please fill in all the fields!');
    }
  });