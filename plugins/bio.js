export default {
  header: {
    title: "redshoga's portfolio",
    imageUrl: 'https://pbs.twimg.com/profile_images/1033696700831940608/eL2iXC3v_400x400.jpg',
    links: [
      { title: 'Services', url: '#services' },
      { title: 'Accounts', url: '#accounts' },
      { title: 'Twitter', url: 'https://twitter.com/redshoga' },
      { title: 'Contact', url: '#contact' }
    ]
  },
  footer: {
    imageUrl: 'https://pbs.twimg.com/profile_images/1033696700831940608/eL2iXC3v_400x400.jpg'
  },
  sections: [
    {
      id: 'services',
      type: 'images',
      title: 'Services',
      description: 'いままで作ってきたサービス等の紹介',
      images: [
        {
          title: 'TODO',
          description: '使う人・場面・課題・解決策, 拡張機能, ',
          imageUrl: 'https://pbs.twimg.com/profile_images/1033696700831940608/eL2iXC3v_400x400.jpg'
        }
      ]
    },
    {
      id: 'qiita',
      type: 'links',
      title: 'Qiita: Tech Blog',
      description: '技術ブログ. 以下は記事の一部. 計53記事, 計18万PV↑, 2000↑Contribution (2019年7月現在)',
      links: [
        {
          title: 'TODO',
          subTitle: 'subTitle',
          url: 'https://example.com'
        }
      ]
    },
    {
      id: 'github',
      type: 'links',
      title: 'GitHub',
      description: '作成したGitHubのリポジトリの一部の紹介',
      links: [
        {
          title: 'TODO',
          subTitle: 'subTitle',
          url: 'https://example.com'
        }
      ]
    },
    {
      id: 'activities',
      type: 'links',
      title: 'Activities',
      description: '登壇情報',
      links: [
        {
          title: '1時間でまるわかり！決済Webアプリ開発徹底解説！【Vue.js+Nuxt.js+Firebase】',
          subTitle: '#dev_neko',
          url: 'https://dev-neko.connpass.com/event/135052/'
        },
        {
          title: 'Vue.js と Firebase, AKS でのクラウドネイティブなスマホアプリの作り方 ＋ ML Ops による AI モデルの作り方',
          subTitle: 'Microsoft de:code 2019',
          url: 'https://www.microsoft.com/ja-jp/events/decode/2019session/detail.aspx?sid=CD42'
        },
        {
          title: 'Azure Cognitive Services と Box Platform を活用した、次世代コンテンツ マネジメント システム開発',
          subTitle: 'Microsoft Tech Summit 2018',
          url: 'https://www.microsoft.com/ja-jp/events/techsummit/2018/session.aspx'
        }
      ]
    },
    {
      id: 'design',
      type: 'images',
      title: 'Design',
      description: 'いままでデザインしてきたサービス等の紹介',
      images: [
        {
          title: 'TODO',
          description: 'description',
          imageUrl: 'https://pbs.twimg.com/profile_images/1033696700831940608/eL2iXC3v_400x400.jpg'
        }
      ]
    },
    {
      id: 'accounts',
      type: 'links',
      title: 'Accounts',
      description: 'SNS等のアカウント情報',
      links: [
        {
          title: 'Twitter',
          subTitle: '一番使ってる',
          url: 'https://twitter.com/redshoga'
        },
        {
          title: 'Qiita',
          subTitle: '技術ブログ',
          url: 'https://qiita.com/redshoga'
        },
        {
          title: 'Facebook',
          subTitle: '顔の本',
          url: 'https://www.facebook.com/profile.php?id=100017481132130'
        },
        {
          title: 'teratail',
          subTitle: '技術系質問回答サービス',
          url: 'https://teratail.com/users/redshoga'
        },
        {
          title: 'npm',
          subTitle: 'Node Package Manager',
          url: 'https://npmjs.com/~redshoga'
        },
        {
          title: 'Speaker Deck',
          subTitle: '過去の登壇資料',
          url: 'https://speakerdeck.com/redshoga'
        },
        {
          title: 'Blog',
          subTitle: '雑記',
          url: 'https://benishoga.hatenablog.com/'
        }
      ]
    },
    {
      id: 'skills',
      type: 'list',
      title: 'Skills',
      description: '使ってきた技術(サービス, ツール, 言語)の一覧',
      images: [
        {
          title: 'TODO, AWS, GCP, Azure'
        }
      ]
    },
    {
      id: 'oss-contribution',
      type: 'links',
      title: 'OSS Contribution',
      description: '貢献リポジトリ一覧',
      links: [
        {
          title: 'Redocly/create-react-app-redoc',
          subTitle: 'Swaggerの閲覧サービス',
          url: 'https://github.com/Redocly/create-react-app-redoc'
        }
      ]
    },
    {
      id: 'contact',
      type: 'html',
      title: 'Contact',
      description: 'お問い合わせに関して',
      html: `TwitterのDMまたはFacebook Messengerが一番反応が早いです.<br>以下のGoogleフォームからもお問い合わせいただけます.<br><a class="color-link" href="https://docs.google.com/forms/d/e/1FAIpQLSck2TcJoZDblEB1Yz16zykekSByFNx9vr979Q8IKcfv5-KCNA/viewform">お問い合わせフォーム</a>`
    }
  ]
}
