<template>
    <ion-page>
    <ion-content :fullscreen="true">
        <div class="mt-2 container">
            <div class="card shadow mb-2">
                <div class="card-body">
                    <p class="card-subtitle mb-3">Bienvenue  à vous</p>
                    <p class="card-subtitle">Entrer vos indetifiants pour <span class="text-dark">créer votre compte.</span> </p>
                </div>
            </div>
            <div class="card shadow">
                <div class="card-body">
                       
                        <div class="form-group mb-3">
                            <label class="form-check-label" for="">Nom :</label>
                            <div class="input-group input-group-merge">
                                <span class="input-group-text" id="basic-addon11"><i class='bx bxs-user-circle fs-2' ></i> </span>
                                <input class="form-control" type="text" id="name" required="" value="" placeholder="Votre nom">
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
                            <label class="form-check-label" for="">Téléphone :</label>
                            <div class="input-group input-group-merge">
                                <span class="input-group-text" id="basic-addon11"><i class='bx bxs-phone fs-2' ></i> </span>
                                <input class="form-control" type="text" id="phone" required="" value="" placeholder="034 00 111 22">
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-check-label" for="">Mot de passe :</label>
                            <div class="input-group input-group-merge">
                                <span class="input-group-text" id="basic-addon11"><i class='bx bxs-key fs-2'></i> </span>
                                <input class="form-control" type="text" required="" value="123456"
                                placeholder="Entrer votre mot de passe">
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-check-label" for="">Confirmer mot de passe :</label>
                            <div class="input-group input-group-merge">
                                <span class="input-group-text" id="basic-addon11"><i class='bx bxs-key fs-2'></i> </span>
                                <input class="form-control" type="text" required="" value="123456"
                                placeholder="Entrer votre mot de passe">
                            </div>
                        </div>

                        <div class="form-group mb-3 ">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="accept" >
                            <label class="custom-control-label" for="accept">J' accepte le contrat d'utilisation</label>
                          </div>
                        </div>
                        
                        <div class="d-grid gap-2 ">
                            <button class="btn btn-block btn-success" @click="submitSignupForm()" >Créer maintenant</button>

                        </div>
                        <div class="mt-3" >
                            <p class="card-subtitle " >J' ai déjà un compte   <RouterLink class="text-success" to="/login">se connecter</RouterLink>  </p>
                        </div>
                </div>
            </div>
        </div>
    </ion-content>
    </ion-page>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    data () {
         return {
           router : useRouter(),
         }
    },
    mounted() {
        console.log("123");
    },
    methods : {
        submitSignupForm(){
            return this.router.push('/tabs/tab1');
        }
    }
}
</script>