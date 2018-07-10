import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";

// Import F7
import Framework7 from "framework7/framework7.esm.bundle.js";

// Import F7 Vue Plugin
import Framework7Vue from "framework7-vue/framework7-vue.esm.bundle.js";

// Import F7 Styles
// eslint-disable-next-line
import Framework7Styles from "framework7/css/framework7.css";

// Import Icons and App Custom Styles
// eslint-disable-next-line
import IconsStyles from "./assets/css/icons.css";
// eslint-disable-next-line
import AppStyles from "./assets/css/app.css";

// Init F7 Vue Plugin
Framework7.use(Framework7Vue);

Vue.config.productionTip = false;

new Vue({
  store,
  mounted() {
    this.$f7ready(f7 => {
      f7.dialog.alert("Component mounted");
      console.log("App initialized", f7, "Utils", this.$utils);
    });
  },
  render: h => h(App)
}).$mount("#app");
