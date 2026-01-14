const Footer = () => {
  // Trik JS: Ambil tahun sekarang otomatis
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-white mb-4">
          Siap Memulai Project?
        </h3>

        <p className="mb-8 max-w-md mx-auto">
          Yuk diskusi santai soal ide website impianmu. Kopi di saya, ide di
          kamu. ☕
        </p>

        {/* Social Media Links (Pura-pura dulu) */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="hover:text-orange-500 transition hover:-translate-y-1"
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-orange-500 transition hover:-translate-y-1"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-orange-500 transition hover:-translate-y-1"
          >
            GitHub
          </a>
        </div>

        {/* Copyright Dinamis */}
        <p className="text-sm">
          © {currentYear} BroDev. Dibuat dengan ☕ dan React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
