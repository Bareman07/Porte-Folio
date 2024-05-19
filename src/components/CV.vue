<script setup>
import { ref } from 'vue'
const openPhoto = ref(false)
const openCV = ref(true)
</script>

<template>
    <head>
        <title>CV Web</title>
    </head> 
    <div v-if="openCV" class="bodyCV">
        <h1>CV</h1>
        <img @click="openCV = !openCV" src="../assets/img/CVImage.png" alt="Photo du CV" style="height: auto;width: 20em; cursor: pointer;">
    </div>
    <div v-else class="CVElement">
      <div id="text-body">    
            <header id="area-top">
                <a @click="openPhoto = true" ><img src="../assets/img/Photo_2023.jpg" alt="Ma Photo de CV 2023" class="Photo_arrondi" style="cursor: pointer;" ></a>
                <div v-if="openPhoto" class="modalPhoto">
                <a @click="openPhoto = false"><img src="../assets/img/Photo_2023.jpg" alt="Ma Photo de CV 2023" style="height: 20em; width: 20em;"></a>
                </div>
                <h1> BATEMAN Mickael </h1>
                <h2> Devellopeur Web Junior </h2>
            </header>
            <address id="area-grey">
                <a href="https://www.google.com/maps/place/Le+Hazard+-+Votre+Barak+%C3%80+Jeux/@50.7216442,2.5342666,15z/data=!4m6!3m5!1s0x47dce19c86a5a92f:0x3b3cd1fc1329058e!8m2!3d50.7216442!4d2.5342666!16s%2Fg%2F11ty4m5rnf?entry=ttu" class="adress">   
                    <p> 31 Rue du Maréchal Leclerc 
                    <br>59190 Hazebrouck
                    </p>
                </a>
                <a href="mailto:mic.man@gmail.com" class="mail"><p>mic.man@gmail.com</p></a>
                <a href="tel:0666088366" class="phone"><p>06.66.08.83.66</p></a>
            </address>
            <main id="area-center">
                <aside id="area-left">
                    <article class="article-area-left">
                        <h2> A propos </h2>
                        <p>Après 8 années passées dans le secteur du sav, je suis aujourd’hui à la recherche d’un 
                            poste de developeur dans le secteur du WEB. Fort de cette expérience, je souhaite 
                            mettre mes compétences au service d’une entreprise aux valeurs fortes.</p>
                    </article>
                    <article class="article-area-left">        
                        <h2> Language </h2>
                        <ul>
                            <li>Francais - Langue maternelle</li>
                            <li>Anglais - Intermédiaire</li>
                        </ul>
                    </article>
                    <article class="article-area-left"> 
                        <h2> Centres d'intêrêt</h2>
                        <ul>
                            <li>Jeux de société</li>
                            <li>Escape Game</li>
                            <li>Nouvel Technologie</li>
                        </ul>
                    </article>
                </aside>
                <section id="area-white">
                    <h2 class="invisible">Experiences, Diplomes et Compétences</h2>
                    <article class="article-area-white">
                        <h2> Experiences Professionelles</h2>
                        <h3>Resposable SAV Region Nord chez TEB</h3>
                        <p>De 2014 à 2023</p>
                        <ul>
                            <li>Planification</li>
                            <li>Dépannage</li>
                            <li>Réalisation Devis</li>
                            <li>Gestion de Stock</li>
                            <li>Gestion de parc distant</li>
                            <li>Gestion d’une équipe de techniciens</li>
                        </ul>
                        <h3>Manoeuvre chez TEB</h3>
                        <p>Juillet 2013 & Septembre 2014</p>
                        <ul>
                            <li>Montage poste de surveillance</li>
                            <li>Gestion de cablâges d'une armoire vidéo</li>
                        </ul>
                        <h3>Monteur chez MFR</h3>
                        <p>Juillet-Aout 2011 & 2013</p>
                        <ul>
                            <li>Montage Racks</li>
                            <li>Gestion d’une équipe de monteurs</li>
                        </ul>
                    </article>
                    <article class="article-area-white">
                        <h2> Diplômes</h2>
                        <h3>Master 2 Ingénierie des Systémes Electriques</h3>
                        <p>2014</p>
                        <p>FSA à Béthune</p>
                        <h3>Master 1 Automatismes des Systèmes Electriques</h3>
                        <p>2012</p>
                        <p>USTL Lille 1 à Villeneuve d’Ascq</p>
                    </article>
                    <article class="article-area-white">
                        <h2> Compètences</h2>
                        <ul>
                            <li>HTML5 - Intermediaire</li>
                            <li>CSS 3 - Intermediaire</li>
                            <li>GtiHub - Débutant</li>
                            <li>...</li>
                        </ul>
                    </article>
                </section>
            </main>
            <footer id="area-bottom">
                <figure>
                    <a href="https://linkedin.com/"><img src="../assets/img/linkedin.png" alt="Lien vers Linkdin" class="Link-social-Network"></a>
                    <a href="https://github.com/Bareman07"><img src="../assets/img/signe-github.png" alt="Lien vers Github" class="Link-social-Network"></a>
                </figure>
                    <p> Derniere mise à jour 21/10/2023 </p>
            </footer>
        </div>
        <div class="buttonFermerBox">
        <button @click="openCV = !openCV">Fermer</button>
        </div>
    </div>
