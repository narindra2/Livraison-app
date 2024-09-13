<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Historiques</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Historiques</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="col-lg-12 text-center mt-5">
                                    Don't have an account? <p   @click="() => router.push('/login')" class="text-danger">Sign Up</p>
                                </div>
      
    </ion-content>
  </ion-page>
</template>

<script  >
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { useRouter } from 'vue-router';
export default {
    data () {
         return {
           router :  useRouter(),
         }
    },
}
</script>
