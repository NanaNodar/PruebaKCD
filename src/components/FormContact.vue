<template>
    <div class="form_container">
        <form @submit.prevent="submitForm" method="post" action="/formulario" novalidate enctype="multipart/form-data">
                <label for="nombre">NOMBRE (REQUERIDO):</label>
                <input v-model="formData.nombre" type="text" id="nombre" name="nombre">
                <div v-if="errors.nombre && errors.nombre.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errors.nombre">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="apellido">APELLIDO (REQUERIDO):</label>
                <input v-model="formData.apellido" type="text" id="apellido" name="apellido"> 
                <div v-if="errors.apellido && errors.apellido.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errors.apellido">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="organizacion">ORGANIZACION:</label>
                <input type="text" id="organizacion" name="organizacion">
                    <br>
                <label for="telefono">TELEFONO (REQUERIDO):</label>
                <input v-model="formData.telefono" type="tel" id="telefono" name="telefono">
                <div v-if="errors.telefono && errors.telefono.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errors.telefono">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="email">EMAIL (REQUERIDO):</label>
                <input v-model="formData.email" type="email" id="email" name="email">
                <div v-if="errors.email && errors.email.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errors.email">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="ciudad">CIUDAD / LOCALIDAD (REQUERIDO):</label>
                <input v-model="formData.ciudad" type="text" id="ciudad" name="ciudad">
                <div v-if="errors.ciudad && errors.ciudad.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errors.ciudad">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="provincia">PROVINCIA (REQUERIDO):</label>
                <input v-model="formData.provincia" type="text" id="provincia" name="provincia">
                <div v-if="errors.provincia && errors.provincia.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errors.provincia">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="pais">PAIS (REQUERIDO):</label>
                <input v-model="formData.pais" type="text" id="pais" name="pais">
                <div v-if="errors.pais && errors.pais.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errors.pais">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="asunto">ASUNTO (REQUERIDO):</label>
                <input v-model="formData.asunto" type="text" id="asunto" name="asunto"> 
                <div v-if="errors.asunto && errors.asunto.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errors.asunto">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label for="mensaje">TU MENSAJE (REQUERIDO):</label>
                <textarea class="mensaje" v-model="formData.mensaje" type="text" id="mensaje" name="mensaje"></textarea>
                <div v-if="errors.mensaje && errors.mensaje.length > 0" class="error-message">
                  <ul>
                    <li v-for="error in errors.mensaje">{{ error }}</li>
                  </ul>
                </div>
                    <br>
                <label class="archivo" for="archivo">Adjunta un archivo (.pdf, .doc, .docx):</label>
                <input type="file" id="archivo" name="archivo" >
                <br>
                
                <input class="submit" type="submit" value="ENVIAR">
        </form>
    </div>
</template>


<script>
import axios from 'axios';
export default{
  data(){
    return{
      formData: {},
      errors: {},
      errorMessage: null,
    };
  },
  methods: {
    submitForm (){
      
      // Envío del formulario
      axios.post('http://localhost:3000/formulario', this.formData)
        .then(response => {
          console.log(response);
          this.errorMessage = null;
        }) 
        .catch(error => {
          if (error.response) {
          // La solicitud fue hecha y el servidor respondió con un código de estado diferente de 2xx

          if (error.response.status === 422) {
            // Errores de validación
            console.log('Errores de validación:', error.response.data.errors);
            this.errors = {}; // Reinicia los mensajes de error

            // Asigna los mensajes de error a cada campo correspondiente
            error.response.data.errors.forEach(err => {
              // Verifica si ya hay un array de errores para el campo actual
              if (!this.errors[err.path]) {
                this.errors[err.path] = [];
              }

              // Agrega el nuevo mensaje de error al array de errores
              this.errors[err.path].push(err.msg);
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
    }
  },
}
</script>


<style lang="scss" scoped>
.form_container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.form_container form {
  width: 60%; 
  display: flex;
  flex-direction: column;
}

label{
    margin: 10px;
    margin-left: 0;
    font-weight: bold;
    color: rgb(70, 69, 69);
}
input{
    height: 4vh;
}

.archivo{
    margin-top: 40px;
}
.mensaje{
    height: 13vh;
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