export default {
  header: {
    title: "redshoga's portfolio",
    imageUrl: 'https://pbs.twimg.com/profile_images/1033696700831940608/eL2iXC3v_400x400.jpg',
    links: [
      { title: 'タイトル1', url: '#list' },
      { title: 'example.com', url: 'https://example.com' },
      { title: 'タイトル3', url: '#images' }
    ]
  },
  footer: {
    imageUrl: 'https://pbs.twimg.com/profile_images/1033696700831940608/eL2iXC3v_400x400.jpg'
  },
  sections: [
    {
      id: 'links',
      type: 'links',
      title: 'title',
      description: 'description',
      links: [
        {
          title: 'aaa',
          subTitle: 'bbb',
          url: 'https://example.com'
        },
        {
          title: 'aaa',
          subTitle: 'bbb',
          url: 'https://example.com'
        }
      ]
    },
    {
      id: 'list',
      type: 'list',
      title: 'title',
      description: 'description',
      list: [
        {
          title: 'aaa'
        },
        {
          title: 'aaa'
        }
      ]
    },
    {
      id: 'images',
      type: 'images',
      title: 'ImageViewer',
      description: 'lorem ipsum',
      images: [
        {
          title: 'おじさん',
          description: 'サンプルサンプルぷーるぷる',
          imageUrl: 'http://placekitten.com/300/300'
        },
        {
          title: 'nullpo',
          description: 'プリン',
          imageUrl: 'http://placekitten.com/400/400'
        },
        {
          title: 'FB',
          description: 'Firebase',
          imageUrl: 'http://placekitten.com/500/500'
        },
        {
          title: 'TETRIS',
          description: 'AAA',
          imageUrl: 'http://placekitten.com/600/600'
        },
        {
          title: 'おじさん',
          description: 'サンプルサンプルぷーるぷる',
          imageUrl: 'http://placekitten.com/200/200'
        },
        {
          title: 'nullpo',
          description: 'プリン',
          imageUrl: 'http://placekitten.com/500/500'
        },
        {
          title: 'FB',
          description: 'Firebase',
          imageUrl: 'http://placekitten.com/700/700'
        },
        {
          title: 'TETRIS',
          description: 'AAA',
          imageUrl: 'http://placekitten.com/400/400'
        }
      ]
    },
    {
      id: 'html',
      type: 'html',
      title: 'title',
      description: 'description',
      html: '<b>hello</b><br><b>hello</b>'
    }
  ]
}
