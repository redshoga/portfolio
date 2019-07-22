<template>
  <div>
    <TheHeader
      :title="bio.header.title"
      :image-url="bio.header.imageUrl"
      :links="bio.header.links"
    />

    <ContentContainer
      v-for="(content, index) in bio.sections"
      :id="content.id"
      :key="index"
      :title="content.title"
      :description="content.description"
    >
      <LinksViewer v-if="content.type === 'links'" :links="content.links" :footer-link="content.footerLink" />
      <ListViewer v-if="content.type === 'list'" :list="content.list" />
      <ImagesViewer v-if="content.type === 'images'" :images="content.images" />
      <HtmlViewer v-if="content.type === 'html'" :html="content.html" />
    </ContentContainer>

    <TheFooter :image-url="bio.footer.imageUrl" />
  </div>
</template>

<script>
import bio from '~/plugins/bio'
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'
import ContentContainer from '~/components/ContentContainer'
import LinksViewer from '~/components/LinksViewer'
import ListViewer from '~/components/ListViewer'
import ImagesViewer from '~/components/ImagesViewer'
import HtmlViewer from '~/components/HtmlViewer'

export default {
  components: {
    TheHeader,
    TheFooter,
    ContentContainer,
    LinksViewer,
    ListViewer,
    ImagesViewer,
    HtmlViewer
  },
  computed: {
    bio: () => bio
  }
}
</script>
