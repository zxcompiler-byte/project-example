import { Link } from "react-router-dom";

const Projects = () => {
  const dataProjects = [
    {
      id: 1,
      title: "Kopi Senja (Landing Page)",
      desc: "Website premium untuk coffee shop dengan nuansa estetik.",
      tech: "React & Framer Motion",
      url: "/warkop",
    },
    {
      id: 2,
      title: "Dashboard Admin",
      desc: "Panel admin untuk memantau data penjualan realtime.",
      tech: "Vue & Chart.js",
    },
    {
      id: 3,
      title: "Portofolio 3D",
      desc: "Website personal dengan animasi 3D interaktif.",
      tech: "Three.js",
    },
    {
      id: 3,
      title: "Aplikasi Chatting",
      desc: "Clone WhatsApp dengan fitur real-time chat.",
      tech: "Firebase",
    },
  ];

  return (
    <div className="py-20 bg-slate-950 px-5 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Project Unggulan</h2>

      {/* Grid Layout biar rapi */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 2. INI MAGIC-NYA (Looping pakai .map) */}
        {dataProjects.map((item) => (
          <Link
            to={item.url || "#"}
            target="_blank"
            key={item.id}
            className="border border-slate-800 p-6 rounded-xl hover:bg-slate-900 transition hover:-translate-y-2 cursor-pointer group h-full"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition">
              {item.title}
            </h3>

            <p className="text-slate-400 text-sm mb-4">{item.desc}</p>

            <div className="flex gap-2">
              <span className="text-xs bg-cyan-900/30 text-cyan-400 border border-cyan500/50 px-2 py-1 rounded">
                {item.tech}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
