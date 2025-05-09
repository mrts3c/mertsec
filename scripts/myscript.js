window.onload = function() {
  fetch("../components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => console.error("Navbar yüklenemedi:", error));

  fetch("../components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Footer yüklenemedi:", error));
};