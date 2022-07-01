import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/assets/style/index.scss";
import App from "./App.vue";
import router from "@/router/index";
import { windowSizeChange } from "@/utils/winsize";

const app = createApp(App);
console.log(app.config)
app.use(router).use(ElementPlus).mount("#app");

windowSizeChange();
window.addEventListener("resize", windowSizeChange, false);
