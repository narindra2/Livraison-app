<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Toute la liste</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Toute la liste</ion-title>
        </ion-toolbar>
      </ion-header>
      
    
      <ion-card color="secondary">
        <ion-card-header>
          <ion-card-title>Analakely <ion-icon :icon="location" size="large"></ion-icon></ion-card-title>
          <ion-card-subtitle>Sac à doc</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content> 3km à coté de escalier </ion-card-content>
      </ion-card>
      <ion-card color="tertiary">
        <ion-card-header>
          <ion-card-title>Ambomanarina <ion-icon :icon="location" size="large"></ion-icon></ion-card-title>
          <ion-card-subtitle>Sac à doc</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content> 3km à coté de escalier </ion-card-content>
      </ion-card>
      <ion-card color="secondary">
        <ion-card-header>
          <ion-card-title>Ambondrona <ion-icon :icon="location" size="large"></ion-icon></ion-card-title>
          <ion-card-subtitle>Sac à doc</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content> 3km à coté de escalier </ion-card-content>
      </ion-card>
      <ion-card color="tertiary">
        <ion-card-header>
          <ion-card-title>Ambondrona <ion-icon :icon="location" size="large"></ion-icon></ion-card-title>
          <ion-card-subtitle>Sac à doc</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content> 3km à coté de escalier </ion-card-content>
      </ion-card>
      <ion-card color="secondary">
        <ion-card-header>
          <ion-card-title>Ambondrona <ion-icon :icon="location" size="large"></ion-icon></ion-card-title>
          <ion-card-subtitle>Sac à doc</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content> 3km à coté de escalier </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonIcon , IonPage, IonHeader, IonToolbar, IonTitle, IonContent ,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { location } from "ionicons/icons"
import { defineComponent } from 'vue';
defineComponent({
    components: { IonIcon , IonPage, IonHeader, IonToolbar, IonTitle, IonContent ,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
    setup() {
        return {
          location,
        }
    }
})
</script>