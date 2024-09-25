<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Colis</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
                      <div class="container-xxl flex-grow-1 container-p-y">
                            <div class="shadow p-2 mt-0 mb-2 bg-white rounded">
                              <input class="form-control  " type="search" placeholder="Rechercher ..." aria-label="Rechercher ...">
                            </div>
                            <div class="shadow p-2 mb-2 bg-white rounded text-center ">
                              <button type="button" class="mx-2 btn waves-effect waves-light btn-rounded btn-outline-success ">Tout</button>
                              <button type="button" class="mx-2 btn waves-effect waves-light btn-rounded btn-outline-success">En cours</button>
                              <button type="button" class="mx-2 btn waves-effect waves-light btn-rounded btn-outline-success">Livré</button>
                            </div>
                            <div class="card shadow bg-white p-3 text-start mb-2" @click="toDetail()">
                              <figure class="mb-0">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item"> <mark>Récupérer </mark>  :  <i class='bx bx-walk fs-2'></i> Fasakarana , Antannarivo </li>
                                  <li class="list-group-item"><span class="text-dark markerLocation ">A livré à</span>  : <i class='bx bxs-map mb-1 fs-2'></i> Anosy , Antannarivo</li>
                                </ul>
                              </figure>
                            </div>
                            <div class="card shadow bg-white p-3 text-start mb-2" @click="toDetail()">
                              <figure class="mb-0">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item"><span class="text-dark markerLocation">A livré à</span>  : <i class='bx bxs-map mb-1 fs-2'></i> Anosy , Antannarivo</li>
                                </ul>
                              </figure>
                            </div>
                            
                            <div class="card shadow border border-success  bg-white p-3 text-start mb-2" @click="toDetail()">
                              <figure class="mb-0">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item"><mark>Récupérer </mark>  <i class='bx bx-walk fs-2'></i> Fasakarana , Antannarivo </li>
                                  <li class="list-group-item"><span class="text-dark markerLocation">A livré à</span>  : <i class='bx bxs-map mb-1 fs-2'></i> Anosy , Antannarivo</li>
                                </ul>
                              </figure>
                            </div>
                            
                            <div class="card shadow  bg-white p-3 text-start mb-2" @click="toDetail()">
                              <figure class="mb-0">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item"><mark>Récupérer </mark>  <i class='bx bx-walk fs-2'></i> Fasakarana , Antannarivo </li>
                                  <li class="list-group-item"><span class="text-dark markerLocation">A livré à</span>  : <i class='bx bxs-map mb-1 fs-2'></i> Anosy , Antannarivo</li>
                                </ul>
                              </figure>
                            </div>
                            
                            <div class="card shadow  bg-white p-3 text-start mb-2" @click="toDetail()"> 
                              <figure class="mb-0">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item"><mark>Récupérer </mark>  <i class='bx bx-walk fs-2'></i> Fasakarana , Antannarivo </li>
                                  <li class="list-group-item"><span class="text-dark markerLocation">A livré à</span>  : <i class='bx bxs-map mb-1 fs-2'></i> Anosy , Antannarivo</li>
                                </ul>
                              </figure>
                            </div>
                            <div class="card shadow  bg-white p-3 text-start mb-2" @click="toDetail()">
                              <figure class="mb-0">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item"><mark>Récupérer </mark>  <i class='bx bx-walk fs-2'></i> Fasakarana , Antannarivo </li>
                                  <li class="list-group-item"><span class="text-dark markerLocation">A livré à</span>  : <i class='bx bxs-map mb-1 fs-2'></i> Anosy , Antannarivo</li>
                                </ul>
                              </figure>
                            </div>
                       
                            <ion-refresher slot="fixed"  pull-factor="0.5" :pull-min="100" :pull-max="200" @ionRefresh="handleRefresh($event)">
                          <ion-refresher-content></ion-refresher-content>
                        </ion-refresher>
      </div>
      
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
import { axiosInstance } from '@/services/utilService';
import { useRouter } from 'vue-router';
import {  onIonViewDidEnter} from '@ionic/vue';
import {ref} from 'vue'
export default {
  data() {
    return {
      router: useRouter(),
    }
  },
  setup() {
    const packages= ref([]);
    function pingHost() {
      axiosInstance.post("/api/ping").then(response => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
    }
    onIonViewDidEnter(() => {
      pingHost();
    });

    return {
      pingHost,
      packages
    }
  },

  methods: {
    toDetail() {
      return this.router.push('/detailPackage');
    },
  }
}
</script>

