import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
const Navbar = () => {

  const navItems = ["Home", "About me", "Services", "My Work", "Contact me"];


  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Rahul 
        </motion.span>
        
         {/* Navigation Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(/ /g, "")}`}>{item}</a>
            </li>
          ))}
        </ul>

{/* Contact Button */}
        <button className="contact-btn">
          Contact <FiArrowUpRight className="arrow" />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
