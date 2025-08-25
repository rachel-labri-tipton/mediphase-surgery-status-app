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
    github: 'https://github.com/Excalibur097',
    linkedin: 'https://www.linkedin.com/in/sugari-rapha-8823a58a'
  },
];

const pages = [
  { name: 'Home', href: '/' },
  { name: 'Patient Status Board', href: '/patient-status' },
];

const Footer = () => {
  return (
    <footer className="w-full px-4 py-8 bg-primary text-white">
      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl mx-auto gap-8">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <FooterLogo />
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <DeveloperItems devs={devNames} />
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <PageList pages={pages} />
        </div>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <GithubProjectLink />
      </div>
    </footer>
  );
};

export default Footer;
