<template>
    <section class="prices">
        <div class="prices_container">
            <h2 class="prices_content title">Lista de precios del Kennel Club Digital</h2>
            <h4 class="prices_content subtitle">Aranceles desde 20 de Noviembre 2023</h4>

            <p class="paragraph"><b>Inscripción Socio:</b> $3000 / <b>Requisitos:</b> 1 año con registro de criadero / <b>Regularidad:</b> 4 lechigadas al año
            <br><br>
            <b>Cuota Mensual:</b> $1200
            <br><br>
            <b>Transferencia, tarifa única p/socios y no socios:</b> $6750
            <br><br>
            <b>Transferencia Internacional:</b> U$S 50 (dólares)
            <br><br>
            <b>Adicional Cambio de Nombre:</b> $800 ( El nombre está compuesto por el «nombre propio» y el nombre del criadero. Solo se puede cambiar el «nombre propio»)
            <br><br>
            <b>Registro Inicial, tarifa única p/socios y no socios:</b> $8500 en KCD
            <br><br>
            <b>Duplicados:</b> $1450
            <br><br>
            <b>Reempadronamientos:</b> $2000
            <br><br>
            <b>Promoción Reempadronamiento:</b> + de 5 ejemplares (con registro de criadero obligatorio) $1800 cada uno
            <br>+10 ejemplares (con registro de criadero obligatorio) $1600 cada uno
            <br><br>
            <b>Inscripción de Criadero Internacional:</b> $3550
            </p>

            <table class="prices_table">
                <thead>
                    <th>Cantidad de Cachorros</th>
                    <th>No Socios</th>
                    <th>Socios</th>
                    <th>Socios Honorarios</th>
                </thead>
                
                <tbody>
                    <tr>
                        <td>1 cachorro</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                    </tr>
                    <tr>
                        <td>2 cachorros</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                    </tr>
                    <tr>
                        <td>3 cachorros</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                    </tr>
                    <tr>
                        <td>4 cachorros</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                    </tr>
                    <tr>
                        <td>5 cachorros</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                    </tr>
                    <tr>
                        <td>6 cachorros</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                    </tr>
                    <tr>
                        <td>7 cachorros</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                    </tr>
                    <tr>
                        <td>8 cachorros</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                    </tr>
                    <tr>
                        <td>9 cachorros</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                    </tr>
                    <tr>
                        <td>10 cachorros</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                        <td>$1234,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>


<script setup>


</script>


<style lang="scss" scoped>

.prices{
    width: 100%;
    top: 0;
    z-index: -1;
    background-color: #243757;
    background-image: url(../assets/dogprint.svg);
    background-repeat: repeat;
    display: grid;
    padding-top: 180px;
    place-items: center;
    overflow: hidden;
    ;
}

@keyframes slideInFromTop {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.prices_container{
    background-color: #fff;
    border-radius: 8px;
    width: 80%;
    text-align: center;
    padding: 20px 90px 40px 90px ;
    margin-bottom: 40px;
    animation: slideInFromTop 2s ease;
}

.title{
    text-align: center;
    color: #243757;
    font-size: 3.5rem;
    margin: 20px 0 20px 0;
}
.subtitle{
    text-align: center;
    color: grey;
    font-size: 1.5rem;
    margin: 20px 0 20px 0;
}
.paragraph{
    text-align: left;
    font-size: 1.2rem;
    margin: 50px;
}

.prices_table{
    width: 80%; 
    height: 70vh;
    margin: auto;
}
.prices_table th {
    background-color: #E19F41;
    border: 1px solid #ddd;
    color: #fff;
    padding: 8px;
    text-align: center;
    font-size: 1.2rem;
}
.prices_table td{
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    font-size: 1.2rem;
}
</style>