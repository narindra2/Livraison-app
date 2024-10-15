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
                    <VeeForm v-slot="{ handleSubmit  ,errors  ,meta ,isSubmitting  }" :validation-schema="schema" as="div" @invalid-submit="onInvalidSubmit" >
                    <form  @submit="handleSubmit($event, onSubmit)"   >
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
                            <button class=" btn  btn-success" type="submit" :disabled ="!meta.valid ||  showLoading " >
                                Se connecter
                                <span v-show="showLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            </button>
                        </div>
                        <div class="d-grid gap-2 mt-3">
                            <button class=" btn  btn-success" @click="ping()" :disabled =" showLoading " >
                               Ping
                                <span v-show="showLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            </button>
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
import {   saveDataInLocalStorage , isAuthenticated } from '@/services/authService';
// import { axiosInstance  } from '@/services/utilService';
import axios from 'axios';
import { useRouter } from 'vue-router';
export default {
    data () {
         return {
            router :  useRouter(),
            inputPassword : "password",
            loginMessage : "",
            showLoading  : false,
            schema  : {
                email: 'required|email',
                password: 'required|min:4',
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
            this.showLoading =  true;
            axiosInstance.post("/api/sigin",dataForm).then(   async( response)  =>  {
                if(!response.data.success && response.data.connection){
                    this.loginMessage = response.data.message
                }else{
                    await saveDataInLocalStorage("authUserInfo" ,response.data.authData)
                    const isAuth =  await isAuthenticated();
                    if (isAuth) {
                        this.router.replace({ name: 'home'})
                    }
                }
                this.showLoading =  false;
            }).catch( (error)  => {
                this.loginMessage  = `Message : ${error.message} - status ${error.status} ` 
                console.log(error);
                this.showLoading =  false;
            });
        },
        async ping(){
            console.log("ping ping ...");
            this.loginMessage = "";
            this.showLoading =  true;
            await axios.post("https://testeur-app.zkcl3814.odns.fr/api/ping" ,{},{
                headers : {
                    "Access-Control-Allow-Origin": "*",
                },
                proxy: {
                    host: 'https://testeur-app.zkcl3814.odns.fr',
                    // port: 3333
                }
            }).then( ( response)  =>  {
                console.log(response.data);
                this.showLoading =  false;
            }).catch( (error)  => {
                this.loginMessage  = `Message : ${error.message} - status ${error.status} ` 
                console.log(error);
                this.showLoading =  false;
            });
        },
         onInvalidSubmit({ values, errors, results }) {
            if (errors) {
                
            }
        }
    }
}
</script>