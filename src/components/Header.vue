<template>

  <div class="header">
    <div class="menu_buttons">
      <p class="logo">
        <img src="/images/logo.svg" alt="logo" />
      </p>
      <div class="one">
        <input type="button" /> Фильмы
      </div>
      <div class="two">Сериалы</div>
      <div class="three">Мультфильмы</div>
      <div class="four">Аниме</div>
    </div>
    <div class="between"><span class="megasearch">МЕГАПОИСК</span></div>

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


.menu_buttons
  display: flex 
  flex-direction: row
  height: 100%
  width: 90%
  font-weight: 400 
  margin: 0.4em 1em 1em 0em
 
  

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
 
//.between
  

.between
  font-size: 14px
  border: 2px solid red
  border-radius: 25em   
  letter-spacing: 0.1em
  text-align: center 
  font-stretch: 200% 
  width: 20em
  position: relative
  

  





</style>

<!-- level 1 -->

