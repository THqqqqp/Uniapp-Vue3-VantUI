import {createSSRApp} from "vue";
import App from "./App.vue";
import {router} from "@/router";
import {createPinia} from "pinia";

export function createApp() {
    const app = createSSRApp(App);
    const pinia = createPinia()

    app.use(router)
    app.use(pinia)
    return {
        app,
    };
}
