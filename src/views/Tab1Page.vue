<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> Aujoud'hui </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">A livré</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- <ExploreContainer name="Tab 1 page" /> -->
          <ion-card color="dark" >
        <ion-card-header>
          <ion-card-title>Ambomanarina <ion-icon :icon="location" size="large"></ion-icon> </ion-card-title>
          <ion-card-subtitle>Unité central</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content> 4.5km </ion-card-content>
      </ion-card>

      <ion-card  color="dark" >
        <ion-card-header>
          <ion-card-title>Analakely <ion-icon :icon="location" size="large"></ion-icon>  </ion-card-title>
          <ion-card-subtitle>Akanjo</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content> 1.5km </ion-card-content>
      </ion-card>

      <ion-card color="dark"  >
        <ion-card-header>
          <ion-card-title>Anosy <ion-icon :icon="location" size="large"></ion-icon>  </ion-card-title>
          <ion-card-subtitle>Kiraro</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content> 12km </ion-card-content>
      </ion-card>

     

        <ion-card color="dark" >
          <ion-card-header>
            <ion-card-title>Unité Central <ion-icon :icon="location"></ion-icon></ion-card-title>
            <!-- <ion-card-subtitle>Ambomanarina </ion-icon></ion-card-subtitle> -->
            <ion-icon name="accessibility-outline"></ion-icon>
          </ion-card-header>

          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
        </ion-card>
        <ion-card color="dark" >
          <ion-card-header>
            <ion-card-title>Unité Central <ion-icon :icon="location"></ion-icon></ion-card-title>
            <!-- <ion-card-subtitle>Ambomanarina </ion-icon></ion-card-subtitle> -->
            <ion-icon name="accessibility-outline"></ion-icon>
          </ion-card-header>

          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
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
