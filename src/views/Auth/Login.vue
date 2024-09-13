<template>
    <ion-page>
    <ion-content :fullscreen="true">
        <div class="mt-5 container">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Bienvenue</h4>
                    <h5 class="card-subtitle">Entrer vos indetifiants pour <span class="text-success">continue.</span> </h5>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input class="form-control" type="email" id="email" required="" value="john@deo.com" placeholder="john@deo.com">
                        </div>
                        <div class="form-group mb-5">
                            <label for="password1">Mot de passe</label>
                            <input class="form-control" type="password" required="" id="password1" value="123456"
                                placeholder="Entrer votre mot de passe">
                        </div>

                        <div class="form-group ">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck2">
                                <label class="custom-control-label" for="customCheck2">Se souvenir de moi</label>
                            </div>
                        </div>
                        <div class="form-group  text-center">
                            <button class="btn btn-block btn-success" @click="submitLoginForm()" >Se connecter</button>
                        </div>
                        <div class="mt-3 row" >
                            <div class="col-md-6">
                                <h5 class="card-subtitle" > <RouterLink class="text-success" to="/signup">Créer un compte</RouterLink>  </h5>
                            </div>
                            <div class="col-md-6">
                                <h5 class="card-subtitle" > <RouterLink class="text-dark" to="/forgetPassword">Mot de passe oublié ?</RouterLink>  </h5>
                            </div>
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
        submitLoginForm(){
            return this.router.push('/tabs/tab3');
        }
    }
}
</script>