// Kayıt işlemi
const form = document.getElementById("signupForm");
const message = document.getElementById("message");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      message.innerText = "Kullanıcı adı ve şifre gerekli.";
      message.style.color = "red";
      return;
    }

    if (!username.includes("@")) {
      message.innerText = "Kullanıcı adında '@' bulunmalı.";
      message.style.color = "red";
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    message.innerText = `Başarıyla kayıt olundu! Oturumunuz açık: ${username}`;
    message.style.color = "green";

    // Ana sayfaya yönlendirme
    window.location.href = "../index.html";
  });
}

// Oturum kontrolü (Tüm sayfalarda çalışır)
window.onload = function () {
  const username = localStorage.getItem("username");
  if (username) {
    // Footer öğesini bul
    const footerIframe = document.querySelector("iframe[src='../components/footer.html']");
    footerIframe.onload = function () {
      const footerDocument = footerIframe.contentDocument || footerIframe.contentWindow.document;
      const oturum = document.createElement("p");
      oturum.innerText = `Oturumunuz açık: ${username}`;
      oturum.style.fontWeight = "bold";
      oturum.style.marginTop = "10px";
      oturum.style.color = "#27ae60";
      oturum.style.textAlign = "center";
      footerDocument.body.appendChild(oturum);
    };
  }
};