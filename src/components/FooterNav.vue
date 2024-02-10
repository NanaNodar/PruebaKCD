<template>
   <footer class="footer">
        <section class="footer_container">
            <iframe class="footer_iframe" :src="iframeSrc" width="400" height="300"></iframe>
            <div class="footer_img">
                <a href="/"><img class="footer_img_item" id="kcd" src="../assets/kcd-logo.png" alt="Kennel Club Digital"></a>
                <a href="https://kennelclubargentino.org.ar/" target="_blank"><img class="footer_img_item" src="../assets/kca.png" alt="Kennel Club Argentino"></a>
                <a href="https://www.asociacioncanofila.es/" target="_blank"><img class="footer_img_item" id="ace" src="../assets/ace.png" alt="Asociacion Canofila Espanola"></a>
            </div>
        </section>

        <div class="footer_copy">
            <h3 class="footer_copyright">Copyright &copy; 2024 Kennel Club Digital</h3>
        </div>
    </footer>
</template>


<script setup>
import { ref } from 'vue';
const iframeSrc = ref('https://www.instagram.com/kennelclubdigital/embed/');
</script>


<style lang="scss" scoped>
a{
    cursor: pointer;
}
.footer {
    background-color: #243757;
    height: 100%;
    padding: 90px;
    padding-top: 20px;
    padding-bottom: 15px;
}
.footer_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
}
.footer_iframe{
    margin: 10px;
    margin-left: 0;
}
.footer_img{
    display: flex;
    align-items: center;
}
.footer_img_item{
    width: 200px;
    height: 200px;
    margin: 10px;
}
#kcd{
    width: 180px;
    height: 220px;
}
.footer_copy {
    text-align: center;
    color: #fff;
}

.footer_copyright {
    font-weight: 300;
}
</style>