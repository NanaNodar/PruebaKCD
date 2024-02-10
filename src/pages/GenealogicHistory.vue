<template>
    <section class="genealogic">
        <div class="genealogic_container">
            <h2 class="genealogic_content title">Historia de los Registros Genealógicos</h2>
            <p class="genealogic_content paragraph delay-1">La creación del primer Kennel Club en Inglaterra, hace casi un siglo y medio, señala el comienzo de la tarea de estudio y registro de las razas caninas, la cual conducirá a la configuración de éstas tal y como hoy en día las conocemos. Antes de 1873, no hay nada seguro. Únicamente contamos con historias y leyendas transmitidas oralmente, sin suficiente fundamento científico en la mayoría de los casos, por carecerse de documentos probatorios. Aunque hayan sido encontrados algunos escritos sobre determinados perros, la ausencia de pruebas iconográficas, es decir, la falta de imágenes descriptivas de las que podamos fiarnos, unida a los cambios que experimenta el significado de las palabras a los largo del tiempo, especialmente los nombres, hacen imposible que aceptemos sin reservas estos escritos, que por tanto carecen de una utilidad real para el investigador.</p> 
            <p class="genealogic_content paragraph delay-2"> Desde la fecha mencionada, 1873, los detallados registros realizados por los clubes caninos, a partir de los cruces entre razas y una rigurosa selección, hace posible consebir las distintas razas tal y como hoy las conocemos. Hasta entonces, todo cuanto se diga sobre su historia no son sino conjeturas, más o menos verosímiles, que se apoyan en determinados hechos, documentaciones y estudios que tienen en cuenta las realizaciones actuales para, a partir de éstas, aventurar algunos paralelismos.</p>
            <p class="genealogic_content paragraph delay-3">Vemos, pues, que existen dos épocas bien delimitadas en la historia de las razas caninas. La que desde 1873 se realiza, hasta perderse en la prehistoria, y la que a partir de esa fecha estudia y experimenta una selectividad artificial, hasta hacer posible el establecimiento de una serie de factores genéticos estables que dan origen a las razas caninas puras. Para la creación de estas razas se atendió sobre todo a la utilidad del animal. Unas perfeccionaron las características que la geografía y el clima habían conferido a determinados perros; otras por el contrario, responden únicamente a un capricho pasajero de la moda. Sin embargo, todas ellas, aprovechando la tendencia gregaria del animal, producen unos seres que, dentro de las notables diferencias morfológicas que guardan entre sí, poseen como denominador común el carácter afectivo, dócil, leal que convierte al perro en el mejor amigo del hombre.</p> 
            <p class="genealogic_content paragraph delay-4">La clasificación de estas razas, si bien sigue un orden general bastante similar, difiere de un país a otro. En realidad, teniendo en cuenta la versatilidad del perro, resulta muy difícil encasillarlo en un grupo determinado. Si los grupos se determinan por la utilidad ¿qué perro podría pertenecer a un solo de ellos?, ¿Qué perro no es un animal de compañía, por ejemplo? Sin embargo atendiendo a su utilidad primera y principal, cada raza estaría incluida en el grupo que le corresponde.</p>
        </div>
    </section>
</template>


<script setup>
import { onMounted, onUnmounted } from 'vue';
import { canonicalService } from '../canonicalService';

onMounted(() => {
  canonicalService.addLink('https://kennelclubargentino.org.ar/historia-del-kennel-club/historia-de-los-registros-genealogicos/');
});
onUnmounted(() => {
  canonicalService.removeLink('https://kennelclubargentino.org.ar/historia-del-kennel-club/historia-de-los-registros-genealogicos/');
});
</script>


<style lang="scss" scoped>
.genealogic{
  background-color: #243757;
  background-image: url(../assets/dogprint.svg);
  background-repeat: repeat;
  padding: 90px;
  padding-top: 50px;
  padding-bottom: 40px;
  display: grid;
  padding-top: 180px;
  place-items: center;
}
.genealogic_container{
  background-color: #fff;
  border-radius: 8px;
  width: 80%;
  padding: 20px 90px 40px 90px ;
  margin-bottom: 40px;
}

.title{
    text-align: center;
    color: #243757;
    font-size: 3.5rem;
    padding-bottom: 0;
}

.paragraph{
    text-align: center;
    color: grey;
    font-size: 1.5rem;
    text-align: left;
    line-height: 1.4;
    opacity: 0; 
    animation: fadeIn 1.5s forwards; 
}

.delay-1 {
    animation-delay: 0.3s; 
}

.delay-2 {
    animation-delay: 1s; 
}

.delay-3 {
    animation-delay: 2s; 
}

.delay-4 {
    animation-delay: 3s; 
}

@keyframes fadeIn {
    from {
        opacity: 0; 
    }
    to {
        opacity: 1; 
    }
}

</style>