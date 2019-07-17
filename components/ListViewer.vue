<template>
  <ul class="list-container">
    <li v-for="(content, index) in list" :key="index" class="clearfix">
      <div class="title">
        {{ content.title }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.list-container {
  list-style: none;
  margin: 0;
  padding: 0;

  .title {
    &::before {
      content: "・";
    }
  }
}
</style>
