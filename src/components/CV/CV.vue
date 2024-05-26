<script setup>
import { ref } from 'vue'
const openPhoto = ref(false)
const openCV = ref(true)
</script>

<template>
    <head>
        <title>CV Web</title>
    </head> 
    <Transition name="bounce">
    <div v-if="openCV" class="bodyCV">
        <h1>CV</h1>
        <div  class="photoDuCv">
            <img @click="openCV = !openCV" src="./img/CVimage.png" alt="Photo du CV" style="height: auto;width: 20em; cursor: pointer; margin-bottom: 2em;">
        </div>
        <p>Mon adresse postal est fictive par securité
            <br>Le mail et numéro de telephone ainsi que le formulaire de contact 
            <br>possédent des données réels.
        </p>
    </div>
    
    <div v-else class="CVElement">
      <div id="text-body">    
            <header id="area-top">
                <a @click="openPhoto = true" ><img src="./img/Photo_2023.jpg" alt="Ma Photo de CV 2023" class="Photo_arrondi" style="cursor: pointer;" ></a>
                <div v-if="openPhoto" class="modalPhoto">
                <a @click="openPhoto = false"><img src="./img/Photo_2023.jpg" alt="Ma Photo de CV 2023" style="height: 20em; width: 20em;"></a>
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
                <a href="mailto:mickael.bateman@gmail.com" class="mail"><p>mickael.bateman@gmail.com</p></a>
                <a href="tel:0667088327" class="phone"><p>06.67.08.83.27</p></a>
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
                    <a href="https://linkedin.com/"><img src="./img/linkedin.png" alt="Lien vers Linkdin" class="Link-social-Network"></a>
                    <a href="https://github.com/Bareman07"><img src="./img/signe-github.png" alt="Lien vers Github" class="Link-social-Network"></a>
                </figure>
                    <p> Derniere mise à jour 21/10/2023 </p>
            </footer>
        </div>
        <div class="buttonFermerBox">
        <button @click="openCV = !openCV">Fermer</button>
        </div>
    </div>
    </Transition>
</template>

<style scoped>
    @import './styleCV.css';
</style>