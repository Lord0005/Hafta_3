document.addEventListener("DOMContentLoaded", function () {
    const filmler = [
      { src: "images/esaretin-bedeli.jpeg", title: "Esaretin Bedeli" },
      { src: "images/interstellar.jpg", title: "Interstellar" },
      { src: "images/baba.jpg", title: "Baba" },
    ];
  
    const imgElement = document.getElementById("random-movie-img");
    const titleElement = document.getElementById("random-movie-title");
    const btn = document.getElementById("random-movie-btn");
    let intervalId = null;
  
    if (btn) {
      btn.addEventListener("click", function () {
        // Önceki interval varsa temizle
        if (intervalId) clearInterval(intervalId);
  
        btn.disabled = true;
        let count = 0;
        intervalId = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * filmler.length);
          imgElement.src = filmler[randomIndex].src;
          titleElement.textContent = filmler[randomIndex].title;
          count++;
          if (count > 20) { // 2 saniye kadar döndür
            clearInterval(intervalId);
            intervalId = null;
            const finalIndex = Math.floor(Math.random() *  filmler.length);
            imgElement.src = filmler[finalIndex].src;
            titleElement.textContent = filmler[finalIndex].title;
            btn.disabled = false;
          }
        }, 100);
      });
    }
  });

