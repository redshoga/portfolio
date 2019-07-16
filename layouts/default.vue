<template>
  <div class="container">
    <nuxt />
  </div>
</template>

<style lang="scss">
html, body, #__nuxt, #__layout {
  height: 100%;
}
body {
  @include font-normal;
}
</style>

<style lang="scss" scoped>
.container {
  @include shadow-normal;

  margin: 0 auto;
  background-color: $color-background;
  min-height: 100%;

  height: 100%;
  @media screen and (min-width: 0) and (max-width: $container-width) {
    width: 100%;
  }
  @media screen and (min-width: $container-width) {
    width: $container-width;
  }
}
</style>
