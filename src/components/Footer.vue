<script setup>

</script>

<template>
    <div class="corpFooter">
        <div class="boutonHaut">
            <a href="#"><img class="photoAvatar" src="../assets/img/gobFeu.jpg" alt="Avatar Gobelin Feu"></a>
            <h2></h2>
        </div>
        <div class="lien"><!-- Liens des reseaux -->
            <a href="https://linkedin.com/"><img src="../assets/img/linkedin.png" alt="Lien vers Linkdin" class="Link-social-Network"></a>
            <a href="https://github.com/Bareman07"><img src="../assets/img/signe-github.png" alt="Lien vers Github" class="Link-social-Network"></a>
        </div>
        <div class="onglet">
            <p>Maj 20/05/2024</p>
        </div>
    </div>
</template>

<style scoped>
    .corpFooter {
        background-color:#9197A1 ;
        border-top:solid #EBEBEB ;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* flex-grow: 1; */
    }

    .boutonHaut{
        display:flex;
        width: 33%;
    }

    .photoAvatar{
        cursor: pointer;
        height: 4em;
        width: 4em;
        border-radius: 20%;
        margin-left: 4em;
    }

    .lien {
        width: 33%;
        text-align: center;
    }

    .lien img{
        margin: 0em 0.5em 0em;
        height: 2em;
        width: 2em;
    }
    
    .onglet{
        width: 33%;
        display: flex;
        justify-content: flex-end;
        margin-right: 1em;
    }

    .onglet p{
        margin-left: 1em;
    }

    .Link-social-Network:hover {
opacity: 0.6;
}
</style>
