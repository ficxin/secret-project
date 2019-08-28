const featuredArtist = [
  { 
    name: 'James Jean',
    thumbnail_url: 'https://images.squarespace-cdn.com/content/v1/5484b3b4e4b0883e5fe5efa4/1502211316181-CJFOAHS24JJMGXYOH88S/ke17ZwdGBToddI8pDm48kFFKGuZY9WhzZtK-Is1d2bV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UShpB9j3LyarxWHEbDOGstMKxENIdJPx0JALYWxsfhp_lTuxwbvehnjE3cRhZ0ICWA/joyce-fluid-finish1-webres.jpg?format=2500w'
  },
  { 
    name: 'Andy Dixon',
    thumbnail_url: 'http://www.andydixon.net/content/1-work/1-look-at-this-stuff-isn-t-it-neat-joshua-liner-new-york-2019/andydixon-christiesfiveprivatecollectionw.jpg'
  },
  { 
    name: 'Daniel Arsham',
    thumbnail_url: 'https://images.squarespace-cdn.com/content/596e2ce46b8f5b88b9f39254/1548861264496-EX87LBS8QGPS4FZ5LWW8/Daniel+Arsham%2C+Blue+Calcite+National+Geographic+Magazine%2C+Blue+calcite%2C+hydrostone%2C+36%2C8+x+25%2C7+x+5%2C1+cm%2C+2018.jpg?content-type=image%2Fjpeg'
  },
  { 
    name: 'Christina Paik',
    thumbnail_url: 'https://format-com-cld-res.cloudinary.com/image/private/s--TVkDXEDD--/c_limit,g_center,h_65535,w_2500/a_auto,fl_keep_iptc.progressive,q_95/58258-3410909-w11_you_cpaik.jpg?1501'
  },
  { 
    name: 'Takashi Murakami',
    thumbnail_url: 'https://www.thebroad.org/sites/default/files/art/murakami_of_chinese_lions.jpg' 
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
      'http://www.andydixon.net/content/1-work/1-look-at-this-stuff-isn-t-it-neat-joshua-liner-new-york-2019/andydixon-christiesfiveprivatecollectionw.jpg' 
    ],
    artist_bio: ''
  },
  danielarsham: {
    name: 'Daniel Arsham',
    image_urls: [
      'https://images.squarespace-cdn.com/content/596e2ce46b8f5b88b9f39254/1548861264496-EX87LBS8QGPS4FZ5LWW8/Daniel+Arsham%2C+Blue+Calcite+National+Geographic+Magazine%2C+Blue+calcite%2C+hydrostone%2C+36%2C8+x+25%2C7+x+5%2C1+cm%2C+2018.jpg?content-type=image%2Fjpeg' 
    ],
    artist_bio: ''
  },
  christinapaik: {
    name: 'Christina Paik',
    image_urls: [
      'https://format-com-cld-res.cloudinary.com/image/private/s--TVkDXEDD--/c_limit,g_center,h_65535,w_2500/a_auto,fl_keep_iptc.progressive,q_95/58258-3410909-w11_you_cpaik.jpg?1501' 
    ],
    artist_bio: ''
  },
  takashimurakami: {
    name: 'Takashi Murakami',
    image_urls: [
      'https://www.thebroad.org/sites/default/files/art/murakami_of_chinese_lions.jpg'
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