</template>

<style scoped>
/* Police de caractere */ 
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap');

p {
    font-family: "Raleway", serif; /* la "," choix alternatif*/
    font-size: 0.9em ;
}

li {
    font-family: "Raleway", serif;
    font-size: 1em ;
}

h1 {
    font-family: "Lato", serif;
    font-size: 1.4em ;
}

h2 {
    font-family: "Lato", serif;
    font-size: 1.1em ;
}

h3 {
    font-family: "Lato", serif;
    font-size: 1em ;
}

address {
    font-weight: bold;
    font-style: italic;
}

#area-white li {
    margin-left: 1.5em;
}

h2.invisible { /* element pour garder un texte avec l'acessibilite mais invisible a l'utilisateur*/
    position: absolute;
    visibility: hidden;
}

#area-left p {
    text-indent: 1.5em;
    margin : 0em 1.5em 0em 1em;
}

/* definition des Elements en flexbox et alignement */ 
.CVBody {
    display: flex;
    align-items: center;
    justify-content: center;
}

#text-body {
    height: 1640px;
    width: 1160px;
    border: 0.3em solid #f59f00 ;
    border-radius: 1%;
    background-color:#9197A1;
    display: flex;
    flex-direction: row ;
    flex-wrap: wrap ;
    justify-content:center; 
    text-align: center; 
}

/* Definition des diffenrents Zones */ 

#area-top { 
    height: 17%;
    width:30%;
    color: white;
    order: 0;
    align-self: center;
    flex-basis: 100%;
}

.Photo_arrondi {
    box-shadow: 0em 0em 2em white;
    margin: 1em 0em 0em;
    width:9em;
    border-radius: 50%;
}

#area-grey { 
    height: 8%;
    display: flex;
    background-color: #0A0A0A;
    color: white;
    justify-content: space-between ;
    order: 1;
    flex-basis: 100%;
}

.adress { 
    width:25%;
    margin : 1.5em 0em 0em 2em;
    text-align: start;
}

.mail { 
    width:25%;
    margin : 2em 0em 0em 0em; /* haut | droit | bas | gauche */
}

.phone { 
    width:25%;
    margin : 2em 2em 0em 0em;
    text-align: end; 
}

#area-left { 
    height: 100%;
    color: white;
    text-align: start;
    order: 2;
    flex-basis: 28%;
    margin-right: -0.1em;
}

.article-area-left h2 {    
        color: black;
        background-color: #F59F00;
        margin : 1em 1.5em 1em 0em;
        text-indent: 1em;
}

#area-white { 
    height: 100%;
    background-color: white;
    color: black;
    text-align: start;
    order: 3;
    flex-basis: 72%; /* Ceci definit la taille par defaut d'un Element avant que l'espace restant ne soit distribue dans l'axe horizontale*/
    border-right: 0.1em solid black; /* largeur | style | couleur */
}


.article-area-white p {
    color: #0A0A0A;
    margin-left: 1.5em;
}

.article-area-white li:hover {
    border-right: solid #9197A1;
    border-right-width: 0.5em;
}

.article-area-white h2 {
    background-color: #F59F00;
    margin: 1em 1.5em;
    box-shadow: -0.5em 0em 0em 0em #9197A1;
    text-indent: 0.5em;
}

.article-area-white h3 {
    color: #0A0A0A;
    margin-left: 1.5em;
}

.article-area-white h3:hover {
    border-right: solid #9197A1;
    border-right-width: 0.5em;
}

#area-bottom {
    height: 10%;
    color: white;
    order: 4;
}

/*rajout des fonction et liens*/

.Photo_arrondi  {
    transition: transform 0.6s ease; /* Ajoute une transition douce */
}

.Photo_arrondi:hover  {
    transform: scale(1.3); /* Agrandit l'image au survol */
}

#area-grey a {
    color: white;
    text-decoration-line: none;
}

#area-grey a:hover{
    text-decoration-line: underline;
}

#area-bottom img {
    margin: 2em 0.5em 0em;
    height: 2em;
    width: 2em;
}

.Link-social-Network:hover {
opacity: 0.6;
}

#area-center {
    height: 65%;
    width: 100%;
    order: 3;
    display: flex;
}

.modalPhoto {
  position: fixed;
  z-index: 999;
  top: 30%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}

.buttonFermerBox{
    display: flex;
    justify-content: center;
    width: 100%;
}

.bodyCV{
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    background-color: #9197A1;
    border: 0.3em solid #f59f00 ;
    border-radius: 1%;
    width: 40em;;
    text-align: center;

}

.bodyCV h1{
    text-decoration: underline;
}

button{
    cursor: pointer;
}
</style>
