import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

//https://vee-validate.logaretm.com/v4/guide/global-validators/
import { defineRule } from 'vee-validate';
import { Form as VeeForm, Field   } from 'vee-validate';
import { all } from '@vee-validate/rules';
Object.entries(all).forEach(([name, rule]) => {
  defineRule(name, rule);
});
import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import { setLocale } from '@vee-validate/i18n';
// import fr from '@vee-validate/i18n/dist/locale/fr.json';
import fr from '../assets/validation/fr.json';
setLocale('fr');
configure({
  generateMessage: localize({fr}),
});
import { IonPage ,IonContent ,IonChip ,IonRefresher, IonRefresherContent,IonToolbar ,IonTitle , IonHeader ,IonFabButton ,IonFab ,IonFabList} from '@ionic/vue';
import ErrorInputForm from '@/views/Components/ErrorInputForm.vue';
const app = createApp(App)
  .use(IonicVue)
  .component("IonPage" , IonPage)
  .component("IonChip" , IonChip)
  .component("IonContent" , IonContent)
  .component("IonRefresher" , IonRefresher)
  .component("IonToolbar" , IonToolbar)
  .component("IonTitle" , IonTitle)
  .component("IonHeader" , IonHeader)
  .component("IonFabButton" , IonFabButton)
  .component("IonFab" , IonFab)
  .component("IonFabList" , IonFabList)
  .component("IonRefresherContent" , IonRefresherContent)
  .component("ErrorInputForm" , ErrorInputForm)
  .component("VeeForm" , VeeForm)
  .component("Field" , Field)
  .use(router);
router.isReady().then(() => {
  app.mount('#app');
});
