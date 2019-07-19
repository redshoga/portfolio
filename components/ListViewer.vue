<template>
  <ul class="list-container">
    <li v-for="(content, index) in list" :key="index" class="clearfix list">
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

  .list {
    margin-bottom: $margin-size-1 / 2;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .title {
    &::before {
      content: "・";
    }
  }
}
</style>
