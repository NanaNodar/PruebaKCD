<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <div class="social">
        <ul>
            <li><a href="https://www.facebook.com/KennelClubDigital/" target="_blank" class="icon-facebook"><img src="../assets/facebook.svg" alt="Facebook" ></a></li>
            <li><a href="https://www.instagram.com/kennelclubdigital/" target="_blank" class="icon-instagram"><img src="../assets/instagram.svg" alt="Instagram" ></a></li>
            <li><a href="https://api.whatsapp.com/send?phone=5491128382378&text=%F0%9F%98%8A%20Hola,%20vengo%20de%20la%20página%20web.%20Quiero%20más%20información%20por%20favor." target="_blank" class="icon-whatsapp"><img src="../assets/whatsapp.svg" alt="Whatsapp"></a></li>
            <li><a href="mailto:info@kennelclubdigital.com" target="_blank" class="icon-mail"><img src="../assets/mail.svg" alt="Mail"></a></li>
        </ul>
    </div>
</template>


<script setup>

</script>


<style lang="scss" scoped>

.social {
	position: fixed;
	left: -40px; 
	top: 290px; 
	z-index: 2000;
    animation: slideFromRight 2s forwards;
    opacity: 0;
}

@keyframes slideFromRight {
  0% {
    opacity: 0;
    transform: translateX(-100%); 
  }
  100% {
    opacity: 1;
    transform: translateX(0); 
  }
}

.social ul {
    list-style: none;
}

.social ul li a {
    display: inline-block;
    color:#fff;
    background: #000;
    padding: 10px 15px;
    margin-bottom: 1px;
    text-decoration: none;
    -webkit-transition:all 500ms ease;
    -o-transition:all 500ms ease;
    transition:all 500ms ease;
}

.social ul li .icon-facebook {background:#3b5998;}
.social ul li .icon-instagram {background: #E1306C;}
.social ul li .icon-whatsapp {background:#25D366;}
.social ul li .icon-mail {background: #666666;}

.social ul li a:hover {
    background: #000;
    padding: 15px 25px; 
}
</style>