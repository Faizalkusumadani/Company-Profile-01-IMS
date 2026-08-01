// ── IMAGE IMPORTS ─────────────────────────────────────────────────────────────
import DAIKIN from "../Produk/DAIKIN.png";
import JAF from "../Produk/JAF.png";
import PANASONIC from "../Produk/PANASONIC.png";
import GREE from "../Produk/GREE.png";
import TICA from "../Produk/TICA.png";
import ARISTON from "../Produk/ARISTON.png";
import SERVVO from "../Produk/SERVVO.png";
import WIKA from "../Produk/WIKA.png";
import GALA from "../Produk/GALA.png";
import TOZEN from "../Produk/TOZEN.png";
import MAGNO from "../Produk/MAGNO.png";
import SHIMIZU from "../Produk/SHIMIZU.png";
import SUPREME from "../Produk/SUPREME.png";
import TOYOODA from "../Produk/TOYOODA.png";
import INSULFLEX from "../Produk/INSULFLEX.png";
import MULTIKABEL from "../Produk/MULTIKABEL.png";
import HODA from "../Produk/HODA.png";
import INABA_DENKO from "../Produk/INABA DENKO.png";
import DSP from "../Produk/DSP.png";
import SEMEN_MERAH_PUTIH from "../Produk/SEMEN MERAH PUTIH.png";
import DRYMIX from "../Produk/DRYMIX.png";
import MORTINDO from "../Produk/MORTINDO.png";
import ABU_BATU from "../Produk/ABU BATU.png";
import ZIEGEL from "../Produk/ZIEGEL.png";
import BATU_SPLIT from "../Produk/BATU SPLIT.png";
import JCAS from "../Produk/JCAS.png";
import PAKUROKET from "../Produk/PAKUROKET.png";
import TRILLIUN from "../Produk/TRILLIUN.png";
import TRILLIUNHOSE from "../Produk/TRILLIUNHOSE.png";
import WAVIN from "../Produk/WAVIN.png";
import SPINDO from "../Produk/SPINDO.png";
import PIONEER from "../Produk/PIONEER.png";
import RAJAWALI from "../Produk/RAJAWALI.png";
import TRILLIUNWARE from "../Produk/TRILLIUNWARE.png";
import UNNU from "../Produk/UNNU.png";
import ZORA from "../Produk/ZORA.png";
import OSTRA from "../Produk/OSTRA.png";
import type { ImageMetadata } from "astro";

// ── TYPE ──────────────────────────────────────────────────────────────────────
type ProductItem = {
  id: number;
  name: string;
  key: string;
  image: ImageMetadata;
  category: string;
  discount?: number;
  variants: string;
  href: string;
  price?: number;
};

