<template>
  <WithFooterLink
    :footer-content="nullOrValue(footerLink, 'content')"
    :footer-url="nullOrValue(footerLink, 'url')"
  >
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
  </WithFooterLink>
</template>

<script>
import WithFooterLink from '~/components/WithFooterLink'

export default {
  components: {
    WithFooterLink
  },
  props: {
    links: {
      type: Array,
      required: true
    },
    footerLink: {
      type: Object,
      required: false,
      default: null
    }
  },
  methods: {
    nullOrValue(obj, key) {
      if (!obj) return null
      if (!(key in obj)) return null
      return obj[key]
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
