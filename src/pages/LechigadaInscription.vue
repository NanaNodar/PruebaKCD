<template>
    <section class="lechigada_container">
      <div class="container">
        <h2 class="lechigada_content title">Formulario Único de Inscripción <br> de Camada / Lechigada</h2>
        <p class="lechigada_content subtitle">Formulario unificado para realizar Denuncia de Servicio, Nacimiento y Lechigada. <br>De esta forma, podrá obtener, en caso de aceptación, los papeles de cada uno de los perros nacidos y declarados.</p>
        <FormLechigada/>
      </div>
    </section>
  </template>
  
  
  <script setup>
  import FormLechigada from '../components/FormLechigada.vue';
  import { onMounted, onUnmounted } from 'vue';
  import { canonicalService } from '../canonicalService';

  onMounted(() => {
    canonicalService.addLink('https://kennelclubargentino.org.ar/formulario-unico-via-e-mail/');
  });
  onUnmounted(() => {
    canonicalService.removeLink('https://kennelclubargentino.org.ar/formulario-unico-via-e-mail/');
  });
  
  </script>
  
  
  <style lang="scss" scoped>
  .lechigada_container{
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
    width: 80%;
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
  </style>