<template>
    <section class="transfer_container">
      <div class="container">
        <h2 class="transfer_content title">Transferencias Online (Cambio de Titularidad)</h2>
        <p class="transfer_content subtitle"> Complete el formulario según los datos que figuran en el documento de cesión que le entrego el criador. <br><br> Al finalizar deberá enviar escaneado foto del DNI parte frontal y del Documento de Cesión <br> que le entregó el criador, completo con sus datos y firmas de ambas partes.</p>
        <FormTransfer/>
      </div>
    </section>
  </template>
  
  
  <script setup>
  import FormTransfer from '../components/FormTransfer.vue';
  import { onMounted, onUnmounted } from 'vue';
  import { canonicalService } from '../canonicalService';

  onMounted(() => {
    canonicalService.addLink('https://kennelclubargentino.org.ar/transferencia-online/');
  });
  onUnmounted(() => {
    canonicalService.removeLink('https://kennelclubargentino.org.ar/transferencia-online/');
  });
  
  </script>
  
  
  <style lang="scss" scoped>
  .transfer_container{
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