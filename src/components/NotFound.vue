<template>
    <div class="l-notfound l-flex l-flex__row l-flex__align">
        Кто-то сломал наш сайт!<br/>
        На самом деле нет – просто такая страница не найдена.<br/>
        Попробуйте вернуться на главную страницу.
    </div>
</template>

<script>
  export default {
    name: 'NotFound'
  };
</script>

<style lang="scss" scoped>
    .l-notfound {
        justify-content: center;
        height: calc(100vh - 70px - 88px);
        text-align: center;
        text-align-last: center;
        font-size: 20px;
        line-height: 28px;
    }

    @import "../scss/mixins/breakpoint.scss";

    //tablet
    @include breakpoint(large) {
        .l-notfound {
            justify-content: center;
            height: calc(100vh - 36px - 85px);
        }
    }
    //mobile
    @include breakpoint(tablet) {
        .l-notfound {
            justify-content: center;
            height: calc(100vh - 36px - 120px);
        }
    }
</style>
