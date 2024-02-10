<template>
    <div class="card_container">
        <div class="card">
            <div class="face front">
                <img src="../assets/paperscard.jpg" alt="Papeles">
                <h3>¿Cómo hacerle los papeles a un perro?</h3>
            </div>

            <div class="face back">
                <h3>¿Cómo hacerle los papeles a un perro?</h3>
                <p>Descubre el proceso profesional de documentación canina del Kennel Club Digital. <br><br>
                    Garantizamos eficiencia, seguridad y legalidad. <br><br>
                    Protege a tu mascota <br> con el registro mejor respaldado. <br><br>
                    ¡Contáctanos para obtener <br> tu Documento Canino!
                </p> 
                <div class="link_face back">
                    <a href="/contacto">Contáctanos</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face front">
                <img src="../assets/registercard.jpg" alt="Papeles">
                <h3>Registro de Razas Tradicionales</h3>
            </div>

            <div class="face back">
                <h3>Registro de Raza Tradicionales</h3>
                <p>Sumérgete en el Kennel Club Digital, con respaldo por el prestigioso Kennel Club Argentino. <br> Registramos todas las razas tradicionales con la garantía de más de 90 años de experiencia. <br><br> Confía en nosotros para el registro confiable y profesional de tu compañero canino.</p>
                <div class="link_face back">
                    <a href="/contacto">Contáctanos</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face front">
                <img src="../assets/americanbully.jpg" alt="Papeles">
                <h3>Registro de Colores y Razas No Tradicionales</h3>
            </div>

            <div class="face back">
                <h3>Registro de Colores y Razas No Tradicionales</h3>
                <p>Eleva el estatus de tus caninos "exóticos" con el Kennel Club Digital respaldado por el prestigioso Kennel Club Argentino. <br><br>
                Garantizamos experiencia y conocimiento para el registro de tu perro. <br><br> Consulta ahora para personalizar el registro de tu raza y color con nosotros.
                </p>
                <div class="link_face back">
                    <a href="/contacto">Contáctanos</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face front">
                <img src="../assets/criaderocard.jpg" alt="Papeles">
                <h3>¿Cómo tener un Criadero Oficial?</h3>
            </div>

            <div class="face back">
                <h3>¿Cómo tener un Criadero Oficial?</h3>
                <p>¡Da vida a tu criadero con el Kennel Club Digital! <br><br> Obtén el tuyo de manera sencilla y online. <br>
                    Contáctanos por WhatsApp <br> +549 11 2838 2378 <br><br>
                    Estamos comprometidos en guiarte en cada paso del proceso. <br><br>
                    ¡Haz realidad tu criadero con nosotros!
                </p>
                <div class="link_face back">
                    <a href="https://api.whatsapp.com/send?phone=5491128382378&text=%F0%9F%98%8A%20Hola,%20vengo%20de%20la%20página%20web.%20Quiero%20más%20información%20por%20favor." target="_blank">Ir a WhatsApp</a>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>


</script>


<style lang="scss" scoped>
a{
    text-decoration: none;
}
.card_container{
    display: flex;
}
.card {
    position: relative;
    width: 400px; 
    height: 400px;  
    margin: 30px;  
}

.card .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden;
    transition: .5s;
    box-shadow: 0 5px 10px #000;
} 

.card .front {
    transform: perspective(600px) rotateY('0deg');
    /* box-shadow: 0 5px 10px #000; */
}

.card .front img {
    position: absolute; 
    width: 100%;
    height: 100%;
    object-fit:cover;    
}

.card .front h3 {
    width: 100%;
    font-size: 15px;
    height: 45px;
    line-height: 45px;
    color: #fff;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    text-align: center;
}

.card .back {
    transform: perspective(600px) rotateY(180deg);
    background-color: #F4EDE4;
    padding: 15px;
    color: #001A49;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    /* box-shadow: 0 5px 10px #000; */
}

.card .back h3 {
    font-size: 1.6rem;
    margin-top: 20px;
    margin-bottom: 5px;
    letter-spacing: 2px;
}

.card .back p {
    letter-spacing: 1px;
    margin-top: 0;
    font-size: 1rem;
    letter-spacing: 1.3px;
}

.card .back .link_face {
    border-top: solid 1px #fff;
    height: 20px;
    // line-height: 50px;
}

.card .back .link_face a {
    color: #000;
    font-size: 20px;
}

.card:hover .front {
    transform: perspective(600px) rotateY(180deg);
}

.card:hover .back {
    transform: perspective(600px) rotateY(360deg);
}

</style>