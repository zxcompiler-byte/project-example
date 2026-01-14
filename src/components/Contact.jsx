import { useState } from "react"; // <--- Import "Otak" Memori React

const Contact = () => {
  // 1. Siapkan "Memori" buat nyimpen ketikan user
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // 2. Fungsi pas tombol diklik
  const handleSubmit = (e) => {
    e.preventDefault(); // Biar halaman gak refresh

    // Ganti nomor ini dengan nomor WA Bro (pake 62 depannya)
    const phoneNumber = "6285700628849";

    // Bikin link WA otomatis
    const waUrl = `https://wa.me/${phoneNumber}?text=Halo BroDev, nama saya ${name}. ${message}`;

    // Buka tab baru ke WA
    window.open(waUrl, "_blank");
  };

  return (
    <div className="py-20 px-5 bg-slate-950 text-white flex justify-center">
      <div className="w-full max-w-md border border-slate-800 p-8 rounded-2xl bg-slate-900/50 shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-orange-500">
          Hubungi Saya
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Input Nama */}
          <div>
            <label className="block text-slate-400 mb-2 text-sm">
              Nama Kamu
            </label>
            <input
              type="text"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition"
              placeholder="Elon Musk"
              value={name}
              onChange={(e) => setName(e.target.value)} // Simpan ketikan ke memori
              required
            />
          </div>

          {/* Input Pesan */}
          <div>
            <label className="block text-slate-400 mb-2 text-sm">Pesan</label>
            <textarea
              rows="4"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition"
              placeholder="Bro, mau bikin web dong..."
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Simpan ketikan ke memori
              required
            ></textarea>
          </div>

          {/* Tombol Kirim */}
          <button
            type="submit"
            className="mt-4 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition active:scale-95"
          >
            Kirim ke WhatsApp 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
