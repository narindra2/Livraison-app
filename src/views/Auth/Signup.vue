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
                    <VeeForm v-slot="{ handleSubmit  ,errors  ,meta   }" :validation-schema="schema" as="div" @invalid-submit="onInvalidSubmit">
                        <form  @submit="handleSubmit($event, onSubmit)"  :validation-schema="schema">
                        <div class="form-group mb-3">
                            <label class="form-check-label" for="">Nom :</label>
                            <div class="input-group input-group-merge">
                                <span class="input-group-text" ><i class='bx bxs-user-circle fs-2' ></i> </span>
                                <Field class="form-control" name="name" type="text"  placeholder="Votre nom"/>
                            </div>
                            <ErrorInputForm :message="errors.name"/>

                        </div>
                        <div class="form-group mb-3">
                            <label class="form-check-label" for="">Email :</label>
                            <div class="input-group input-group-merge">
                                <span class="input-group-text" ><i class='bx bxs-envelope fs-2' ></i> </span>
                                <Field class="form-control" type="email" name="email"  value="john@deo.com" placeholder="john@deo.com"/>
                            </div>
                            <ErrorInputForm :message="errors.email"/>
                            <ErrorInputForm :message="emaiAlreadyExist"/>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-check-label" for="">Téléphone :</label>
                            <div class="input-group input-group-merge">
                                <span class="input-group-text" ><i class='bx bxs-phone fs-2' ></i> </span>
                                <Field class="form-control" type="text" name="phone" value="" placeholder="034 00 111 22"/>
                            </div>
                            <ErrorInputForm :message="errors.phone"/>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-check-label" for="">Mot de passe :</label>
                            <div class="input-group input-group-merge">
                                <span class="input-group-text" ><i class='bx bxs-key fs-2'></i> </span>
                                <Field class="form-control" suggested="new-password" type="password" name="password" value="123456" placeholder="Entrer votre mot de passe" />
                            </div>
                            <ErrorInputForm :message="errors.password"/>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-check-label" for="">Confirmer mot de passe :</label>
                            <div class="input-group input-group-merge">
                                <span class="input-group-text" ><i class='bx bxs-key fs-2'></i> </span>
                                <Field class="form-control"  suggested="new-password" type="password" name="confirm" value="123456" placeholder="Entrer votre mot de passe"/>
                            </div>
                            <ErrorInputForm :message="errors.confirm"/>
                        </div>

                        <div class="form-group mb-2 ">
                            <div class="form-check">
                            <Field class="form-check-input" type="checkbox" :value="true" name="accept_cdu" id="accept_cdu" />
                            <label class="custom-control-label" for="accept_cdu">J' accepte le contrat d'utilisation</label>
                          </div>
                          <ErrorInputForm :message="errors.accept_cdu"/>
                        </div>
                        <ErrorInputForm class="text-center" v-if="signupMessage" :message="signupMessage"/>
                        <div class="d-grid gap-2 ">
                            <button class="btn btn-block btn-success"  type="sumbit" :disabled ="!meta.valid ||  showLoading"  >
                                Créer maintenant
                                <span v-show="showLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            </button>
                        </div>
                    </form>
                </VeeForm>
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
import { axiosInstance } from '@/services/utilService';
import { useRouter } from 'vue-router';
export default {
    data () {
         return {
           router : useRouter(),
           signupMessage : "",
           emaiAlreadyExist : "",
           showLoading  : false,
           schema  : {
                name : 'required|min:4', 
                email: 'required|email',
                phone : 'required|min:10|max:10', 
                password: 'required|min:4',
                confirm  :'required|confirmed:@password', 
                accept_cdu : (value) => {
                    if (value && value == true) {
                        return true;
                    }
                    return 'Veuillez accepter le contrat d\'utilisation.';
                }
            }
         }
    },
    mounted() {
        console.log("123");
    },
    methods : {
        async onSubmit(dataForm){
            this.signupMessage = "";
            this.emaiAlreadyExist = "";
            this.showLoading =  true;
            axiosInstance.post("/api/signup",dataForm).then(async( response)  =>  {
                if(!response.data.success && response.data.connection){
                    if (response.data.emaiAlreadyExist) {
                        this.emaiAlreadyExist  =  response.data.message
                    }else{
                        this.signupMessage  =  response.data.message
                    }
                }else{
                  
                }
                this.showLoading =  false;
                console.log(response.data);
            }).catch( (error)  => {
                this.signupMessage  = `Message : ${error.message} - status ${error.status} ` 
                console.log(error);
                this.showLoading =  false;
            });
        },
    }
}
</script>