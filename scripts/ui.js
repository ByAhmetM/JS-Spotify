//!arayüz işlemleri burada tutulur
// html'den gelenler
export const ele = {
  list: document.querySelector("#list"),
  playingInfo: document.querySelector(".playing"),
  searchForm: document.querySelector("#search-form"),
  title: document.querySelector(".songs #title"),
};

export const renderCards = (songs) => {
  // aramadan sonra ekranı temizlemesi için innerhtmli boşalttık.
  ele.list.innerHTML = "";
  songs.forEach((song) => {
    /* html div oluşturma */
    const div = document.createElement("div");

    // kart elemanına ileride jsden erişmek için
    // bazı verileri ekleyeceğiz

    //*conditional chaining ?. eğer varsa yap yoksa boşgeç
    div.dataset.url = song.hub?.actions?.pop().uri;
    div.dataset.title = song.title;
    div.dataset.photo = song.images.coverart;
    /* class verme */
    div.className = "card";
    /* içeriği belirleme */
    div.innerHTML = `
   <figure>
   <img
     src="${song.images?.coverart}"
     alt=""
   />
   <div class="play">
     <i id="play-btn" class="bi bi-play-fill"></i>
   </div>
 </figure>
 <h4>${song.subtitle}</h4>
 <p>${song.title}</p>
   `;
    ele.list.appendChild(div);
  });
};

//müzik bilgilerini ekrana basacak fonksiyon

export const renderPlayingInfo = (data) => {
  ele.playingInfo.innerHTML = `
  <div class="info">
        <img
          class="animate"
          src="${data.photo}"
        />
        <div>
          <p>Şuan Oynatılıyor...</p>
          <h3>${data.title}</h3>
        </div>
      </div>
      <div>
      <p>Bu alana reklam verebilirsiniz. <a href="mailto:ahmetmuratunsal@gmail.com">>> İletişim</a></p>
      </div>
      <audio controls autoplay>
        <source
          src="${data.url}"
        />
      </audio>
 `;
};

// loader ekranı uiverse.io dan alındı
export const renderLoader = () => {
  ele.list.innerHTML = `
  <div class="audio-player">
  <div class="player-controls">
    <div class="song-info">
      <div class="song-title">İşlem Devam Ediyor..</div>
      <p class="artist">Beklediğiniz için teşekkürler</p>
      <p style="color:red; text-align:end" class="artist">Bu alana reklam verebilirsiniz..</p>
    </div>
    <div class="progress-bar">
      <div class="progress"></div>
    </div>
    <div class="buttons">
      <button class="skip-btn"><svg viewBox="0 0 16 16" class="bi bi-skip-backward-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"></path> </svg></button>
      <button class="play-btn"><svg viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path> </svg></button>
      <button class="pause-btn"><svg viewBox="0 0 16 16" class="bi bi-pause-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style="color: rgb(66, 66, 66);"> <path fill="#424242" d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path> </svg></button>
      <button class="volume-btn"><svg viewBox="0 0 16 16" class="bi bi-volume-up-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style="color: rgb(66, 66, 66);"> <path fill="#424242" d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"></path> <path fill="#424242" d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"></path> <path fill="#424242" d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"></path> </svg></button>
      <div class="volume-slider">
        <div class="volume-slider-bar"></div>
        <div class="volume-slider-handle"></div>
      </div>
    </div>
  </div>
</div>

  `;
};
