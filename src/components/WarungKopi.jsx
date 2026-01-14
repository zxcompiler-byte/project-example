import { motion } from "framer-motion";

const WarungKopi = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] font-sans selection:bg-orange-900 selection:text-white">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <h1 className="text-2xl font-serif font-bold text-amber-500 tracking-wider">
          KOPI<span className="text-white">SENJA</span>
        </h1>
        <button className="bg-amber-700 hover:bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer">
          Pesan Sekarang
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
            alt="Coffee Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#121212] via-transparent to-black/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-amber-500 font-medium tracking-[0.2em] mb-4 uppercase text-sm md:text-base"
          >
            Sejak 2026
          </motion.h2>

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Rasakan Hangatnya <br />
            <span className="text-amber-600 italic">Cerita & Rasa</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg mb-8 max-w-xl mx-auto"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-700 transition shadow-lg shadow-amber-900/20 cursor-pointer"
          >
            Lihat Menu Kami
          </motion.button>
        </div>
      </section>

      {/* --- ABOUT SECTION (Grid) --- */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20"
        >
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
            alt="Barista"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-amber-500 font-bold mb-2 uppercase tracking-wider">
            Tentang Kami
          </h3>
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Filosofi Secangkir Kopi
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <a
            href="#"
            className="text-amber-500 border-b border-amber-500 pb-1 hover:text-amber-400 hover:border-amber-400 transition"
          >
            Baca Selengkapnya →
          </a>
        </motion.div>
      </section>

      {/* --- MENU HIGHLIGHT --- */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Menu Favorit
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.2 }}
                className="bg-[#121212] p-6 rounded-xl border border-white/5 hover:border-amber-500/50 transition group cursor-pointer"
              >
                <div className="h-48 bg-gray-800 rounded-lg mb-6 overflow-hidden relative">
                  <img
                    src={`https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&random=${item}`}
                    alt="Kopi"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  V60 Manual Brew
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-500 font-bold text-lg">
                    Rp 28.000
                  </span>
                  <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-600 transition">
                    +
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WarungKopi;
