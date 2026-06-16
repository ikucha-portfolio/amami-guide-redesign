export const TOURS = {
  mangrove: {
    title: "マングローブカヌー＆滝ツアー",

    subtitle:
      "マングローブをカヌーで進み、奄美の自然豊かな滝を目指す人気コース。",

    heroImage: "/images/hero.jpeg",

    details: [
      { label: "所要時間", value: "約3時間" },
      { label: "料金", value: "大人9,000円・子ども8,000円" },
      { label: "対象", value: "初心者・家族連れ歓迎" },
      { label: "服装", value: "濡れてもよい服装" },
      { label: "持ち物", value: "タオル・飲み物・帽子" },
    ],

    recommended: [
      "初めて奄美を訪れる方",
      "自然をゆっくり楽しみたい方",
      "ご家族で参加したい方",
    ],

    flow: [
      {
        num: "01",
        title: "集合",
        desc: "集合場所にてガイドと合流します。",
      },
      {
        num: "02",
        title: "カヌーレクチャー",
        desc: "初めての方でも安心して乗れるよう説明します。",
      },
      {
        num: "03",
        title: "マングローブ散策",
        desc: "マングローブや滝を巡りながら自然を満喫します。",
      },
      {
        num: "04",
        title: "解散",
        desc: "ツアー終了後、現地解散となります。",
      },
    ],
  },

  night: {},
  drive: {},
  "boat-snorkeling": {},
  "turtle-snorkeling": {},
};