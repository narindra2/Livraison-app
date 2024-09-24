<template>
    <ion-page>
    <ion-content :fullscreen="true">
        <div class="mt-1 container ">
                    <div class="card-body text-center">
                        <div class="app-brand justify-content-center logo-login" >
                     <img src="/assets/images/logo.png" style="object-fit: cover;" class="d-block rounded mb-0" height="150" width="150" >
                </div>
                  </div>
                
            <div class="card shadow mb-2">
                <div class="card-body">
                    <h4 class="card-subtitle mb-3">Bienvenue</h4>
                    <p class="card-subtitle">Entrer vos indetifiants pour <span class="text-dark">continue.</span> </p>
                </div>
            </div>
            <div class="card shadow ">
                <div class="card-body">
                    <VeeForm v-slot="{ handleSubmit  ,errors  ,meta   }" :validation-schema="schema" as="div" @invalid-submit="onInvalidSubmit">
                    <form  @submit="handleSubmit($event, onSubmit)"  :validation-schema="schema">
                        <div class="form-group mb-3">
                            <label class="form-check-label" for="">Email :</label>
                            <div class="input-group input-group-merge">
                                <span class="input-group-text" id="basic-addon11"><i class='bx bxs-user-circle fs-2' ></i> </span>
                                <Field  class="form-control"   name="email" placeholder='john@gmail.com' />
                            </div>
                            <ErrorInputForm :message="errors.email"/>
                        </div>
                        <div class="form-group mb-3">
                            <label  class="form-check-label" for="password1">Mot de passe</label>
                            <div class="input-group input-group-merge">
                                <label class="input-group-text" id="basic-addon11"><i class='bx bxs-lock-alt fs-2'></i> </label>
                                <Field class="form-control form-control-success" :type="inputPassword" name="password"   placeholder="Entrer votre mot de passe"/>
                                <span class="input-group-text cursor-pointer" @click="inputPassword == 'text' ? inputPassword='password' : inputPassword='text' " id="basic-default-password">
                                    <i v-if="inputPassword == 'password'" class="bx bx-hide fs-2"></i>
                                    <i v-else class='bx bx-show fs-2' ></i>
                                </span>
                            </div>
                            <ErrorInputForm :message="errors.password"/>
                        </div>
                        <div class="form-group mb-3 ">
                            <div class="form-check">
                                <Field class="form-check-input" type="checkbox" name="remeberme" id="remeberme" :value="true" />
                                <label class="form-check-label" for="remeberme"> Se souvenir de moi. </label>
                            </div>
                        </div>
                        <ErrorInputForm class="text-center" v-if="loginMessage" :message="loginMessage"/>
                        <div class="d-grid gap-2 ">
                            <button class=" btn  btn-success" :disabled ="!meta.valid" >Se connecter</button>
                        </div>
                        
                        <div class="mt-3 row" >
                            <div class="col-md-6 mb-3">
                                <p class="card-subtitle" > <RouterLink class="text-success" to="/signup">Créer un compte.</RouterLink>  </p>
                            </div>
                            <div class="col-md-6 mb-2">
                                <p class="card-subtitle" > <RouterLink class="text-dark" to="/forgetPassword">Mot de passe oublié ?</RouterLink>  </p>
                            </div>
                        </div>
                    </form>
                </VeeForm>
                </div>
            </div>
        </div>
    </ion-content>
    </ion-page>
</template>
<style>
.logo-login{
    margin-top: -48px; 
    margin-bottom: -40px; 
    margin-right: 67px;
}
</style>
<script>
import { axiosInstance, getDataInLocalStorage, saveDataInLocalStorage , isAuthenticated } from '@/services/authService';
import { useRouter } from 'vue-router';
export default {
    data () {
         return {
            router :  useRouter(),
            inputPassword : "password",
            loginMessage : "",
            schema  : {
                email: 'required|email',
                password: 'required|min:2',
                remeberme : (value) => {
                   return true
                }
            }
         }
    },
    mounted() {
        
    },
    methods : {
        async onSubmit(dataForm){
            this.loginMessage = "";
            axiosInstance.post("/api/singin",dataForm).then( response =>  {
                if(!response.data.success && response.data.connection){
                    this.loginMessage = response.data.message
                }else{
                    saveDataInLocalStorage("authUserInfo" ,response.data.authData)
                    const isAuth =  isAuthenticated();
                    if (isAuth) {
                        this.router.push({ name: 'home'})
                    }
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
         onInvalidSubmit({ values, errors, results }) {
            if (errors) {
                
            }
        }
    }
}
</script>