export default {
  meta: {
    title: "Beranda",
    description:
      "Starter kit Nuxt untuk landing page, profil perusahaan, dan situs statis.",
  },
  hero: {
    title: "Bangun landing page modern dengan Nuxt UI",
    description:
      "Starter kit siap pakai dengan i18n, SEO, keamanan, dan puluhan komponen Nuxt UI v4 untuk situs perusahaan Anda.",
    primaryCta: "Mulai sekarang",
    secondaryCta: "Pelajari lebih lanjut",
  },
  features: {
    headline: "Fitur",
    title: "Semua yang Anda butuhkan",
    description:
      "Modul dan pola terbaik untuk mempercepat peluncuran situs marketing.",
    items: [
      {
        title: "Aksesibel",
        description: "Komponen berbasis Reka UI dengan dukungan ARIA penuh.",
        icon: "i-lucide-accessibility",
      },
      {
        title: "Dapat dikustomisasi",
        description: "Tema Tailwind Variants yang mudah disesuaikan dengan brand.",
        icon: "i-lucide-palette",
      },
      {
        title: "Responsif",
        description: "Mobile-first untuk semua ukuran layar.",
        icon: "i-lucide-monitor-smartphone",
      },
      {
        title: "SEO siap pakai",
        description: "Sitemap, robots, dan meta tag terintegrasi.",
        icon: "i-lucide-search",
      },
    ],
  },
  showcase: {
    headline: "Komponen",
    title: "Showcase Nuxt UI",
    description: "Contoh penggunaan komponen umum di halaman landing.",
    alert: {
      title: "Starter kit aktif",
      description: "Ganti teks dan tema di app.config.ts serta file i18n.",
    },
    accordion: {
      q1: "Apakah ini mendukung static generation?",
      a1: "Ya. Jalankan npm run generate untuk output statis.",
      q2: "Bagaimana cara menambah bahasa?",
      a2: "Tambahkan locale di nuxt.config.ts dan folder i18n/locales.",
      q3: "Apakah bisa dipakai untuk profil perusahaan?",
      a3: "Tentu. Halaman About dan Contact sudah disiapkan sebagai contoh.",
    },
  },
  pricing: {
    headline: "Harga",
    title: "Paket sederhana dan transparan",
    description: "Sesuaikan paket ini dengan model bisnis Anda.",
    plans: [
      {
        title: "Gratis",
        price: "Rp0",
        description: "Untuk proyek pribadi",
        features: ["Halaman dasar", "Dukungan komunitas"],
      },
      {
        title: "Pro",
        price: "Rp99rb",
        description: "Untuk tim kecil",
        features: ["Semua komponen", "Dukungan prioritas"],
        highlight: true,
        badge: "Populer",
      },
      {
        title: "Enterprise",
        price: "Kustom",
        description: "Untuk perusahaan",
        features: ["Kustomisasi tema", "Dukungan dedicated"],
      },
    ],
  },
  cta: {
    title: "Siap meluncurkan situs Anda?",
    description: "Fork starter kit ini dan mulai bangun dalam hitungan menit.",
    primary: "Hubungi kami",
    secondary: "Lihat di GitHub",
  },
  logos: {
    title: "Dipercaya oleh tim produk",
  },
};
