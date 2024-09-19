<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <i class='bx bx-list-ul fs-1' ></i>
          <ion-label> Colis </ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <i class='bx bx-history fs-1'></i>
          <ion-label>Historique</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <i class='bx bxs-user-circle fs-1'></i>
          <ion-label> Profile </ion-label>
        </ion-tab-button>
        <ion-tab-button tab="notification" href="/tabs/notification">
          <span  class=" position-relative">
            <i class='bx bxs-bell fs-1'></i>
            <span class= "position-absolute top-32 start-100 translate-middle badge rounded-pill bg-success" style="font-size: 11px;">
              3
            </span>
        </span>
          <ion-label> Notification </ion-label>
        </ion-tab-button>
        
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
<style>
.top-32 {
    top: 32% !important;


    
}

</style>
<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
