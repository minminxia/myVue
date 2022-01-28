// import App from "./App.vue";

import { createApp, defineComponent, h } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

// import img from "./assets/logo.png"; // 不符合ts规范
const img = require("./assets/logo.png"); // eslint-disable-line

// 用h函数重写APP.vue
// h函数源码：package>runtime-core>src>h.ts
const App = defineComponent({
  render() {
    return h("div", { id: "app" }, [
      h("img", {
        alt: "Vue logo",
        src: img,
      }),
      h(HelloWorld, {
        msg: "Welcome to Your Vue.js + TypeScript App",
      }),
    ]);
  },
});

createApp(App).mount("#app");
