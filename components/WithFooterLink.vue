<template>
  <div class="with-footer-link">
    <slot />
    <a :href="footerUrl" class="footer-link">
      {{ footerContent }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    footerContent: {
      required: false,
      type: String,
      default: null
    },
    footerUrl: {
      required: false,
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.with-footer-link {
  .footer-link {
    display: block;
    margin-top: $margin-size-1;
    color: $color-main;
  }
}
</style>
