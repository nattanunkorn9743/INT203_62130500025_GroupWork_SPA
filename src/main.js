import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import Basket from './components/Basket.vue'
// createApp(App).use(router).mount("#app");
createApp(App).component("bas-ket",Basket).use(router).mount('#app')
