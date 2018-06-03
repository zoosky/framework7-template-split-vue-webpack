/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "SW: App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    cached() {
      console.log("SW: Content has been cached for offline use.");
    },
    updated() {
      console.log("SW: New content is available; please refresh.");
    },
    offline() {
      console.log(
        "SW: No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("SW: Error during service worker registration:", error);
    }
  });
}
