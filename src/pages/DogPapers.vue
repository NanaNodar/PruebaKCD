<template>
    <section class="papers">
        <div class="papers_container">
            <h2 class="papers_content title">¿Cómo hacerle los papeles a un perro?</h2>
            <h3 class="papers_content subtitle">Explora toda la información necesaria sobre el proceso para obtener los papeles de un perro.</h3>

            <p class="papers_content paragraph">Antes de sumergirse en los detalles, es esencial tener en cuenta información clave: <b>El Kennel Club Digital ha realizado un acuerdo con el Kennel Club Argentino</b>, que durante más de 90 años ha mantenido el Registro Nacional de Perro de Raza de la Argentina.

                <img src="../assets/dog-playing.jpg" alt="Perro Jugando" style="display: flex; width: 90%; border-radius: 5px; margin: 40px auto; ">

                <h3>¿CÓMO REALIZAR EL PROCESO DE DOCUMENTACIÓN PARA UN CANINO?</h3>
                El procedimiento está al alcance de todos los dueños de caninos, siendo eficiente, sencillo y principalmente en línea durante gran parte de su ejecución. Para comprender completamente el proceso, detallamos los pasos: <br><br>

                <b>Proceso de documentación</b><br>
                <ul>
                    <li>Completa el <router-link to="/formulario-registros-iniciales">formulario en línea</router-link> para solicitar la documentación inicial de tu perro.</li><br>

                    <li><b>Implantación del microchip</b></li>
                        <ul>
                            <li style="margin-bottom: 10px;">El procedimiento implica la inserción subcutánea de un microchip internacionalmente aprobado (ISO).</li>
                            <li style="margin-bottom: 10px;">Es un procedimiento poco intrusivo, sin necesidad de anestesia, similar a la aplicación de una vacuna.  Tu perro puede retomar su rutina normal sin necesidad de cuidados adicionales.</li>
                            <li style="margin-bottom: 10px;">Es importante señalar que el microchip es seguro, ya que no emite radiación.</li>
                        </ul><br>

                    <li><b>Entrega del documento</b></li>
                        <ul>
                            <li>Con la colocación del microchip, se finaliza el proceso y se recibe el documento de identificación y propiedad de tu mascota en formato PDF, en línea con nuestro compromiso con el medio ambiente.</li>
                        </ul><br>

                    <li><b>¿Dónde realizar la inscripción?</b></li>
                        <ul>
                            <li>El procedimiento se realiza de manera fácil y conveniente en <router-link to="/formulario-registros-iniciales">en línea.</router-link></li>
                        </ul><br>

                    <li><b>¿Por qué documentar a la mascota?</b></li>
                        <ul>
                            <li style="margin-bottom: 10px;">Como principal beneficio, obtienes el título de propiedad de tu mascota, protegiéndola contra el robo.</li>
                            <li>Si te dedicas a la crianza, valorizas tus cachorros pudiendo ofrecer el documento de los cachorros a los nuevos propietarios.</li>
                        </ul><br>
                </ul>

                <h3>PREGUNTAS FRECUENTES</h3>
                <ul>
                    <li><b>¿Cómo proceder si mi perro ya cuenta con un microchip?</b></li>
                        <ul>
                            <li>Si tu mascota ya tiene un microchip, presenta el certificado del veterinario que lo instaló.</li>
                        </ul><br>
                        
                    <li><b>¿Y si mi perro cuenta con documentación de un registro privado?</b></li>
                        <ul>
                            <li>En ese caso, verificamos los documentos existentes y procedemos a reempadronarlo, emitiendo un nuevo registro exactamente igual pero del Kennel Club Digital.</li>
                        </ul>
                </ul>
                <br><br>

            Ponte en contacto con nosotros para obtener tu Documento Oficial, ¡Estamos aquí para asistirte! <br><br><br>

            <span style="display: grid; width: 60%; margin: auto;text-align: center; color: rgb(0, 0, 0, 0.7); background: #f6eee7; border-radius: 40px; padding: 2rem 1rem 2rem 1rem;"><i>¿Eres un apasionado/a de los perros?<br>
            Si deseas aprender más sobre la crianza responsable y el bienestar de los caninos <br> ¡síguenos en nuestras redes para ampliar tus conocimientos! <br> ¡Descubre más contenido relacionado con estos leales compañeros!</i></span>
            </p>
        </div>
    </section>
</template>


<script setup>
import { onMounted, onUnmounted } from 'vue';
import { canonicalService } from '../canonicalService';

onMounted(() => {
  canonicalService.addLink('https://kennelclubargentino.org.ar/como-hacer-los-papeles-a-un-perro/');
});
onUnmounted(() => {
  canonicalService.removeLink('https://kennelclubargentino.org.ar/como-hacer-los-papeles-a-un-perro/');
});

</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
}
.papers{
    display: grid;
    place-items: center;
    height: auto;
    background-color: #243757;
    background-image: url(../assets/dogprint.svg);
    background-repeat: repeat;
}
.papers_container{
    background-color: #fff;
    border-radius: 8px;
    width: 80%;
    padding: 20px 90px 40px 90px ;
    margin-top: 160px;
    margin-bottom: 40px;
    animation: slideFromRight 2s forwards;
    opacity: 0;
}

@keyframes slideFromRight {
  0% {
    opacity: 0;
    transform: translateX(100%); 
  }
  100% {
    opacity: 1;
    transform: translateX(0); 
  }
}

.title{
    text-align: center;
    color: #243757;
    font-size: 3.3rem;
    margin: 20px 0 10px 0;
}
.subtitle{
    text-align: center;
    color: grey;
    font-size: 1.7rem;
    margin-bottom: 40px;
  }

.paragraph{
    text-align: left;
    color: grey;
    font-size: 1.5rem;
    margin: 20px 0 20px 0;
    line-height: 1.4;
}
</style>