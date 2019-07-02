// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});


(function () {
    // create script
    let ontheMetricsScript = document.getElementById('ontheMetrics');
    if (!!ontheMetricsScript) {
        ontheMetricsScript.parentElement.removeChild(ontheMetricsScript);
    }

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.onthe.io/io.js/gBUxabBfgrsK';
    script.setAttribute('async', '');
    script.setAttribute('id', 'ontheMetrics');
    document.body.appendChild(script);

    const loc = window.location.href.split('?')[0];

    window._io_config = window._io_config || {};
    window._io_config["0.2.0"] = window._io_config["0.2.0"] || [];
    window._io_config["0.2.0"].push({
        page_url: loc,
        page_url_canonical: loc,
        page_title: document.title,
        page_type: 'article',
        page_language: "ru",
        article_type: "special",
        article_authors: [],
        article_categories: [],
        article_publication_date: 'Wed, 28 Nov 2018 17:00:00 +0300' // Заполнить перед релизом!
    });
})();
