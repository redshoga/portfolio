<template>
  <div class="images-viewer">
    <div v-for="(content, index) in images" :key="index" class="image-container">
      <img :src="content.imageUrl">
      <div>{{ content.title }}</div>
      <div>{{ content.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
// https://digipress.info/tech/pure-css-flexbox-masonry-sample/
// https://qiita.com/QUANON/items/e14949abab3711ca8646
.images-viewer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .image-container {
    img {
      width: 100%;
      border-radius: 8px;
    }
    width: 30%;
    margin-right: 5%;
    &:nth-child(3n) {
      margin-right: 0;
    }
    padding-bottom: $margin-size-1;
  }
  margin-bottom: -$margin-size-1;
}
</style>
