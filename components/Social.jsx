import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socials = [
    {
        icon: <FaGithub/>, 
        path: 'https://github.com/tanuj-cmd-15',
        label: 'GitHub',
        color: '#000000'
    },
    {
        icon: <FaLinkedinIn/>, 
        path: 'https://www.linkedin.com/in/tushar-pawar-0524a7213/',
        label: 'LinkedIn',
        color: '#0077B5'
    },
    {
        icon: <FaEnvelope/>, 
        path: 'mailto:pawartushar1215@gmail.com',
        label: 'Email',
        color: '#EA4335'
    },
    {
        icon: <FaXTwitter/>, 
        path: 'https://x.com/t_u_s_h_a_r_p12',
        label: 'X (Twitter)',
        color: '#000000'
    },
    {
        icon: <FaThreads/>, 
        path: 'https://www.threads.com/@imheretodistract',
        label: 'Threads',
        color: '#000000'
    },
    {
        icon: <SiLeetcode/>, 
        path: 'https://leetcode.com/u/tusharp15/',
        label: 'LeetCode',
        color: '#FFA116'
    },
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className="social-grid-wrapper">
      <div className="social-grid">
        {socials.map((item, index) => (
          <Link 
            key={index} 
            href={item.path} 
            className="social-card" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={item.label}
            data-color={item.color}
          >
            <div className="social-icon">
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
      <p className="social-text">HOVER<br /><br />FOR<br /><br />SOCIAL</p>
      <div className="social-back"></div>
    </div>
  );
};

export default Social;