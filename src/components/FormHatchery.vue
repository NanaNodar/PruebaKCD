<template>
    <div class="form_container">
        <form @submit.prevent="formularioCriadero" method="post" action="/formulario-criadero1"  novalidate>
            <h3><router-link to="/lista-de-precios" target="_blank">— LISTA DE PRECIOS —</router-link><br><br>
                Deberá consignar 3 nombres de criadero, dando prioridad al preferido, por si estuviese tomado. En caso de estar tomado el 1°, se tomará el 2° y así hasta el 3°.</h3>
                <label for="fecha">FECHA DE HOY (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.fecha" type="date" id="fecha" name="fecha" required>
                <div v-if="errorsCriadero1.fecha" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.fecha">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="nombre-criadero1">NOMBRE DEL CRIADERO / OPCION PRIORIDAD 1° (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.nombre_criadero1" type="text" id="nombre-criadero1" name="nombre-criadero1" required>
                <div v-if="errorsCriadero1.nombre_criadero1 && errorsCriadero1.nombre_criadero1.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.nombre_criadero1">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="nombre-criadero2">NOMBRE DEL CRIADERO / OPCION PRIORIDAD 2° (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.nombre_criadero2" type="text" id="nombre-criadero2" name="nombre-criadero2" required>
                <div v-if="errorsCriadero1.nombre_criadero2 && errorsCriadero1.nombre_criadero2.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.nombre_criadero2">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="nombre-criadero3">NOMBRE DEL CRIADERO / OPCION PRIORIDAD 3° (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.nombre_criadero3" type="text" id="nombre-criadero3" name="nombre-criadero3" required>
                <div v-if="errorsCriadero1.nombre_criadero3 && errorsCriadero1.nombre_criadero3.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.nombre_criadero3">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="raza">RAZA/S A CRIAR (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.raza" type="text" id="raza" name="raza" required>
                <div v-if="errorsCriadero1.raza && errorsCriadero1.raza.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.raza">{{ error }}</li>
                  </ul>
                </div>
        
            <br><br>
            <h2>DATOS DEL TITULAR</h2>
                <label for="nombre">NOMBRE DEL TITULAR (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.nombre" type="text" id="nombre" name="nombre" required> 
                <div v-if="errorsCriadero1.nombre && errorsCriadero1.nombre.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.nombre">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="apellido">APELLIDO DEL TITULAR (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.apellido" type="text" id="apellido" name="apellido" required> 
                <div v-if="errorsCriadero1.apellido && errorsCriadero1.apellido.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.apellido">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="documento">NÚMERO DE DOCUMENTO (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.documento" type="text" id="documento" name="documento" required>
                <div v-if="errorsCriadero1.documento" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.documento">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="telefono">TELÉFONO:</label>
                <input v-model="telefono" type="tel" id="telefono" name="telefono" >
                    <br>
                <label for="celular">TELÉFONO CELULAR (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.celular" type="tel" id="celular" name="celular" required>
                <div v-if="errorsCriadero1.celular && errorsCriadero1.celular.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.celular">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="email">EMAIL (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.email" type="email" id="email" name="email" @input="validarEmail" required>
                <div v-if="errorsCriadero1.email && errorsCriadero1.email.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.email">{{ error }}</li>
                  </ul>
                </div>
                
                <label class="archivo" for="archivo">Adjuntar el documento del Titular del Criadero:</label>
                <input type="file" id="archivo" name="archivo" accept=".pdf, .doc, .docx" required>
                <br>
        
            <br><br>
            <h2>DATOS DEL 2° TITULAR</h2> 
            <label for="mostrarForm">¿HAY 2° TITULAR?</label>
            <select v-model="formDataFormularioCriadero1.mostrarForm" id="mostrarForm" name="mostrarForm" required>
                <option value=1>Sí</option>
                <option value=0>No</option>
            </select>

            <div v-if="formDataFormularioCriadero1.mostrarForm === '1'" class="if_container">
              <label for="opciones">TIPO DE FIRMA (REQUERIDO)</label>
              <select v-model="formDataFormularioCriadero1.section" id="opciones" name="opciones" required>
                  <option value="" disabled selected>--Por favor, elige una opción--</option>
                  <option value="opcion2">Indistinta</option>
                  <option value="opcion3">Conjunta</option>
              </select>
              <div v-if="errorsCriadero1.section" class="error-message">
                <ul>
                  <li v-for="error in errorsCriadero1.section">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="nombre-titular2">NOMBRE DEL 2° TITULAR (REQUERIDO):</label>
              <input v-model="formDataFormularioCriadero1.nombre_titular2" type="text" id="nombre-titular2" name="nombre" required> 
              <div v-if="errorsCriadero1.nombre_titular2 && errorsCriadero1.nombre_titular2.length > 0" class="error-message">
                <ul>
                  <li v-for="error in errorsCriadero1.nombre_titular2">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="apellido-titular2">APELLIDO DEL 2° TITULAR (REQUERIDO):</label>
              <input v-model="formDataFormularioCriadero1.apellido_titular2" type="text" id="apellido-titular2" name="apellido" required> 
              <div v-if="errorsCriadero1.apellido_titular2 && errorsCriadero1.apellido_titular2.length > 0" class="error-message">
                <ul>
                  <li v-for="error in errorsCriadero1.apellido_titular2">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="documento-titular2">NÚMERO DE DOCUMENTO 2° TITULAR (REQUERIDO):</label>
              <input v-model="formDataFormularioCriadero1.documento_titular2" type="text" id="documento-titular2" name="documento" required>
              <div v-if="errorsCriadero1.documento_titular2 && errorsCriadero1.documento_titular2.length > 0" class="error-message">
                <ul>
                  <li v-for="error in errorsCriadero1.documento_titular2">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="telefono-titular2">TELÉFONO:</label>
              <input v-model="telefonotitular2" type="tel" id="telefono-titular2" name="telefono">
                  <br>
              <label for="celular-titular2">TELÉFONO CELULAR (REQUERIDO):</label>
              <input v-model="formDataFormularioCriadero1.celular_titular2" type="tel" id="celular-titular2" name="celular" required>
              <div v-if="errorsCriadero1.celular_titular2 && errorsCriadero1.celular_titular2.length > 0" class="error-message">
                <ul>
                  <li v-for="error in errorsCriadero1.celular_titular2">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="email-titular2">EMAIL (REQUERIDO):</label>
              <input v-model="formDataFormularioCriadero1.email_titular2" type="email" id="email-titular2" name="email" @input="validarEmail" required>
              <div v-if="errorsCriadero1.email_titular2 && errorsCriadero1.email_titular2.length > 0" class="error-message">
                <ul>
                  <li v-for="error in errorsCriadero1.email_titular2">{{ error }}</li>
                </ul>
              </div>
              
              <label class="archivo-titular2" for="archivotitular2">Adjuntar el documento del 2° Titular del Criadero:</label>
              <input type="file" id="archivo" name="archivo" accept=".pdf, .doc, .docx" required>
              <br>
            </div>
            <br><br>

            <h2>DATOS DEL LUGAR FÍSICO DEL CRIADERO</h2> 
                <label for="domicilio">DOMICILIO (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.domicilio" type="text" id="domicilio" name="domicilio" required> 
                <div v-if="errorsCriadero1.domicilio && errorsCriadero1.domicilio.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.domicilio">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="codigo-postal">CODIGO POSTAL (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.codigo_postal" type="text" id="codigo-postal" name="codigo-postal" required> 
                <div v-if="errorsCriadero1.codigo_postal && errorsCriadero1.codigo_postal.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.codigo_postal">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="ciudad">CIUDAD (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.ciudad" type="text" id="ciudad" name="ciudad" required>
                <div v-if="errorsCriadero1.ciudad && errorsCriadero1.ciudad.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.ciudad">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="provincia">PROVINCIA (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.provincia" type="text" id="provincia" name="provincia" required>
                <div v-if="errorsCriadero1.provincia && errorsCriadero1.provincia.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.provincia">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="pais">PAÍS (REQUERIDO):</label>
                <input v-model="formDataFormularioCriadero1.pais" type="text" id="pais" name="pais" required>
                <div v-if="errorsCriadero1.pais && errorsCriadero1.pais.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errorsCriadero1.pais">{{ error }}</li>
                  </ul>
                </div>
                    <br>

                 <input type="submit" class="submit" value="ENVIAR">
        </form>
    </div>
</template>


<script>
import axios from 'axios';
export default{
  data(){
    return{
      formDataFormularioCriadero1: {},
      errorsCriadero1: {},
      errorMessageCriadero1: null,
    };
  },

  methods: {

  formularioCriadero (){
    
    // Envío del formulario
    axios.post('http://localhost:3000/formulario-criadero', this.formDataFormularioCriadero1)
      .then(response => {
        console.log(response);
        this.errorMessageCriadero1 = null;
      }) 
      .catch(error => {
        if (error.response) {
        // La solicitud fue hecha y el servidor respondió con un código de estado diferente de 2xx

        if (error.response.status === 422 ) {
          console.log('Errores de validación:', error.response.data.errors);
          this.errorsCriadero1 = {}; // Reinicia los mensajes de error

          // Asigna los mensajes de error a cada campo correspondiente
          error.response.data.errors.forEach(err => {
            // Verifica si ya hay un array de errores para el campo actual
            if (!this.errorsCriadero1[err.path]) {
              this.errorsCriadero1[err.path] = [];
            }
            // Agrega el nuevo mensaje de error al array de errores
            this.errorsCriadero1[err.path].push(err.msg);
          });
        } else {
          // Otros errores del servidor
          console.log('Error del servidor:', error.response.data);
        }
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        console.log('No se recibió respuesta del servidor');
      } else {
        // Otros errores
        console.log('Error en la solicitud:', error.message);
      }
    })
  },

  },
};
</script>


<style lang="scss" scoped>
.form_container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form_container form, .if_container  {
  width: 60%; 
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
}
.if_container{
  width: 100%;
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
.error-message {
  color: red;
  margin-top: 5px;
}
</style>