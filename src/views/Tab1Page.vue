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
                            <div class="shadow p-2 mb-2 bg-white rounded text-center">
                              <button type="button" class="mx-2 btn waves-effect waves-light btn-rounded btn-outline-success ">Tout</button>
                              <button type="button" class="mx-2 btn waves-effect waves-light btn-rounded btn-outline-success">En cours</button>
                              <button type="button" class="mx-2 btn waves-effect waves-light btn-rounded btn-outline-success">Livré</button>
                            </div>
                            <div class="card shadow bg-white p-3 text-start mb-2">
                              <figure class="mb-0">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item"> <mark>A recupré </mark>  :  <i class='bx bx-walk fs-2'></i> Fasakarana , Antannarivo </li>
                                  <li class="list-group-item"><span class="text-dark">A livré à</span>  : <i class='bx bxs-map mb-1 fs-2'></i> Anosy , Antannarivo</li>
                                </ul>
                              </figure>
                            </div>
                            <div class="card shadow bg-white p-3 text-start mb-2">
                              <figure class="mb-0">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item"><span class="text-dark">A livré à</span>  : <i class='bx bxs-map mb-1 fs-2'></i> Anosy , Antannarivo</li>
                                </ul>
                              </figure>
                            </div>
                            
                            <div class="card shadow  bg-white p-3 text-start mb-2">
                              <figure class="mb-0">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item"><mark>A recupré </mark>  <i class='bx bx-walk fs-2'></i> Fasakarana , Antannarivo </li>
                                  <li class="list-group-item"><span class="text-dark">A livré à</span>  : <i class='bx bxs-map mb-1 fs-2'></i> Anosy , Antannarivo</li>
                                </ul>
                              </figure>
                            </div>
                            
                            <div class="card shadow  bg-white p-3 text-start mb-2">
                              <figure class="mb-0">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item"><mark>A recupré </mark>  <i class='bx bx-walk fs-2'></i> Fasakarana , Antannarivo </li>
                                  <li class="list-group-item"><span class="text-dark">A livré à</span>  : <i class='bx bxs-map mb-1 fs-2'></i> Anosy , Antannarivo</li>
                                </ul>
                              </figure>
                            </div>
                            
                            <div class="card shadow  bg-white p-3 text-start mb-2">
                              <figure class="mb-0">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item"><mark>A recupré </mark>  <i class='bx bx-walk fs-2'></i> Fasakarana , Antannarivo </li>
                                  <li class="list-group-item"><span class="text-dark">A livré à</span>  : <i class='bx bxs-map mb-1 fs-2'></i> Anosy , Antannarivo</li>
                                </ul>
                              </figure>
                            </div>
                            <div class="card shadow  bg-white p-3 text-start mb-2">
                              <figure class="mb-0">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item"><mark>A recupré </mark>  <i class='bx bx-walk fs-2'></i> Fasakarana , Antannarivo </li>
                                  <li class="list-group-item"><span class="text-dark">A livré à</span>  : <i class='bx bxs-map mb-1 fs-2'></i> Anosy , Antannarivo</li>
                                </ul>
                              </figure>
                            </div>
                       
                            <ion-refresher slot="fixed"  pull-factor="0.5" :pull-min="100" :pull-max="200" @ionRefresh="handleRefresh($event)">
                          <ion-refresher-content></ion-refresher-content>
                        </ion-refresher>
      </div>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button color="dark" class="text-white">
        <i class='bx bx-up-arrow-alt  fs-1' ></i>
        </ion-fab-button>
        <ion-fab-list side="top">
          <ion-fab-button color="success">
            <RouterLink class="text-success" to="/addNewPackage">   <i class='bx bxs-cart-add fs-2 text-white' ></i></RouterLink>
          </ion-fab-button>
          <ion-fab-button color="danger">
            <RouterLink  to="/login">  <i class=' fs-2 text-white bx bx-log-out'></i></RouterLink>
          </ion-fab-button>
        </ion-fab-list>
    </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import  {IonFab, IonFabButton, IonFabList, IonIcon , IonPage, IonHeader, IonToolbar, IonTitle, IonContent ,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/vue';
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

