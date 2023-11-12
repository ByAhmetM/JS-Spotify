import { url, options } from "./constants.js";
import { renderCards } from "./ui.js";

//!api işlemleri veri çekme

export class API {
  constructor() {
    this.songs = [];
  }

  //popüler müzikleri getirmek için istek atma

  async getPopular() {
    try {
      //API isteği atar
      const res = await fetch(url, options);
      const data = await res.json();
      // classta tuttuğumuz değişkeni günceller
      this.songs = data.tracks;
    } catch (err) {
      console.log("Popüler veriler hatalı", err);
    }
  }

  // aratılan içeriğe erişme apiden şarkıları alma
  async searchMusic(query) {
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${query}&locale=TR&offset=0&limit=20`,
      options
    );
    const data = await res.json();

    //bize gelen diziyi işleyeceğiz
    //objelerin içerisindeki track katmanını aradan kaldıracağız
    // console.log("eski hali", data.tracks.hits);

    /* spread operatörü ve map kullanarak bize gelen veriyi düzenledik 
    ve track katmanını apiden gelen veriden kaldırdık */

    const newData = data.tracks.hits.map((song) => ({
      ...song.track,
    }));

    // aranılan müzikleri ekrana basma
    renderCards(newData);
  }
}

//
