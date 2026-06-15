// ─── Type helper dari as const ────────────────────────────────────────────────
const navItems = [
  { href: "/", text: "Beranda", key: "home" },
  {
    href: "#",
    text: "Tentang Kami",
    key: "about",
    subItems: [
      {
        href: "/tentang-kami",
        text: "Profil Perusahaan",
        key: "about_profile",
      },
      {
        href: "/tentang-kami/visi-misi",
        text: "Visi & Misi",
        key: "about_vision",
      },
      { href: "/tentang-kami/nilai", text: "Nilai-Nilai", key: "about_values" },
      {
        href: "/tentang-kami/fasilitas",
        text: "Fasilitas Distribusi",
        key: "about_facilities",
      },
      {
        href: "/tentang-kami/pendiri",
        text: "Manajemen",
        key: "about_management",
      },
      {
        href: "/tentang-kami/pencapaian",
        text: "Pencapaian",
        key: "about_achievements",
      },
    ],
  },
  { href: "/produk", text: "Produk", key: "products" },
  {
    href: "#",
    text: "Ruang Informasi",
    key: "info_room",
    subItems: [
      { href: "/ruang-informasi/berita", text: "Berita", key: "news" },
      {
        href: "/ruang-informasi/kegiatan",
        text: "Kegiatan",
        key: "activities",
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
