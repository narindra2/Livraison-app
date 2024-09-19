<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nouveau liravison</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <AddNewPackageVue></AddNewPackageVue>
    </ion-content>
  </ion-page>
</template>
<style>
 
  ion-fab-button {
    --background:#71dd37;
    --background-activated: #71dd37;
    --background-hover: #71dd37;
    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  }
</style>
<script>
import { useRouter } from 'vue-router';
import AddNewPackageVue from './Package/AddNewPackage.vue';

export default {
  components : {AddNewPackageVue},
    data () {
         return {
           router :  useRouter(),
         }
    },
    mounted() {
        
    },
    methods : {
        toDetail(){
            return this.router.push('/detailPackage');
        }
    }
}
</script>

