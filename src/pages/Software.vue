<template> 
     <section class="first_container">
        <div class="first_content">
            <div class="left_grid">
                <h2 class="title">Kennel Club Digital</h2>
                <h3 class="subtitle">Registro Internacional Canino</h3>
                <p class="paragraph">Registro genealógico internacional y online que realizó un acuerdo con el Kennel Club Argentino. <br>
                Reconocemos todas las razas y variedad de colores.
                </p>

                <button class="btn">Contáctanos</button>
            </div>
            
            <img class="img" src="../assets/software-computer.png">
            
            <div class="wave" style="overflow: hidden;" ><svg viewBox="0 0 500 151" preserveAspectRatio="none"><path d="M-0.00,49.85 C150.00,149.60 318.50,-1.46 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z" style="stroke: none; fill: #FBF9F1;"></path></svg></div>

        </div> 
     </section> 

    <div style="background-color: #FBF9F1;">
        <section class="second_container">
                <img src="../assets/section1.png">
                <div class="content">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Sunt similique nisi voluptate perferendis illum quaerat.</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus dolore minima ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur amet amet consectetur<br>dolorum vitae autem veniam necessitatibus dicta. Ipsam Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
        </section>
    

        <section class="third_container">
                <div class="third_content">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Sunt similique nisi voluptate perferendis illum quaerat.</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus dolore minima ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur amet amet consectetur<br>dolorum vitae autem veniam necessitatibus dicta. Ipsam Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <img src="../assets/section2.png">
        </section> 

        <section class="fourth_container">
            <img src="../assets/section3.png">
            <div class="fourth_content">
                <div class="content_items">
                    <img src="../assets/check.svg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, similique.</p>
                </div>
                <div class="content_items">
                    <img src="../assets/check.svg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, similique.</p>
                </div>
                <div class="content_items">
                    <img src="../assets/check.svg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, similique.</p>
                </div>
                <div class="content_items">
                    <img src="../assets/check.svg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, similique.</p>
                </div>
                <div class="content_items">
                    <img src="../assets/check.svg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, similique.</p>
                </div>
            </div>
        </section>

        <footer style="background-color: #FBF9F1; height: 40px;">
            <h3 class="footer_copyright">Copyright &copy; 2024 Kennel Club Digital</h3>
        </footer>
    </div>
     
  
</template>

<script setup>


</script>

<style scoped lang="scss">

*{
    margin: 0;
    padding: 0;    
}

// First Section
.first_container {
    width: 100%;
    height: 680px;
    padding-top: 60px;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 1%, rgba(225,159,65,0.2721289199273459) 25%, rgba(36,55,87,0.23011211320465685) 62%); 
}
.wave{
    position: absolute;
    bottom: 0;
    width: 100%;
}
.first_content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center; 
}
.left_grid{
    margin: 0 0 50px 110px;
    display: flex;
    flex-direction: column;
}
.title{
    color: #243757;
    font-size: 70px;
    font-family: 'ElenSans-Bold';
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}
.subtitle{
    color: #e19f41;
    font-size: 50px;
    font-family: 'ElenSans-Bold';
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.paragraph{
    color: #243757;
    font-size: 25px;
    margin-top: 20px;
    z-index: 1;
    line-height: 35px;
    // font-family: 'ElenSans-Medium';
}
.btn{
    font-family: 'ElenSans-SemiLight';
    z-index: 1;
    cursor: pointer;
    margin: 50px auto;
    height: 5vh;
    width: 30%;
    font-size: 25px;
    align-self: center;
    border: 1px solid rgb(0, 0, 0, 0.5);
    border-radius: 50px;
    transition: background-color 0.2s ease-in-out, font-weight 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    background-color: transparent; 
    box-shadow: none; 
}
.btn:hover{
    background-color: #e19f41;
    font-weight: bold;
    color: #fff;
    border: none;
    box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.324);
}
.img{
    z-index: 1;
    justify-self: end;
    width: 950px;
    height: 600px;
    margin: 90px 30px 90px 30px;
    filter: drop-shadow(6px 8px 18px rgba(0, 0, 0, 0.5));
}

// Second Section
.second_container{
    display: flex;
    flex-direction: row;
    height: auto;
    margin: 120px;
    margin-bottom: 0;
}
.second_container img {
    align-self: flex-start; 
    height: 600px;
    margin: 60px 0 60px 0;
}
.content{
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 90px;
}
.content h3{
    font-family: 'ElenSans-Bold';
    font-size: 40px;
    margin-bottom: 10px;
}
.content p{
    font-size: 26px;
    line-height: 32px;
}

// Third Section
.third_container{
    display: flex;
    flex-direction: row;
    height: auto;
    margin: 120px;
    margin-top: 0;
}
.third_container img {
    align-self: flex-start; 
    height: 600px;
    margin: 60px 0 60px 0;
}
.third_content{
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 90px;
}
.third_content h3{
    font-family: 'ElenSans-Bold';
    font-size: 40px;
    margin-bottom: 10px;
}
.third_content p{
    font-size: 26px;
    line-height: 32px;
}

// Fourth Section
.fourth_container{
    display: flex;
    flex-direction: row;
    height: auto;
    margin: 120px;
    margin-top: 0;
}
.fourth_container img {
    align-self: flex-start; 
    height: 600px;
}
.fourth_content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.content_items{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}
.content_items img{
    width: 50px;
    height: 50px;
    margin-right: 15px;
   
}
.content_items p{
    font-size: 22px; 
}

// Footer
.footer_copyright{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>