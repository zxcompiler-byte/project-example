import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full p-5 flex justify-between items-center z-50 mix-blend-difference text-white"
    >
      {/* BRAND */}
      <h1 className="text-2xl font-bold font-mono text-orange-500 cursor-pointer hover:scale-110 transition">
        BRO<span className="text-white">DEV</span>
      </h1>

      {/* MENU LINK */}
      <ul className="flex gap-6 text-sm font-medium">
        {["Home", "Projects", "Contact"].map((menu, index) => (
          <li
            key={index}
            className="hover:text-orange-500 cursor-pointer relative group"
          >
            <a href={`#${menu.toLowerCase()}`}>{menu}</a>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
