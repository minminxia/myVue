import HelloWorld from "./components/HelloWorld.vue";
// import img from './assets/logo.png';

export default function APP() {
  const img = require("./assets/logo.png"); // eslint-disable-line

  return (
    <div id="app">
      <img src={img} alt="Vue logo" />
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
  );
}
