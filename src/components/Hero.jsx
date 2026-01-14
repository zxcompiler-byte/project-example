import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen bg-slate-950 flex flex-col justify-center items-center text-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl md:text-2xl text-orange-500 font-mono mb-4"
      >
        Hi, Saya Frontend Developer
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter"
      >
        MEMBANGUN <br />
        <span className="italic text-slate-500">DIGITAL EXPERIENCE</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-slate-400 max-w-lg mx-auto">
          Saya mengubah desain menjadi kode yang interaktif, responsif, dan
          performa tinggi.
        </p>

        <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-orange-700 transition hover:scale-105 active:scale-95 cursor-pointer">
          Gaspol!
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
