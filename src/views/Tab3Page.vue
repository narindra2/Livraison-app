<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Paramétre de compte</ion-title>
      </ion-toolbar>
    </ion-header>
  <ion-content :fullscreen="true">
      <div class="mt-3 container">
          <div class="card shadow mb-2">
              <div class="card-body">
                      <div class="form-group mb-3">
                          <label class="form-check-label" for="">Nom :</label>
                          <div class="input-group input-group-merge">
                              <span class="input-group-text" id="basic-addon11"><i class='bx bxs-user-circle fs-2' ></i> </span>
                              <input class="form-control" type="text" id="name" required="" value="Mr Rakato" placeholder="Votre nom">
                          </div>
                      </div>
                      <div class="form-group mb-3">
                          <label class="form-check-label" for="">Email :</label>
                          <div class="input-group input-group-merge">
                              <span class="input-group-text" id="basic-addon11"><i class='bx bxs-envelope fs-2' ></i> </span>
                              <input class="form-control" type="email" id="email" required="" value="john@deo.com" placeholder="john@deo.com">
                          </div>
                      </div>
                      <div class="form-group mb-3">
                          <label class="form-check-label" for="">Téléphoneou ou conctact:</label>
                          <div class="input-group input-group-merge">
                              <span class="input-group-text" id="basic-addon11"><i class='bx bxs-phone fs-2' ></i> </span>
                              <input class="form-control" type="text" id="phone" required="" value="034 00 111 22" placeholder="034 00 111 22">
                          </div>
                      </div>
                      <div class="form-group mb-3">
                          <label class="form-check-label" for="">Adress :</label>
                          <div class="input-group input-group-merge">
                              <span class="input-group-text" id="basic-addon11"><i class='bx bx-home fs-2'></i></span>
                              <textarea class="form-control" type="text"  rows="2" id="phone" required="" value="Votre adress" placeholder="votre adress"></textarea>
                          </div>
                      </div>
                      <div class="d-grid gap-2 ">
                          <button class="btn btn-block btn-success"  @click="presentToast('Information personnelle bien enreigistrer')" >Enreigistrer mes infos</button>

                      </div>
              </div>
          </div>
          <div class="card shadow">
              <div class="card-body">
                      <div class="form-group mb-3">
                          <label class="form-check-label" for="">Changer mot de passe :</label>
                          <div class="input-group input-group-merge">
                              <span class="input-group-text" id="basic-addon11"><i class='bx bxs-key fs-2'></i> </span>
                              <input class="form-control" type="text" required="" id="password1" value=""
                              placeholder="Entrer votre mot de passe">
                          </div>
                      </div>
                      <div class="form-group mb-3">
                          <label class="form-check-label" for=""> Confirmer mot de passe :</label>
                          <div class="input-group input-group-merge">
                              <span class="input-group-text" id="basic-addon11"><i class='bx bxs-key fs-2'></i> </span>
                              <input class="form-control" type="text" required="" id="password1" value=""
                              placeholder="Entrer votre mot de passe">
                          </div>
                      </div>
                      <div class="d-grid gap-2 ">
                          <button class="btn btn-block btn-success" @click="presentToast('Nouveau mot de pass bien enreigistrer')" >Enreigistrer</button>

                      </div>
              </div>
          </div>
      </div>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
          <ion-fab-button  color="dark">
            <i class='bx bx-up-arrow-alt text-white fs-1' ></i>
          </ion-fab-button>
            <ion-fab-list side="top">
              <!-- <RouterLink class="text-success" to="/addNewPackage">
                <ion-fab-button >
                    <i class='bx bxs-cart-add fs-2 text-white' ></i>
                </ion-fab-button>
              </RouterLink> -->
              <RouterLink  :to="{name:'login'}" @click="logOut()" class="mb-1"> 
                <ion-fab-button color="danger">
                  <i class=' fs-2 text-white bx bx-log-out'></i>
                </ion-fab-button>
            </RouterLink>
          </ion-fab-list>
      </ion-fab>
  </ion-content>
  </ion-page>
</template>

<script>
import { saveDataInLocalStorage } from '@/services/authService';
import { toastController } from '@ionic/vue';
import { useRouter } from 'vue-router';
export default {
  components : {toastController},

  data () {
       return {
         router :  useRouter(),
       }
  },
  mounted() {
      console.log("123");
  },
  methods : {
      submitSignupForm(){
          return this.router.push('/tabs/tab1');
      },
      async presentToast(message = "") {
        const toast = await toastController.create({
          message: message,
          duration: 1500,
          position: "top",
        });
        await toast.present();
      },
       logOut() {
        saveDataInLocalStorage("authUserInfo", null);
      },
  }
}
</script>