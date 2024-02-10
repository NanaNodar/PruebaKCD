<template>
    <section class="macho_container">
      <div class="container">
        <h2 class="macho_content title">Denuncia de Servicio Dueño del Macho</h2>
        
        <p class="macho_content subtitle">Este formulario debe ser completado exclusivamente por el dueño del macho. <br> "El Kennel Club Digital NO se responsabiliza de la cesión de su documentación privada"</p>
        <div class="macho_content subt">
            <h3 ><i>Autorizo a la Secretaria del Kennel Club Digital a inscribir mi perro macho <br> en el servicio / monta con la perra según los datos consignados abajo.</i></h3>
        </div>
        <FormMacho/>
      </div>
    </section>
  </template>
  
  
  <script setup>
  import FormMacho from '../components/FormMacho.vue';
  import { onMounted, onUnmounted } from 'vue';
  import { canonicalService } from '../canonicalService';

  onMounted(() => {
    canonicalService.addLink('https://kennelclubargentino.org.ar/denuncia-de-servicio-dueno-del-macho/');
  });
  onUnmounted(() => {
    canonicalService.removeLink('https://kennelclubargentino.org.ar/denuncia-de-servicio-dueno-del-macho/');
  });
  
  </script>
  
  
  <style lang="scss" scoped>
  .macho_container{
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