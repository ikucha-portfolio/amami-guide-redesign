export const TOURS = [
  {
    id: 'mangrove',
    name: 'マングローブカヤック',
    nameEn: 'Mangrove Kayak',
    duration: '約2.5時間',
    price: '¥6,000',
    priceNote: '/ 1名',
    target: '初心者OK・お子様OK',
    minAge: '6歳〜',
    description: '奄美最大のマングローブ林をカヤックで探検。生き物の宝庫を一緒に漕ぎ進もう！',
    tag: '人気No.1',
    image: 'https://images.unsplash.com/photo-1779343494778-e24c81cb6e78?w=1000&q=80',
  },
  {
    id: 'sea-kayak',
    name: '海カヤック探検',
    nameEn: 'Sea Kayak Explorer',
    duration: '約3.5時間',
    price: '¥8,500',
    priceNote: '/ 1名',
    target: '初心者OK',
    minAge: '10歳〜',
    description: '透き通った青い海をカヤックで進んで、隠れ洞窟や秘密のビーチへ出発！',
    tag: 'おすすめ',
    image: 'https://images.unsplash.com/photo-1759871417753-04b770500a66?w=1000&q=80',
  },
  {
    id: 'snorkeling',
    name: 'シュノーケリング',
    nameEn: 'Snorkeling Tour',
    duration: '約3時間',
    price: '¥7,500',
    priceNote: '/ 1名',
    target: '泳げなくてもOK',
    minAge: '6歳〜',
    description: 'サンゴと熱帯魚があふれる奄美の海中世界をのぞいてみよう。',
    tag: '',
    image: 'https://images.unsplash.com/photo-1564167777079-b7187a7071cb?w=1000&q=80',
  },
  {
    id: 'forest-trek',
    name: '奄美の森トレッキング',
    nameEn: 'Forest Trekking',
    duration: '約3時間',
    price: '¥6,500',
    priceNote: '/ 1名',
    target: '初心者OK',
    minAge: '8歳〜',
    description: '光あふれる世界遺産の森を歩いて、固有の生き物や植物を探そう。',
    tag: '世界遺産',
    image: 'https://images.unsplash.com/photo-1603976328262-4c1b46d7e6e8?w=1000&q=80',
  },
  {
    id: 'stargazing',
    name: '星空ナイトツアー',
    nameEn: 'Stargazing Night Tour',
    duration: '約2時間',
    price: '¥4,500',
    priceNote: '/ 1名',
    target: '全年齢OK',
    minAge: '制限なし',
    description: '光の少ない奄美の夜空は満天の星。肉眼で天の川が見える感動を体験して。',
    tag: '夜限定',
    image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?w=1000&q=80',
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
