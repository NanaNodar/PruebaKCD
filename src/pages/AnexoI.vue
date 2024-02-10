<template>
    <section class="anexo">
        <div class="anexo_container">
            <h2 class="anexo_content title">Anexo I - Categorías y Duración de Criaderos</h2>
            <div class="anexo_content paragraph">
                <p><b>Artículo 1:</b> El presente Anexo complementa el Reglamento de Crianza del Kennel Club Digital.
                    <br><br>
                    <b>Artículo 2:</b> Se establecen tres categorías de criaderos para el funcionamiento de un establecimiento de crianza del Kennel Club Digital.
                    <br><br>
                    <b>Artículo 3:</b> Todo criadero se inscribirá en alguna categoría, pudiendo cambiarla en cualquier momento, siempre y cuando pueda cumplir con los requisitos para la misma.
                    <br><br>
                    <b>Artículo 4:</b> Las categorías se establecen:
                    <br><br>
                        <i>Criadero Transeúnte</i> - Toda persona que inscriba una lechigada en el KCD deberá observar esta categoría cuando solo la inscripción es ocasional o bien posea menos de tres hembras a su nombre. <br><br>
                        <i>Criadero Estándar</i> - Cuando un criador regular con más de tres hembras, que no tenga más de cinco años de crianza en alguna Institución legalmente constituida o bien no hay realizado cursos o seminarios dictados por el Kennel Club Digital u Organización reconocida por el mismo. <br><br>
                        <i>Criadero Profesional</i> - Cuando un criador regular con más de cinco años de crianza en alguna Institución legalmente constituida, poseer más de tres hembras, y/o haya realizado cursos o seminarios dictados por el Kennel Club Digital u Organización reconocida por el mismo. 
                        <br><br>
                    <b>Artículo 5:</b> Se considerará Criador Regular a aquel criador que anote por lo menos tres lechigadas de diferentes hembras en el transcurso de un año. Esta categoría se mantendrá por un año si el criador no anota esa cantidad en el transcurso del año.
                    <br><br>
                    <b>Artículo 6:</b> Las categorías de criadero se podrán cambiar de la siguiente forma:
                    <br><br>
                        De <i>Transeúnte</i> se podrá pasar a <i>Estándar</i> cuando el criador cumpla con los requisitos de la categoría. <br><br>
                        De <i>Estándar</i> a <i>Profesional</i>, cuando el criador cumpla con los requisitos de la categoría. <br><br>
                        La categoría <i>Profesional</i> es la máxima que se puede alcanzar, solo se perderá si el criador deja de anotar totalmente por lo menos por tres años. <br><br>

                    <b>Artículo 7:</b> El criador podrá pedir licencia cuando lo considera oportuno. Las licencias se otorgarán exclusivamente con la aprobación de la C.D. Y deberán presentarse por nota escrita dirigida a la C.D.. Las licencias se otorgarán por periodos de un año, pudiéndose extenderse por iguales periodos según motivo justificable y antecedentes del criador que se tendrán en cuenta al momento del otorgamiento.
                    <br><br>
                    <b>Artículo 8:</b> El criadero se inscribe una sola vez y dura toda la vida, siempre y cuando el criador anote por lo menos una lechigada por año, independientemente de la categoría que posea.
                    <br><br>
                    <b>Artículo 9:</b> Toda criadero por el solo hecho de inscribirse en el Kennel Club Digital podrá ser usada para todas las razas que el titular decida.</p>
            </div>
            
        </div>
    </section>
</template>


<script setup>
import { onMounted, onUnmounted } from 'vue';
import { canonicalService } from '../canonicalService';

onMounted(() => {
  canonicalService.addLink('https://kennelclubargentino.org.ar/reglamento-de-criadero/anexo-i-categorias-y-duracion-de-criaderos/');
});
onUnmounted(() => {
  canonicalService.removeLink('https://kennelclubargentino.org.ar/reglamento-de-criadero/anexo-i-categorias-y-duracion-de-criaderos/');
});
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
}
li{
    margin: 0 75px 0 75px;
}
.anexo{
    display: grid;
    place-items: center;
    background-color: #243757;
    background-image: url(../assets/dogprint.svg);
    background-repeat: repeat;
    padding-top: 90px;
}
.anexo_container{
    background-color: #fff;
    border-radius: 8px;
    width: 80%;
    height: auto;
    padding: 20px 90px 40px 90px ;
    margin-top: 100px;
    margin-bottom: 40px;
    animation: fadeIn 1s forwards; 
}

@keyframes fadeIn {
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
    margin: 20px 0 40px 0;
}
.paragraph{
    text-align: left;
    color: grey;
    font-size: 1.5rem;
    margin: 20px 0 20px 0;
    line-height: 1.4;
}
</style>