// ── DATA ──────────────────────────────────────────────────────────────────────
const Product: ProductItem[] = [
  {
    id: 1,
    name: "Daikin",
    key: "daikindesc",
    image: DAIKIN,
    category: "category_1",
    variants: "6 Items",
    href: "/produk/daikin",
  },
  {
    id: 2,
    name: "Panasonic",
    price: 129900,
    image: PANASONIC,
    key: "panasonicdesc",
    category: "category_1",
    variants: "6 Items",
    href: "/produk/panasonic",
  },
  {
    id: 3,
    name: "Gree",
    price: 129900,
    image: GREE,
    key: "greedesc",
    category: "category_1",
    variants: "8 Items",
    href: "/produk/gree",
  },
  {
    id: 4,
    name: "Tica",
    price: 129900,
    image: TICA,
    key: "ticadesc",
    category: "category_1",
    variants: "6 Items",
    href: "/produk/tica",
  },
  {
    id: 5,
    name: "Japan Air Filter (JAF)",
    image: JAF,
    key: "jafdesc",
    category: "category_1",
    variants: "7 Items",
    href: "/produk/jaf",
  },
  {
    id: 6,
    name: "Ariston",
    price: 129900,
    image: ARISTON,
    key: "aristondesc",
    category: "category_1",
    variants: "6 Items",
    href: "/produk/ariston",
  },
  {
    id: 7,
    name: "Wika WH",
    image: WIKA,
    key: "wikawhdesc",
    category: "category_1",
    variants: "3 Items",
    href: "/produk/wikawh",
  },
  {
    id: 8,
    name: "Servvo",
    key: "servvodesc",
    image: SERVVO,
    category: "category_1",
    variants: "8 Items",
    href: "/produk/servvo",
  },
  {
    id: 9,
    name: "Gala",
    price: 129900,
    image: GALA,
    key: "galadesc",
    category: "category_1",
    variants: "7 Items",
    href: "/produk/gala",
  },
  {
    id: 10,
    name: "Tozen",
    price: 129900,
    image: TOZEN,
    key: "tozendesc",
    category: "category_1",
    variants: "3 Items",
    href: "/produk/tozen",
  },
  {
    id: 11,
    name: "Magno",
    price: 129900,
    image: MAGNO,
    key: "magnodesc",
    category: "category_1",
    variants: "10 Items",
    href: "/produk/magno",
  },
  {
    id: 12,
    name: "Shimizu",
    price: 129900,
    image: SHIMIZU,
    key: "shimizudesc",
    category: "category_1",
    variants: "7 Items",
    href: "/produk/shimizu",
  },
  {
    id: 13,
    name: "Toyooda",
    price: 129900,
    image: TOYOODA,
    key: "toyoodadesc",
    category: "category_1",
    variants: "1 Items",
    href: "/produk/toyooda",
  },
  {
    id: 14,
    name: "Insulflex",
    price: 129900,
    image: INSULFLEX,
    key: "insulflexdesc",
    category: "category_1",
    variants: "2 Items",
    href: "/produk/insulflex",
  },
  {
    id: 15,
    name: "Hoda",
    price: 129900,
    image: HODA,
    key: "hodadesc",
    category: "category_1",
    variants: "1 Items",
    href: "/produk/hoda",
  },
  {
    id: 16,
    name: "Inaba Denko",
    price: 129900,
    image: INABA_DENKO,
    key: "inabadenkodesc",
    category: "category_1",
    variants: "3 Items",
    href: "/produk/inabadenko",
  },
  {
    id: 17,
    name: "DSP",
    image: DSP,
    key: "dspdesc",
    category: "category_1",
    variants: "3 Items",
    href: "/produk/dsp",
  },
  {
    id: 18,
    name: "Supreme",
    price: 129900,
    image: SUPREME,
    key: "supremedesc",
    category: "category_1",
    variants: "7 Items",
    href: "/produk/supreme",
  },
  {
    id: 19,
    name: "Multi Kabel",
    price: 129900,
    image: MULTIKABEL,
    key: "multikabeldesc",
    category: "category_1",
    variants: "6 Items",
    href: "/produk/multicabel",
  },
  {
    id: 20,
    name: "Semen Merah Putih",
    image: SEMEN_MERAH_PUTIH,
    key: "semenmerahputihdesc",
    category: "category_2",
    variants: "4 Items",
    href: "/produk/semenmerahputih",
  },
  {
    id: 21,
    name: "Drymix",
    price: 129900,
    image: DRYMIX,
    key: "drymixdesc",
    category: "category_2",
    variants: "10 Items",
    href: "/produk/drymix",
  },
  {
    id: 22,
    name: "Mortindo",
    price: 129900,
    image: MORTINDO,
    key: "mortindodesc",
    category: "category_2",
    variants: "5 Items",
    href: "/produk/mortindo",
  },
  {
    id: 23,
    name: "Ziegel",
    price: 129900,
    image: ZIEGEL,
    key: "ziegeldesc",
    category: "category_2",
    variants: "1 Items",
    href: "/produk/ziegel",
  },
  {
    id: 24,
    name: "Trilliunhose",
    image: TRILLIUNHOSE,
    key: "trilliunhosedesc",
    category: "category_2",
    variants: "5 Items",
    href: "/produk/trilliunhose",
  },
  {
    id: 25,
    name: "Besi Beton",
    price: 129900,
    image: JCAS,
    key: "besibetondesc",
    category: "category_2",
    variants: "1 Items",
    href: "/produk/jcas",
  },
  {
    id: 26,
    name: "Spindo",
    price: 129900,
    image: SPINDO,
    key: "spindodesc",
    category: "category_1",
    variants: "3 Items",
    href: "/produk/spindo",
  },
  {
    id: 27,
    name: "Trilliun",
    image: TRILLIUN,
    key: "trilliundesc",
    category: "category_1",
    variants: "6 Items",
    href: "/produk/trilliun",
  },
  {
    id: 28,
    name: "Wavin",
    price: 129900,
    image: WAVIN,
    key: "wavindesc",
    category: "category_1",
    variants: "6 Items",
    href: "/produk/wavin",
  },
  {
    id: 29,
    name: "Batu Split",
    price: 129900,
    image: BATU_SPLIT,
    key: "batusplitdesc",
    category: "category_2",
    variants: "1 Items",
    href: "/produk/batusplit",
  },
  {
    id: 30,
    name: "Abu Batu",
    price: 129900,
    image: ABU_BATU,
    key: "abubatudesc",
    category: "category_2",
    variants: "1 Items",
    href: "/produk/abubatu",
  },
  {
    id: 31,
    name: "Pioneer",
    price: 129900,
    image: PIONEER,
    key: "pioneerdesc",
    category: "category_2",
    variants: "8 Items",
    href: "/produk/pioneer",
  },
  {
    id: 32,
    name: "Rajawali",
    price: 129900,
    image: RAJAWALI,
    key: "rajawalidesc",
    category: "category_2",
    variants: "5 Items",
    href: "/produk/rajawali",
  },
  {
    id: 33,
    name: "Trilliunware",
    image: TRILLIUNWARE,
    key: "trilliunwaredesc",
    category: "category_3",
    variants: "9 Items",
    href: "/produk/trilliunware",
  },
  {
    id: 34,
    name: "Unnu",
    price: 129900,
    image: UNNU,
    key: "unnudesc",
    category: "category_3",
    variants: "5 Items",
    href: "/produk/unnu",
  },
  {
    id: 35,
    name: "Zora",
    price: 129900,
    image: ZORA,
    key: "zoradesc",
    category: "category_4",
    variants: "3 Items",
    href: "/produk/zora",
  },
  {
    id: 36,
    name: "Ostra",
    price: 129900,
    image: OSTRA,
    key: "ostradesc",
    category: "category_4",
    variants: "2 Items",
    href: "/produk/ostra",
  },
  {
    id: 37,
    name: "Paku Roket",
    price: 129900,
    image: PAKUROKET,
    key: "pakuroketdesc",
    category: "category_2",
    variants: "1 Items",
    href: "/produk/pakuroket",
  },
];

export default Product;
