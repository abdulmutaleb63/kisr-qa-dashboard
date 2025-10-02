const loginForm = document.getElementById("login-form");
const loginMsg = document.getElementById("login-msg");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    await auth.signInWithEmailAndPassword(email, password);
    loginMsg.textContent = "✅ Logged in!";
    window.location.href = "initial.html";
  } catch (err) {
    loginMsg.textContent = "❌ " + err.message;
  }
});
