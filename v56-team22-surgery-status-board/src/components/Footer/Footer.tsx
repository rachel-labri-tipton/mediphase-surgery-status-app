import DeveloperItems from './developer-items';
import FooterLogo from './footer-logo';
import GithubProjectLink from './github-project-link';
import { PageList } from './page-list';

const devNames = [
  {
    name: 'Avtar Singh',
    github: 'https://github.com/ManpreetSL',
    linkedin: 'https://www.linkedin.com/in/avtar-singh-uk',
  },
  {
    name: 'Mohamed Ouederni',
    github: 'https://github.com/9-barristanselmy-9',
    linkedin: 'https://www.linkedin.com/in/mohamed-ouederni-0bb11ab4',
  },
  {
    name: 'Rachel Tipton',
    github: 'https://github.com/rachel-labri-tipton',
    linkedin: 'https://www.linkedin.com/in/rachel-labri-tipton',
  },
  { name: 'Rapha', 
  github: 'https://github.com/Excalibur097'},
];

const pages = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
];

const Footer = () => {
  return (
    <footer className="w-full px-6 py-8 bg-[#16a34a] flex flex-col justify-between items-center text-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl mx-auto gap-8">
        <FooterLogo />
        <DeveloperItems devs={devNames} />
        <PageList pages={pages} />
      </div>
      <GithubProjectLink />
    </footer>
  );
};

export default Footer;
