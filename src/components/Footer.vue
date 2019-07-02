<template>
  <div class="l-footer">
    <div class="l-container l-flex l-flex__row l-flex__justify l-flex__align">
      <div class="l-footer-copyright">
        <a href="javascript:void(0);" target="_blank">Лайфхакер</a> | <a href="javascript:void(0);" target="_blank">Huawei</a> © 2018
      </div>
      <a href="javascript:void(0);" class="l-btn">Поделись с друзьями</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  };
</script>

<style lang="scss" scoped>

  .l-footer {
    padding: rem-calc(27) 0;
    background-color: #424242;

    &-copyright {
      font-size: 12px;
      line-height: 12px;
      color: #ffffff;

      a {
        color: #ffffff;
        text-decoration: none;
        transition: color 300ms;

        &:hover,
        &:focus {
          color: $color-general;
        }
      }
    }
    .l-btn {
      padding: rem-calc(10) rem-calc(22);
      font-size: 12px;
      line-height: 12px;
    }
  }


  @import "../scss/mixins/breakpoint.scss";

  //tablet
  @include breakpoint(large) {

    .l-footer {

      .l-container {
        width: auto;
        padding: 0 45px;
      }
      &-copyright {
        font-size: 11px;
        line-height: 11px;
      }
      .l-btn {
        padding: 9px 19px;
        font-size: 11px;
        line-height: 11px;
      }
    }
  }
  //mobile
  @include breakpoint(tablet) {
    .l-footer {

      .l-container {
        flex-direction: column;
      }
      &-copyright {
        order: 2;
        font-size: 11px;
        line-height: 11px;
      }
      .l-btn {
        order: 1;
        padding: 9px 42px;
        font-size: 11px;
        line-height: 11px;
        margin-bottom: 24px;
      }
    }
  }

</style>
