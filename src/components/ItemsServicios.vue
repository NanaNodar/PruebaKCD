<template>
  <div class="services">
    <div class="services_items" id="1">
      <h3>LISTA DE PRECIOS</h3>
      <p><br>Optimizamos tus gastos con las tarifas más atractivas del mercado. <br><br> Echa un vistazo a nuestro innovador <br> <router-link to="/lista-de-precios">cuadro de tarifas</router-link> y realiza comparaciones. <br><br>
        <b>Experiencia y Garantía a un precio inigualable</b>.
      </p>
    </div>
    <div class="services_items" id="2">
      <h3>REGISTROS ONLINE</h3> 
      <p>Si te dedicas a la cría y cuentas con un criadero registrado, ahora puedes inscribir a tus adorables cachorros de forma completamente online.
        <br><br> <b>Es un proceso veloz, práctico y seguro.</b> <br><br>
        En caso de que aún no tengas un criadero registrado, <br>te ayudamos fácilmente <router-link to="/inscripcion-criadero">aquí</router-link>. <br><br>¡Hazlo ahora y da el siguiente paso en la crianza de tus <br>preciosos compañeros caninos!
      </p>
    </div>
    <div class="services_items" id="3">
      <h3>¡TU TRANQUILIDAD Y <br> CONVENIENCIA PRIMERO!</h3>
      <p>Explora nuestro Registro Internacional, <br> <b>¡ahora disponible completamente en línea!</b> <br> Garantizamos seguridad mediante <br> los estándares internacionales más rigurosos. <br><br>
      Reconocemos todas las razas y sus variaciones,<br> respaldados por la experiencia del prestigioso <a href="https://kennelclubargentino.org.ar/" target="_blank">Kennel Club Argentino</a>. <br> Confía en nosotros para un proceso seguro y asesorado por <br>los mejores en el ámbito. ¡Hazlo fácil, hazlo con nosotros!</p>
    </div>
    <div class="services_items" id="4">
      <h3>BIENESTAR ANIMAL</h3>
      <p><br>Nos regimos por <b>estándares de bienestar</b> que hacen latir <br>más fuerte el corazón de nuestros adorados perros. <br>Cada perro criado por un miembro se beneficia de nuestras normas de excelencia, asegurando que nazcan cachorros vibrantes y saludables. <br><br>
      ¿Quieres sumarte a esta ola de bienestar? <br>¡Tú también puedes hacerlo al unirte a nosotros! Juntos, construyamos un mundo donde el bienestar animal sea la norma. <br>
      ¡Únete a la causa y hagamos brillar las colitas de felicidad!
      </p>
    </div>
  </div>
  </template>
  
  <script setup>
  </script>
  
<style lang="scss" scoped>
 .services{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  .services_items{
    padding: 20px;
    text-align: center;
    background-repeat: no-repeat;
    background-position: left center;
  }

  .services_items h3{
    font-size: 1.9rem;
  }

  .services_items p{
    font-size: 1.5rem;
  }

  .services_items:nth-child(1) {
      background-image: url('../assets/dollar.svg'); 
   }
  .services_items:nth-child(2) {
      background-image: url('../assets/cursor.svg'); 
      background-color: #e19f41;
      color: #fff;
   }
  .services_items:nth-child(3) {
      background-image: url('../assets/safety.svg');
      background-color: #e19f41;
      color: #fff;
   }
  .services_items:nth-child(4) {
      background-image: url('../assets/dogprint-item.svg');
   }

   a{
    color: #038bbb;
    text-decoration: underline;
   }
  
  a:visited{
    color: #243757;
  }
</style>