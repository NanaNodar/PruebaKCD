<template>
    <div id="app">
      <div class="tab-buttons" >
        <button @click="changeTab(1)" class="buttons" :class="{ register_register: activeTab === 1, register_software: activeTab === 2 }" id="tab-left">Registro</button>
        <button @click="changeTab(2)" class="buttons" :class="{ software_register: activeTab === 1, software_software: activeTab === 2 }" id="tab-right">Software</button>
      </div>
      <div class="tab-content">
          <Register v-if="activeTab === 1"/>
          <Software v-if="activeTab === 2"/>
      </div>
    </div>
  </template>
  
<script setup>
  import { ref } from 'vue';
  import Register from './pages/Register.vue';
  import Software from './pages/Software.vue';

  const activeTab = ref(1);
  
  const changeTab = (tab) => {
    activeTab.value = tab;
  };
</script>

<style lang="scss" scoped>

  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');
    *{
      font-family: 'Lato', sans-serif;
    }
  .tab-buttons{
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .buttons{
      width: 50%;
      height: 8vh;
      font-size: 2rem;
      cursor: pointer;
      border: none;
    }

//  Buttons en vista REGISTRO
  .register_register{
    background-color: transparent;
    color: #fff;
  }
  .software_register{
    background-color: #03223f;
    color: #fff;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%);
  }

  // Buttons en vista SOFTWARE
  .register_software{
    background-color: #03223f;
    color: #fff;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  }

  .software_software{
    background-color: transparent;
    color: #243757;
    font-weight: bold;
  }
  
</style>