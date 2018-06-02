import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";

// Import F7
import Framework7 from "framework7/dist/framework7.esm.bundle.js";

// Import F7 Vue Plugin
import Framework7Vue from "framework7-vue/dist/framework7-vue.esm.bundle.js";

// Import F7 Styles
// eslint-disable-next-line
import Framework7Styles from "framework7/dist/css/framework7.css";

// Import Icons and App Custom Styles
// eslint-disable-next-line
import IconsStyles from "./assets/css/icons.css";
// eslint-disable-next-line
import AppStyles from "./assets/css/app.css";

// Import Routes
import Routes from "./routes.js";

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7);

Vue.config.productionTip = false;

new Vue({
  // Init Framework7 by passing parameters here
  framework7: {
    id: "io.framework7.testapp", // App bundle ID
    name: "Framework7", // App name
    theme: "auto", // Automatic theme detection
    // App routes
    routes: Routes,
    // Enable panel left visibility breakpoint
    panel: {
      leftBreakpoint: 960
    }
  },
  store,
  render: h => h(App)
}).$mount("#app");
