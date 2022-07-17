const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const secondPart = document.querySelector("#secondPart");
const background = document.querySelector("#background");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    setTimeout(() => {
        greeting.classList.add(HIDDEN_CLASSNAME);
        secondPart.classList.remove(HIDDEN_CLASSNAME);
        background.classList.remove(HIDDEN_CLASSNAME);
    }, 1500);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    console.log("유저 없음");
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
