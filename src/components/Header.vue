<template>
  <div class="header">
    <div class="menu_buttons">
      <div class="logotype">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div class="mmm">
        <div class="one">Фильмы</div>
        <div class="two">Сериалы</div>
        <div class="three">Мультфильмы</div>
        <div class="four">Аниме</div>
      </div>
    </div>
    <div class="between"><span class="megasearch">МЕГАПОИСК</span></div>
  </div>

  <div class="border_bigname">
    <span class="bigname first">F</span>
    <span class="bigname">I</span>
    <span class="bigname">L</span>
    <span class="bigname">M</span>
    <span class="bigname">E</span>
    <span class="bigname">X</span>
  </div>

  <div class="comp1">
    <span>Фильм дня</span>
    <span>Выбор редакции</span>
    <span>08.06.2022</span>
  </div>

  <div class="comp2">
    <div>
      <img src="/images/chb1.png" />
      <div class="info">
        <div class="film-name-avtor">
          <span>Холодная война</span>
          <span class="name-avtor">Павел Павликовский</span>
        </div>
        <div class="film-foter">
          <div class="film-foter__genre">
            <div class="genre">драма</div>
            <div class="genre">мелодрама</div>
            <div class="genre">история</div>
          </div>
          <div class="film-foter__score">
            <span>7.5</span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <img src="/images/chb2.png" />
    </div>
  </div>

  <div class="container">
    <div class="first-list">
      <div class="most-viewed">Самые просматриваемые</div>
      <div class="shortlist">
        <div class="poster">
          <div class="image">
            <img src="/images/kochevnik.png" />
            <p>Земля кочевников</p>
            <div class="author">Хлоя Джао<span class="year">2021</span></div>
            <div class="score">8.6</div>
          </div>

          <div class="image">
            <img src="/images/green-rycar.png" />
            <p>Легенда о Зелёном рыцаре</p>
            <div class="author">Дэвид Лоури<span class="year">2021</span></div>
            <div class="score">6.3</div>
          </div>

          <div class="image">
            <img src="/images/liga-spravedliv.png" />
            <p>Лига справедливости</p>
            <div class="author">Зак Снайдер<span class="year">2021</span></div>
            <div class="score">7.7</div>
          </div>

          <div class="image">
            <img src="/images/crim-chtivo.png" />
            <p>Криминальное чтиво</p>
            <div class="author">
              Квентин Тарантино<span class="year">1994</span>
            </div>
            <div class="score">9.0</div>
          </div>

          <div class="image">
            <img src="/images/ivan-vasilyev.png" />
            <p>Иван Васильевич</p>
            <div class="author">
              Леонид Гайдай<span class="year">1973</span>
            </div>
            <div class="score">8.6</div>
          </div>

          <div class="image">
            <img src="/images/interstelar.png" />
            <p>Интерстеллар</p>
            <div class="author">
              Кристофер Нолан<span class="year">2014</span>
            </div>
            <div class="score">8.7</div>
          </div>
        </div>
        <div class="film-data"></div>
      </div>
    </div>
    <div class="second-list">
      <div class="most-viewed">Фильмы про войну</div>
      <div class="shortlist">
        <div class="poster">
          <div class="image">
            <img src="/images/17.png" />
            <p>17 мгновений весны</p>
            <div class="author">Хлоя Джао<span class="year">2021</span></div>
            <div class="score">8.6</div>
          </div>

          <div class="image">
            <img src="/images/Schindlers-List.png" />
            <p>Список Шиндлера</p>
            <div class="author">Дэвид Лоури<span class="year">2021</span></div>
            <div class="score">6.3</div>
          </div>

          <div class="image">
            <img src="/images/stariki.png" />
            <p>В бой идут одни старики</p>
            <div class="author">Зак Снайдер<span class="year">2021</span></div>
            <div class="score">7.7</div>
          </div>

          <div class="image">
            <img src="/images/brosers-gun.png" />
            <p>Братья по оружию</p>
            <div class="author">
              Квентин Тарантино<span class="year">1994</span>
            </div>
            <div class="score">9.0</div>
          </div>

          <div class="image">
            <img src="/images/zori-tihie.png" />
            <p>...а зори сдесь тихие</p>
            <div class="author">
              Леонид Гайдай<span class="year">1973</span>
            </div>
            <div class="score">8.6</div>
          </div>

          <div class="image">
            <img src="/images/vetrom.png" />
            <p>Унесенные ветром</p>
            <div class="author">
              Кристофер Нолан<span class="year">2014</span>
            </div>
            <div class="score">8.7</div>
          </div>
        </div>
        <div class="film-data"></div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="searcher">
      <div class="searcher__block">
        <div class="searcher__block-background"></div>
        <div class="searcher__field">
          <div class="searcher__title">Поиск фильма</div>
          <div class="searcher__search">
            <div class="search__block">
              <div class="search__row-1">
                <div class="search__name">название, режиссер...</div>
                <div class="search__plus">+</div>
                <div class="search__year">год</div>
                <div class="search__slash">/</div>
                <div class="search__interval">интервал</div>
              </div>
              <div class="search__row-2">
                <div class="search__genre">жанр</div>
                <div class="search__genre-field">
                  <div class="field">&#x2014;</div>
                  <div class="field">&#x2228;</div>
                </div>
                <div class="search__plus">+</div>
                <div class="search__rating">рейтинг</div>
              </div>
              <div class="search__row-3">
                <div class="row-3">
                  <div class="search__country">страна</div>
                  <div class="search__country-field">
                    <div class="field">&#x2014;</div>
                    <div class="field">&#x2228;</div>
                  </div>
                </div>
                <div class="search__button">
                  <div class="search__button-text">поиск</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="sass">
