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
  background-image: url("/images/background.svg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: right bottom
}
a:link, a:visited {
  color: $color-black;
  text-decoration: none;
}
.color-link {
  color: $color-main !important;
}
</style>

<style lang="scss" scoped>
.container {
  @include shadow-normal;

  margin: 0 auto;
  background-color: $color-background;
  min-height: 100%;
  // overflow: hidden;

  @media screen and (min-width: 0) and (max-width: $container-width) {
    width: 100%;
  }
  @media screen and (min-width: $container-width) {
    width: $container-width;
  }
}
</style>
