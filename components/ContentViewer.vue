<template>
  <div class="contents-viewer">
    <div class="title">
      {{ title }}
    </div>
    <div class="description">
      {{ description }}
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
    description: {
      type: String,
      required: false,
      default: null
    },
    type: {
      type: String,
      required: true
    },
    data: {
      type: [Object, Array],
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>
.contents-viewer {
  padding: $margin-size-1;
  border-bottom: 1px solid $color-border;

  &:last-child {
    border-bottom: none;
  }

  .title {
    @include font-bold;
  }

  .description {
  }
}
</style>
