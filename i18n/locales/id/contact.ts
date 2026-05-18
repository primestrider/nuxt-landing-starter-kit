export default {
  meta: {
    title: "Kontak",
    description: "Hubungi kami untuk demo, dukungan, atau kerja sama.",
  },
  hero: {
    title: "Hubungi kami",
    description:
      "Isi formulir di bawah atau gunakan saluran kontak alternatif.",
  },
  info: {
    email: { label: "Email", value: "hello@example.com" },
    phone: { label: "Telepon", value: "+62 21 1234 5678" },
    address: {
      label: "Alamat",
      value: "Jakarta, Indonesia",
    },
  },
  form: {
    title: "Kirim pesan",
    description: "Kami biasanya membalas dalam 1–2 hari kerja.",
    name: "Nama lengkap",
    namePlaceholder: "Nama Anda",
    email: "Email",
    emailPlaceholder: "anda@perusahaan.com",
    topic: "Topik",
    topicPlaceholder: "Pilih topik",
    topics: ["Demo produk", "Dukungan teknis", "Kemitraan", "Lainnya"],
    message: "Pesan",
    messagePlaceholder: "Ceritakan kebutuhan Anda...",
    consent: "Saya setuju data saya diproses sesuai kebijakan privasi.",
    submit: "Kirim pesan",
    successTitle: "Pesan terkirim",
    successDescription: "Terima kasih. Tim kami akan segera menghubungi Anda.",
    validation: {
      name: "Nama minimal 2 karakter",
      email: "Email tidak valid",
      topic: "Pilih topik",
      message: "Pesan minimal 10 karakter",
      consent: "Anda harus menyetujui kebijakan privasi",
    },
  },
};
