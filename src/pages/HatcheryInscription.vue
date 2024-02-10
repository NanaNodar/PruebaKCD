<template>
    <section class="hatchery_container">
      <div class="container">
        <h2 class="hatchery_content title">Inscripción de Criadero</h2>
        <p class="hatchery_content subtitle">Esta inscripción se realiza <i>una sola vez en la vida</i>, siempre y cuando el mismo siga activo. <br><br> Completar el formulario no significa la aceptación automática.</p>
        <FormHatchery/>
      </div>
    </section>
  </template>
  
  
  <script setup>
  import FormHatchery from '../components/FormHatchery.vue';
  import { onMounted, onUnmounted } from 'vue';
  import { canonicalService } from '../canonicalService';

  onMounted(() => {
    canonicalService.addLink('https://kennelclubargentino.org.ar/inscrpciones-online/inscripcion-de-criadero/');
  });
  onUnmounted(() => {
    canonicalService.removeLink('https://kennelclubargentino.org.ar/inscrpciones-online/inscripcion-de-criadero/');
  });
  
  </script>
  
  
  <style lang="scss" scoped>
  .hatchery_container{
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
    width: 70%;
    height: auto;
    border-radius: 8px;
    margin-top: 90px;
    margin-bottom: 40px;
    animation: zoomIn 2s ease;
  }
  
  @keyframes zoomIn {
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
  }
  .title{
      text-align: center;
      color: #243757;
      font-size: 3.5rem;
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
  </style>