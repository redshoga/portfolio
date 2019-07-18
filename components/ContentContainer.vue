<template>
  <div :id="id" class="contents-viewer">
    <div class="title">
      {{ title }}
    </div>
    <div class="description">
      {{ description }}
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: null
    }
  }

}
</script>

<style lang="scss" scoped>
.contents-viewer {
  padding: $margin-size-1 * 3;
  border-bottom: 1px solid $color-border;

  &:last-child {
    border-bottom: none;
  }

  .title {
    @include font-bold;
  }

  .title, .description {
    margin-bottom: $margin-size-1;
  }
}
</style>
