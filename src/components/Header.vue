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
  line-height: 0.9em
  vertical-align: middle
  z-index: -1
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







  

 




</style>

<!-- level 1 -->

