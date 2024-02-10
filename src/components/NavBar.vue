<template>
   <div id="app">
        <nav id="nav" :class="{ 'scrolled': isScrolled }">
            <a href="/">
            <img v-if="isScrolled" class="nav_logo" src="../assets/kcd-lateral.png" alt="Logo KCD">
            <p v-if="isScrolled" class="nav_p">Kennel Club Digital <br> <span style="color: #fff;">Registro Internacional</span></p></a>
            <div class="dropdown-router">
                <router-link to="/">Inicio</router-link>
            </div>
            <div class="dropdown">
                Quienes somos
                <div class="dropdown-content">
                    <router-link to="/historia-de-los-registros-genealogicos">Historia de los Registros Genealógicos</router-link>
                    <router-link to="/usos-y-costumbres-en-materia-de-crianza">Usos y Costumbres en Materia de Crianza</router-link>
                    <router-link to="/legalidad-juridica" class="modif">Legalidad Jurídica en la Propiedad de Caninos de Raza
                        <div class="submenu">
                            <router-link to="/certificado-por-KCD">¿Qué significa que tu perro sea certificado por el KCD?</router-link>
                        </div>
                    </router-link>
                    <router-link to="/asesoramiento-frente-a-reclamos">Asesoramiento Legal Frente a Reclamos</router-link>
                    <router-link to="/que-es-un-registro-inicial" class="modif">¿Qué es un Registro Inicial?
                        <div class="submenu">
                            <router-link to="/como-hacerle-los-papeles-a-un-perro">¿Cómo hacer los papeles a un perro?</router-link>
                            <router-link to="/por-que-lo-hacemos">¿Por qué hacemos Registros Iniciales?</router-link>
                            <router-link to="/significado-pedigree">Significado de Pedigree</router-link>
                            <router-link to="/como-tener-criadero-oficial">¿Cómo tener un Criadero Oficial de Perros?</router-link>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="dropdown-router">
                <router-link to="/lista-de-precios">Lista de precios</router-link>
            </div>
            <div class="dropdown">
                Trámites
                <div class="dropdown-content">
                    <router-link to="/formularios-pdf">Formularios PDF</router-link>
                    <router-link to="/inscripcion-criadero">Inscripción Criadero</router-link>
                    <router-link to="/inscripcion-lechigada">Formulario Único / Inscripción de Camada</router-link>
                    <router-link to="/denuncia-de-servicio-dueno-del-macho">Denuncia de Servicio Dueño del Macho</router-link>
                    <router-link to="/transferencias-online">Transferencia Online</router-link>
                    <router-link to="/formulario-registros-iniciales">Formulario para Registro Iniciales</router-link>
                    <router-link to="/denuncia-de-venta-de-canino">Denuncia de Venta de Canino</router-link>
                </div>
            </div>
            <div class="dropdown">
                Razas
                <div class="dropdown-content">
                    <router-link to="/grupos-caninos">Grupos Caninos</router-link>
                    <router-link to="/patron-de-los-mantos-de-los-perros">Patrón de los Mantos de los Perros</router-link>
                </div>
            </div>
            <div class="dropdown-router">
                <router-link to="/reglamentos-kcd">Reglamentos</router-link>
            </div>
            <div class="dropdown-router">
                <router-link to="/contacto">Contacto</router-link>
            </div>
        </nav>
   </div>
</template>


<script setup>
    import { RouterLink } from 'vue-router';
    import { ref, onMounted, onBeforeUnmount } from 'vue';

// Configurando el NavScroll
    const isScrolled = ref(false);

    const handleScroll = () => {
        isScrolled.value = window.scrollY > 0;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>


<style scoped lang="scss">
    .nav_logo{
        position: absolute;
        width: 50px;
        height: 50px;
        left: 30px; 
        top: 2.5px;
    }

    .nav_p{
        position: absolute;
        left: 90px; 
        top: 9px;
        margin: 0;
        font-family: 'ElenSans-Bold';
        font-weight: bold;
        color: #e19f41;
    }

    #app{
        font-family: "Raleway", Helvetica, Arial, sans-serif;
        color: #000;
    }

    *{
        box-sizing: border-box;
    }

    #nav{
        position: fixed;
        width: 100%;
        padding: 20px;
        display: flex;
        top: 100px;
        justify-content: flex-end;
        // overflow: hidden;
        transition: background-color 0.3s  ease-in-out;
        z-index: 2;
    }
    #nav.scrolled{
        background-color: #243757;
        top: 0;
        transition: top 0.3s ease-in;
        z-index: 2;
    }
    .dropdown {
        position: relative;
        display: inline-block;
        color: #fff;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        text-decoration: none;
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .dropdown-router a{
        position: relative;
        display: inline-block;
        color: #fff;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        text-decoration: none;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .dropdown-content::before {
        content: "";
        position: absolute;
        top: -10px;
        left: 15%;
        margin-left: -10px;
        border-width: 0 10px 10px 10px;
        border-style: solid;
        border-color: transparent transparent #fff transparent;
    }
    .dropdown-content {
        // display: none;
        position: absolute;
        background-color: #fff;
        border-radius: 5px;
        width: 200px;
        height: auto;
        box-sizing: border-box;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;
        top: 200%;
        left: 0;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.7s ease, visibility 1s ease;
    }

    .dropdown-content a{
        display: block;
        text-align: left;
        padding: 15px;
        // margin: 0;
        font-size: 0.9rem;
        color: #243757;
        text-decoration: none;
        // text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    }

    .dropdown:hover .dropdown-content{
        display: block;
        opacity: 1;
        visibility: visible;
        transition-delay: 1.5;
    }

    .dropdown-content a:hover {
        background-color: #24375765;
        color: #000;
    }

    .submenu{
        position: relative;
        min-width: 350px;
        width: fit-content;
        margin: 0;
        padding: 0;
        top: -50px;
        left: 110%;
        height: 70px;
        background-color: #fff;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        visibility: hidden; 
        transition: opacity 1s ease-in, visibility 0s ease;
    }
    
    .modif{
        position: relative;
        height: 80px;
    }

    .modif:hover .submenu {
        opacity: 1; 
        visibility: visible; 
        height: fit-content;
    }
</style>