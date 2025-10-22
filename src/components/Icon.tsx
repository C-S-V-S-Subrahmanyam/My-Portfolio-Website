import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaExternalLinkAlt,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaChartLine,
  FaCloud,
  FaTools,
  FaUsers,
  FaGlobe,
  FaTwitter,
  FaInstagram,
  FaBullseye,
  FaCogs,
  FaTimes,
  FaSearch,
  FaPhone,
  FaMapMarkerAlt,
  FaSun,
  FaMoon,
  FaLightbulb,
  FaStar,
  FaHandshake,
  FaTrophy,
  FaBrain
} from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiLinktree } from 'react-icons/si';
import { MdLanguage } from 'react-icons/md';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 20, className = '', color }) => {
  const iconStyle = {
    fontSize: `${size}px`,
    color: color,
  };

  const iconMap: { [key: string]: React.ComponentType<any> } = {
    // Social Media Icons
    github: FaGithub,
    linkedin: FaLinkedin,
    email: FaEnvelope,
    linktree: SiLinktree,
    twitter: FaTwitter,
    instagram: FaInstagram,
    
    // Action Icons
    external: FaExternalLinkAlt,
    link: HiOutlineExternalLink,
    
    // Skill Category Icons
    code: FaCode,
    laptop: FaLaptopCode,
    database: FaDatabase,
    chart: FaChartLine,
    cloud: FaCloud,
    tools: FaTools,
    users: FaUsers,
    globe: FaGlobe,
    target: FaBullseye,
    cogs: FaCogs,
    language: MdLanguage,
    close: FaTimes,
    search: FaSearch,
    phone: FaPhone,
    location: FaMapMarkerAlt,
    sun: FaSun,
    moon: FaMoon,
    lightbulb: FaLightbulb,
    star: FaStar,
    handshake: FaHandshake,
    trophy: FaTrophy,
    brain: FaBrain,
  };

  const IconComponent = iconMap[name.toLowerCase()];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return <span>?</span>;
  }

  return <IconComponent style={iconStyle} className={className} />;
};

export default Icon;