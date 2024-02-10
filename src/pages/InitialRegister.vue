<template>
    <section>
        <section class="registration">
        <div class="registration_container">
            <h2 class="registration_content title">¿Qué es un Registro Inicial?</h2>
            <h4 class="registration_content subtitle">¡Ahora puedes hacerlo online!</h4>
            <p class="registration_content paragraph delay-1" > El Registro Inicial es una práctica que realizan distintos registros genealógicos Oficiales y no Oficiales en todo el mundo (<i>antiguamente se denominaba Pedigree Clase Simple</i>), a los fines de registrar un ejemplar que no fue declarado en el momento de su nacimiento, sea porque el criador decidió no hacerlo, sea porque sus padres no tenían tampoco registro o porque fue encontrado, donado o regalado por un particular no criador. <br>
            De esta manera se registra e identifica a los fines de iniciar su genealogía hacia adelante, restaurándole la posibilidad a su propietario de registrar las futuras camadas. <br><br>
            Esta práctica ha permitido recuperar líneas de sangre perdidas, razas en vías de desaparición, así como realizar hibridaciones con diversos fines.</p>
            <p class="registration_content paragraph delay-2" ><b>¿Cómo realizo el RI?</b> <br><br> El ejemplar deberá ser evaluado por un Juez de Estructura y Belleza, a los fines de determinar que reúne las características de su estándar de raza, y que no presenta defectos propagatorios a su descendencia. De aprobarse la evaluación, se le extenderá la documentación correspondiente a nombre de quien se declare propietario (<i>mayor de 18 años</i>), y se le colocará el microchip identificatorio cuya numeración ira ligada a la documentación.</p>
            <p class="registration_content paragraph delay-3" ><b>¿Qué pasa si mi ejemplar no reúne los requisitos?</b> <br><br> Aquí vale hacer una diferenciación: <br>
            La política de registros del KCD, es documentar y certificar a todos los perros a pedido de su propietario, que sea de raza. <br><br>
            Si el ejemplar no reúne en todo o parte las características de su raza, o si presenta defectos, podrá igualmente registrarse si su propietario lo desea, pero será observado como «NO APTO PARA CRIA y EXPOSICIÓN». <br>
            Es importante aclarar que solo se abonará el arancel del registro, si el propietario decide registrarlo de acuerdo con lo que el Juez observa. Si decide no hacerlo, el trámite quedará sin efecto y no se cobrará arancel alguno. <b>Todo Registro Inicial está sujeto a seguimiento hasta su tercer generación.</b></p>
            <p class="registration_content paragraph delay-4" ><b>¿Cómo demuestro la propiedad sobre el ejemplar?</b> <br><br> El propietario firmará un formulario que quedará en archivo interno del Kennel Club Digital, con carácter de declaración jurada, indicando como obtuvo dicho ejemplar (compra sin papeles, regalo, donación, encontrado, rescatado de un refugio, etc). <br> Si existiera a futuro algún reclamo sobre la propiedad del mismo por parte de otra persona, la misma deberá efectuar la denuncia correspondiente a la justicia, por lo que el declarado propietario deberá enfrentar dichos cargos.</p>
            <p class="registration_content paragraph delay-5" ><b>¿Qué es el microchip identificatorio?</b> <br><br> Es un dispositivo electrónico del tamaño de un grano de arroz, estéril y de colocación subcutánea que almacena un código numérico único a nivel mundial, capaz de ser leído por una lectora especial y que figura en la documentación del ejemplar. Es la más eficaz forma de identificación, usada ya hace tiempo en distintas especies en todo el mundo. <br>Está aprobado por normas ISO, y es válido para la Unión Europea.</p>
            <p class="registration_content paragraph delay-6" ><b>¿Cuánto debo pagar para realizar el RI?</b> <br><br> El valor actual del Registro Inicial completo con microchip incluido se encuentra anunciado en nuestra página en el apartado <a href="/lista-de-precios">lista de precios</a>.<br>
            Al ser un registro sin fines de lucro, el KCD tiene el arancel más bajo del mercado para esta práctica.</p>
            <p class="registration_content paragraph delay-7" ><b>¿Puedo identificar con microchip ejemplares que ya tengan papeles o mis nuevas camadas?</b> <br><br> Sí, en ese caso se agregará a la documentación ya existente o que se realiza en el momento de la declaración de los cachorros. El número del microchip, si fuera documentación del KCD, y si fuera de otra Asociación, se reempadronará al ejemplar.</p><br>
            <p class="registration_content paragraph delay-8"  style="text-align: right; color: #000;"><i>¿Te quedaste con alguna duda?</i> <br> ¡Estamos a tu disposición, <a href="/contacto">consultanos</a>!</p>
        </div>
    </section>
    </section>
</template>


<script setup>
import { onMounted, onUnmounted } from 'vue';
import { canonicalService } from '../canonicalService';

onMounted(() => {
  canonicalService.addLink('https://kennelclubargentino.org.ar/que-es-un-registro-inicial-55/');
});
onUnmounted(() => {
  canonicalService.removeLink('https://kennelclubargentino.org.ar/que-es-un-registro-inicial-55/');
});

</script>


<style lang="scss" scoped>
.registration{
    width: 100%;
    height: 1970px;
    top: 0;
    z-index: -1;
    background-color: #243757;
    background-image: url(../assets/dogprint.svg);
    background-repeat: repeat;
    display: grid;
    place-items: center;
}
.registration_container{
    background-color: #fff;
    border-radius: 8px;
    width: 80%;
    text-align: center;
    padding: 20px 90px 40px 90px ;
    margin-top: 70px;   
}
.title{
    text-align: center;
    color: #243757;
    font-size: 3.5rem;
    margin: 30px 0 20px 0;
}
.subtitle{
    text-align: center;
    color: grey;
    font-size: 1.8rem;
    margin-top: 0;
}
.paragraph{
    text-align: left;
    font-size: 1.2rem;
    color: grey;
    margin-top: 40px;
    line-height: 1.4;
    animation: zoomIn 1s ease forwards;
    opacity: 0;
}

@keyframes zoomIn {
    from {
        transform: scale(0.5);
        opacity: 0; 
    }
    to {
        transform: scale(1); 
        opacity: 1;
    }
}

.delay-1 {
    animation-delay: 0.5s; 
}

.delay-2 {
    animation-delay: 1.5s; 
}

.delay-3 {
    animation-delay: 2.5s; 
}

.delay-4 {
    animation-delay: 3.5s; 
}
.delay-5 {
    animation-delay: 4.5s; 
}
.delay-6 {
    animation-delay: 5.5s; 
}
.delay-7 {
    animation-delay: 6.5s; 
}
.delay-8 {
    animation-delay: 7.5s; 
}
</style>