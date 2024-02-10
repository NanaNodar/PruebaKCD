<template>
    <NavBar/>
    <SocialMedia/>
    <router-view/>
    <FooterNav/>
</template>


<script setup>
import SocialMedia from '@/components/SocialMedia.vue';
import NavBar from '../components/NavBar.vue';
import { RouterView } from 'vue-router';
import FooterNav from '@/components/FooterNav.vue';
</script>


<style>

</style>
