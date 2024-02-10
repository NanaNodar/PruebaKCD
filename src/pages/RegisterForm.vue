<template>
    <section class="register_form_container">
      <div class="container">
        <h2 class="register_form_content title">Formulario para Registros Iniciales</h2>
        <p class="register_form_content subtitle">  Complete el formulario según los datos requeridos. <br><br> 
        Al finalizar deberá enviar escaneo o foto, del DNI parte frontal y fotos del perro. <br> Deberá poder observarse bien y en forma completa.</p>
        <FormRegister/>
      </div>
    </section>
  </template>
  
  
  <script setup>
  import FormRegister from '@/components/FormRegister.vue';
  import { onMounted, onUnmounted } from 'vue';
  import { canonicalService } from '../canonicalService';

  onMounted(() => {
    canonicalService.addLink('https://kennelclubargentino.org.ar/formulario-registros-iniciales/');
  });
  onUnmounted(() => {
    canonicalService.removeLink('https://kennelclubargentino.org.ar/formulario-registros-iniciales/');
  });
  
  </script>
  
  
  <style lang="scss" scoped>
  .register_form_container{
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