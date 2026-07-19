import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/tanuj-cmd-15'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/tushar-pawar'},
    {icon: <FaEnvelope/>, path: 'mailto:pawartushar8485@gmail.com'},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                {item.icon}
            </Link>
            );
        })}
    </div>
  );
};

export default Social;