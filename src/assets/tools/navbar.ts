// ─── Type helper dari as const ────────────────────────────────────────────────
const navItems = [
  { href: "/", text: "Beranda", key: "home" },
  {
    href: "#",
    text: "Tentang Kami",
    key: "about",
    mega: true,
    subItems: [
      {
        href: "/tentang-kami",
        text: "Profil Perusahaan",
        key: "about_profile",
        icon: "building",
        desc: "desc_subprofile",
      },
      {
        href: "/tentang-kami/visi-misi",
        text: "Visi & Misi",
        key: "about_vision",
        icon: "eye",
        desc: "desc_subvisi",
      },
      {
        href: "/tentang-kami/nilai",
        text: "Nilai-Nilai",
        key: "about_values",
        icon: "heart-handshake",
        desc: "desc_subnilai",
      },
      {
        href: "/tentang-kami/fasilitas",
        text: "Fasilitas Distribusi",
        key: "about_facilities",
        icon: "truck",
        desc: "desc_subfasilitias",
      },
      {
        href: "/tentang-kami/pendiri",
        text: "Manajemen",
        key: "about_management",
        icon: "users",
        desc: "desc_subpendiri",
      },
      {
        href: "/tentang-kami/pencapaian",
        text: "Pencapaian",
        key: "about_achievements",
        icon: "award",
        desc: "desc_subpencapaian",
      },
    ],
  },
  { href: "/produk", text: "Produk", key: "products" },
  {
    href: "#",
    text: "Ruang Informasi",
    key: "info_room",
    mega: true,
    subItems: [
      {
        href: "/ruang-informasi/berita",
        text: "Berita",
        key: "news",
        icon: "news",
        desc: "desc_subnews",
      },
      {
        href: "/ruang-informasi/kegiatan",
        text: "Kegiatan",
        key: "activities",
        icon: "calendar",
        desc: "desc_subactivities",
      },
    ],
  },
  { href: "/karir", text: "Karir", key: "career" },
  { href: "/kontak", text: "Hubungi Kami", key: "contact" },
] as const;

// ─── Export type yang bisa dipakai di file lain ───────────────────────────────
export type NavItems = typeof navItems;
export type NavItem = NavItems[number];
export type NavItemKey = NavItem["key"];

// Type untuk subItems (hanya item yang punya subItems)
export type NavItemWithSubs = Extract<NavItem, { subItems: readonly any[] }>;
export type SubItem = NavItemWithSubs["subItems"][number];
export type SubItemKey = SubItem["key"];

export default navItems;
