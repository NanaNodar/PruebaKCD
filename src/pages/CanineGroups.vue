<template>
    <section class="canine_groups_container">
      <div class="container">
        <h2 class="canine_groups_content title">Grupos y Razas Caninas</h2>
        
        <p class="canine_groups_content subtitle"> Los perros se juzgan en 7 grupos según la función para la cual fue creada la raza. <br> Algunas razas han cambiado su función y han sido reclasificadas.</p> 
        <Races/>
      </div>
    </section>
  </template>
  
  
  <script setup>
  import Races from '@/components/Races.vue';
  import { onMounted, onUnmounted } from 'vue';
  import { canonicalService } from '../canonicalService';

  onMounted(() => {
    canonicalService.addLink('https://kennelclubargentino.org.ar/grupos-caninos/');
  });
  onUnmounted(() => {
    canonicalService.removeLink('https://kennelclubargentino.org.ar/grupos-caninos/');
  });
  
  
  </script>
  
  
  <style lang="scss" scoped>
  .canine_groups_container{
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
    width: 90%;
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