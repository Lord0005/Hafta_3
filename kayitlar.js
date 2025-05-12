// URL parametrelerinden verileri almak için
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Form verilerini sayfada görüntüleme
document.getElementById("username").textContent = getQueryParam("username");
document.getElementById("eposta").textContent = getQueryParam("eposta");
document.getElementById("parola").textContent = getQueryParam("parola");
document.getElementById("ad").textContent = getQueryParam("ad");
document.getElementById("soyad").textContent = getQueryParam("soyad");
document.getElementById("birthdate").textContent = getQueryParam("birthdate");
if (window.location.pathname.includes("kayitlar.html")) {
  document.getElementById("sehir").textContent = getQueryParam("sehir");
}
// document.getElementById("sehir").textContent = getQueryParam("sehir");
document.getElementById("cinsiyet").textContent = getQueryParam("cinsiyet");

// Hobiler için birden fazla hobi seçilmişse bunları virgülle ayırarak listele

const urlParams = new URLSearchParams(window.location.search);
const hobilerArray = urlParams.getAll("hobiler[]");
if (hobilerArray.length > 0) {
  document.getElementById("hobiler").textContent = hobilerArray.join(", ");
} else {
  document.getElementById("hobiler").textContent = "Hiçbir hobi seçilmedi.";
}
