<template>
    <div class="form_container">
        <form ref="formRef" @submit.prevent="enviarFormulario" action="http://localhost:3000/enviarFormulario" method="post" novalidate>
            <label for="fecha">FECHA DE HOY (REQUERIDO):</label>
            <input type="date" id="fecha" name="fecha" required>
            <br><br>
                <label for="nombre-ejemplar">NOMBRE DEL EJEMPLAR (REQUERIDO):</label>
                <input v-model="nombre_ejemplar" type="text" id="nombre-ejemplar" name="nombre-ejemplar" required>
                    <br>
                <label for="fecha">FECHA DE NACIMIENTO (REQUERIDO):</label>
                <input type="date" id="fecha-nacimiento" name="fecha" required>
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
                <label for="pelo">TIPO DE PELO (REQUERIDO):</label>
                <input v-model="pelo" type="text" id="pelo" name="pelo" required>
                    <br>
                <label for="opciones">SEXO (REQUERIDO)</label>
                <select id="sexo" name="opciones" required>
                    <option value="opcion1">--Por favor, elige una opción--</option>
                    <option value="opcion2">Macho</option>
                    <option value="opcion3">Hembra</option>
                </select>
                <br>
                <label for="opciones">¿CÓMO OBTUVO EL PERRO? (REQUERIDO)</label>
                <select id="como-obtuvo-perro" name="opciones" required>
                    <option value="opcion1">--Por favor, elige una opción--</option>
                    <option value="opcion2">Compra</option>
                    <option value="opcion3">Regalo</option>
                </select>
                    <br>
        </form>

        <form ref="formRef" @submit.prevent="enviarFormulario" action="http://localhost:3000/enviarFormulario" method="post" novalidate>
            <h2>DATOS DEL PROPIETARIO</h2>
                <label for="nombre">NOMBRE DEL PROPIETARIO (REQUERIDO):</label>
                <input v-model="nombre" type="text" id="nombre" name="nombre" required>
                    <br>
                <label for="apellido">APELLIDO DEL PROPIETARIO (REQUERIDO):</label>
                <input v-model="apellido" type="text" id="apellido" name="apellido" required> 
                    <br>
                <label for="documento">NÚMERO DE DOCUMENTO (REQUERIDO):</label>
                <input v-model="documento" type="text" id="documento" name="documento" required>
                    <br>
                <label for="telefono">TELÉFONO (REQUERIDO):</label>
                <input v-model="telefono" type="tel" id="telefono" name="telefono" required>
                    <br>
                <label for="email">EMAIL (REQUERIDO):</label>
                <input v-model="email" type="text" id="email" name="email" @input="validarEmail" required>
                    <br>
                <label for="domicilio">DOMICILIO (REQUERIDO):</label>
                <input v-model="domicilio" type="text" id="domicilio" name="domicilio" required>
                    <br>
                <label for="codigo-postal">CÓDIGO POSTAL (REQUERIDO):</label>
                <input v-model="codigo_postal" type="number" id="codigo-postal" name="codigo-postal" required>
                    <br>
                <label for="ciudad">CIUDAD / LOCALIDAD (REQUERIDO):</label>
                <input v-model="ciudad" type="text" id="ciudad" name="ciudad" required>
                    <br>
                <label for="provincia">PROVINCIA (REQUERIDO):</label>
                <input v-model="provincia" type="text" id="provincia" name="provincia" required>
                    <br>
                <label for="pais">PAIS (REQUERIDO):</label>
                <input v-model="pais" type="text" id="pais" name="pais" required>
                    <br>
                
                <label class="archivo" for="archivo">Adjuntar frente de Documento de Identidad (REQUERIDO):</label>
                <input type="file" id="foto-documento" name="archivo" required>
                <br>
                <label class="archivo" for="archivo">Adjuntar Foto del Perro (REQUERIDO):</label>
                <input type="file" id="foto-perro" name="archivo" required>
                <br>
                <label class="archivo" for="archivo">Adjuntar Foto del Perro:</label>
                <input type="file" id="foto-perro2" name="archivo">
                <br>
                <label class="archivo" for="archivo">Adjuntar Foto del Perro:</label>
                <input type="file" id="foto-perro3" name="archivo">
                <br>
        </form>

        <form ref="formRef" @submit.prevent="enviarFormulario" action="http://localhost:3000/enviarFormulario" method="post" novalidate>
            <h2>DATOS DEL SEGUNDO PROPIETARIO (si lo hubiere)</h2>
                <label for="nombre">NOMBRE DEL 2° PROPIETARIO (REQUERIDO):</label>
                <input v-model="nombre" type="text" id="nombre" name="nombre" required>
                    <br>
                <label for="apellido">APELLIDO DEL 2° PROPIETARIO (REQUERIDO):</label>
                <input v-model="apellido" type="text" id="apellido" name="apellido" required> 
                    <br>
                <label for="documento">NÚMERO DE DOCUMENTO (REQUERIDO):</label>
                <input v-model="documento" type="text" id="documento" name="documento" required>
                    <br>
                <label for="telefono">TELÉFONO (REQUERIDO):</label>
                <input v-model="telefono" type="tel" id="telefono" name="telefono" required>
                    <br>
                <label for="email">EMAIL (REQUERIDO):</label>
                <input v-model="email" type="text" id="email" name="email" @input="validarEmail" required>
                    <br>
                <label for="opciones">TIPO DE FIRMA (si es más de un propietario)</label>
                <select id="firma" name="opciones">
                    <option value="opcion1">--Por favor, elige una opción--</option>
                    <option value="opcion2">Indistinta</option>
                    <option value="opcion3">Conjunta</option>
                </select>
                    <br>
                
                <label class="archivo" for="archivo">Adjuntar frente de Documento de Identidad del 2° Propietario (REQUERIDO):</label>
                <input type="file" id="foto-documento2" name="archivo" required>
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