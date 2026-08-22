import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socials = [
    {
        icon: <FaGithub />, 
        path: 'https://github.com/tusharpawar1217',
        label: 'GitHub',
    },
    {
        icon: <FaLinkedinIn />, 
        path: 'https://www.linkedin.com/in/tushar-pawar-0524a7213/',
        label: 'LinkedIn',
    },
    {
        icon: <FaEnvelope />, 
        path: 'mailto:pawartushar1215@gmail.com',
        label: 'Email',
    },
    {
        icon: <FaXTwitter />, 
        path: 'https://x.com/t_u_s_h_a_r_p12',
        label: 'X (Twitter)',
    },
    {
        icon: <FaThreads />, 
        path: 'https://www.threads.com/@imheretodistract',
        label: 'Threads',
    },
    {
        icon: <SiLeetcode />, 
        path: 'https://leetcode.com/u/tusharp15/',
        label: 'LeetCode',
    },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles || "flex gap-3"}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles || "w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-sm"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;