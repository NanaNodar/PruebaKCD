<template>
    <div class="races_container">
        <article
        class="races_padding"
        v-for="(races, index) in races"
        :key="index" 
        >
            <div class="races_answer">
                <h3 class="races_title" @click="toggleAnswer(index)">
                    {{ races.title }}
                    <span class="races_arrow" :class="{ 'races_arrow--rotate': races.show }">
                        <img src="../assets/downarrow.svg" class="races_img" />
                    </span>
                </h3>
                <div v-if="races.show" class="races_show_image" >
                    <img v-for="(race, index) in races.images" :key="index" :src="race" style="height: 200px; width: 200px;"/>
                </div>
            </div>
        </article>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const races = ref([
  {
    title: "Atigrado",
    images: [
    require('../assets/atigrado1.webp'),
    require('../assets/atigrado2.webp'),
    require('../assets/atigrado3.webp'),
    require('../assets/atigrado4.webp'),
  ],
    show: false,
  },
  {
    title: "Arlequín",
    images: [
    require('@/assets/arlequin1.webp'),
    require('@/assets/arlequin2.webp'),
    ],
    show: false,
  },
  {
    title: "Carbonado",
    images: [
     require('@/assets/carbonado1.webp'),
     require('@/assets/carbonado2.webp'),
     require('@/assets/carbonado3.webp'),
    ],
    show: false,
  },
  {
    title: "Bicolor",
    images: [ require('@/assets/bicolor1.webp')],
    show: false,
  },
  {
    title: "Dálmata",
    images: [
     require('@/assets/dalmata1.webp'),
     require('@/assets/dalmata2.webp'),
     require('@/assets/dalmata3.webp')
    ],
    show: false,
  },
  {
    title: "Flower (Exclusivo Shar Pei)",
    images: [
     require('@/assets/flower1.webp'),
     require('@/assets/flower2.webp'),
     require('@/assets/flower3.webp')
    ], 
    show: false,
  },
  {
    title: "Marcas Irlandesas",
    images:[
     require('@/assets/marcas-irlandesas1.webp'),
     require('@/assets/marcas-irlandesas2.webp')
    ],
    show: false,
  },
  {
    title: "Merle",
    images:[ require('@/assets/merle1.webp'),
     require('@/assets/merle2.webp'),
     require('@/assets/merle3.webp'),
     require('@/assets/merle4.webp')
    ],
    show: false,
  },
  {
    title: "Piebald",
    images: [require('@/assets/piebald1.webp'),
     require('@/assets/piebald2.webp'),
     require('@/assets/piebald3.webp'),
     require('@/assets/piebald4.webp'),
     require('@/assets/piebald5.webp')
    ],
    show: false,
  },
  {
    title: "Pirata",
    images: [
     require('@/assets/pirata1.webp'),
     require('@/assets/pirata2.webp')
    ],
    show: false,
  },
  {
    title: "Point",
    images: [require('@/assets/point1.webp'),
     require('@/assets/point2.webp'),
     require('@/assets/point3.webp')
    ],
    show: false,
  },
  {
    title: "Silla de Montar",
    images: [
     require('@/assets/silla-de-montar1.webp'),
     require('@/assets/silla-de-montar2.webp')
    ],
    show: false,
  },
  {
    title: "Sólidos",
    images: [
     require('@/assets/solido1.webp'),
     require('@/assets/solido2.webp'),
     require('@/assets/solido3.webp')
    ],
    show: false,
  },
  {
    title: "Tricolor",
    images: [
     require('@/assets/tricolor1.webp'),
     require('@/assets/tricolor2.webp'),
     require('@/assets/tricolor3.webp')
    ],
    show: false,
  },
  {
    title: "Ticket o Ruano",
     images: [
     require('@/assets/ticket1.webp'),
     require('@/assets/ticket2.webp')
    ],
    show: false,
  },
  {
    title: "Urajiro",
    images: [
     require('@/assets/urajiro1.webp'),
     require('@/assets/urajiro2.webp')
    ],
    show: false,
  },
]);


const toggleAnswer = (index) => {
  races.value[index].show = !races.value[index].show;
};
</script>

<style lang="scss" scoped>
.races {
    text-align: center;
}

.races_container {
    display: grid;
    gap: 2em;
    padding: 90px;
    padding-top: 0;
    padding-bottom: 50px;
}

.races_padding {
    // padding: 0;
    transition: padding .3s;
    border: 1px solid #010d23;
    border-radius: 6px;
    animation: moverDesdeIzquierda 1s ease-in-out;
}

@keyframes moverDesdeIzquierda {
  from {
    transform: translateX(50%);
  }
  to {
    transform: translateX(0);
  }
}

.races_padding--add {
    padding-bottom: 30px;
}

.races_answer {
    padding: 0 30px 0;
    margin-bottom: 10px;
    overflow: hidden;
}

.races_title {
    text-align: left;
    display: flex;
    font-size: 20px;
    padding: 10px 0 10px;
    margin-bottom: 5px;
    cursor: pointer;
    justify-content: space-between;
}

.races_arrow {
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

.races_arrow--rotate {
    transform: rotate(180deg);
}

.races_img {
    display: block;
    height: 30px;
}

</style>