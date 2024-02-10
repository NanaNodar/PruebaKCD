<template>
    <section class="certificate">
        <div class="certificate_container">
            <h2 class="certificate_content title">¿Qué significa que tu perro sea certificado por el KCD?</h2>
            <img class="img1" src="../assets/certificatedog.jpg" alt="Perro">
            <div class="certificate_content paragraph">
                <div class="div1">
                    <p>
                        Hay diferentes maneras de registrar o certificar a tu perro con el Kennel Club Digital. Puede ser: a través de la herencia o mediante un <a href="/formulario-registros-iniciales">Registro Inicial</a>; en ambos casos <b>no</b> se puede rastrear su linaje.
                        <br><br>
                        El certificar a tu perro en el KCD es como hacerle un Documento de Identidad, porque somos el Registro Oficial de Latinoamérica, que a su vez está bajo las normas del Único Registro Oficial Canino de la República Argentina <i>(Kennel Club Argentino)</i>. <br>
                        Es simplemente una documentación que registra su propietario, <b>no tiene nada que ver con su capacidad para participar en exhibiciones</b>. Sin embargo, no cualquier perro puede hacerlo, para esto primero tiene que ser evaluado y clasificar.
                    </p>
                </div>
                <div class="div2">
                    <h3>DESCALIFICACIONES</h3>
                    <p>Cualquier perro que sea de <b>pura raza, puede ser capaz de obtener la certificación</b>. Esto significa que los perros indocumentados, como los que provienen de aquellos criadores que no tienen oficialidad y registran en otros registros privados sin ningún tipo de Oficialidad, pueden NO ser aprobados para el registro del KCD.
                        <br><br>
                    <i>Es recomendable que, si deseas llevar un perro de raza pura a tu casa, verifiques que el criador te brinde la documentación Oficial del cachorro, de esa forma estarás seguro que es un perro de raza pura y podrás obtener su Documento Oficial.</i></p>
                    
                    <h3>CERTIFICACIÓN</h3>
                    <p>En el caso de ser un <a href="/formulario-registros-iniciales">Registro Inicial</a> tienes que tener ciertos datos, fechas de nacimiento, microchip, etc.
                        <br><br>
                    Si decides adoptar a un cachorro cuyos padres ya tienen certificación de KCD, simplemente debes registrar al nuevo perro a tu nombre para obtener su certificación. 
                    Puedes hacerlo en <a href="/transferencias-online">Transferencias Online</a>.</p>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { onMounted, onUnmounted } from 'vue';
import { canonicalService } from '../canonicalService';

onMounted(() => {
  canonicalService.addLink('https://kennelclubargentino.org.ar/tu-perro-sea-certificado-por-kca/');
});
onUnmounted(() => {
  canonicalService.removeLink('https://kennelclubargentino.org.ar/tu-perro-sea-certificado-por-kca/');
});

</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
}
.certificate{
    display: grid;
    place-items: center;
    background-color: #243757;
    background-image: url(../assets/dogprint.svg);
    background-repeat: repeat;
    padding-top: 90px;
}
.certificate_container{
    background-color: #fff;
    border-radius: 8px;
    width: 80%;
    height: auto;
    padding: 20px 90px 40px 90px ;
    margin-top: 100px;
    margin-bottom: 40px;
}
.title{
    text-align: center;
    color: #243757;
    font-size: 3.3rem;
    margin: 20px 0 40px 0;
}
.paragraph{
    text-align: left;
    color: grey;
    font-size: 1.5rem;
    margin: 20px 0 20px 0;
    line-height: 1.4;
}

.img1{
    float: left;
    border-radius: 10px;
    margin: 10px 35px 20px 0;
    width: 500px;
    height: 500px;
    animation: aparecerPrimero 2.5s forwards;
}

.div1{
    padding: 80px 0 80px 0;
}

@keyframes aparecerPrimero {
   from{
    opacity: 0;
   } 

   to{
    opacity: 1;
   }
}

.div2{
    margin-top: 50px;
}

</style>