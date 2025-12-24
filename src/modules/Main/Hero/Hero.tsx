import "./hero.css";
function Hero() {
  return (
    <section className="about">
      
      <div className="main__hero__banner">
        
        {/* PHOTO & DISCRIPTION*/}
        <div className="main__hero__banner__photo-and__discription">
          {/* PHOTO */}
          <img
            className="main__hero__banner__photo"
            src="../../../public/photos/my_photo.jpg"
          ></img>
          {/* ABOUT */}
          <div className="main__hero__banner__about">
            <h2 className="main__hero__banner__about__title">Это я</h2>
            <p className="main__hero__banner__about__text">
              Меня зовут Егор Борисов, мне 21 год.Я начинаю делать этот сайт
              22.12.2025.
              <br />
              Сейчас я учусь на 2м курсе ВГУ ФКН ИСиТ.
              <br />
              Идея этого сайта пришла ко мне, поскольку я расстроился из-за
              неудачной пересдачи по ТОИНФ.
              <br />
              Я очень хочу устроится работать фронденд разработчиком в крупную
              IT компанию,
              <br />
              И поэтому считаю нужным практиковать важные для этой специальности
              навыки.
              <br />
              А этот сайт идеальный способ для тренировки, и демонстрации своих
              навыков
              <br />
            </p>
          </div>
        </div>
        {/* DISCRIPTION */}
        <div className="main__hero__banner__discription">
          <h2 className="main__hero__banner__discription__title">
            Это мой сайт
          </h2>
          <p className="main__hero__banner__discription__faq">
            Я делаю этот сайт, чтбы практиковаться в фронтенде, а оптимально ещё
            и в бекенде.
          </p>
          <h3 className="main__hero__banner__discription__way">
            Цели этого сайта
          </h3>
          <ul className="main__hero__banner__discription__list">
            <li className="main__hero__banner__discription__list__item">
              Практика в вёрстке
            </li>
            <li className="main__hero__banner__discription__list__item">
              Написание чистого кода
            </li>
            <li className="main__hero__banner__discription__list__item">
              Написание библеотек,которые можно переиспользовать в других
              проектах
            </li>
            <li className="main__hero__banner__discription__list__item">
              Оптимально написание также бекенда
            </li>
            <li className="main__hero__banner__discription__list__item">
              Реализация интересных идей
            </li>
            <li className="main__hero__banner__discription__list__item">
              Работа с визуалом
            </li>
            <li className="main__hero__banner__discription__list__item">
              Практика в фронтенде
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Hero;
