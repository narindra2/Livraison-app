<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Nouveau demande</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
            <div class="container-xxl flex-grow-1 container-p-y mb-5">
                <div class="shadow p-2 mb-2 bg-white rounded ">
                  <div class="card-body ">
                    <div class="mb-3">
                      <label class="form-check-label" for="">Poids de votre colis :  </label>
                      <div class="input-group input-group-merge">
                        <span class="input-group-text" id="basic-addon11"><i class='bx bxs-package fs-2'></i> </span>
                        <input type="number" class="form-control" placeholder="Poids " aria-label="Username" aria-describedby="basic-addon11">
                        <select class="form-select " id="inputGroupSelect04" aria-label="Example select with button addon">
                              <option value="1">Gramme</option>
                              <option value="2">Kilogramme</option>
                         </select>
                      </div>
                    </div>
                    <div class="mb-0">
                      <div class="col-md">
                        <label class="form-check-label" for="">Votre colis est-il fragile ? :</label>
                          <div>
                            <div class="form-check form-check-inline mt-3 mx-4">
                            <input class="form-check-input" type="radio" name="fragille" id="nofragille" value="no" checked>
                            <label class="form-check-label" for="nofragille">Non</label>
                          </div>
                          <div class="form-check form-check-inline mx-4">
                            <input class="form-check-input" type="radio" name="fragille" id="yesfragille" value="yes">
                            <label class="form-check-label" for="yes">Oui</label>
                          </div>
                          </div>
                        </div>
                    </div>
                   
                  </div>
                </div>
                <div class="shadow p-2 mb-2 bg-white rounded ">
                  <div class="card-body ">
                    <div class="mb-3">
                      <label class="form-check-label" for="">Lieux de récupération de votre colis :</label>
                      <div class="input-group input-group-merge">
                        <span class="input-group-text" id="basic-addon11"><i class='bx bx-walk fs-2'></i> </span>
                        <input type="text" class="form-control" placeholder="Lieux de récupération " aria-label="Username" aria-describedby="basic-addon11">
                      </div>
                    
                    </div>
                    <div class="mb-3">
                      <label class="form-check-label" for="">Lieux de livraison de votre colis : </label>
                      <div class="input-group input-group-merge">
                        <span class="input-group-text" id="basic-addon11"><i class='bx bxs-map fs-2' ></i> </span>
                        <input type="text" v-model="locationStart" class="form-control" placeholder="Lieux de livraison">
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-check-label " for="">Date de livraison : </label>
                      <div class="input-group input-group-merge">
                        <span class="input-group-text" id="basic-addon11"><i class='bx bxs-calendar-check fs-2' ></i> </span>
                        <input type="date" class="form-control" placeholder="Date de livraison" :min=" today" aria-label="Username" aria-describedby="basic-addon11">
                      </div>
                    </div>
                   
                    <div class="mb-4">
                      <div class="col-md">
                        <label class="form-check-label" for="">Préférez-vous qu'on le livre par Express ? :</label>
                          <div>
                            <div class="form-check form-check-inline mt-3 mx-4">
                            <input class="form-check-input" type="radio" name="Express" id="noExpress" value="no" checked>
                            <label class="form-check-label" for="noExpress">Non</label>
                          </div>
                          <div class="form-check form-check-inline mx-4">
                            <input class="form-check-input" type="radio" name="Express" id="yesExpress" value="yes">
                            <label class="form-check-label" for="yesExpress">Oui</label>
                          </div>
                          </div>
                        </div>
                    </div>
                    <div class="mb-3">
                      <div class="col-md text-center">
                        <label class="form-check-label" for="">Total montant  à payé  :</label>
                          <div class="border border-success">
                            <h5> {{ price }} Ariray</h5>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="shadow p-2 mb-2 bg-white rounded ">
                  <div class="card-body  ">
                    <div class="mb-0 demo-vertical-spacing">
                      <label class="form-check-label mb-2" for="">Choississez votre methode de paiment :  </label>
                        <div class="btn-group text-center" role="group" aria-label="Basic radio toggle button group">
                              <input type="radio" class="btn-check" name="btnradio" id="btnradio1"   autocomplete="off">
                              <label class="btn btn-outline-success" for="btnradio1" @click="payment = 'mobile'"> Mobile money </label>
                              <input type="radio" class="btn-check" name="btnradio" id="btnradio3" checked autocomplete="off">
                              <label class="btn btn-outline-success" for="btnradio3"  @click="payment= ''">Après la livraison</label>
                          </div>
                            <Transition>
                              <div class=" text-center"  v-if="payment == 'mobile'">
                                <label class="form-check-label mt-1 mb-2" for="">Mobile money :  </label> 
                                <div  class="btn-group mt-2 " role="group" aria-label="First group">
                                  <button type="button" class="btn btn-outline-success">
                                  Mvola
                                  </button>
                                  <button type="button" class="btn btn-outline-warning">
                                    Orange 
                                  </button>
                                  <button type="button" class="btn btn-outline-danger">
                                    Airtel
                                  </button>
                                </div>
                              </div>
                          </Transition>
                         
                    </div>
                    
                  </div>
                </div>
                <div class="shadow p-2 mb-1 bg-white rounded ">
                  <div class="d-grid gap-2 ">
                      <RouterLink class=" btn  btn-success" :to="{name:'home'}" >Continuer <i class='bx bx-right-arrow-alt fs-2'></i> </RouterLink>
                    </div>
                </div>
        </div>
      </ion-content>
    </ion-page>
  </template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
<script>
export default {
    data () {
         return {
           today : null,
           payment : '',
           locationStart : '',
           locationEnd : '',
           showPrice : false,
           price : "0.00"
         }
    },
    mounted() {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        this.today =  yyyy  + '-' + mm  + '-' + dd;
        console.log(this.today);
    },
    methods : {
      handleRefresh (event) {
          setTimeout(() => {
            // Any calls to load data go here
          }, 2000);
        }
    },
    watch :{
      locationStart(newval, old){
        if (newval) {
          this.showPrice = true
           this.price = "5.000"
        }else{
          this.showPrice = false;
           this.price = "0.00"
        }
       
      }
    }
}
</script>
  
  