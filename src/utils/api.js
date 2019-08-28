const featuredArtist = [
  { 
    name: 'James Jean',
    thumbnail_url: 'https://images.squarespace-cdn.com/content/v1/5484b3b4e4b0883e5fe5efa4/1502211316181-CJFOAHS24JJMGXYOH88S/ke17ZwdGBToddI8pDm48kFFKGuZY9WhzZtK-Is1d2bV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UShpB9j3LyarxWHEbDOGstMKxENIdJPx0JALYWxsfhp_lTuxwbvehnjE3cRhZ0ICWA/joyce-fluid-finish1-webres.jpg?format=2500w'
  },
  { 
    name: 'Daniel Arsham',
    thumbnail_url: 'https://images.squarespace-cdn.com/content/596e2ce46b8f5b88b9f39254/1548861264496-EX87LBS8QGPS4FZ5LWW8/Daniel+Arsham%2C+Blue+Calcite+National+Geographic+Magazine%2C+Blue+calcite%2C+hydrostone%2C+36%2C8+x+25%2C7+x+5%2C1+cm%2C+2018.jpg?content-type=image%2Fjpeg'
  },
  { 
    name: 'Andy Dixon',
    thumbnail_url: 'http://www.andydixon.net/content/1-work/3-drawing-room/andydixon-christiesfaringdon.jpg',
  },
  { 
    name: 'Takashi Murakami',
    thumbnail_url: 'https://www.thebroad.org/sites/default/files/art/murakami_of_chinese_lions.jpg' 
  },
  { 
    name: 'Christina Paik',
    thumbnail_url: 'https://format-com-cld-res.cloudinary.com/image/private/s--TVkDXEDD--/c_limit,g_center,h_65535,w_2500/a_auto,fl_keep_iptc.progressive,q_95/58258-3410909-w11_you_cpaik.jpg?1501'
  }
]

