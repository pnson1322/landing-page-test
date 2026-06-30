import type {
  LandingFeature,
  ProductDetail,
  ProductImage,
  ProductSpec,
} from "@/features/landing/types/landing";

export const features: LandingFeature[] = [
  {
    title: "Äo khĂ´ng khĂ­ liĂªn tá»¥c",
    description:
      "Theo dĂµi CO2, bá»¥i má»‹n PM2.5, VOC, nhiá»‡t Ä‘á»™ vĂ  Ä‘á»™ áº©m Ä‘á»ƒ báº¡n biáº¿t cÄƒn phĂ²ng Ä‘ang thay Ä‘á»•i ra sao.",
  },
  {
    title: "Gá»£i Ă½ nhá»‹p ngá»§",
    description:
      "Tá»•ng há»£p Ă¡nh sĂ¡ng, tiáº¿ng á»“n vĂ  cháº¥t lÆ°á»£ng khĂ´ng khĂ­ Ä‘á»ƒ Ä‘Æ°a ra lá»‹ch nghá»‰ ngÆ¡i phĂ¹ há»£p hÆ¡n.",
  },
  {
    title: "Cáº£nh bĂ¡o rĂµ rĂ ng",
    description:
      "VĂ²ng sĂ¡ng Ä‘á»•i mĂ u theo tráº¡ng thĂ¡i mĂ´i trÆ°á»ng, dá»… hiá»ƒu ngay cáº£ khi khĂ´ng má»Ÿ Ä‘iá»‡n thoáº¡i.",
  },
  {
    title: "Äá»“ng bá»™ á»©ng dá»¥ng",
    description:
      "LÆ°u lá»‹ch sá»­, xem xu hÆ°á»›ng theo ngĂ y vĂ  xuáº¥t dá»¯ liá»‡u cho há»‡ sinh thĂ¡i nhĂ  thĂ´ng minh.",
  },
];

export const specs: ProductSpec[] = [
  {
    label: "Cáº£m biáº¿n",
    value: "CO2, PM2.5, VOC, nhiá»‡t Ä‘á»™, Ä‘á»™ áº©m, Ă¡nh sĂ¡ng, tiáº¿ng á»“n",
  },
  {
    label: "Káº¿t ná»‘i",
    value: "Wi-Fi 2.4 GHz, Bluetooth Low Energy",
  },
  {
    label: "Nguá»“n Ä‘iá»‡n",
    value: "USB-C 5V, tiĂªu thá»¥ dÆ°á»›i 4W",
  },
  {
    label: "KĂ­ch thÆ°á»›c",
    value: "104 x 104 x 92 mm",
  },
  {
    label: "Cháº¥t liá»‡u",
    value: "Nhá»±a tĂ¡i cháº¿ má», lÆ°á»›i nhĂ´m anodized",
  },
  {
    label: "TÆ°Æ¡ng thĂ­ch",
    value: "iOS, Android, Google Home, Apple Home",
  },
];

export const productDetails: ProductDetail[] = [
  {
    title: "Báº£y lá»›p dá»¯ liá»‡u mĂ´i trÆ°á»ng",
    description:
      "AuraHub káº¿t há»£p dá»¯ liá»‡u CO2, PM2.5, VOC, nhiá»‡t Ä‘á»™, Ä‘á»™ áº©m, Ă¡nh sĂ¡ng vĂ  tiáº¿ng á»“n Ä‘á»ƒ Ä‘Æ°a ra má»™t bá»©c tranh Ä‘áº§y Ä‘á»§ hÆ¡n vá» cÄƒn phĂ²ng.",
  },
  {
    title: "TĂ­n hiá»‡u táº¡i chá»—, khĂ´ng cáº§n má»Ÿ app",
    description:
      "VĂ²ng sĂ¡ng teal chuyá»ƒn tráº¡ng thĂ¡i theo cháº¥t lÆ°á»£ng khĂ´ng khĂ­, giĂºp báº¡n nháº­n biáº¿t lĂºc nĂ o nĂªn má»Ÿ cá»­a, báº­t lá»c khĂ­ hoáº·c giáº£m tiáº¿ng á»“n.",
  },
  {
    title: "Ngá»¯ cáº£nh cho giáº¥c ngá»§",
    description:
      "Thiáº¿t bá»‹ ghi nháº­n mĂ´i trÆ°á»ng trÆ°á»›c vĂ  trong lĂºc ngá»§, sau Ä‘Ă³ gom thĂ nh lá»‹ch sá»­ theo Ä‘Ăªm Ä‘á»ƒ báº¡n tháº¥y nguyĂªn nhĂ¢n phĂ²ng quĂ¡ nĂ³ng, bĂ­ hoáº·c á»“n.",
  },
  {
    title: "Thiáº¿t káº¿ Ä‘á»ƒ Ä‘áº·t á»Ÿ má»i phĂ²ng",
    description:
      "ThĂ¢n mĂ¡y nhá», vá» nhá»±a tĂ¡i cháº¿ má» vĂ  lÆ°á»›i nhĂ´m anodized giĂºp AuraHub hĂ²a vĂ o bĂ n lĂ m viá»‡c, phĂ²ng ngá»§ hoáº·c ká»‡ Ä‘áº§u giÆ°á»ng.",
  },
];