.bigname
  color: white
  font-family: HelveticaNeueCyr
  font-size: 18vw
  font-style: normal
  font-weight: 700
  line-height: 0.9em
  vertical-align: middle
  z-index: -1
  padding: 0 0 20px 0
   //letter-spacing: 0.2em

.border_bigname
  display: flex
  text-align: center
  justify-content: space-between

.first
  margin-left: -1.2vw

  //border: medium dashed green

.header
  display: flex
  justify-content: space-between
  //max-width: 170px

.menu_buttons
  display: flex
  justify-content: space-between
  align-items: center
  height: 100%
  gap: 1.5em

.mmm
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  font-size: 13px
  font-weight: 500
  flex-basis: 20%
  gap: 1.5em
  div
    border: 1px solid white
    padding: 0.3em 0.5em
    padding-right: 10px
    padding-left: 10px
    cursor: pointer
  div:hover
    color: black
    background-color: white
    font-weight: 600

  //   transition: 0.4s ease-out

.one:hover
  letter-spacing: -1.05px
.two:hover
  letter-spacing: -0.55px
.three:hover
  letter-spacing: -0.75px
.four:hover
  letter-spacing: -0.75px

.between
  display: flex
  position: relative

.megasearch
  font-family: HelveticaNeueCyr
  font-size: 13px
  font-weight: 400
  border: 2px solid #D12626
  border-radius: 30em
  letter-spacing: 0.1em
  font-stretch: 200%
  width: 14em
  height: 2.2em
  text-align: center
  padding-top: 0.2em
  padding-bottom: 1.2em
  cursor: pointer

.between:hover
  background-color: #D12626
  border-radius: 30em
  transition: 0.2s all ease-out

.megasearch:hover
  font-weight-adjust: 1

//proposeeeeeeeeeeeeeeeeeeee-------------------------------------------------------

.comp1
  display: flex
  justify-content: space-between
  font-family: HelveticaNeueCyr
  font-weight: 700
  font-size: 20px
  line-height: 24px
  color: #FFFFFF
  margin: 0 0 7px 0

.comp2
  display: flex
  justify-content: space-between
  padding: 0 0 90px 0

.film-name-avtor
  display: flex
  justify-content: space-between
  padding: 16px 0 0 0
  font-family: HelveticaNeueCyr
  font-size: 32px

.name-avtor
  font-family: HelveticaNeueCyr
  font-size: 20px

.film-foter
  display: flex

.film-foter__genre
  display: flex

.genre
  margin: 16px 10px 0 0
  border: 1px solid #fff
  padding: 0 6px
  font-family: HelveticaNeueCyr
  font-size: 13px

.film-foter__score
  margin: 10px 0 0 0
  justify-content: end
  display: flex
  font-family: HelveticaNeueCyr
  font-size: 13px
  font-weight: 500
  border: 1px solid #BC2626
  background-color: #BC2626
  height: 1.6em
  width: 2.2em
  box-shadow: 0 0 10px rgba(0,0,0,0.7)
  align-items: center
  justify-content: center

