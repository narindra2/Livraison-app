<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Colis detail</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <div class="container mt-2 ">
           
            <div class="card shadow bg-white p-3 text-start mb-2" >
                              <figure class="mb-0">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item"> <span>Récupérer </span>  :  <i class='bx bx-walk fs-2'></i> <mark> Fasakarana , Antannarivo </mark> </li>
                                  <li class="list-group-item"><span class="text-dark  ">A livré à</span>  : <i class='bx bxs-map mb-1 fs-2'></i> <span class="text-dark markerLocation ">Anosy , Antannarivo</span>   </li>
                                  <li class="list-group-item"> <span class="text-dark  " >Distance </span>  :  <i class='bx bx-trip fs-2'></i> <mark class="text-dark markerLocation " >03 km, environ 30 min </mark>   </li>
                                  <li class="list-group-item"> <span class="text-dark  " >Montant </span>  :  <mark class="text-dark markerLocation " > 5.000 Ar </mark> ,    </li>
                                  <li class="list-group-item"> <span class="text-dark  " >Paiment </span>  :  <mark class="text-dark" > Non payé  , </mark> <mark class="text-dark markerLocation " > Payé à la livraison </mark>   </li>
                                </ul>
                              </figure>
                            </div>
                          <div class="card text-center shadow bg-white mb-2" >
                              <div class="d-flex flex-wrap" id="icons-container">
                                <div class="card-body">
                                
                                <ul class="list-group list-group-flush"><li class="list-group-item"><i class='bx bx-gift fs-1 mb-2'></i> </li></ul>
                                <span class="text-dark markerLocation ">Express</span> 
                              </div>
                              <div class="card-body">
                                  <ul class="list-group list-group-flush"><li class="list-group-item"><i class='bx bx-cube fs-1 mb-2'  ></i>
                                  </li></ul>
                                  <mark class="text-dark  ">P : 10kg</mark> 
                                </div>
                                <div class="card-body">
                                  <ul class="list-group list-group-flush"><li class="list-group-item"> <i class='bx bx-question-mark  fs-1 mb-2' ></i> </li></ul>
                                  <mark class="text-dark  ">Fragile:Oui</mark> 
                                </div>
                          </div>
                            </div>
                                <div class=" shadow bg-white nav-align-top mb-4">
                                <ul class="nav nav-tabs nav-fill" role="tablist">
                                    <li class="nav-item" @click="ActiveTab = 'tab-info'">
                                      <button type="button" class="nav-link " :class="{ 'active' :ActiveTab =='tab-info' }" role="tab" data-bs-toggle="tab" data-bs-target="#tab-info" aria-controls="tab-info" aria-selected="false" >
                                          <i class='bx bx-pencil fs-3'></i>
                                          Info
                                      </button>
                                  </li>
                                  <li class="nav-item" @click="ActiveTab = 'tab-map'">
                                    <button type="button" class="nav-link "  :class="{ 'active' :ActiveTab =='tab-map' }" role="tab" data-bs-toggle="tab" data-bs-target="#tab-map" aria-controls="tab-map" aria-selected="false">
                                        <i class='bx bx-map-alt fs-3'></i>
                                        Tracing
                                    </button>
                                  </li>
                                
                                  <li class="nav-item" @click="ActiveTab = 'tab-action'">
                                    <button type="button" class="nav-link "  :class="{ 'active' :ActiveTab =='tab-action' }" role="tab" data-bs-toggle="tab" data-bs-target="#tab-client" aria-controls="tab-client" aria-selected="false">
                                      <i class='bx bx-list-check fs-3'></i>
                                        Actions
                                    </button>
                                  </li>
                                </ul>
                                <div class="tab-content">
                                  <div class="tab-pane fade"  :class="{ 'active show' : ActiveTab =='tab-info' }" id="tab-info" role="tabpanel">
                                    <div class="divider"> <div class="divider-text">Livreur(s)</div></div>
                                    <ul class="list-group list-group-flush">
                                      <li class="list-group-item"><span class="text-dark n ">Non de livreur</span>:  <mark class="text-dark  "> Mr Toky </mark>  </li>
                                      <li class="list-group-item"><span class="text-dark  ">Tél. de livreur</span>:  <mark class="text-dark  "> 034 22 333 44 </mark>, <a class="text-success"  href="tel:034 22 333 44"><u> Appeler</u> !</a>    </li>
                                    </ul>
                                    <div class="divider"> <div class="divider-text">Client </div></div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Non de client: <mark class="text-dark  "> Mr Rakoto </mark> </li>
                                        <li class="list-group-item">Tél. de client: <mark class="text-dark  "> 034 11 222 33 </mark>, <a class="text-success" href="tel:034 11 222 33"><u> Appeler</u> !</a>   </li>
                                        <li class="list-group-item"> <span class="text-success"> </span>  </li>
                                    </ul>
                                  </div>
                                  <div class="tab-pane fade " :class="{ 'active show' : ActiveTab =='tab-map' }" id="tab-map" role="tabpanel">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Statut du colis : <span class="text-success"> Colis en chemin de livraison</span> </li>
                                    </ul>
                                  <img src="/assets/images/map-demo.png" >
                                  </div>
                                  <div class="tab-pane fade "  :class="{ 'active show' : ActiveTab =='tab-action' }" id="tab-action" role="tabpanel">
                                    <div class="divider"> <div class="divider-text">Etat colis </div></div>
                                    <div class="demo-inline-spacing mt-3">
                                      <div class="list-group list-group-flush">
                                        <label class="list-group-item">
                                          <input class="form-check-input me-1" type="checkbox" value="" checked>
                                         Colis en cours de récuperération.
                                        </label>
                                        <label class="list-group-item">
                                          <input class="form-check-input me-1" type="checkbox" value="" checked>
                                         Colis bien récuperé.
                                        </label>
                                        <label class="list-group-item">
                                          <input class="form-check-input me-1" type="checkbox" value="" checked>
                                          Colis en chemin de la livraison.
                                        </label>
                                        <label class="list-group-item">
                                          <input class="form-check-input me-1" type="checkbox" value="">
                                          Colis bien livré .
                                        </label>
                                        <label class="list-group-item">
                                          <input class="form-check-input me-1" type="checkbox" value="">
                                          Colis bien payé.
                                        </label>
                                        <label class="list-group-item">
                                          <input class="form-check-input me-1" type="checkbox" value="">
                                         Terminé 
                                        </label>
                                        
                                      </div>
                                    </div>
                                    <div class="divider"> <div class="divider-text">Cas exception </div></div>
                                    <div class="demo-inline-spacing mt-3">
                                      <div class="list-group list-group-flush">
                                        <label class="list-group-item text-warning">
                                          <input class="form-check-input me-1 " type="checkbox" value="">
                                          Colis endomagé.
                                        </label>
                                        <label class="list-group-item text-warning">
                                          <input class="form-check-input me-1" type="checkbox" value="">
                                          Colis refusé par le client à la reception.
                                        </label>
                                        <label class="list-group-item text-danger">
                                          <input class="form-check-input me-1" type="checkbox" value="">
                                          Colis annulé la livraison .
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                
                </div>
      </ion-content>
    </ion-page>
  </template>
<style>
.tab-content {
    padding: 0.5rem;
    border-radius: 0.375rem;
}
.divider {
    display: block;
    text-align: center;
    margin: 0.1rem 0;
    overflow: hidden;
    white-space: nowrap;
}
.nav-link {
    display: block;
    padding: 0.5rem 0.1rem;
    color: #8e9baa;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
</style>

<script>
export default {
    data () {
         return {
           today : null,
           ActiveTab : "tab-info"
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
  
  