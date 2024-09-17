<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Ajouté</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
            <div class="container-xxl flex-grow-1 container-p-y">
                <div class="shadow p-2 mb-2 bg-white rounded ">
                  <div class="card-body ">
                    <div class="mb-3 demo-vertical-spacing">
                      <label class="form-check-label mb-2" for="">Choississeer votre methode de paiment :  </label>
                      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1"  autocomplete="off">
                                <label class="btn btn-outline-success" for="btnradio1">Paiment mobile </label>
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                                <label class="btn btn-outline-success" for="btnradio3">Après livraison</label>
                            </div>
                    </div>
                  </div>
                </div>
               
                <div class="shadow p-2 mb-1 bg-white rounded ">
                  <div class="d-grid gap-2 ">
                      <button class=" btn  btn-success" @click="submitLoginForm()" >Terminer <i class='bx bx-right-arrow-alt fs-2'></i> </button>
                    </div>
                </div>
              
                           
        </div>
      </ion-content>
    </ion-page>
  </template>


<script>
export default {
    data () {
         return {
           today : null
         }
    },
    mounted() {
        
    },
    methods : {
      handleRefresh (event) {
          setTimeout(() => {
            // Any calls to load data go here
          }, 2000);
        }
    }
}
</script>
  
  