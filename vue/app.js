import Vue from 'vue';

Vue.component('index-page', require('./pages/IndexPage.vue'));

const app = new Vue({
    el: '#app',
});
