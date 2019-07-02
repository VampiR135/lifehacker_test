<template>
  <div id="app" class="l-wrapper" :data-io-article-url="getLocation()">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
  import Header from './components/Header';
  import Footer from './components/Footer';

    export default {
        name: 'App',
        methods: {
            getLocation() {
                return window.location.href.split('?')[0];
            }
        },
      components: {
        appHeader: Header,
        appFooter: Footer
      }
    };
</script>

<style lang="scss">

  @import "scss/app.scss";

</style>
