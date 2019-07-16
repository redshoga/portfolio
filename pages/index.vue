<template>
  <div>
    <TheHeader :title="bio.header.title" :image-url="bio.header.imageUrl" />

    <ContentViewer
      v-for="(content, index) in bio.sections"
      :key="index"
      :title="content.title"
      :description="content.description"
    />
  </div>
</template>

<script>
import bio from '~/plugins/bio'
import TheHeader from '~/components/TheHeader'
import ContentViewer from '~/components/ContentViewer'

export default {
  components: {
    TheHeader,
    ContentViewer
  },
  computed: {
    bio: () => bio
  }
}
</script>
