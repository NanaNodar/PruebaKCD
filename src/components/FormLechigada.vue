<template>
    <div class="form_container">
      <form  @submit.prevent="formularioLechigada" action="http://localhost:3000/formulario-lechigada" method="post" novalidate>
          <h3><router-link to="/lista-de-precios" target="_blank">— LISTA DE PRECIOS —</router-link><br><br>
              Si tienes dudas sobre el Patrón (dibujo del manto) puedes consultarlos  haciendo <router-link to="/patron-de-los-mantos-de-los-perros" target="_blank">click aquí</router-link>.</h3>
              <label for="fecha">FECHA DE HOY (REQUERIDO):</label>
              <input v-model="formData.fecha" type="date" id="fecha" name="fecha" required>
              <div v-if="errors['formData.fecha'] && errors['formData.fecha'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.fecha']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="nombre-criadero">NOMBRE DEL CRIADERO (REQUERIDO):</label>
              <input v-model="formData.nombre_criadero" type="text" id="nombre-criadero1" name="nombre-criadero1" required>
              <div v-if="errors['formData.nombre_criadero'] && errors['formData.nombre_criadero'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.nombre_criadero']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="numero-criadero">NÚMERO DE CRIADERO (REQUERIDO):</label>
              <input v-model="formData.numero_criadero" type="number" id="numero-criadero" name="numero-criadero" required>
              <div v-if="errors['formData.numero_criadero'] && errors['formData.numero_criadero'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.numero_criadero']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="nombre">NOMBRE DEL TITULAR (REQUERIDO):</label>
              <input v-model="formData.nombre" type="text" id="nombre" name="nombre" required> 
              <div v-if="errors['formData.nombre'] && errors['formData.nombre'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.nombre']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="apellido">APELLIDO DEL TITULAR (REQUERIDO):</label>
              <input v-model="formData.apellido" type="text" id="apellido" name="apellido" required> 
              <div v-if="errors['formData.apellido'] && errors['formData.apellido'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.apellido']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="documento">NÚMERO DE DOCUMENTO (REQUERIDO):</label>
              <input v-model="formData.documento" type="text" id="documento" name="documento" required>
              <div v-if="errors['formData.documento'] && errors['formData.documento'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.documento']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="telefono">TELÉFONO:</label>
              <input v-model="telefono" type="tel" id="telefono" name="telefono">
                  <br>
              <label for="celular">TELÉFONO CELULAR (REQUERIDO):</label>
              <input v-model="formData.celular" type="tel" id="celular" name="celular" required>
              <div v-if="errors['formData.celular'] && errors['formData.celular'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.celular']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="email">EMAIL (REQUERIDO):</label>
              <input v-model="formData.email" type="email" id="email" name="email" @input="validarEmail" required>
              <div v-if="errors['formData.email'] && errors['formData.email'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.email']">{{ error }}</li>
                </ul>
              </div>
              <br>
              <label for="domicilio">DOMICILIO (REQUERIDO):</label>
              <input v-model="formData.domicilio" type="text" id="domicilio" name="domicilio" required> 
              <div v-if="errors['formData.domicilio'] && errors['formData.domicilio'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.domicilio']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="codigo-postal">CODIGO POSTAL (REQUERIDO):</label>
              <input v-model="formData.codigo_postal" type="number" id="codigo-postal" name="codigo-postal" required> 
              <div v-if="errors['formData.codigo_postal'] && errors['formData.codigo_postal'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.codigo_postal']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="ciudad">CIUDAD (REQUERIDO):</label>
              <input v-model="formData.ciudad" type="text" id="ciudad" name="ciudad" required>
              <div v-if="errors['formData.ciudad'] && errors['formData.ciudad'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.ciudad']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="provincia">PROVINCIA (REQUERIDO):</label>
              <input v-model="formData.provincia" type="text" id="provincia" name="provincia" required>
              <div v-if="errors['formData.provincia'] && errors['formData.provincia'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.provincia']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="pais">PAÍS (REQUERIDO):</label>
              <input v-model="formData.pais" type="text" id="pais" name="pais" required>
              <div v-if="errors['formData.pais'] && errors['formData.pais'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.pais']">{{ error }}</li>
                </ul>
              </div>
      
          <br><br>
          <h2>DATOS DE LA HEMBRA</h2>
              <label for="raza-hembra">RAZA (REQUERIDO):</label>
              <input v-model="formData.raza_hembra" type="text" id="raza-hembra" name="raza-hembra" required> 
              <div v-if="errors['formData.raza_hembra'] && errors['formData.raza_hembra'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.raza_hembra']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="variedad-raza-hembra">VARIEDAD DE RAZA - <i>si no hubiere una variedad, completar con "Sin Variedad" </i>- (REQUERIDO):</label>
              <input v-model="formData.variedad_raza_hembra" type="text" id="variedad-raza-hembra" name="variedad-raza-hembra" required> 
              <div v-if="errors['formData.variedad_raza_hembra'] && errors['formData.variedad_raza_hembra'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.variedad_raza_hembra']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="nombre-hembra">NOMBRE COMPLETO DE LA HEMBRA, <i>como figura en el papel</i> -(REQUERIDO):</label>
              <input v-model="formData.nombre_hembra" type="text" id="nombre-hembra" name="nombre-hembra" required>
              <div v-if="errors['formData.nombre_hembra'] && errors['formData.nombre_hembra'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.nombre_hembra']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="color-hembra">COLOR (REQUERIDO):</label>
              <input v-model="formData.color_hembra" type="text" id="color-hembra" name="color-hembra" required>
              <div v-if="errors['formData.color_hembra'] && errors['formData.color_hembra'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.color_hembra']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="patron-hembra">PATRÓN (REQUERIDO):</label>
              <input v-model="formData.patron_hembra" type="text" id="patron-hembra" name="patron-hembra" required>
              <div v-if="errors['formData.patron_hembra'] && errors['formData.patron_hembra'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.patron_hembra']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="pelo-hembra">TIPO DE PELO (REQUERIDO):</label>
              <input v-model="formData.pelo_hembra" type="text" id="pelo-hembra" name="pelo-hembra" required>
              <div v-if="errors['formData.pelo_hembra'] && errors['formData.pelo_hembra'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.pelo_hembra']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="color-ojos-hembra">COLOR DE OJOS (REQUERIDO)</label>
              <select v-model="formData.color_ojos_hembra" id="color-ojos-hembra" name="color_ojos_hembra" required>
                  <option value="" disabled selected>--Por favor, elige una opción--</option>
                  <option value="opcion2">Marrón</option>
                  <option value="opcion3">Celestes</option>
                  <option value="opcion4">Sarco (un ojo de cada color)</option>
              </select>
              <div v-if="errors['formData.color_ojos_hembra'] && errors['formData.color_ojos_hembra'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.color_ojos_hembra']">{{ error }}</li>
                </ul>
              </div>
                  <br>
      
          <br><br>
          <h2>DATOS DEL MACHO</h2>
              <label for="nombre-macho-macho">NOMBRE COMPLETO DEL MACHO, <i>como figura en el papel</i> -(REQUERIDO):</label>
              <input v-model="formData.nombre_macho" type="text" id="nombre-macho" name="nombre-macho" required>
              <div v-if="errors['formData.nombre_macho'] && errors['formData.nombre_macho'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.nombre_macho']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="variedad-raza-macho">VARIEDAD DE RAZA - <i>si no hubiere una variedad, completar con "Sin Variedad" </i>- (REQUERIDO):</label>
              <input v-model="formData.variedad_raza_macho" type="text" id="variedad-raza-macho" name="variedad-raza-macho" required> 
              <div v-if="errors['formData.variedad_raza_macho'] && errors['formData.variedad_raza_macho'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.variedad_raza_macho']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="color-macho">COLOR (REQUERIDO):</label>
              <input v-model="formData.color_macho" type="text" id="color-macho" name="color-macho" required>
              <div v-if="errors['formData.color_macho'] && errors['formData.color_macho'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.color_macho']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="patron-macho">PATRÓN (REQUERIDO):</label>
              <input v-model="formData.patron_macho" type="text" id="patron-macho" name="patron-macho" required>
              <div v-if="errors['formData.patron_macho'] && errors['formData.patron_macho'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.patron_macho']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="pelo-macho">TIPO DE PELO (REQUERIDO):</label>
              <input v-model="formData.pelo_macho" type="text" id="pelo-macho" name="pelo-macho" required>
              <div v-if="errors['formData.pelo_macho'] && errors['formData.pelo_macho'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.pelo_macho']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="color_ojos_macho">COLOR DE OJOS (REQUERIDO)</label>
              <select v-model="formData.color_ojos_macho" id="color_ojos_macho" name="color_ojos_macho" required>
                  <option value="" disabled selected>--Por favor, elige una opción--</option>
                  <option value="opcion2">Marrón</option>
                  <option value="opcion3">Celestes</option>
                  <option value="opcion4">Sarco (un ojo de cada color)</option>
              </select>
              <div v-if="errors['formData.color_ojos_macho'] && errors['formData.color_ojos_macho'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.color_ojos_macho']">{{ error }}</li>
                </ul>
              </div>
                  <br>
      
          <br><br>
          <h2>DATOS DEL DUEÑO DEL MACHO</h2>
              <label for="nombre_titular">NOMBRE DEL TITULAR DEL MACHO (REQUERIDO):</label>
              <input v-model="formData.nombre_titular" type="text" id="nombre_titular" name="nombre_titular" required>
              <div v-if="errors['formData.nombre_titular'] && errors['formData.nombre_titular'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.nombre_titular']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="apellido_titular">APELLIDO DEL TITULAR DEL MACHO (REQUERIDO):</label>
              <input v-model="formData.apellido_titular" type="text" id="apellido_titular" name="apellido_titular" required> 
              <div v-if="errors['formData.apellido_titular'] && errors['formData.apellido_titular'].length > 0" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.apellido_titular']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="fecha-servicio">FECHA DEL SERVICIO (REQUERIDO):</label>
              <input v-model="formData.fecha_servicio" type="date" id="fecha-servicio" name="fecha-servicio" required>
              <div v-if="errors['formData.fecha_servicio'] " class="error-message">
                <ul>
                  <li v-for="error in errors['formData.fecha_servicio']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="fecha-nacimiento">FECHA DE NACIMIENTO DE LOS CACHORROS (REQUERIDO):</label>
              <input v-model="formData.fecha_nacimiento" type="date" id="fecha-nacimiento" name="fecha-nacimiento" required>
              <div v-if="errors['formData.fecha_nacimiento']" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.fecha_nacimiento']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="cantidad-machos">CANTIDAD DE MACHOS (REQUERIDO):</label>
              <input v-model="formData.cantidad_machos" type="number" id="cantidad-machos" name="cantidad-machos" required>
              <div v-if="errors['formData.cantidad_machos']" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.cantidad_machos']">{{ error }}</li>
                </ul>
              </div>
                  <br>
              <label for="cantidad-hembras">CANTIDAD DE HEMBRAS (REQUERIDO):</label>
              <input v-model="formData.cantidad_hembras" type="number" id="cantidad-hembras" name="cantidad-hembras" required>
              <div v-if="errors['formData.cantidad_hembras']" class="error-message">
                <ul>
                  <li v-for="error in errors['formData.cantidad_hembras']">{{ error }}</li>
                </ul>
              </div>

              <label for="cantidad-perros">CANTIDAD DE PERROS (REQUERIDO):</label>
              <select v-model="cantidadPerros" @change="actualizarCachorros" required>
                  <option value="" disabled selected>--Por favor, elige una opción--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
              </select>

              <fieldset v-for="(cachorro, index) in cachorros" :key="index">
                  <h3>NOMBRE DEL {{ index + 1 }}° CACHORRO</h3>
                  <label :for="'nombre_cachorro_' + index">NOMBRE (REQUERIDO):</label>
                  <input v-model="cachorro['nombre_cachorro_'+index]" :id="'nombre_cachorro_' + index" :name="'nombre_cachorro_' + index" required>
                  <div v-if="errors['cachorros['+index+'].nombre_cachorro_' + index]" class="error-message">
                    <ul>
                      <li v-for="error in errors['cachorros['+index+'].nombre_cachorro_' + index]">{{ error }}</li>
                    </ul>
                  </div>
                  
                  <label :for="'sexo_cachorro_' + index">SEXO (REQUERIDO)</label>
                  <select v-model="cachorro['sexo_cachorro_'+index]" :id="'sexo_cachorro_' + index" :name="'sexo_cachorro_' + index" required>
                      <option value="" disabled selected>--Por favor, elige una opción--</option>
                      <option value="Macho">Macho</option>
                      <option value="Hembra">Hembra</option>
                  </select>
                  <div v-if="errors['cachorros['+index+'].sexo_cachorro_' + index]" class="error-message">
                    <ul>
                      <li v-for="error in errors['cachorros['+index+'].sexo_cachorro_' + index]">{{ error }}</li>
                    </ul>
                  </div>

                  <label :for="'color_cachorro_' + index">COLOR (REQUERIDO):</label>
                  <input v-model="cachorro['color_cachorro_'+index]" :id="'color_cachorro_' + index" :name="'color_cachorro_' + index" required>
                  <div v-if="errors['cachorros['+index+'].color_cachorro_' + index]" class="error-message">
                    <ul>
                      <li v-for="error in errors['cachorros['+index+'].color_cachorro_' + index]">{{ error }}</li>
                    </ul>
                  </div>

                  <label :for="'patron_cachorro_' + index">PATRÓN (REQUERIDO):</label>
                  <input v-model="cachorro['patron_cachorro_'+index]" :id="'patron_cachorro_' + index" :name="'patron_cachorro_' + index" required>
                  <div v-if="errors['cachorros['+index+'].patron_cachorro_' + index]" class="error-message">
                    <ul>
                      <li v-for="error in errors['cachorros['+index+'].patron_cachorro_' + index]">{{ error }}</li>
                    </ul>
                  </div>

                  <label :for="'pelo_cachorro_' + index">TIPO DE PELO (REQUERIDO):</label>
                  <input v-model="cachorro['pelo_cachorro_'+index]" :id="'pelo_cachorro_' + index" :name="'pelo_cachorro_' + index" required>
                  <div v-if="errors['cachorros['+index+'].pelo_cachorro_' + index]" class="error-message">
                    <ul>
                      <li v-for="error in errors['cachorros['+index+'].pelo_cachorro_' + index]">{{ error }}</li>
                    </ul>
                  </div>

                  <label :for="'color_ojos_cachorro_' + index">COLOR DE OJOS (REQUERIDO)</label>
                  <select v-model="cachorro['color_ojos_cachorro_'+index]" :id="'color_ojos_cachorro_' + index" :name="'color_ojos_cachorro_' + index" required>
                      <option value="" disabled selected>--Por favor, elige una opción--</option>
                      <option value="Marrón">Marrón</option>
                      <option value="Celestes">Celestes</option>
                      <option value="Sarco">Sarco (un ojo de cada color)</option>
                  </select>
                  <div v-if="errors['cachorros['+index+'].color_ojos_cachorro_' + index]" class="error-message">
                    <ul>
                      <li v-for="error in errors['cachorros['+index+'].color_ojos_cachorro_' + index]">{{ error }}</li>
                    </ul>
                  </div>

                  <label :for="'variedad_raza_cachorro_' + index">VARIEDAD DE RAZA - <i>si no hubiere una variedad, completar con "Sin Variedad"</i> - (REQUERIDO):</label>
                  <input v-model="cachorro['variedad_raza_cachorro_'+index]" :id="'variedad_raza_cachorro_' + index" :name="'variedad_raza_cachorro_' + index" required>
                  <div v-if="errors['cachorros.variedad_raza_cachorro_' + index]" class="error-message">
                    <ul>
                      <li v-for="error in errors['cachorros.variedad_raza_cachorro_' + index]">{{ error }}</li>
                    </ul>
                  </div>

              </fieldset>


              <input class="submit" type="submit" value="ENVIAR">
      </form> 
    </div>
</template>



<script>
import axios from 'axios';
export default {
  data() {
    return {
      formData: {},
      errors: {
        formData: {},
        cachorros: {},
      },
      errorMessage: null,

      cantidadPerros: '',
      cachorros: [],
    };
  },
  methods: {
    formularioLechigada (){
      console.log(this.cachorros);
      // Envío del formulario
      axios.post('http://localhost:3000/formulario-lechigada', {
        cachorros: this.cachorros,
        formData: this.formData,
        cantidadPerros: this.cantidadPerros,
      })
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
    },

    actualizarCachorros() {
      const diferencia = this.cantidadPerros - this.cachorros.length;

      if (diferencia > 0) {
        // Agregar nuevos cachorros
        for (let i = 0; i < diferencia; i++) {
          this.cachorros.push({});
        }
      } else if (diferencia < 0) {
        for (let i = 0; i < -diferencia; i++) {
          this.cachorros.pop();
        }
      }
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
    border-color: #000;
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