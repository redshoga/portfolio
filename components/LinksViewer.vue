<template>
  <ul class="links-container">
    <li v-for="(link, index) in links" :key="index" class="clearfix list">
      <a :href="link.url">
        <div class="title">
          {{ link.title }}
        </div>
        <div class="sub-title color-link">
          {{ link.subTitle }}
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.links-container {
  list-style: none;
  margin: 0;
  padding: 0;

  .list {
    margin-bottom: $margin-size-1 / 2;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .title {
    float: left;
    &::before {
      content: "・";
    }
  }

  .sub-title {
    float: right;
    text-align: right;
  }

  .clearfix::after{
    content: "";
    display: block;
    clear: both;
  }
}
</style>
