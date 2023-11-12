import { API } from "./scripts/api.js";
import {
  ele,
  renderCards,
  renderLoader,
  renderPlayingInfo,
} from "./scripts/ui.js";

// class'ın bir örneğini oluşturma

const api = new API();

document.addEventListener("DOMContentLoaded", async () => {
  // anasayfa basılmadan önce loader ekranı basıldı.
  renderLoader();
  await api.getPopular();
  renderCards(api.songs);
});

//müzik listesindeki tıklanma olaylarını izler
ele.list.addEventListener("click", (e) => {
  if (e.target.id === "play-btn") {
    /* closest == tıkladığın elemana en yakın .card classlı parent elemana gider */
    const parent = e.target.closest(".card").dataset;
    // müziğin bilgilerine erişme
    renderPlayingInfo(parent);
  }
});

// arama formu gönderildiğinde

ele.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //formda yazılan terime erişme
  const query = e.target[0].value;

  //forma hiç bişey yazılmadıysa aratma fonksiyonu durdur return
  if (!query) return;
  // arama verileri gelmeden önce loader basıldı.
  renderLoader();
  //*Başlığı güncelleme
  ele.title.innerHTML = `${query} için sonuçlar`;

  // api isteği için apiden şarkıları alma
  api.searchMusic(query);
});
