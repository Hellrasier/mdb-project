<template>

<div class="header">
    <p class="logo">
      <img src="/images/logo.svg" alt="logo" />
    </p>
 

  <div class="menu_buttons">
    <div class="one">Фильмы</div>
    <div class="two">Сериалы</div>
    <div class="three">Мультфильмы</div>
    <div class="four">Аниме</div>
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

</template>


<script>
export default {

}
</script>

<style lang="sass">
.bigname
  color: white
  font-family: HelveticaNeueCyr
  font-size: 18vw
  font-style: normal
  font-weight: 700
  //letter-spacing: 0.2em
  line-height: 0.9em
     

 
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
  max-width: 170px


.menu_buttons
  display: flex  
  align-items: center
  flex-direction: row
  height: 100%
  width: 30%
  gap: 2em
  div
    display: flex 
    justify-content: center 
    align-items: center 
    font-size: 13px 
    flex-basis: 20%
    border: 1px solid white 
    padding: 0.3em 0.5em 
    padding-right: 15px
    padding-left: 15px
  
 
   
     
.img

  

.logo
  display: flex  
  align-items: center
  justify-content: space-between
  




.between
  display: flex 
  justify-content: center 
  display: flex 
  font-size: 13px
  font-family: HelveticaNeueCyr
  font-style: bold
  border: 2px solid red
  border-radius: 25em   
  letter-spacing: 0.1em
  text-align: center 
  font-stretch: 200% 
  width: 14em
  height: 2.2em
  position: relative
  align-items: center
  

  
  

.megasearch
  




</style>

<!-- level 1 -->

