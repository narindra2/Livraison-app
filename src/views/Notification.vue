<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Notification</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <div class="container mt-2 ">
            <div class="card-body shadow mb-2">
                <div class="d-flex align-items-start align-items-sm-center gap-4">
                    <img src="/assets/images/avatar-bot.jpg" alt="user-avatar" class="rounded-circle" height="50" width="50" id="uploadedAvatar">
                    <div class="button-wrapper">
                        <figure class=" mb-0">
                        <blockquote class="blockquote">
                            <p>Un nouveau colis à livrer.</p>
                        </blockquote>
                        <figcaption class="blockquote-footer mb-0 text-muted">
                        Ajouté : <span class="text-success">Admin</span> <span> , Il y 2 minutes</span>
                        </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="card-body mb-2 shadow">
                <div class="d-flex align-items-start align-items-sm-center gap-4">
                    <img src="/assets/images/avatar-bot.jpg" alt="user-avatar" class="rounded-circle" height="50" width="50" id="uploadedAvatar">
                    <div class="button-wrapper">
                        <figure class=" mb-0">
                        <blockquote class="blockquote">
                            <p>Un nouveau colis à livrer.</p>
                        </blockquote>
                        <figcaption class="blockquote-footer mb-0 text-muted">
                        Ajouté : <span class="text-success">Admin</span> <span> , Il y 3 heures</span>
                        </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="card-body shadow mb-2">
                <div class="d-flex align-items-start align-items-sm-center gap-4">
                    <img src="/assets/images/avatar-bot.jpg" alt="user-avatar" class="rounded-circle" height="50" width="50" id="uploadedAvatar">
                    <div class="button-wrapper">
                        <figure class=" mb-0">
                        <blockquote class="blockquote">
                            <p>Un nouveau colis à livrer.</p>
                        </blockquote>
                        <figcaption class="blockquote-footer mb-0 text-muted">
                        Ajouté : <span class="text-success">Admin</span> <span> , Hier  , 10h:30mn</span>
                        </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
     </ion-content>
    </ion-page>
  </template>

<style>
.button-wrapper{
    margin:5px;
}
</style>
<script setup  lang="ts">
import {IonFab, IonFabButton, IonFabList, IonIcon , IonPage, IonHeader, IonToolbar, IonTitle, IonContent ,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/vue';
import { location } from "ionicons/icons"
import { defineComponent } from 'vue';
import {
    chevronDownCircle,
    chevronForwardCircle,
    chevronUpCircle,
    colorPalette,
    document,
    globe,
    add
} from 'ionicons/icons';
defineComponent({
    components: { IonIcon ,  IonFab, IonFabButton, IonFabList ,IonPage, IonHeader, IonToolbar, IonTitle, IonContent ,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
    setup() {
    const handleRefresh = (event: CustomEvent) => {
        setTimeout(() => {
        // Any calls to load data go here
        event.target.complete();
        }, 2000);
    }
        return {
        location,   
        chevronDownCircle,
        chevronForwardCircle,
        chevronUpCircle,
        colorPalette,
        document,
        globe,
        add    ,
        handleRefresh
        }
    }
})
</script>