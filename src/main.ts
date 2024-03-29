import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library, IconPack  } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AsyncComputed from "vue-async-computed";

library.add(fas as IconPack, fab as IconPack);

Vue.component("fa", FontAwesomeIcon);

Vue.use(AsyncComputed);

Vue.config.productionTip = false;

document.title = "Poleski's Portfolio";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
