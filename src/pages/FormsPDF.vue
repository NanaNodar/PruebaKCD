<template>
    <section class="forms">
        <div class="forms_container">
            <h2 class="forms_content title">Formularios para Descargar y Completar </h2>
            <div class="forms_div">
                <ul class="pdf_list paragraph">
                    <li class="pdf_item"><a href="calendario-de-gestacion.pdf" download>Calendario de Gestación en Perros</a></li>
                    <li class="pdf_item"><a href="conformidad-de-servicio.pdf" download>Conformidad de Servicio / Monta</a></li>
                    <li class="pdf_item"><a href="control-de-displasia.pdf" download>Placa de Displasia</a></li>
                    <li class="pdf_item"><a href="convenio-de-cesion.pdf" download>Convenio de Cesión de Cachorro</a></li>
                </ul>
                <div class="forms_img"></div>
            </div>
        </div>
    </section>
</template>


<script setup>

</script>


<style lang="scss" scoped>
.forms{
    width: 100%;
    height: 1000px;
    top: 0;
    z-index: -1;
    background-color: #243757;
    background-image: url(../assets/dogprint.svg);
    background-repeat: repeat;
    display: grid;
    place-items: center;
}
.forms_container{
    background-color: #fff;
    border-radius: 8px;
    width: 80%;
    text-align: center;
    padding: 20px 0 0 90px ;
    margin-top: 60px;
}
.forms_div{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.forms_img{
    background-image: url(../assets/forms.png);
    background-position: bottom right;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%; 
    height: 560px;
    opacity: 0; 
    animation: fade-in 1.5s ease-in-out forwards;
}

@keyframes fade-in {
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
    font-size: 3.5rem;
    margin: 30px 0 20px 0;
}
.paragraph{
    color: grey;
    margin: 50px 0 10px 0;
    font-size: 1.7rem;
    text-align: left;
    line-height: 1.4;
}
.pdf_list{
    list-style-type: circle;
    width: 100%;
}

.pdf_item{
    margin-top: 40px;
    opacity: 0; 
    animation: list-in 0.5s forwards;
}
.pdf_list li:nth-child(1) {
    animation-delay: 0s;
}

.pdf_list li:nth-child(2) {
    animation-delay: 0.5s; 
}

.pdf_list li:nth-child(3) {
    animation-delay: 1s;
}
.pdf_list li:nth-child(4) {
    animation-delay: 1.5s;
}
.pdf_list li:nth-child(5) {
    animation-delay: 2s;
}
.pdf_list li:nth-child(6) {
    animation-delay: 2.5s;
}

@keyframes list-in {
    to {
        opacity: 1;
    }
}

.pdf_item a{
    color: rgb(68, 67, 67);
}

.pdf_item a:visited{
    color: #243757;
}
</style>