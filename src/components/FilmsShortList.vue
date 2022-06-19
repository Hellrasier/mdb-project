<template>
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
      </div>

      <div class="image">
        <img src="/images/liga-spravedliv.png" />
        <p>Лига справедливости</p>
        <div class="author">Зак Снайдер<span class="year">2021</span></div>
      </div>

      <div class="image">
        <img src="/images/crim-chtivo.png" />
        <p>Криминальное чтиво</p>
        <div class="author">
          Квентин Тарантино<span class="year">1994</span>
        </div>
      </div>

      <div class="image">
        <img src="/images/ivan-vasilyev.png" />
        <p>Иван Васильевич</p>
        <div class="author">Леонид Гайдай<span class="year">1973</span></div>
      </div>

      <div class="image">
        <img src="/images/interstelar.png" />
        <p>Интерстеллар</p>
        <div class="author">Кристофер Нолан<span class="year">2014</span></div>
      </div>
    </div>
    <div class="film-data"></div>
  </div>
</template>


<script>
export default {};
</script>



<style lang="sass">
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
  div.score
    display: flex
    font-family: HelveticaNeueCyr
    font-size: 13px
    font-weight: 500
    border: 1px solid #BC2626
    background-color: #BC2626
    height: 1.4em
    width: 2em
    align-items: center
    justify-content: center
    position: absolute
    top: 67.5em
    left: 22em
</style>


<!-- level 3 -->