export const productImages: ProductImage[] = [
  {
    src: "/aurahub-angle.webp",
    alt: "AuraHub nhĂ¬n tá»« gĂ³c nghiĂªng trong studio",
    title: "GĂ³c nghiĂªng sáº£n pháº©m",
    description:
      "ThĂ¢n trá»¥ nhá» gá»n, lÆ°á»›i cáº£m biáº¿n bao quanh vĂ  vĂ²ng sĂ¡ng tráº¡ng thĂ¡i á»Ÿ cáº¡nh Ä‘Ă¡y.",
    width: 1200,
    height: 799,
  },
  {
    src: "/aurahub-detail.webp",
    alt: "Cáº­n cáº£nh lÆ°á»›i cáº£m biáº¿n vĂ  vĂ²ng sĂ¡ng AuraHub",
    title: "Chi tiáº¿t cáº£m biáº¿n",
    description:
      "Cá»¥m lá»— thoĂ¡ng giĂºp luá»“ng khĂ­ Ä‘i qua Ä‘á»u hÆ¡n, Ä‘á»“ng thá»i giá»¯ váº» ngoĂ i tá»‘i giáº£n.",
    width: 1400,
    height: 720,
  },
  {
    src: "/aurahub-app.webp",
    alt: "AuraHub Ä‘áº·t cáº¡nh Ä‘iá»‡n thoáº¡i hiá»ƒn thá»‹ dashboard sá»©c khá»e mĂ´i trÆ°á»ng",
    title: "á»¨ng dá»¥ng Ä‘á»“ng bá»™",
    description:
      "Dashboard gom cháº¥t lÆ°á»£ng khĂ´ng khĂ­, nhá»‹p ngá»§ vĂ  xu hÆ°á»›ng theo ngĂ y trong má»™t giao diá»‡n dá»… Ä‘á»c.",
    width: 1400,
    height: 715,
  },
  {
    src: "/aurahub-bedroom.webp",
    alt: "AuraHub Ä‘áº·t trĂªn bĂ n Ä‘áº§u giÆ°á»ng trong phĂ²ng ngá»§ sĂ¡ng tá»± nhiĂªn",
    title: "PhĂ²ng ngá»§ yĂªn tÄ©nh",
    description:
      "Theo dĂµi mĂ´i trÆ°á»ng nghá»‰ ngÆ¡i ngay táº¡i nÆ¡i báº¡n ngá»§, vá»›i Ă¡nh sĂ¡ng vĂ  cháº¥t liá»‡u dá»‹u máº¯t.",
    width: 1400,
    height: 716,
  },
  {
    src: "/aurahub-living-room.webp",
    alt: "AuraHub trĂªn ká»‡ phĂ²ng khĂ¡ch cáº¡nh cĂ¢y xanh vĂ  Ä‘á»“ gá»‘m",
    title: "GĂ³c phĂ²ng khĂ¡ch",
    description:
      "Thiáº¿t bá»‹ hĂ²a vĂ o ká»‡ trang trĂ­, sofa vĂ  cĂ¢y xanh mĂ  váº«n giá»¯ tĂ­n hiá»‡u tráº¡ng thĂ¡i dá»… nhĂ¬n.",
    width: 1400,
    height: 783,
  },
  {
    src: "/aurahub-usb-c.webp",
    alt: "GĂ³c sau AuraHub vá»›i cá»•ng USB-C vĂ  dĂ¢y nguá»“n graphite",
    title: "Nguá»“n USB-C",
    description:
      "GĂ³c sau cho tháº¥y cá»•ng nguá»“n gá»n gĂ ng, vĂ²ng sĂ¡ng vĂ  khe thoĂ¡ng á»Ÿ cáº¡nh Ä‘Ă¡y.",
    width: 1400,
    height: 719,
  },
];
