<template>
    <div class="form_container">
        <form ref="formRef" @submit.prevent="enviarFormulario" action="http://localhost:3000/enviarFormulario" method="post" novalidate>
            <label for="fecha">FECHA DE HOY (REQUERIDO):</label>
            <input type="date" id="fecha" name="fecha" required>
            <br><br>
            <h2>DATOS DE LA HEMBRA</h2>
                <label for="nombre-hembra">NOMBRE COMPLETO DE LA HEMBRA, <i>como figura en el papel</i> - (REQUERIDO):</label>
                <input v-model="nombre_hembra" type="text" id="nombre-hembra" name="nombre-hembra" required>
                    <br>
                <label for="registro-hembra">NÚMERO DE REGISTRO DE LA HEMBRA (REQUERIDO):</label>
                <input v-model="registro_hembra" type="number" id="registro-hembra" name="registro-hembra" required>
                    <br>
                <label for="dueno-hembra">NOMBRE DUEÑO/A DE LA HEMBRA (REQUERIDO):</label>
                <input v-model="dueno_hembra" type="text" id="dueno-hembra" name="dueno-hembra" required>
                    <br>
        </form>

        <form ref="formRef" @submit.prevent="enviarFormulario" action="http://localhost:3000/enviarFormulario" method="post" novalidate>
            <br><br>
            <h2>DATOS DEL MACHO</h2>
                <label for="fecha">FECHA DEL SERVICIO (REQUERIDO):</label>
                <input type="date" id="fecha" name="fecha" required>
                    <br>
                <label for="raza">RAZA (REQUERIDO):</label>
                <input v-model="raza" type="text" id="raza" name="raza" required> 
                    <br>
                <label for="variedad-raza">VARIEDAD DE RAZA - <i>si no hubiere una variedad, completar con "Sin Variedad" </i>- (REQUERIDO):</label>
                <input v-model="variedad_raza" type="text" id="variedad-raza" name="variedad-raza" required> 
                    <br>
                <label for="color">COLOR (REQUERIDO):</label>
                <input v-model="color" type="text" id="color" name="color" required>
                    <br>
                <label for="nombre-macho">NOMBRE COMPLETO DEL MACHO, <i>como figura en el papel</i> - (REQUERIDO):</label>
                <input v-model="nombre_macho" type="text" id="nombre-macho" name="nombre-macho" required>
                    <br>
                <label for="registro-macho">NÚMERO DE REGISTRO DEL MACHO (REQUERIDO):</label>
                <input v-model="registro_macho" type="number" id="registro-macho" name="registro-macho" required>
                    <br>
                <label for="nombre">NOMBRE DEL TITULAR (REQUERIDO):</label>
                <input v-model="nombre" type="text" id="nombre" name="nombre" required>
                    <br>
                <label for="apellido">APELLIDO DEL TITULAR (REQUERIDO):</label>
                <input v-model="apellido" type="text" id="apellido" name="apellido" required> 
                    <br>
                    <label for="documento">NÚMERO DE DOCUMENTO (REQUERIDO):</label>
                <input v-model="documento" type="text" id="documento" name="documento" required>
                    <br>
                <label for="celular">TELÉFONO CELULAR (REQUERIDO):</label>
                <input v-model="celular" type="tel" id="celular" name="celular" required>
                    <br>
                <label for="email">EMAIL (REQUERIDO):</label>
                <input v-model="email" type="email" id="email" name="email" @input="validarEmail" required>
                <br>
                <label for="domicilio">DOMICILIO (REQUERIDO):</label>
                <input v-model="domicilio" type="text" id="domicilio" name="domicilio" required> 
                    <br>
                <label for="codigo-postal">CODIGO POSTAL (REQUERIDO):</label>
                <input v-model="codigo_postal" type="number" id="codigo-postal" name="codigo-postal" required> 
                    <br>
                <label for="ciudad">CIUDAD (REQUERIDO):</label>
                <input v-model="ciudad" type="text" id="ciudad" name="ciudad" required>
                    <br>
                <label for="provincia">PROVINCIA (REQUERIDO):</label>
                <input v-model="provincia" type="text" id="provincia" name="provincia" required>
                    <br>
                <label for="pais">PAÍS (REQUERIDO):</label>
                <input v-model="pais" type="text" id="pais" name="pais" required>

                <label class="archivo" for="archivo">Adjuntar frente del Registro Macho (REQUERIDO):</label>
                <input type="file" id="frente-registro-macho" name="archivo" required>
                <br>
                <label class="archivo" for="archivo">Adjuntar dorso del Registro Macho (REQUERIDO):</label>
                <input type="file" id="dorso-registro-macho" name="archivo" required>
                <br>
                <label class="archivo" for="archivo">Adjuntar frente del Documento de Identidad del Titular (REQUERIDO):</label>
                <input type="file" id="frente-documento-titular" name="archivo" required>
                <br>
                <label class="archivo" for="archivo">Adjuntar dorso del Documento de Identidad del Titular (REQUERIDO)</label>
                <input type="file" id="dorso-documento-titular" name="archivo" required>
                <br>
        </form>

        <input class="submit" type="submit" value="ENVIAR">
    </div>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';

const formRef = ref(null);
const nombre = ref('');
const apellido = ref('');
const organizacion = ref('');
const telefono = ref('');
const email = ref('');
const ciudad = ref('');
const provincia = ref('');
const pais = ref('');
const asunto = ref('');
const mensaje = ref('');

const advertencias = ref('');

const nombreError = ref('');

const enviarFormulario = async () => {
    const formData = new FormData();
    formData.append('nombre', nombre.value)
    formData.append('apellido', apellido.value)
    formData.append('telefono', telefono.value)
    formData.append('email', email.value)
    formData.append('ciudad', ciudad.value)
    formData.append('provincia', provincia.value)
    formData.append('pais', pais.value)
    formData.append('asunto', asunto.value)
    formData.append('mensaje', mensaje.value)

    try {
        const response = await axios.post('http://localhost:3000/enviarFormulario', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        const data = response.data;

        // Verificar la respuesta del servidor y realizar acciones adicionales
        if (response.status === 200) {
            console.log('Formulario enviado correctamente:', data.mensaje);
            // Puedes redirigir a otra página, mostrar un mensaje al usuario, etc.
            nombre.value = '';
            apellido.value = '';
            organizacion.value = '';
            telefono.value = '';
            email.value = '';
            ciudad.value = '';
            provincia.value = '';
            pais.value = '';
            asunto.value = '';
            mensaje.value = '';
            archivo.value = '';
        } else if (response.status === 400 && data.errores && data.errores.length > 0) {
            if (data.errores.includes("El campo nombre es requerido.")) {
                nombreError.value = "El campo nombre es requerido.";
            }
            advertencias.value = data.errores.join('\n');
        }
    } catch (error) {
        console.error('Error:', error.response.data);
        advertencias.value = 'Ha ocurrido un error al enviar el formulario. Por favor, intenta de nuevo.';
    }
};
</script>


<style lang="scss" scoped>
.form_container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form_container form {
  width: 60%; 
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
}

label{
    margin: 10px;
    margin-left: 0;
    font-weight: bold;
    color: rgb(70, 69, 69);
}
input, select{
    height: 4vh;
}

.archivo{
    margin-top: 40px;
}

fieldset{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}

.submit{
    cursor: pointer;
    align-self: center;
    margin: 30px;
    font-size: 1.3rem;
    font-weight: bold;
    height: 7vh;
    width: 15%;
    background-color: #E19F41;
    color: #fff;
    border-radius: 5px;
}

.submit:hover{
    background-color: #915f1a;
}
</style>