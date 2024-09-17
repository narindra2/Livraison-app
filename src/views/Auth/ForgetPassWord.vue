<template>
    <ion-page>
    <ion-content :fullscreen="true">
        <div class="mt-5 container">
            <div class="card mb-2 ">
                <div class="card-body ">
                    <h4 class="card-title">Reinitilaisation de mot de passe</h4>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="form-group mb-2">
                        <label for="email">Entrer votre email</label>
                        <input class="form-control" type="email" id="email" required="" value="john@deo.com" placeholder="john@deo.com">
                    </div>
                    <div class="d-grid gap-2 mt-2 ">
                        <button class="btn btn-block btn-success" @click="submitResetForm()" >Envoyé le code 04  fichres</button>
                        </div>
                        <div class="text-center mt-2">
                            <i class="bx bx-chevron-left scaleX-n1-rtl bx-sm text-success"></i>
                            <RouterLink class="text-success" to="/login">Retourne se connecter</RouterLink> 
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
        submitResetForm(){
            return this.router.push('/login');
        }
    }
}
</script>