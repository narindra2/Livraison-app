<template>
    <ion-page>
    <ion-content :fullscreen="true">
        <div class="mt-5 container">
            <div class="card ">
                <div class="card-body ">
                    <h4 class="card-title">Reinitilaisation de mot de passe</h4>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="form-group">
                        <label for="email">Entrer votre email</label>
                        <input class="form-control" type="email" id="email" required="" value="john@deo.com" placeholder="john@deo.com">
                    </div>
                    <div class="form-group  text-center">
                        <button class="btn btn-block btn-success" @click="submitResetForm()" >Envoyé le code 04  fichres</button>
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