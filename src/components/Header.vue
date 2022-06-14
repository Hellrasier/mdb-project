<template>
<div class="header">
  <div class="menu_buttoms">
    <p class="logo">
      <img src="/images/logo.png" alt="logo" />
    </p>
    <div class="one">
      <input type="button" /> Фильмы
      </div>
    <div class="two">Сериалы</div>
    <div class="three">Мультфильмы</div>
    <div class="four">Аниме</div>
    </div>
    <div class="between"><span class="megasearch">Мегапоиск</span></div>
  </div>


  <div class="border_bigname">
    <span class="bigname">FILMEX</span>
  </div>
</template>


<script>
  export default {
  
  }
</script>

<style lang="sass">
.bigname
  color: white
  font-family: HelveticaNeueCyr
  font-size: 37vh
  font-style: normal
  font-weight: 700
  text-align: center
  font-stretch: 200% 
  letter-spacing: 0.15em
  line-height: 1em
  
  

 
.border_bigname
  display: flex 
  justify-content: center 
  align-items: center 
   //border: medium dashed green
 

.header
  display: flex
  justify-content: space-between


.menu_buttoms
  display: flex 
  flex-direction: row
  height: 100%
  width: 90%
  
  

.logo
  flex: 0.05 

.one
  font-size: 14px 
  flex: 0.09 
  border: 1px solid white 
  position: relative 
  height: 2.5em 
  text-align: center 
  margin: 0.4em 1em 1em 0em 
  

.two
  font-size: 14px 
  flex: 0.09  
  border: 1px solid white 
  position: relative
  height: 2.5em 
  text-align: center 
  margin: 0.4em 1em 1em 0em 
   

.three
  font-size: 14px
  flex: 0.11
  border: 1px solid white
  position: relative
  height: 2.5em
  text-align: center
  margin: 0.4em 1em 1em 0em
 

.four
  font-size: 14px
  flex: 0.1
  border: 1px solid white
  position: relative
  height: 2.5em
  text-align: center
  margin: 0.4em 1em 1em 0em
 

div.between
  font-size: 14px
  border: 1px solid white
  padding-right: 5em

</style>

<!-- level 1 -->

