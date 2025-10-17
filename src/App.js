import React, { useState } from "react";
import "./App.css";
import erkekFoto from "./foto/erkek.png";
import kizFoto from "./foto/kız.png";
import atesliFoto from "./foto/atesligece.png";

// Film görselleri
import brooklynImg from "./foto/brooklyn.png";
import loveAndOtherDrugsImg from "./foto/LoveandOtherDrugs.png";
import friendsWithBenefitsImg from "./foto/FriendsWithBenefits.png";
import theDressmakerImg from "./foto/TheDressmaker.png";
import chefImg from "./foto/Chef.png";
import iAmNotAnEasyManImg from "./foto/IAmNotAnEasyMan.png";
import jeuxDenfantsImg from "./foto/Jeuxd'enfants.png";

function App() {
  const [currentFilm, setCurrentFilm] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showAllFilms, setShowAllFilms] = useState(false);
  const [showRomanticMessage, setShowRomanticMessage] = useState(false);
  const [couplePhotos] = useState({
    partner1: erkekFoto,
    partner2: kizFoto,
  });

  // Film listesi - görseller ve açıklamalar
  const filmler = [
    {
      id: 1,
      name: "Brooklyn",
      image: brooklynImg,
      description:
        "Güçlü bir kadının kendi yolunu bulma hikayesiymiş. Seni anımsatıyor gün geçtikçe senin sessizliğinin altında yatan benim yüzümden kader yüzünden katlandığın zorluklara göğüs gerişini aklıma getirdi. Sana gün geçtikçe hayran oluşumun sebeplerini bir bir sıraladı, Seni seviyorum zevkine hitap edermi bilmiyorum ama alternatifler arasında.",
    },
    {
      id: 2,
      name: "Love and Other Drugs",
      image: loveAndOtherDrugsImg,
      description:
        "Valla aşkım, bu film tam biziz sdşkljmsdlşvb yani bizim ilişki deki gibi gavat bir adam, olgun bir kadın Açıklamayı okurken resmen kendimi gördüm, hatalarımı, düşünmeden yaptıklarımı. Ama bir o kadar da senin sabrını, sevgini… Sen olmasan belki ben hâlâ aynı adam olurdum. Ama artık gerçekten büyüyorum. Bu sefer değişmek için değil, seni hak etmek için değişiyorum.",
    },
    {
      id: 3,
      name: "Friends With Benefits",
      image: friendsWithBenefitsImg,
      description:
        'Şimdi bu film biraz libido mibido muhabbetleriyle dolu ama açık konuşayım askk, benimle izlemeni isterim — hani kahkaha atarız, eğleniriz falan 😏 Ama sen istersen tabii ömrümmm. Bir yandan da filmde duyguların nereye evrildiğini izlerken, "bizim aramızdaki bağ" geldi aklıma. Arzudan öte bir şey bu; alışkanlık, sevgi, huzur. Ben seninle o dengeyi yakalayabilmek için elimden geleni yapacağım, ve yakalayacağım da..',
    },
    {
      id: 4,
      name: "The Dressmaker",
      image: theDressmakerImg,
      description:
        'Fragmanı izledim la dedim bu benim avrat her zorluğu bir şekilde kendi tarzıyla aşar." Benim görevim ne biliyor musun? O yolculukta senin yanında yürümek. Hatalarımı unutturmam belki zaman alır ama sana güvenli, güzel bir hayat kurmak için çabalıyorum.VE bunu da yapacağım yapamayacağın bir şey yok ama bir şeyleri düşünmeni yorulmanı kasılmanı istemiyorum sevgilim , bugüne kadar seni bir şeyleri düşündürmek zorunda bıuraktığım ve gerdiğim için özür dilerim biliyorum hatalarım büyük ama sana her şeyi affettireceğim',
    },
    {
      id: 5,
      name: "Chef",
      image: chefImg,
      description:
        "ben de en az başrol kadar azimliyim ama mutfakta değil — seninle aynı evde, huzurlu bir şekilde, evli yaşamak için azimliyim belki bir boku henüz başaramadım ama çabam da isteğim de gücüm de sonsuz bu konuda Bir şeyleri en baştan inşa etmek kolay değil ama ben o çabayı göstermekten asla vazgeçmeyeceğim. Çünkü seninle paylaşacağım bir hayat, bütün emeğe bütün acıya her şeye değer.",
    },
    {
      id: 6,
      name: "I Am Not An Easy Man",
      image: iAmNotAnEasyManImg,
      description:
        "Askm bu filmde kadınlarla erkeklerin rolleri değişiyomuş. En çok i,ligmi çeken film bu vallaha ama bunu dedim ya sen artık bunu kesin izlemezsin çünkü gahbiksin Ama şaka bir yana, film aslında empatiyi anlatıyor. Birbirimizin dünyasını anlamayı… Ben de bunu yapmaya çalışıyorum artık. Sadece seni dinlemek değil, seni anlamak istiyorum.Umarım birbirimizi daha iyi anlayacak iletişim kurabiliriz artık. yapalım da nolur...",
    },
    {
      id: 7,
      name: "Jeux d'enfants (Love Me If You Dare)",
      image: jeuxDenfantsImg,
      description:
        "Biraz cocukca, biraz deli dolu, biraz gahbikçe,biraz da romantik bir film. aynı bizim ilişkiii Her şeyi en uçta yaşasak da, sonunda birbirimize döneceğimizi biliyorum. Ben seni incitmiş olabilirim ama artık oyun değil, gerçek bir hayat istiyorum seninle. Sevgiyle, saygıyla, kahkahalarla dolu bir hayat.Bunun en büyük yolu da benden geçiyor farkındayım ve artık bir şeyler bizim için biraz daha kolay elimiz biraz daha güçlü gün geçtikçe bu daha da artacak Söz her şey güzel olacak.",
    },
  ];

  const rastgeleFilmSec = () => {
    setIsSpinning(true);
    setShowResult(false);

    // 3 saniye döndürme efekti
    setTimeout(() => {
      const rastgeleIndex = Math.floor(Math.random() * filmler.length);
      setCurrentFilm(filmler[rastgeleIndex]);
      setIsSpinning(false);
      setShowResult(true);
    }, 3000);
  };

  const romantikMesajlar = [
    "Keske suan yanında olsam da beraber izleseydik :///////////:",
    "Hanımefendi burnunuzda pislik kalmıs lütfen temizleyin ama sakın çöpe atmayın saklayın kavusunca bana verirsiniz size dair herhangi bir şey bu dünyada benim haricimde bir yere bağıslanmamalı...",
    "Sadece seni sevdiğimi söylemek istedim yazacak bişi bulamadım sy kızma! 🌹🌹🌹🌹🌹🌹🌹🌹",
    "huuuuuuuu senin o film seç butonuna basan ellerini ısırırırırırırırırm koca götlumm! 💖",
    "Dikkat Dikkat Lütfen Siteyi Kullanırkene Kameranızı Kapatın Güzelliğinizden Yansıyan Işık Telefonunuzun Kamerasını Bozma Üzere , Şikayet Hattı : 05467450617 uzman aşk operasyoncusu dünyanın en iyi sevgilisi biraz gavat onurkrsln! ✨",
    "Bu siteyi kullanırken etrafınızda kimse bulunmasın!SAKA SAKA Bu site +18 yada +13 yada şiddet içeren bir ürün değil bu site bol bol ask iceren bir site istediğiniz kadar gösterebildiğiniz kadar cok kişiye gösterin ask yayılsın main tower is ur heart ur heart is mine babeee",
    "Attention Attention Detective Dush is called u pls open the call ! if he didn't call please u call him immediately !",
  ];

  const rastgeleMesaj =
    romantikMesajlar[Math.floor(Math.random() * romantikMesajlar.length)];

  return (
    <div className="App">
      {/* Geçişli Banner */}
      <div className="banner">
        <div className="banner-content">
          GAHBİKCAN FİLMLERİN HİÇBİRİNİ İZLEMEMİŞTİR AÇIKLAMALAR VE FRAGMANA
          GÖRE KENDİ YORUMLARINI YAPMIŞTIR
        </div>
      </div>

      <div className="container">
        <header className="header">
          <h1>💕 Gahbik kişisi için film seçme şeysi 💕</h1>
          <p>
            Hanımefendi sizin için biraz araştırma yaptım ve biraz film seçtim
            lütfen o bal parmaklarınızı kullanarak butona basınız.Ağzınızın
            tadında bir gariplik varsa da cok uzaga gitmeyin parmagınızı
            yalayın...
          </p>
        </header>

        <div className="couple-section">
          <div className="photo-container">
            <img
              src={couplePhotos.partner1}
              alt="Sen"
              className="partner-photo"
            />
            <span className="heart">💕</span>
            <img
              src={couplePhotos.partner2}
              alt="Kız Arkadaşın"
              className="partner-photo"
            />
          </div>
        </div>

        <div className="film-selection">
          <div className="button-group">
            <button
              className={`select-button ${isSpinning ? "spinning" : ""}`}
              onClick={rastgeleFilmSec}
              disabled={isSpinning}
            >
              {isSpinning ? "Film Seçiliyor..." : "🎬 Film Seç 🎬"}
            </button>

            <button
              className="all-films-button"
              onClick={() => setShowAllFilms(!showAllFilms)}
            >
              {showAllFilms
                ? "🎬 Film Seçiciye Dön 🎬"
                : "📋 Tüm Filmleri Gör 📋"}
            </button>
          </div>

          {showAllFilms ? (
            <div className="all-films-container">
              <h2>🎬 Tüm Filmler 🎬</h2>
              <div className="films-grid">
                {filmler.map((film) => (
                  <div key={film.id} className="film-card">
                    <img
                      src={film.image}
                      alt={film.name}
                      className="film-image"
                    />
                    <h3 className="film-title">{film.name}</h3>
                    <p className="film-description">{film.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            showResult &&
            currentFilm && (
              <div className="result-container">
                <div className="film-result">
                  <h2>
                    🎬 dırırırı dırırı dırır rır ırı rı GAHBİK NUR KIZIMMMM BUNU
                    SEÇTİK🎬
                  </h2>
                  <div className="selected-film">
                    <img
                      src={currentFilm.image}
                      alt={currentFilm.name}
                      className="selected-film-image"
                    />
                    <div className="selected-film-info">
                      <h3 className="film-name">{currentFilm.name}</h3>
                      <p className="film-description">
                        {currentFilm.description}
                      </p>
                    </div>
                  </div>

                  <div className="romantic-message-section">
                    <button
                      className="message-button"
                      onClick={() =>
                        setShowRomanticMessage(!showRomanticMessage)
                      }
                    >
                      💌 Gahbikcandan yeni mesajınız var!tıkla nolr askm nolr
                      tıkla nolr parmagını benim yazdım koda dokundur buna bile
                      ihtiyacım var 💌
                    </button>

                    {showRomanticMessage && (
                      <div className="romantic-message-box">
                        <p className="romantic-message">{rastgeleMesaj}</p>
                      </div>
                    )}
                  </div>

                  <div className="celebration">🎉✨🎉</div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="footer">
          <div
            className="atesli-gece"
            onClick={() => window.open("tel:+905467450617", "_self")}
            style={{ cursor: "pointer" }}
          >
            <img src={atesliFoto} alt="Ateşli Gece" className="atesli-foto" />
            <p className="atesli-text">
              💓❤️‍🔥❤️‍🔥❤️‍🔥🍭💥🍓🔥🔥🔥 ATEŞLİ BİR GECE İÇİN ARAYIN 5467450617
              onurkrsln kısaca gahbe bizaNSIN SEXİ ERKEĞİSİ 🔥🔥🔥🍓💥🍭❤️‍🔥❤️‍🔥❤️‍🔥💓
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
