export const TOURS = [
  {
    id: "mangrove",
    name: "マングローブカヌー＆滝ツアー",
    nameEn: "Mangrove & Waterfall",
    duration: "約3時間",
    price: "¥8,000",
    priceNote: "/ 1名",
    target: "初心者・家族連れ",
    description:
      "マングローブをカヌーで進み、奄美の自然豊かな滝を目指す人気コース。",
    tag: "人気No.1",
    image: "/images/hero.jpeg",
  },

  {
    id: "night",
    name: "ナイトツアー",
    nameEn: "Night Tour",
    duration: "約2時間",
    price: "¥5,000",
    priceNote: "/ 1名",
    target: "全年齢OK",
    description:
      "アマミノクロウサギや夜の生き物を探しに出かける夜限定ツアー。",
    tag: "夜限定",
    image: "/images/night.jpeg",
  },

  {
    id: "drive",
    name: "ドライブツアー",
    nameEn: "Island Drive",
    duration: "約4時間",
    price: "¥8,500",
    priceNote: "/ 1名",
    target: "ご年配の方も安心",
    description:
      "奄美の絶景スポットを巡りながら、島の魅力をゆったり楽しめます。",
    tag: "のんびり",
    image: "/images/drive.jpeg",
  },

  {
    id: "boat-snorkeling",
    name: "ボートシュノーケリングツアー",
    nameEn: "Boat Snorkeling",
    duration: "約3時間",
    price: "¥8,000",
    priceNote: "/ 1名",
    target: "初心者OK",
    description:
      "ボートでポイントへ移動し、サンゴや熱帯魚を観察する海遊びツアー。",
    tag: "海満喫",
    image: "/images/night2.jpeg",
  },

  {
    id: "turtle-snorkeling",
    name: "ウミガメシュノーケリングツアー",
    nameEn: "Sea Turtle Snorkeling",
    duration: "約2.5時間",
    price: "¥8,500",
    priceNote: "/ 1名",
    target: "初心者OK",
    description:
      "高確率でウミガメに出会える人気のシュノーケリングツアー。",
    tag: "おすすめ",
    image: "/images/umigame.jpeg",
  },
];

export const GUIDE = {
  name: '田中 さやか',
  nameEn: 'Sayaka Tanaka',
  role: 'ネイチャーガイド',
  experience: '奄美出身 ・ ガイド歴10年',
  message: '奄美で生まれ育って、この自然の豊かさに毎日ときめいています。来てくれた方に「また来たい！」と思ってもらえるツアーをお届けしたいです。安全はもちろん、とにかく楽しく！を大切にしています。',
  certifications: ['自然環境教育士', '海上安全講習修了', '奄美市公認ガイド'],
  image: 'https://images.unsplash.com/photo-1544507888-56d73eb6046e?w=800&q=80',
  forestImage: 'https://images.unsplash.com/photo-1699811250955-143c4234902c?w=800&q=80',
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