const artistExhibits = {
  jamesjean: {
    name: 'James Jean',
    image_urls: [
      'https://images.squarespace-cdn.com/content/v1/5484b3b4e4b0883e5fe5efa4/1502211316181-CJFOAHS24JJMGXYOH88S/ke17ZwdGBToddI8pDm48kFFKGuZY9WhzZtK-Is1d2bV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UShpB9j3LyarxWHEbDOGstMKxENIdJPx0JALYWxsfhp_lTuxwbvehnjE3cRhZ0ICWA/joyce-fluid-finish1-webres.jpg?format=2500w',
      'https://images.squarespace-cdn.com/content/v1/5484b3b4e4b0883e5fe5efa4/1491329459172-H9BJI73XMUXXPHNFZE2K/ke17ZwdGBToddI8pDm48kHp7bfQGlMEzC-1pw4645ah7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmS0k9nmfOWkBD2X4dgpGrpVNHUHat8P1HsOqSJpxEGG9wYnMUTsmRMscfCn4deIZw/udon2-webres.jpg?format=1000w',
      'https://images.squarespace-cdn.com/content/v1/5484b3b4e4b0883e5fe5efa4/1501574095498-PC5YEQC99XNAH95ZSO9O/ke17ZwdGBToddI8pDm48kMcUuy7VhksDVCHPOV_AetF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5bphS6o_4IEWm7ENuES-FrcWjNmFwx44rNC9WMlxDP-q/ShapeOfWater-poster-lores.jpg?format=750w',
      'https://images.squarespace-cdn.com/content/v1/5484b3b4e4b0883e5fe5efa4/1507293413640-JMOPZHEHVBJXRR38FSD1/ke17ZwdGBToddI8pDm48kOocpZx0xlvWaMfujuqmZxF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmujyyI7Frso6MRdplGTbhDuXZECgQPB9cqfz5W6M2bbtdO48clcURN-OsvwxYNGXR/bladerunner-finish-lores.jpg?format=750w',
      'https://images.squarespace-cdn.com/content/v1/5484b3b4e4b0883e5fe5efa4/1495217548799-OX6KH9LHCC1EVLNIGK19/ke17ZwdGBToddI8pDm48kMde05aSWi9zxqA1iuSc11h7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ubb9r3GxX-Qps0WSsTQL7sm-XDfxUZjYNDDbko0f-W1aqbZblXxwYYJNDKmDBzLP2w/ddk-commission-final-medres4.jpg?format=1000w'
    ],
    artist_bio: 'James Jean fuses contemporary subjects with aesthetic techniques inspired by traditional Chinese scroll paintings, Japanese woodblock prints, and Renaissance portraiture. By experimenting with different styles and art-historical genres, Jean depicts detailed cosmological worlds that focus on both individual and universal experiences. His small-scale pieces feature single figures engaged in everyday tasks, and are focused on specific narratives and emotions. Jean’s large-scale works recall complex Hieronymus Bosch paintings and majestic Tang Dynasty landscapes. Layered with imagery drawn from both contemporary culture and age-old allegories, the artist imagines a collective realm of mythological proportions.'
  },
  andydixon: {
    name: 'Andy Dixon',
    image_urls: [
      'http://www.andydixon.net/content/1-work/1-look-at-this-stuff-isn-t-it-neat-joshua-liner-new-york-2019/andydixon-christiesgoldenagew.jpg',
      'http://www.andydixon.net/content/1-work/1-look-at-this-stuff-isn-t-it-neat-joshua-liner-new-york-2019/andydixon-christiesfiveprivatecollectionw.jpg',
      'http://www.andydixon.net/content/1-work/1-look-at-this-stuff-isn-t-it-neat-joshua-liner-new-york-2019/andydixon-christiesfaringdonhousew.jpg',
      'http://www.andydixon.net/content/1-work/2-alchemy-beers-london-2018/andydixon-patronshomebrooklyn2.jpg',
      'http://www.andydixon.net/content/1-work/3-drawing-room/andydixon-sothebys.jpg'
    ],
    artist_bio: ''
  },
  danielarsham: {
    name: 'Daniel Arsham',
    image_urls: [
      'https://static1.squarespace.com/static/596e2ce46b8f5b88b9f39254/59a428e9cd0f681b1cb9b7da/5c51bf507924e871fa0e3aae/1548861266817/Daniel+Arsham%2C+Blue+Calcite+National+Geographic+Magazine%2C+Blue+calcite%2C+hydrostone%2C+36%2C8+x+25%2C7+x+5%2C1+cm%2C+2018.jpg?format=750w',
      'https://static1.squarespace.com/static/596e2ce46b8f5b88b9f39254/59a428e9cd0f681b1cb9b7da/5c51bfe51ae6cfe76dd75ea3/1548861465483/Daniel+Arsham%2C+Pyrite+and+Ash+Eroded+Colorblindness+Book%2C+Pyrite%2C+volcanic+ash%2C+hydrostone%2C+33+x+27%2C3+x+3%2C5+cm%2C+2018.jpg?format=750w',
      'https://static1.squarespace.com/static/596e2ce46b8f5b88b9f39254/59a428e9cd0f681b1cb9b7da/5c51c05f21c67c683a6831e8/1548861538137/Daniel+Arsham%2C+Rose+Quartz+Eroded+Life+Magazine%2C+Rose+quartz%2C+pink+selenite%2C+hydrostone%2C+29%2C2+x+22%2C2+x+5%2C4+cm%2C+2018.jpg?format=1500w',
      'https://static1.squarespace.com/static/596e2ce46b8f5b88b9f39254/59a428e9cd0f681b1cb9b7da/5c4f731a562fa7f9b614e673/1548863418289/Daniel+Arsham%2C+Static+Mythologies%2C+Overview+Photograph+19.jpeg?format=500w',
      'https://static1.squarespace.com/static/596e2ce46b8f5b88b9f39254/59a428e9cd0f681b1cb9b7da/5bad4f564785d3b8b926d5f1/1539187048404/3018_thumbnail.jpg?format=500w'
    ],
    artist_bio: ''
  },
  christinapaik: {
    name: 'Christina Paik',
    image_urls: [
      'https://format-com-cld-res.cloudinary.com/image/private/s--TVkDXEDD--/c_limit,g_center,h_65535,w_2500/a_auto,fl_keep_iptc.progressive,q_95/58258-3410909-w11_you_cpaik.jpg?1501',
      'https://format-com-cld-res.cloudinary.com/image/private/s--4-paCtNv--/c_limit,g_center,h_65535,w_900/a_auto,fl_keep_iptc.progressive,q_95/fMecha20TO_cpaik_kds5tk.jpg?900',
      'https://format-com-cld-res.cloudinary.com/image/private/s--VATX-kX3--/c_limit,g_center,h_65535,w_900/a_auto,fl_keep_iptc.progressive,q_95/58258-5591118-9403704526_436a4c981e_o.jpg?900',
      'https://format-com-cld-res.cloudinary.com/image/private/s--wruTyFyl--/c_limit,g_center,h_65535,w_2500/a_auto,fl_keep_iptc.progressive,q_95/v1/1045ae486529e2671889d8c51cb42d1b/poggy01_cpaik2016.jpg?1700'
    ],
    artist_bio: ''
  },
  takashimurakami: {
    name: 'Takashi Murakami',
    image_urls: [
      'https://www.thebroad.org/sites/default/files/art/murakami_of_chinese_lions.jpg',
      'https://www.thebroad.org/sites/default/files/art/murakami_tan.jpg',
      'https://paddle8-staging.imgix.net/media/artwork/artworkimageproxy/1414422278-ngjdwxprct6w5pzmfhdq.jpg?auto=format&fit=clip&ixlib=react-8.5.1&w=974'
    ],
    artist_bio: ''
  }
}


// Mock get request for featured artist assets
export function getFeaturedArtists() {
  return featuredArtist;
}

export function getArtistExhibit(id) {
  return artistExhibits[id];
}