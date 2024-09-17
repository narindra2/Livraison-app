<template>
    <ion-page>
    <ion-content :fullscreen="true">
        <div class="mt-5 container ">
            <div class="card shadow mb-2">
                <div class="card-body">
                    <h4 class="card-subtitle mb-3">Bienvenue</h4>
                    <p class="card-subtitle">Entrer vos indetifiants pour <span class="text-dark">continue.</span> </p>
                </div>
            </div>
            <div class="card shadow ">
                <div class="card-body">
                        <div class="form-group mb-3">
                            <label class="form-check-label" for="">Email :</label>
                            <div class="input-group input-group-merge">
                                <span class="input-group-text" id="basic-addon11"><i class='bx bxs-user-circle fs-2' ></i> </span>
                                <input class="form-control" type="email" id="email" required="" value="john@deo.com" placeholder="john@deo.com">
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label  class="form-check-label" for="password1">Mot de passe</label>
                            <div class="input-group input-group-merge">
                                <label class="input-group-text" id="basic-addon11"><i class='bx bxs-lock-alt fs-2'></i> </label>
                                <input class="form-control form-control-success" :type="inputPassword" required="" id="password1" value="123456"
                                placeholder="Entrer votre mot de passe">
                                <span class="input-group-text cursor-pointer" @click="inputPassword == 'text' ? inputPassword='password' : inputPassword='text' " id="basic-default-password">
                                    <i v-if="inputPassword == 'password'" class="bx bx-hide fs-2"></i>
                                    <i v-else class='bx bx-show fs-2' ></i>
                                </span>
                            </div>
                        </div>
                        <div class="form-group mb-3 ">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" >
                            <label class="form-check-label" for="defaultCheck3"> Se souvenir de moi. </label>
                          </div>
                        </div>
                       
                        <div class="d-grid gap-2 ">
                            <button class=" btn  btn-success" @click="submitLoginForm()" >Se connecter</button>
                        </div>
                        
                        <div class="mt-3 row" >
                            <div class="col-md-6 mb-3">
                                <p class="card-subtitle" > <RouterLink class="text-success" to="/signup">Créer un compte.</RouterLink>  </p>
                            </div>
                            <div class="col-md-6 mb-2">
                                <p class="card-subtitle" > <RouterLink class="text-dark" to="/forgetPassword">Mot de passe oublié ?</RouterLink>  </p>
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
            inputPassword : "password"
         }
    },
    mounted() {
        
    },
    methods : {
        submitLoginForm(){
            return this.router.push('/tabs/tab1');
        }
    }
}
</script>