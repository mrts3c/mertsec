// Navbar Yükleme
fetch("../components/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
  });

// Footer Yükleme
fetch("../components/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-container").innerHTML = data;
  });

// Kayıt Olma İşlemi
const form = document.getElementById("registerForm");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    
    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Kayıt başarılı! Artık giriş yapabilirsiniz.");
      window.location.href = "../index.html";
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  });
}

// Oturum Bilgisi Gösterme
window.addEventListener("load", () => {
  const username = localStorage.getItem("username");
  if (username) {
    const footer = document.getElementById("footer-container");
    const p = document.createElement("p");
    p.textContent = `Oturumunuz açık: ${username}`;
    p.style.color = "green";
    p.style.textAlign = "center";
    footer.appendChild(p);
  }
});