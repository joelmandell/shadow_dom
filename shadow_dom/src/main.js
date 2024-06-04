/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

const shadow = document.querySelector("#host").attachShadow({ mode: "open" });

app.mount(shadow)

const csslink = document.createElement('link');
csslink.id = "vuejs";
csslink.rel = 'stylesheet';
csslink.href = 'dist/index.css';
shadow.appendChild(csslink)
const vOverlay = document.createElement("div");
vOverlay.className = "v-overlay-container";
shadow.appendChild(vOverlay);
console.log(csslink)
