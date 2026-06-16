export const TOURS = [
  {
    id: "mangrove",
    name: "マングローブカヌー＆滝ツアー",
    nameEn: "Mangrove & Waterfall",
    duration: "約3時間",
    price: "¥9,000",
    priceNote: "〜",
    target: "初心者・家族連れ",
    description:
      "マングローブをカヌーで進み、周辺の滝を巡る人気No.1ツアー。奄美らしい自然を満喫できます。",
    tag: "人気No.1",
    image: "/images/hero.jpeg",
  },

  {
    id: "turtle-snorkeling",
    name: "ウミガメシュノーケリングツアー",
    nameEn: "Sea Turtle Snorkeling",
    duration: "約2.5時間",
    price: "¥9,680",
    priceNote: "〜",
    target: "初心者OK",
    description:
      "ウミガメと一緒に泳ぎながら記念撮影も楽しめる人気のシュノーケリングツアー。",
    tag: "おすすめ",
    image: "/images/umigame.jpeg",
  },

  {
    id: "boat-snorkeling",
    name: "ボートシュノーケリングツアー",
    nameEn: "Boat Snorkeling",
    duration: "約3時間",
    price: "¥11,000",
    priceNote: "〜",
    target: "初心者OK",
    description:
      "船でサンゴ礁のポイントへ向かい、美しい海中世界を観察する本格シュノーケリング。",
    tag: "海満喫",
    image: "/images/night2.jpeg",
  },

  {
    id: "night",
    name: "ナイトツアー",
    nameEn: "Night Tour",
    duration: "約2時間",
    price: "¥8,000",
    priceNote: "〜",
    target: "全年齢OK",
    description:
      "アマミノクロウサギをはじめ、奄美ならではの夜行性生物を車中から探します。",
    tag: "夜限定",
    image: "/images/night.jpeg",
  },

  {
    id: "drive",
    name: "ドライブツアー",
    nameEn: "Island Drive",
    duration: "半日〜1日",
    price: "お問い合わせ",
    priceNote: "",
    target: "ご年配の方も安心",
    description:
      "奄美の絶景や隠れた名所を巡る、のんびり楽しめるプライベートドライブツアー。",
    tag: "のんびり",
    image: "/images/drive.jpeg",
  },
];

export const GUIDE = {
  name: "ずーちゃん",
  nameEn: "Guide",

  role: "奄美ネイチャーガイド",

  experience: "兵庫県出身",

  message:
    "好奇心旺盛で、人と関わることが大好きです。\n\nもともとはアレルギー体質でしたが、奄美大島で暮らし始めてから心も体も軽やかになり、自然の持つ力を実感するようになりました。\n\nその経験から『自然の中で暮らしたい』『自然に関わる仕事がしたい』という想いが強くなり、大好きな海と豊かな森に囲まれた奄美大島へ移住しました。\n\n現在はガイドとして、奄美の魅力をお伝えしています。\n\n私が大切にしているのは、お客様の笑顔です。\n\n初めて奄美を訪れる方や、小さなお子さま連れのご家族、ご年配の方まで、それぞれのペースに合わせて無理なく楽しんでいただけるよう心がけています。\n\n奄美の自然の中で過ごす時間が、癒しやリフレッシュにつながり、『来てよかった』と思える旅になれば嬉しいです。\n\n人との出会いも自然との出会いも一期一会。\n\n皆さまの大切な旅の一ページをご一緒できることを楽しみにしています。",

  certifications: [
    "少人数制ツアー",
    "初心者歓迎",
    "お子さま連れ歓迎",
  ],

  image: "/images/guide.jpeg",

  forestImage: "/images/guide-sub.jpg",
};

export const FAQS = [
  {
    q: 'ツアーは初心者でも参加できますか？',
    a: 'はい、ほとんどのツアーは初心者の方でも安心してご参加いただけます。道具の使い方や安全な動作を丁寧に説明しますので、ご安心ください！',
  },
  {
    q: '雨天の場合はどうなりますか？',
    a: '小雨程度であれば基本的に実施します。荒天や安全上問題がある場合は中止または日程変更をご提案します。中止の場合は全額返金いたします。',
  },
  {
    q: '子どもと一緒に参加できますか？',
    a: 'もちろんです！お子様連れのご家族にも楽しんでいただけるツアーを多数ご用意しています。ツアーによって推奨年齢が異なりますので、詳細はお問い合わせください。',
  },
  {
    q: '服装や持ち物は何が必要ですか？',
    a: '動きやすい服装、濡れてもよい靴やサンダル、着替えをご用意ください。水・帽子・日焼け止めもあると安心です。詳細はご予約時にご案内します。',
  },
  {
    q: '英語でのツアーは対応できますか？',
    a: '基本的なご案内は英語でも対応可能です。外国語をご希望の方はご予約時にお知らせください。',
  },
];

export const COLORS = {
  // backgrounds
  white: '#FFFFFF',
  offWhite: '#F5F7F4',
  ivory: '#F7F2E8',
  cream: '#FFFCF6',
  // text
  text: '#1A2018',
  textLight: '#5A6A57',
  brown: '#3D2B1F',
  brownLight: '#7A5C4A',
  // brand green — vivid, nature-forward
  green: '#3E8C2A',
  greenDark: '#2A6219',
  greenLight: '#5AAD45',
  greenPale: '#EBF5E8',
  // accent orange — price tags & small highlights only
  orange: '#E8652A',
  orangeLight: '#FF8C50',
  orangePale: '#FFF0E6',
};
