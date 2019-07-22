<template>
  <div class="the-header">
    <div class="box">
      <img class="image" :src="imageUrl">
      <div class="title">
        {{ title }}
      </div>
      <div class="urls-container">
        <a v-for="(link, index) in links" :key="index" :href="link.url">
          <div>
            {{ link.title }}
          </div>
        </a>
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
    },
    links: {
      type: Array,
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
  position: relative;

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

  .urls-container {
    position: absolute;
    bottom: 0;

    & div {
      display: inline-block;
      cursor: pointer;
      padding: $margin-size-1;
      padding-bottom: $margin-size-1 + 4px;

      &:hover {
        padding-bottom: $margin-size-1;
        border-bottom: 4px solid $color-main;
        box-sizing: border-box;
      }
    }
  }
}
</style>
