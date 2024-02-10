<template>
    <section>
        <section class="pedigree">
            <div class="pedigree_container">
                <h2 class="pedigree_content title">SIGNIFICADO DE PEDIGREE</h2>
                <div class="pedigree_content paragraph"> Podemos definir que pedigree es <i>la adaptación gráfica de la voz inglesa pedigree</i>, que significa <b>'genealogía de un animal de raza'</b> y que forma parte del diccionario de la Real Academia Española (RAE) como <b>pedigrí</b>.
                    <br><br>
                El origen remoto del concepto nos lleva a la expresión francesa <i>pied de grue (“pata de grulla”)</i>, que se utilizaba para nombrar a las tres marcas rectas que los primeros criadores de caballo utilizaban para marcarlos.
                    <br><br>
                El pedigree es la ascendencia biológica del animal doméstico; permite comprobar la pureza de raza. Esto quiere decir que un animal con pedigree posee ciertas características propias de su raza que le diferencian del resto.
                    <br><br>
                El certificado se obtiene recién al demostrar la pureza de raza del animal por varias generaciones. Por lo general, estos certificados son emitidos por asociaciones, federaciones o clubes.
                    <br><br>
                También <b>puede ser considerado un documento</b> que, según quien lo emita, podrá ser «privado» u «Oficial». <br>
                Para que sea Oficial, la federación, asocación o club, debe contar con un nombramiento de un Gobierno Nacional que lo habilite para tal fin. Cuando eso sucede, el Documento de pedigrí pasa a tener caracter de Documento Oficial Gubernamental.
                    <br><br>
                En el caso de un Documento Oficial, además de la pureza de raza, el mismo, <b>Certifica Propiedad Legal ante la Justicia</b>. Un Documento Oficial no debe ser desconocido por nadie.
                </div>
                <img src="../assets/dogbarking.svg" style="float: left;">
            </div>
        </section>
    </section>
</template>


<script setup>
import { onMounted, onUnmounted } from 'vue';
import { canonicalService } from '../canonicalService';

onMounted(() => {
  canonicalService.addLink('https://kennelclubargentino.org.ar/significado-de-pedigree/');
});
onUnmounted(() => {
  canonicalService.removeLink('https://kennelclubargentino.org.ar/significado-de-pedigree/');
});

</script>


<style lang="scss" scoped>
a{
    text-decoration: none;
}
.pedigree{
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
.pedigree_container{
    background-color: #fff;
    border-radius: 8px;
    width: 80%;
    height: auto;
    text-align: center;
    padding: 20px 90px 40px 90px ;
    margin-bottom: 40px;
    animation: slideFromBottom 1s ease-in-out;
}

@keyframes slideFromBottom {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
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