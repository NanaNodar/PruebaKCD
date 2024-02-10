<template>
    <section class="dog_pattern_container">
      <div class="container">
        <h2 class="dog_pattern_content title">Patrón de los Mantos de los Perros <br> (Dibujo de los Mantos)</h2>
        
        <p class="dog_pattern_content subtitle"> Las imágenes son ilustrativas. <br> Puede que tu perro tenga ese patrón a pesar de no estar ilustrada la raza en una foto.</p> 
        <Pattern/>
      </div>
    </section>
  </template>
  
  
  <script setup>
  import Pattern from '@/components/Pattern.vue';
  import { onMounted, onUnmounted } from 'vue';
  import { canonicalService } from '../canonicalService';

  onMounted(() => {
    canonicalService.addLink('https://kennelclubargentino.org.ar/patrones-en-los-perros-dibujo/');
  });
  onUnmounted(() => {
    canonicalService.removeLink('https://kennelclubargentino.org.ar/patrones-en-los-perros-dibujo/');
  });
  
  
  </script>
  
  
  <style lang="scss" scoped>
  .dog_pattern_container{
    background-color: #243757;
    background-image: url(../assets/dogprint.svg);
    background-repeat: repeat;
    padding: 90px;
    padding-bottom: 40px;
    display: grid;
    place-items: center;
  }
  
  .container{
    background-color: rgb(255, 255, 255);
    width: 95%;
    height: auto;
    border-radius: 8px;
    margin-top: 90px;
    margin-bottom: 40px;
  }
  
  .title{
      text-align: center;
      color: #243757;
      font-size: 3.3rem;
      padding-bottom: 0;
      margin: 40px;
      margin-top: 40px;
    }
  
    .subtitle{
      text-align: center;
      color: grey;
      font-size: 1.5rem;
      margin: 20px;
      margin-bottom: 40px;
    }

    .subt{
      text-align: center;
      font-size: 1.4rem;
      margin: 40px;
    }
  </style>