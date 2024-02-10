<template>
  <section class="contact_container">
    <div class="container">
      <h2 class="contact_content title">Contáctate con Nosotros</h2>
      <p class="contact_content subtitle">Completa nuestro formulario de contacto y déjanos saber cómo podemos ayudarte</p>
      <FormContact/>
    </div>
  </section>
</template>


<script setup>
import FormContact from '../components/FormContact.vue';


</script>


<style lang="scss" scoped>
.contact_container{
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
  border-radius: 8px;
  margin-top: 90px;
  margin-bottom: 40px;
  animation: zoomIn 2s ease;
}

@keyframes zoomIn {
    from {
        transform: scale(0.5); 
        opacity: 0;
    }
    to {
        transform: scale(1); 
        opacity: 1;
    }
}
.title{
    text-align: center;
    color: #243757;
    font-size: 3.5rem;
    padding-bottom: 0;
    margin: 20px;
    margin-top: 40px;
  }

  .subtitle{
    text-align: center;
    color: grey;
    font-size: 1.5rem;
    margin: 20px;
    margin-bottom: 30px;
  }
</style>