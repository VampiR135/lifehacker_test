<template>
  <div class="l-gallery">
    <div class="l-container">
      <div class="l-gallery-slider">
        <swiper :options="gallerySlider" ref="gallerySlider" key="gallery-slider">
          <swiper-slide>
            <div class="l-gallery-item"><!-- --></div>
          </swiper-slide>
          <swiper-slide>
            <div class="l-gallery-item"><!-- --></div>
          </swiper-slide>
          <swiper-slide>
            <div class="l-gallery-item"><!-- --></div>
          </swiper-slide>
          <swiper-slide>
            <div class="l-gallery-item"><!-- --></div>
          </swiper-slide>
          <swiper-slide>
            <div class="l-gallery-item"><!-- --></div>
          </swiper-slide>
          <swiper-slide>
            <div class="l-gallery-item"><!-- --></div>
          </swiper-slide>
          <swiper-slide>
            <div class="l-gallery-item"><!-- --></div>
          </swiper-slide>
          <swiper-slide>
            <div class="l-gallery-item"><!-- --></div>
          </swiper-slide>
          <swiper-slide>
            <div class="l-gallery-item"><!-- --></div>
          </swiper-slide>
          <swiper-slide>
            <div class="l-gallery-item"><!-- --></div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev l-gallery-prev l-svg" slot="button-next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.63 44.43"><path d="M.29 21.51a.996.996 0 0 0 0 1.41l1.41 1.41 19.8 19.8c.39.39 1.02.39 1.41 0l1.41-1.41a.996.996 0 0 0 0-1.41L5.24 22.21 24.33 3.12a.996.996 0 0 0 0-1.41L22.92.3a.996.996 0 0 0-1.41 0L1.71 20.1.29 21.51z"/></svg>
        </div>
        <div class="swiper-button-next l-gallery-next l-svg" slot="button-prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.63 44.43"><path d="M22.92 20.09L3.12.29a.996.996 0 0 0-1.41 0L.29 1.71a.996.996 0 0 0 0 1.41l19.09 19.09L.29 41.31a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l19.8-19.8 1.41-1.41a.996.996 0 0 0 0-1.41l-1.4-1.42z"/></svg>
        </div>
      </div>
      <div class="swiper-pagination l-gallery-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    data : function() {
      return {
        gallerySlider: {
          observer: true,
          slidesPerView: 5,
          spaceBetween: 20,
          pagination: {
            el: '.l-gallery-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.l-gallery-prev',
            prevEl: '.l-gallery-next'
          },
          breakpoints: {
            767: {
              slidesPerView: 1
            },
            1200: {
            }
          }
        },
      }
    },
  };
</script>

<style lang="scss" scoped>

  .l-gallery {
    padding: rem-calc(53) 0;
    background-color: #111111;

    &-slider {
      position: relative;
      padding: 0 50px;
    }
    &-item {
      width: 100%;
      padding-bottom: 100%;
      box-sizing: border-box;
      border: 2px solid #ffffff;
    }
    &-prev,
    &-next {
      position: absolute;
      width: 26px;
      height: 0;
      padding-bottom: 46px;
      margin-top: -23px;
      background: none;

      svg {
        fill: $color-general;
        transition: fill 300ms;
      }
      &:hover {
        svg {
          fill: #ffffff;
        }
      }
    }
    &-prev {
      left: 0;
    }
    &-next {
      right: 0;
    }
  }

  @import "../../scss/mixins/breakpoint.scss";

  //tablet
  @include breakpoint(large) {
    .l-gallery {
      padding: rem-calc(87) 0 rem-calc(35);

      &-slider {
        margin: 0 25px;
      }

      &-prev,
      &-next {
        width: 20px;
      }
    }
  }
  //mobile
  @include breakpoint(tablet) {
    .l-gallery {
      padding: 30px 0 50px;

      &-slider {
        margin: 0 10px;
      }
    }
  }
</style>

<style lang="scss">

  .l-gallery {

    .swiper-pagination {
      position: relative;
      width: 100%;
      text-align: center;
      text-align-last: center;
      margin-top: 28px;

      &-bullet {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        opacity: 1;
        margin: 0 8px;
        border: 1px solid $color-general;
        background-color: $color-general;

        &-active {
          background-color: transparent;
        }
      }
    }
  }

  @import "../../scss/mixins/breakpoint.scss";

  //tablet
  @include breakpoint(large) {
    .l-gallery {

      .swiper-pagination {
        margin-top: 39px;
      }
    }
  }
  //mobile
  @include breakpoint(tablet) {

    .l-gallery {

      .swiper-pagination {

        &-bullet {
          width: 6px;
          height: 6px;
        }
      }
    }
  }

</style>
