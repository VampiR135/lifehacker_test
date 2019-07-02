<template>
    <div class="l-about">
      <banner />
      <sale />
      <gallery />
    </div>
</template>

<script>

  const Banner = () => import('@/components/about/Banner.vue');
  const Sale = () => import('@/components/about/Sale.vue');
  const Gallery = () => import('@/components/about/Gallery.vue');

  export default {
    name: 'About',

    data : function() {
      return {
      }
    },
    components: {
      Banner,
      Sale,
      Gallery
    }
  };
</script>

<style lang="scss" scoped>

</style>
