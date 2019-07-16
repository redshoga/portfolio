<template>
  <div class="the-header">
    <div class="box">
      <img class="image" :src="imageUrl">
      <div class="title">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }

  }
}
</script>

<style lang="scss" scoped>
.the-header {
  border-bottom: 1px solid $color-border;
  background-color: $color-white;
  width: 100%;
  height: $header-height;

  .box {
    background-color: $color-main;
    height: $header-color-height;
    text-align: center;
    overflow: visible;
  }

  .title{
    @include font-bold;
    margin-top: $margin-size-1;
  }

  .image {
    margin-top: $header-color-padding-top;
    width: $header-icon-size;
    border-radius: 50%;
    border: $header-icon-border-size solid $color-white;
  }
}
</style>
