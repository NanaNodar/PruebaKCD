<template>
    <section class="dog_container">
      <div class="container">
        <h2 class="dog_content title">Denuncia de Venta de Canino</h2>
        
        <p class="dog_content subtitle"> Complete el formulario según los datos que figuran en el documento de cesión que le entrego el criador. <br><br>
        EL TRÁMITE ES COMPLETAMENTE GRATUITO </p>
        <FormDogComplaint/>
      </div>
    </section>
  </template>
  
  
  <script setup>
  import FormDogComplaint from '@/components/FormDogComplaint.vue';
  import { onMounted, onUnmounted } from 'vue';
  import { canonicalService } from '../canonicalService';

  onMounted(() => {
    canonicalService.addLink('https://kennelclubargentino.org.ar/denuncia-de-venta-de-canino/');
  });
  onUnmounted(() => {
    canonicalService.removeLink('https://kennelclubargentino.org.ar/denuncia-de-venta-de-canino/');
  });
  
  
  </script>
  
  
  <style lang="scss" scoped>
  .dog_container{
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

    .subt{
      text-align: center;
      font-size: 1.4rem;
      margin: 40px;
    }
  </style>