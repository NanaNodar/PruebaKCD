<template>
    <div class="questions_container">
        <article
        class="questions_padding"
        v-for="(question, index) in questions"
        :key="index" 
        >
            <div class="questions_answer">
                <h3 class="questions_title" @click="toggleAnswer(index)">
                    {{ question.title }}
                    <span class="questions_arrow" :class="{ 'questions_arrow--rotate': question.show }">
                        <img src="../assets/arrow.svg" class="questions_img" />
                    </span>
                </h3>
                <p class="questions_show" v-show="question.show">
                  <span v-html="question.answer"></span>
                    <a :href="question.link" target="_blank">{{ question.linkText }}</a>
                    {{ question.final }}
                    <a :href="question.link2" target="_blank">{{ question.linkText2 }}</a>
                </p>
            </div>
        </article>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const questions = ref([
  {
    title: "¿Cómo registro mi criadero?",
    answer: "Fácil, ingresando a",
    link:"/inscripcion-criadero",
    linkText:" este link", 
    final:" y completando el formulario. La respuesta te llegará por email.",
    show: false,
  },
  {
    title: "¿Qué pasa si tengo dudas sobre la registración?",
    answer: "Puedes comunicarte vía WhatsApp al",
    link:"https://api.whatsapp.com/send?phone=5491128382378&text=%F0%9F%98%8A%20Hola,%20vengo%20de%20la%20página%20web.%20Quiero%20más%20información%20por%20favor",
    linkText:"+549 11 2838 2378.", 
    final:"Despejaremos cualquier duda o consulta que pueda surgirte.",
    show: false,
  },
  {
    title: "¿Qué países conforman este registro?",
    answer:
      "El registro abarca todos los países de América Latina, con la excepción de Argentina, Brasil y Bolivia, donde tenemos socios.",
    link:"/contacto",
    linkText:" Consulta",
    final:"por tu país correspondiente.",
    show: false,
  },
  {
    title: "¿Puedo fundar un registro en mi país y usar su sistema?",
    answer: "Sí, puedes hacerlo. Te ayudamos en el proceso y te vinculamos con socios de todo el mundo.",
    show: false,
  },
  {
    title: "Quiero realizar eventos en mi país a nombre del Kennel Club Digital",
    answer: "Para realizar eventos usando la marca del Kennel Club Digital debes comunicarte a",
    link:"mailto:info@kennelclubdigital.com",
    linkText:" info@kennelclubdigital.com", 
    show: false,
  },
  {
    title:
      "¿Qué es el Código Unico Canino - CUC?",
    answer:
      "En la constante búsqueda de excelencia y confianza, nos enorgullece presentar una innovación revolucionaria: <b>el Código Único Canino - CUC (marca registrada)<b>.<br>",
    final: "Este código alfanumérico, generado de manera automática y aleatoria, es exclusivo y garantiza la autenticidad de los datos, reafirmando que el perro posee registro.",
    show: false,
  },
  {
    title: "¿Cómo ingreso al sistema del Kennel Club Digital?",
    answer: "Para acceder a",
    link:"https://kcd.kennelclubdigital.com",
    linkText:" kcd.kennelclubdigital.com", 
    final:" primero necesitas iniciar sesión con una cuenta previamente activada. Si aún no has activado tu cuenta, puedes realizar este proceso directamente en el sitio web mencionado. Una vez que la hayas activado, podrás ingresar con tus datos en la página principal para acceder a todas las funciones disponibles.",
    show: false,
  },
]);

const toggleAnswer = (index) => {
  questions.value[index].show = !questions.value[index].show;
};
</script>


<style lang="scss" scoped>
.questions {
    text-align: center;
}

.questions_container {
    display: grid;
    gap: 2em;
    padding: 90px;
    padding-top: 40px;
    padding-bottom: 50px;
}

.questions_padding {
    // padding: 0;
    transition: padding .3s;
    border: 1px solid #010d23;
    border-radius: 6px;
}

.questions_padding--add {
    padding-bottom: 30px;
}

.questions_answer {
    padding: 0 30px 0;
    margin-bottom: 10px;
    overflow: hidden;
}

.questions_title {
    text-align: left;
    display: flex;
    font-size: 20px;
    padding: 10px 0 10px;
    margin-bottom: 5px;
    cursor: pointer;
    justify-content: space-between;
}

.questions_arrow {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    margin-left: 10px;
    transition: transform .3s ;
}

.questions_arrow--rotate {
    transform: rotate(180deg);
}

.questions_img {
    display: block;
}

.questions_show {
    text-align: left;
    font-size: 20px;
    padding-right: 35px;
    transition: height 3s;
    margin-top: 0;
}

a{
  text-decoration: none;
}

a:visited{
  color: rgb(247, 118, 118);
}
</style>