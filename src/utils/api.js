const featuredArtist = [
  { name: 'James Jean',
    thumbnail_url: 'https://images.squarespace-cdn.com/content/v1/5484b3b4e4b0883e5fe5efa4/1502211316181-CJFOAHS24JJMGXYOH88S/ke17ZwdGBToddI8pDm48kFFKGuZY9WhzZtK-Is1d2bV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UShpB9j3LyarxWHEbDOGstMKxENIdJPx0JALYWxsfhp_lTuxwbvehnjE3cRhZ0ICWA/joyce-fluid-finish1-webres.jpg?format=2500w' },
  { name: 'Andy Dixon',
    thumbnail_url: 'http://www.andydixon.net/content/1-work/1-look-at-this-stuff-isn-t-it-neat-joshua-liner-new-york-2019/andydixon-christiesfiveprivatecollectionw.jpg' },
  { name: 'Daniel Arsham',
    thumbnail_url: 'https://images.squarespace-cdn.com/content/596e2ce46b8f5b88b9f39254/1548861264496-EX87LBS8QGPS4FZ5LWW8/Daniel+Arsham%2C+Blue+Calcite+National+Geographic+Magazine%2C+Blue+calcite%2C+hydrostone%2C+36%2C8+x+25%2C7+x+5%2C1+cm%2C+2018.jpg?content-type=image%2Fjpeg' },
  { name: 'Christina Paik',
    thumbnail_url: 'https://format-com-cld-res.cloudinary.com/image/private/s--TVkDXEDD--/c_limit,g_center,h_65535,w_2500/a_auto,fl_keep_iptc.progressive,q_95/58258-3410909-w11_you_cpaik.jpg?1501' },
  { name: 'Takashi Murakami',
    thumbnail_url: 'https://www.thebroad.org/sites/default/files/art/murakami_of_chinese_lions.jpg' }
]

// Mock get request for featured artist assets
export function getFeaturedArtists() {
  return featuredArtist;
}
