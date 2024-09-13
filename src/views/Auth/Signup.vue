<template>
    <ion-page>
    <ion-content :fullscreen="true">
        <div class="mt-2 container">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Bienvenue  à vous</h4>
                    <h5 class="card-subtitle">Entrer vos indetifiants pour <span class="text-dark">créer votre compte.</span> </h5>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                        <div class="form-group">
                            <label for="name">Nom</label>
                            <input class="form-control" type="text" id="name" required="" value="" placeholder="Votre nom">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input class="form-control" type="email" id="email" required="" value="john@deo.com" placeholder="john@deo.com">
                        </div>
                        <div class="form-group ">
                            <label for="phone">Mot de passe</label>
                            <input class="form-control" type="text" required="" id="phone" placeholder="034 00 111 22" >
                        </div>
                        <div class="form-group ">
                            <label for="password1">Mot de passe</label>
                            <input class="form-control" type="password" required="" id="password1" value="123456"
                                placeholder="Entrer votre mot de passe">
                        </div>
                        <div class="form-group ">
                            <label for="password1">Confirmer mot  de passe</label>
                            <input class="form-control" type="password" required="" id="password1" value="123456"
                                placeholder="Confirmer votre mot de passe">
                        </div>

                        <div class="form-group ">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="accept">
                                <label class="custom-control-label" for="accept">J' accepte le contrat d'utilisation</label>
                            </div>
                        </div>
                        <div class="form-group  text-center">
                            <button class="btn btn-block btn-success" @click="submitSignupForm()" >Créer maintenant</button>
                        </div>
                        <div class="mt-3" >
                            <p class="card-subtitle fs-2" >J' ai déjà un compte   <RouterLink class="text-success" to="/login">se connecter</RouterLink>  </p>
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
           router :  useRouter(),
         }
    },
    mounted() {
        console.log("123");
    },
    methods : {
        submitSignupForm(){
            return this.router.push('/tabs/tab3');
        }
    }
}
</script>