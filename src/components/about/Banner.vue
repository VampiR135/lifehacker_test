<template>
  <div class="l-banner">
    <div class="l-banner-wrapper">
      <swiper
        :options="bannerSlider"
        ref="bannerSlider">
        <swiper-slide
          class="l-banner-item"
          :class="'l-banner-item__' + ( index + 1 )"
          v-for="(bannerItem, index) in bannerSliderList"
          :key="'banner_' + index">
          <div class="l-banner-item-img" :style="{ 'background-image': 'url(' + bannerItem.image + ')' }"><!-- --></div>
          <p>{{ bannerItem.text }}</p>
        </swiper-slide>
      </swiper>
    </div>
    <div class="swiper-pagination l-banner-pagination" slot="pagination"><!-- --></div>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    data : function() {
      return {
        bannerSlider: {
          observer: true,
          slidesPerView: 4,
          spaceBetween: 0,
          pagination: {
            el: '.l-banner-pagination',
            clickable: true
          },
          autoplay: {
            delay: 5000,
          },
          allowTouchMove: false,
          breakpoints: {
            800: {
              slidesPerView: 1,
              allowTouchMove: true
            },
            1120: {
              slidesPerView: 1,
              allowTouchMove: true
            }
          }
        },
        bannerSliderList: [
          {
            text: 'Мой офис — это моя голова',
            image: '../../static/banner_1.jpg'
          },
          {
            text: 'Мой офис — это моя голова',
            image: '../../static/banner_2.jpg'
          },
          {
            text: 'Мой офис — это моя голова',
            image: '../../static/banner_3.jpg'
          },
          {
            text: 'Мой офис — это моя голова',
            image: '../../static/banner_4.jpg'
          }
        ],
      }
    },
  };
</script>

<style lang="scss" scoped>

  .l-banner {
    position: relative;
    margin-bottom: rem-calc(100);

    &-item {

      &__1 {
        .l-banner-item-img {
          background-position: 25% 50%;
        }
      }
      &-img {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: rem-calc(524);
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
      }
      p {
        width: 245px;
        position: absolute;
        font-size: 36px;
        line-height: 46px;
        color: #ffffff;
        text-transform: uppercase;
        font-weight: 600;
        top: 10%;
        right: 3%;
        margin: 0;
      }
    }
  }

  @media screen and (min-width: 1120px) {
    .l-banner-wrapper {

      .l-banner-item {
        position: relative;
        transition: width 500ms;
        width: 25% !important;
        overflow: hidden;

        &-img {
          transition: filter 400ms, background-position 500ms;
          filter: grayscale(100%);
        }
        p {
          width: 260px;
          position: absolute;
          font-size: 36px;
          line-height: 42px;
          color: #ffffff;
          text-transform: uppercase;
          font-weight: 600;
          top: 16.6%;
          right: 7.5%;
          letter-spacing: 1px;
          transform: translateX(120%);
          transition: transform 500ms;
          z-index: 1;
        }
      }
      &:hover {
        .l-banner-item {
          width: 16.666% !important;
        }
      }
      .l-banner-item {

        &:hover {
          width: 50% !important;

          .l-banner-item-img {
            filter: grayscale(0%);
            background-position: 90% 50%;
          }
          p {
            transform: translateX(0%);
          }
        }
        &__1:hover {

          .l-banner-item-img {
            background-position: 55% 50%;
          }
        }
      }
      .l-banner-pagination {
        display: none;
      }
    }
  }

  @import "../../scss/mixins/breakpoint.scss";

  //tablet
  @include breakpoint(large) {
    .l-banner {

      &-item {

        p {
          width: 210px;
          font-size: 29px;
          line-height: 37px;
          top: 22%;
          right: 10%;
          letter-spacing: 0.8px;
        }
        &-img {
          padding-bottom: 54%;
        }
      }
    }
  }
  //mobile
  @include breakpoint(tablet) {
    .l-banner {
      margin-bottom: rem-calc(175);

      &-item {

        &-img {
          padding-bottom: 150%;
        }
        p {
          top: 51%;
          right: auto;
          left: 8.3%;
        }
      }
    }
  }

</style>

<style lang="scss">

  @import "../../scss/mixins/breakpoint.scss";

  //tablet
  @include breakpoint(large) {
    .l-banner-pagination {
      position: absolute;
      left: 0;
      bottom: 12px;
      width: 100%;
      text-align: center;
      text-align-last: center;

      .swiper-pagination-bullet {
        position: relative;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 0 7px;
        background-color: $color-general;
        transition: background-color 300ms;
        opacity: 1;

        &:before,
        &:after {
          content: '';
          position: absolute;
          top: -2px;
          right: -2px;
          bottom: -2px;
          left: -2px;
          border-radius: 50%;
          border: 1px solid transparent;
        }
        &-active {
          background-color: transparent;

          &:before,
          &:after {
            border-color: #ffffff;
          }
        }
      }
    }
  }

</style>
