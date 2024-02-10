<template>
    <section>
        <section class="why_register">
            <div class="why_register_container">
                <h2 class="why_register_content title">¿POR QUÉ HACEMOS REGISTROS INICIALES?</h2>
                <div class="why_register_content paragraph"> El Kennel Club Digital está bajo las normas del <a href="https://kennelclubargentino.org.ar/" target="_blank">Kennel Club Argentino</a>, el cual como Registro Oficial Canino de la República Argentina trabaja con estándares internacionales, respetando las normativas que rigen los registros.
                    <div style="display: flex; align-content: center; justify-content: center; margin: 50px;">
                        <img src="../assets/logo-kca-horizontal.webp" alt="Logo KCA">
                    </div>
                El Derecho Administrativo, en todo el mundo, estipula que hay bienes registrables, bienes muebles e inmuebles; dentro de los bienes muebles se encuentran los <b>animales de raza</b>, el Kennel Club Argentino, como Registro Oficial de Perros de Pura Raza, no puede limitar el derecho a registrar un bien, como es un perro de raza.
                    <br><br>
                Como Registro Oficial de la República Argentina, tiene normativas internas sobre cómo y qué registrar, teniendo jueces Oficiales que conocen los fenotipos de las diferentes razas, pudiendo ser consignado como «No Apto para Cria», pero sí como de raza pura.
                    <br>
                Tiene Jueces capacitados para poder realizar el trabajo con profesionalismo, resguardando el derecho que todos los ciudadanos tenemos frente a la ley.
                    <br><br>
                Si usted tiene alguna duda o consulta, <a href="/contacto">contáctenos</a>.
                </div>
            </div>
        </section>
    </section>
</template>


<script setup>
import { onMounted, onUnmounted } from 'vue';
import { canonicalService } from '../canonicalService';

onMounted(() => {
  canonicalService.addLink('https://kennelclubargentino.org.ar/por-que-lo-hacemos/');
});
onUnmounted(() => {
  canonicalService.removeLink('https://kennelclubargentino.org.ar/por-que-lo-hacemos/');
});

</script>


<style lang="scss" scoped>
a{
    text-decoration: none;
}
.why_register{
    width: 100%;
    top: 0;
    padding-top: 190px;
    z-index: -1;
    background-color: #243757;
    background-image: url(../assets/dogprint.svg);
    background-repeat: repeat;
    display: grid;
    place-items: center;
}
.why_register_container{
    background-color: #fff;
    border-radius: 8px;
    width: 80%;
    height: auto;
    text-align: center;
    padding: 20px 90px 40px 90px ;
    margin-bottom: 40px;
    animation: slideFromBottom 0.8s ease-in-out;
}

@keyframes slideFromBottom {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }

.title{
    text-align: center;
    color: #243757;
    font-size: 3rem;
    margin: 40px 0 10px 0;
}
.paragraph{
    color: grey;
    font-size: 1.5rem;
    margin: 50px;
    text-align: left;
    line-height: 1.4;
}
</style>