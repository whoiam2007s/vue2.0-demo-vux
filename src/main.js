// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from 'routes'
import store from 'store'
import exts from './extends';

Vue.use(exts);

const FastClick = require('fastclick');
FastClick.attach(document.body);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
