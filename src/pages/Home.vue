<template>
    <header>
      <section class="hero_container">
        <div class="hero">
            <div class="hero_content">
              <h1 class="hero_css">Kennel Club Digital</h1>
              <p class="hero_p">Registro Internacional Canino</p>
            </div>
        </div>
      </section> 
    </header>  

    <main>
      <section class="services_container" :class="{'mostrar': visible }">
        <h2 class="services_content title">Nuestros Servicios</h2>
        <h3 class="services_content subtitle">Garantía de calidad y reconocimiento global</h3>
        <ItemsServicios/>  
      </section>
      
      <section class="about_container">
          <h2 class="about title">Sobre Nosotros</h2>
          <h3 class="about_content subtitle">Reconocemos todas las razas y variedad de colores</h3>
          <HomeCards/>
      </section>

      <section class="kcursos_container">
        <p class="kc_text">El Kennel Club Cursos <i style="color: rgb(216, 211, 211);">-plataforma de cursos online auspiciada por el Kennel Club Argentino-</i> tiene como objetivo difundir e informar sobre los conocimientos en tema de crianza, tenencia responsable, bienestar animal, entre otras actividades que incluyen la convivencia con los caninos. </p>
        <a href="https://kennelclubcursos.com/" target="_blank"><button class="kc_button"><p class="button_text">ENTRA A NUESTRA PLATAFORMA</p></button></a>
      </section>

      <section class="questions_container">
        <h2 class="questions_content title">Preguntas Frecuentes</h2>
        <h3 class="questions_content subtitle">Estamos para aclarar tus dudas y consultas</h3>
        <Questions/>
      </section>

      <section class="form_container">
        <h2 class="questions_content title">Contáctate con Nosotros</h2>
        <p class="questions_content subtitle">Completa nuestro formulario de contacto y déjanos saber cómo podemos ayudarte</p>
        <FormContact/>
      </section>
    </main>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import ItemsServicios from '../components/ItemsServicios.vue';
  import HomeCards from '../components/HomeCards.vue';
  import Questions from '../components/Questions.vue';
  import FormContact from '../components/FormContact.vue';

  // Configurando services_container transition 
  const visible = ref(false);

  onMounted(() => {
    setTimeout(() => {
      visible.value = true;
    }, 500); 
  });
  
  // Hero Animation -- Typing
  // var flickInterval;

  // var words = ['Registro Internacional Canino'],
  //   part,
  //   i = 0,
  //   offset = 0,
  //   len = words.length,
  //   forwards = true,
  //   skip_count = 0,
  //   skip_delay = 15,
  //   speed = 100;
  // var wordflick = function () {
  // flickInterval = setInterval(function () {
  //     if (forwards) {
  //       if (offset >= words[i].length) {
  //         ++skip_count;
  //         if (skip_count == skip_delay) {
  //           forwards = false;
  //           skip_count = 0;
  //         }
  //       }
  //     }
  //     else {
  //       if (offset == 0) {
  //         forwards = true;
  //         i++;
  //         offset = 0;
  //         if (i >= len) {
  //           i = 0;
  //         }
  //       }
  //     }
  //     part = words[i].substr(0, offset);
  //     part = words[i].substr(0, offset);
  //     if (skip_count == 0 || !forwards) {
  //       offset += (forwards ? 1 : 0);
  //     }
  //     $('.hero_p').text(part);
  //   },speed);
  // };

  // $(document).ready(function () {
  //   wordflick();
  // });

  // $(window).on('unload', function () {
  // clearInterval(flickInterval);
  // });
  
  // $(document).ready(function () {
  // wordflick();
  // });
</script>

<style scoped lang="scss">

  header{
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: -1;
    background-image: linear-gradient(180deg, #0000003c 0%,#0000004c 100%), url(../assets/dog.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }
// Hero 
  .hero_container {
    display: grid;
    width: 100%;
    height: 80vh;
    padding-top: 60px;
    place-items: center;
  }

  .hero{
    padding: 30px;
  }
  .hero_content{
    text-align: center;
    display: inline-block;
  }
  .hero_css{
    font-size: 7rem;
    color: #243757;
    margin: 100px 100px 40px 100px;
    text-shadow: 1.7px 1.7px 1.7px #fff;
    -webkit-text-stroke: 2px #fff;
  }
  .hero_p{
    text-align: center;
    margin: 0;
    color: #fff;
    font-size: 4rem;
    -webkit-text-stroke: 2px #243757;
    white-space: nowrap;
    overflow: hidden;
  }

// Services
  .services_container{
   padding: 90px;
   padding-top: 50px;
   padding-bottom: 0;
   overflow: hidden;
   opacity: 0;
   transition: opacity 2s ease-in-out;
  }
  .mostrar{
    opacity: 1;
  }

  .services_content{
    margin: 20px;
    padding-bottom: 40px;
  }
  .title{
    text-align: center;
    color: #243757;
    font-size: 3.5rem;
    padding-bottom: 0;
  }

  .subtitle{
    text-align: center;
    color: grey;
    font-size: 1.5rem;
  }

// About
.about_container{
  padding: 90px;
  padding-top: 50px;
  padding-bottom: 40px;
}

.about{
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
}

.about_content{
  margin-top: 20px;
  margin-bottom: 20px;
}
// KCursos
.kcursos_container{
  background-color: #15527F;
  height: 150px;
  margin: 10px 0 60px 0;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-content: center;
  align-items: center;
}

.kc_text{
  text-align: left;
  margin: 10px 0 10px 110px;
  color: #fff;
  font-size: 21px;
}

.kc_button{
  background-color: #fff;
  font-weight: bold;
  height: 60px;
  width: 450px;
  border: none;
  border-radius: 3px;
  margin: 0 40px 0 160px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
}
.kc_button:hover{
  background-color: #e19f41;
  font-weight: bold;
  color: #fff;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.9)
}
.button_text{
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
  margin: 0;
}
// Questions
.questions_content {
  margin: 20px;
}

// Form
.form_container{
  padding: 90px;
  padding-top: 30px;
  padding-bottom: 0;
}

.form_container p{
  margin-bottom: 0;
}
</style>
