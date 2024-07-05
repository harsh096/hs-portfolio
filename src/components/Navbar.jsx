import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="text-3xl font-bold">HS</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://drive.google.com/file/d/1sJwLHTvzzjYuLaEvLxZvd3WeHPnq1dSC/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-xl border-b tracking-tighter">Resume</p>
        </a>
        <a
          href="https://www.linkedin.com/in/harsh096/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/harsh096"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