// shooooooooooortlliisst----------------------------------------------------------------
.first-list
  margin: 0 0 55px 0

.most-viewed
  font-family: HelveticaNeueCyr
  font-size: 20px
  font-weight: 500
  padding-bottom: 1em

.poster
  display: flex
  justify-content: space-evenly
  line-height: 1.5em
  p
    font-family: HelveticaNeueCyr
    font-size: 12px

.film-data
  display: flex
  justify-content: space-evenly
div
  justify-content: space-between

.author
  font-family: HelveticaNeueCyr
  font-size: 12px
  display: flex
  justify-content: space-between

.image
  position: relative
  div.score
    display: flex
    font-family: HelveticaNeueCyr
    font-size: 13px
    font-weight: 500
    border: 1px solid #BC2626
    background-color: #BC2626
    height: 1.4em
    width: 2em
    box-shadow: 0 0 10px rgba(0,0,0,0.7)
    align-items: center
    justify-content: center
    position: absolute
    top: 1em
    left: 11em

// search

.container
  max-width: 1440px
  height: 670px

.searcher

.searcher__block

.searcher__block-background
  height: 670px
  background: url('../public/images/Component-1.png'), url('../public/images/Component-2.png'), url('../public/images/Component-3.png'), url('../public/images/Component-4.png'), url('../public/images/Component-5-big-logo.png')
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat
  background-position: top left, bottom left, top right, bottom right, center
  opacity: 0.1
  margin: 50px 0 -670px 0

.searcher__field
  margin: 260px 0 0 0

.searcher__title
  height: 39px
  font-family: HelveticaNeueCyr
  font-weight: 500
  font-size: 32px
  line-height: 39px
  padding: 0 0 13px 0
  text-transform: uppercase
  letter-spacing: 0.21em
  color: #FFFFFF
  display: flex
  justify-content: center

.searcher__search
  border: 2px solid #FFFFFF
  border-radius: 4px
  max-width: 690px
  height: 233.84px
  margin: 0 auto

.search__block
  padding: 50px 23px 50px 30px

//первый ряд------------------------------------

.search__row-1
  display: flex
  justify-content: space-between
  padding: 0 0 25px 0

.search__name
  font-family: HelveticaNeueCyr
  font-weight: 500
  font-size: 20px
  color: #000000
  width: 320px
  height: 28px
  background: #D9D9D9

.search__year
  font-family: HelveticaNeueCyr
  font-weight: 500
  font-size: 20px
  color: #000000
  width: 127px
  height: 27px
  background: #D9D9D9
  display: flex
  justify-content: center
  align-items: center

.search__interval
  font-family: HelveticaNeueCyr
  font-weight: 500
  font-size: 20px
  color: #000000
  width: 127px
  height: 27px
  background: #D9D9D9
  display: flex
  justify-content: center
  align-items: center

//второй ряд------------------------------------

.search__row-2
  display: flex
  padding: 0 0 25px 0
  justify-content: start
  max-width: 479px
  justify-content: space-between

.search__genre
  font-family: HelveticaNeueCyr
  font-weight: 500
  font-size: 20px
  color: #fff
  margin: 0 42px 0 0

.search__genre-field
  width: 216px
  height: 27px
  background: #D9D9D9
  display: flex

.field
  color: #000
  width: 12.67px
  font-weight: bold
  margin: 0 9px

  .search__plus

.search__rating
  font-family: HelveticaNeueCyr
  font-weight: 500
  font-size: 20px
  color: #000000
  width: 126.71px
  height: 27.65px
  background: #D9D9D9
  display: flex
  justify-content: center
  align-items: center

//третий ряд------------------------------------

.search__row-3
  display: flex

.row-3
  display: flex
  max-width: 450px

.search__country
  font-family: HelveticaNeueCyr
  font-size: 20px
  font-weight: 500
  color: #fff
  margin: 0 38px 0 0

.search__country-field
  width: 216px
  height: 27px
  background: #D9D9D9
  display: flex

.field

.search__plus

.search__slash

.search__button
  border: 2px solid #D12626
  border-radius: 31px
  width: 126.71px
  height: 34.56px
  display: flex
  justify-content: center
  align-items: center

.search__button-text
  font-family: HelveticaNeueCyr
  font-style: normal
  font-weight: 500
  font-size: 13px
  color: #FFFFFF
  text-transform: uppercase
</style>

<!-- level 1 -->

