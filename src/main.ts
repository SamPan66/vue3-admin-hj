import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/assets/style/index.scss";
import App from "./App.vue";
import router from "@/router/index";

const app = createApp(App);

app.use(router).use(ElementPlus).mount("#app");
const windowSizeChange = (): void => {
  let winWidth, winHeight;
  if (window.innerWidth) winWidth = window.innerWidth;
  else if (document.body && document.body.clientWidth)
    winWidth = document.body.clientWidth;
  // 获取窗口高度
  if (window.innerHeight) winHeight = window.innerHeight;
  else if (document.body && document.body.clientHeight)
    winHeight = document.body.clientHeight;
  // 通过深入 Document 内部对 body 进行检测，获取窗口大小
  if (
    document.documentElement &&
    document.documentElement.clientHeight &&
    document.documentElement.clientWidth
  ) {
    winHeight = document.documentElement.clientHeight;
    winWidth = document.documentElement.clientWidth;
  }
  console.log(winWidth, winHeight);
  let appBox = document.getElementById("app");
  console.log(appBox);
  appBox.style.height = winHeight + "px";
};
windowSizeChange();
window.addEventListener("resize", windowSizeChange, false);
