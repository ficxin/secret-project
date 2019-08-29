const featuredArtist = [
  { 
    name: 'James Jean',
    thumbnail: ['https://images.squarespace-cdn.com/content/v1/5484b3b4e4b0883e5fe5efa4/1502211316181-CJFOAHS24JJMGXYOH88S/ke17ZwdGBToddI8pDm48kFFKGuZY9WhzZtK-Is1d2bV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UShpB9j3LyarxWHEbDOGstMKxENIdJPx0JALYWxsfhp_lTuxwbvehnjE3cRhZ0ICWA/joyce-fluid-finish1-webres.jpg?format=2500w', 'Pistil and Stamen']
  },
  { 
    name: 'Daniel Arsham',
    thumbnail: ['https://static1.squarespace.com/static/596e2ce46b8f5b88b9f39254/59a428e9cd0f681b1cb9b7da/5bad4f564785d3b8b926d5f1/1539187048404/3018_thumbnail.jpg?format=2500w', 'Relics From the Future 3018']
  },
  { 
    name: 'David Choe',
    thumbnail: ['https://i.pinimg.com/originals/ab/35/cf/ab35cf03c32e04ede4ce6be2ce341a2a.jpg', 'Nothing Lasts Forever']
  },
  { 
    name: 'Takashi Murakami',
    thumbnail: ['https://www.thebroad.org/sites/default/files/art/murakami_of_chinese_lions.jpg', 'Of Chinese Lions, Peonies, Skulls, and Fountains'] 
  },
  { 
    name: 'Andy Dixon',
    thumbnail: ['http://www.andydixon.net/content/1-work/5-how-much-do-they-cost/patronshome.jpg', 'Drawing Room'],
  },
  { 
    name: 'Christina Paik',
    thumbnail: ['https://format-com-cld-res.cloudinary.com/image/private/s--TVkDXEDD--/c_limit,g_center,h_65535,w_2500/a_auto,fl_keep_iptc.progressive,q_95/58258-3410909-w11_you_cpaik.jpg?1501', 'You']
  },
  { 
    name: 'Sage Vaughn',
    thumbnail: ['https://payload.cargocollective.com/1/2/83457/13373753/Against-the-Common-Good-2017-Acrylic--Ink--and-Vellum-on-Canvas-60-x-60-inches_1340_c.jpg', 'Wildflower']
  },
  { 
    name: 'Tiffany Chung',
    thumbnail: ['https://1.bp.blogspot.com/-Bha9O_G6DiU/WdW2Vn_3mTI/AAAAAAAAAIg/I7ahlMo6JDoBgfyCBwjdG6Swr8XATpg5gCK4BGAYYCw/s1600/2009_migration_of_the_ladybugs_Courtesy_Galerie%2BQuynh_and_Artist.jpg', 'Forgotten Stories']
  }
]

