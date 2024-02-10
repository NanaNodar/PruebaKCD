<template>
    <section class="regulations">
        <div class="regulations_container">
            <h2 class="regulations_content title">Reglamentos del Kennel Club Digital </h2>
            <div class="regulations_div">
                <ul class="regulations_list paragraph">
                    <li class="regulations_item"><router-link to="/normas-de-excelencia">Normas de Excelencia</router-link></li>
                    <li class="regulations_item"><router-link to="/reglamento-de-crianza-y-criaderos">Reglamento de Crianza y Criaderos</router-link></li>
                    <li class="regulations_item"><router-link to="/anexo-categorias-y-duracion-de-criaderos">Anexo I - Categorías y Duración de Criaderos</router-link></li>
                    <li class="regulations_item"><router-link to="/reglamento-de-jueces">Reglamento de Jueces</router-link></li>
                </ul>
                <img class="regulations_img" src="../assets/regulations-img.png">
            </div>
        </div>
    </section>
</template>


<script setup>


</script>


<style lang="scss" scoped>
.regulations{
    width: 100%;
    top: 0;
    z-index: -1;
    background-color: #243757;
    background-image: url(../assets/dogprint.svg);
    background-repeat: repeat;
    display: grid;
    place-items: center;
}
.regulations_container{
    background-color: #fff;
    border-radius: 8px;
    height: auto;
    width: 80%;
    text-align: center;
    padding: 20px 0 40px 90px;
    margin: 170px 0 60px 0;
}
.regulations_div{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.regulations_img{
    width: 700px; 
    height: 400px;
    margin: 20px 90px 20px 0;
    opacity: 0; 
    animation: fade-in 1.5s ease-in-out forwards;
    filter: drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.4));
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
.regulations_list{
    list-style-type: square;
    width: 100%;
}
.regulations_item{
    margin-top: 40px;
    opacity: 0; 
    animation: list-in 0.5s forwards;
}

.regulations_list li:nth-child(1) {
    animation-delay: 0s;
}

.regulations_list li:nth-child(2) {
    animation-delay: 0.5s; 
}

.regulations_list li:nth-child(3) {
    animation-delay: 1s;
}
.regulations_list li:nth-child(4) {
    animation-delay: 1.5s;
}

// .regulations_list li:nth-child(5) {
//     animation-delay: 2s;
// }

@keyframes list-in {
    to {
        opacity: 1;
    }
}

.regulations_item a{
    color: rgb(68, 67, 67);
}

.regulations_item a:visited{
    color: #243757;
}
</style>