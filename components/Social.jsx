import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socials = [
    {
        icon: <FaGithub/>, 
        path: 'https://github.com/tanuj-cmd-15',
        label: 'GitHub'
    },
    {
        icon: <FaLinkedinIn/>, 
        path: 'https://www.linkedin.com/in/tushar-pawar-0524a7213/',
        label: 'LinkedIn'
    },
    {
        icon: <FaEnvelope/>, 
        path: 'mailto:pawartushar1215@gmail.com',
        label: 'Email'
    },
    {
        icon: <FaXTwitter/>, 
        path: 'https://x.com/t_u_s_h_a_r_p12',
        label: 'X (Twitter)'
    },
    {
        icon: <FaThreads/>, 
        path: 'https://www.threads.com/@imheretodistract',
        label: 'Threads'
    },
    {
        icon: <SiLeetcode/>, 
        path: 'https://leetcode.com/u/tusharp15/',
        label: 'LeetCode'
    },
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link 
                    key={index} 
                    href={item.path} 
                    className={iconStyles} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={item.label}
                >
                    {item.icon}
                </Link>
            );
        })}
    </div>
  );
};

export default Social;