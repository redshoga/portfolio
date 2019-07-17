<template>
  <div class="the-footer">
    &copy; 2019 <img class="image" :src="imageUrl">
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.the-footer {
  height: $footer-height;
  line-height: $footer-height;
  width: 100%;
  background-color: $color-white;
  text-align: center;

  .image {
    width: 20px;
    border-radius: 50%;
    transform: translateY(5px);
  }
}
</style>
