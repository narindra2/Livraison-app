<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Historique</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
   </ion-content>
  </ion-page>
</template>

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