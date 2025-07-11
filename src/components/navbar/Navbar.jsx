import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import LinkdinImg from "../assets/linkedin.svg";
import githubImg from "../assets/github.svg";
import twitterImg from "../assets/twitter.svg";
import leetcodeImg from "../assets/leetcode.svg";

const Navbar = () => {
  const navItems = [
    { name: "LinkedIn", img: LinkdinImg, link: "https://www.linkedin.com/in/rahul-kaliraman-66a341259/" },
    { name: "GitHub", img: githubImg, link: "https://github.com/Rahul-kal" },
    { name: "Twitter", img: twitterImg, link: "https://x.com/Rahul29073" },
    { name: "Leetcode", img: leetcodeImg, link: "https://leetcode.com/u/Rahul_0729/" },
  ];

  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />

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
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.img} alt={item.name} className="nav-icon" />
              </a>
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