const artistExhibits = {
  jamesjean: {
    name: 'James Jean',
    image_urls: [
      'https://images.squarespace-cdn.com/content/v1/5484b3b4e4b0883e5fe5efa4/1502211316181-CJFOAHS24JJMGXYOH88S/ke17ZwdGBToddI8pDm48kFFKGuZY9WhzZtK-Is1d2bV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UShpB9j3LyarxWHEbDOGstMKxENIdJPx0JALYWxsfhp_lTuxwbvehnjE3cRhZ0ICWA/joyce-fluid-finish1-webres.jpg?format=2500w',
      'https://images.squarespace-cdn.com/content/v1/5484b3b4e4b0883e5fe5efa4/1491329459172-H9BJI73XMUXXPHNFZE2K/ke17ZwdGBToddI8pDm48kHp7bfQGlMEzC-1pw4645ah7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmS0k9nmfOWkBD2X4dgpGrpVNHUHat8P1HsOqSJpxEGG9wYnMUTsmRMscfCn4deIZw/udon2-webres.jpg?format=1000w',
      'https://images.squarespace-cdn.com/content/v1/5484b3b4e4b0883e5fe5efa4/1542849854984-EB2ZNFVT4P8OZ5HB6JW5/ke17ZwdGBToddI8pDm48kDwCBPMkXzHlJbfjzSAukIIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2disoJXzGpdGP9c-uwjPeoPABkIdKgsyIG4bzbLEH5msm_AaHWq01a8yFgqe9oqFs/forager-apple-lores2.jpg?format=750w',
      'https://images.squarespace-cdn.com/content/v1/5484b3b4e4b0883e5fe5efa4/1523427801637-6FFDYWGNI3EHUV0OK7JU/ke17ZwdGBToddI8pDm48kOJ8Vx4aUOUPSxbv6WmufKd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5dHLqyZ4NzII8cYZMGCdiaZZ1a_8RJkx-j2qRZ5N8-5M/azimuth-cat-lores.jpg?format=1000w',
      'https://images.squarespace-cdn.com/content/v1/5484b3b4e4b0883e5fe5efa4/1507293413640-JMOPZHEHVBJXRR38FSD1/ke17ZwdGBToddI8pDm48kOocpZx0xlvWaMfujuqmZxF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmujyyI7Frso6MRdplGTbhDuXZECgQPB9cqfz5W6M2bbtdO48clcURN-OsvwxYNGXR/bladerunner-finish-lores.jpg?format=750w'
    ]
  },
  andydixon: {
    name: 'Andy Dixon',
    image_urls: [
      'http://www.andydixon.net/content/1-work/1-look-at-this-stuff-isn-t-it-neat-joshua-liner-new-york-2019/andydixon-christiesfiveprivatecollectionw.jpg',
      'http://www.andydixon.net/content/1-work/1-look-at-this-stuff-isn-t-it-neat-joshua-liner-new-york-2019/andydixon-christiesgoldenagew.jpg',
      'http://www.andydixon.net/content/1-work/1-look-at-this-stuff-isn-t-it-neat-joshua-liner-new-york-2019/andydixon-christiesfaringdonhousew.jpg',
      'http://www.andydixon.net/content/1-work/2-alchemy-beers-london-2018/andydixon-patronshomebrooklyn2.jpg',
      'http://www.andydixon.net/content/1-work/3-drawing-room/andydixon-sothebys.jpg'
    ]
  },
  danielarsham: {
    name: 'Daniel Arsham',
    image_urls: [
      'https://images.squarespace-cdn.com/content/596e2ce46b8f5b88b9f39254/1548861264496-EX87LBS8QGPS4FZ5LWW8/Daniel+Arsham%2C+Blue+Calcite+National+Geographic+Magazine%2C+Blue+calcite%2C+hydrostone%2C+36%2C8+x+25%2C7+x+5%2C1+cm%2C+2018.jpg?content-type=image%2Fjpeg',
      'https://images.squarespace-cdn.com/content/596e2ce46b8f5b88b9f39254/1548861413410-47Y6X9A5SR18ABYIXV1K/Daniel+Arsham%2C+Pyrite+and+Ash+Eroded+Colorblindness+Book%2C+Pyrite%2C+volcanic+ash%2C+hydrostone%2C+33+x+27%2C3+x+3%2C5+cm%2C+2018.jpg?format=750w&content-type=image%2Fjpeg',
      'https://images.squarespace-cdn.com/content/596e2ce46b8f5b88b9f39254/1548861535722-2NB0HC44ECV0YMZ7ZRKY/Daniel+Arsham%2C+Rose+Quartz+Eroded+Life+Magazine%2C+Rose+quartz%2C+pink+selenite%2C+hydrostone%2C+29%2C2+x+22%2C2+x+5%2C4+cm%2C+2018.jpg?content-type=image%2Fjpeg',
      'https://images.squarespace-cdn.com/content/596e2ce46b8f5b88b9f39254/1548710682940-TJAAEY904MN4K35822DF/Daniel+Arsham%2C+Static+Mythologies%2C+Overview+Photograph+19.jpeg?format=750w&content-type=image%2Fjpeg',
      'https://static1.squarespace.com/static/596e2ce46b8f5b88b9f39254/59a428e9cd0f681b1cb9b7da/5bad4f564785d3b8b926d5f1/1539187048404/3018_thumbnail.jpg?format=2500w'
    ]
  },
  christinapaik: {
    name: 'Christina Paik',
    image_urls: [
      'https://format-com-cld-res.cloudinary.com/image/private/s--TVkDXEDD--/c_limit,g_center,h_65535,w_2500/a_auto,fl_keep_iptc.progressive,q_95/58258-3410909-w11_you_cpaik.jpg?1501',
      'https://format-com-cld-res.cloudinary.com/image/private/s--4-paCtNv--/c_limit,g_center,h_65535,w_900/a_auto,fl_keep_iptc.progressive,q_95/fMecha20TO_cpaik_kds5tk.jpg?900',
      'https://format-com-cld-res.cloudinary.com/image/private/s--VATX-kX3--/c_limit,g_center,h_65535,w_900/a_auto,fl_keep_iptc.progressive,q_95/58258-5591118-9403704526_436a4c981e_o.jpg?900',
      'https://format-com-cld-res.cloudinary.com/image/private/s--wruTyFyl--/c_limit,g_center,h_65535,w_2500/a_auto,fl_keep_iptc.progressive,q_95/v1/1045ae486529e2671889d8c51cb42d1b/poggy01_cpaik2016.jpg?1700'
    ]
  },
  takashimurakami: {
    name: 'Takashi Murakami',
    image_urls: [
      'https://www.thebroad.org/sites/default/files/art/murakami_of_chinese_lions.jpg',
      'https://cdn-5b7f4b74f911c80e08d29a54.closte.com/wp-content/uploads/2017/06/22727-to-be-determined22-2016-de-takashi-murakami-galerie-perrotin-photo-eric-simon.jpg',
      'https://www.thebroad.org/sites/default/files/art/murakami_tan.jpg'
    ]
  },
  davidchoe: {
    name: 'David Choe',
    image_urls: [
      'https://i.pinimg.com/originals/ab/35/cf/ab35cf03c32e04ede4ce6be2ce341a2a.jpg',
      'https://artlogic-res.cloudinary.com/w_2000,h_2000,c_limit,f_auto,fl_lossy,q_auto:good,f_auto,fl_lossy,q_auto:good/artlogicstorage/lazinc/images/view/2bb0e43ab1328b363acb2c8ad73e1ca2j.jpg',
      'http://partner.goodsmile.info/img/artist/1800_red-moon-.jpg',
      'http://arrestedmotion.com/wp-content/uploads/2010/01/am-david-choe-haitian-girl.jpg',
      'http://www.postersandprintsblog.com/storage/dave%20choe%20tokyo%20girl.jpg?__SQUARESPACE_CACHEVERSION=1291407894469'
    ]
  },
  sagevaughn: {
    name: 'Sage Vaughn',
    image_urls: [
      'https://payload.cargocollective.com/1/2/83457/13373753/Against-the-Common-Good-2017-Acrylic--Ink--and-Vellum-on-Canvas-60-x-60-inches_1340_c.jpg',
      'https://payload.cargocollective.com/1/2/83457/12532178/Sage-Vaughn-2017-02-035864_1340_c.jpg',
      'https://payload.cargocollective.com/1/2/83457/13904745/Later--2019-Acrylic--Ink--Oil--and-Vellum-on-Canvas-60-x-70-inches_1000.jpg',
      'https://payload.cargocollective.com/1/2/83457/13904752/Order-of-the-Golden-Dawn--2019-Acrylic--Ink--Oil--and-Vellum-on-Canvas-46-x-50-inches_1000.jpg',
      'https://payload.cargocollective.com/1/2/83457/13904771/Supreme-Association-of-Mountain-Wizards--2019-Acrylic--Ink--Oil--and-Vellum-on-Canvas-54-x-72-inches_1000.jpg'
    ]
  },
  tiffanychung: {
    name: 'Tiffany Chung',
    image_urls: [
      'https://1.bp.blogspot.com/-Bha9O_G6DiU/WdW2Vn_3mTI/AAAAAAAAAIg/I7ahlMo6JDoBgfyCBwjdG6Swr8XATpg5gCK4BGAYYCw/s1600/2009_migration_of_the_ladybugs_Courtesy_Galerie%2BQuynh_and_Artist.jpg',
      'http://postvidai.com/wp-content/uploads/tiff_saigonmap10n_106e-e1493013999598.jpg',
      'https://thumbs-prod.si-cdn.com/cGdoJDSHzLgD6KwOdW59sf7ziO4=/fit-in/1072x0/https://public-media.si-cdn.com/filer/fb/c6/fbc67164-57c4-44d2-838c-1541a949cdc7/easteroffensive1972.jpg'
    ]
  }
}


// Mock get request for featured artist assets
export function getFeaturedArtists() {
  return featuredArtist;
}

export function getArtistExhibit(id) {
  return artistExhibits[id];
}