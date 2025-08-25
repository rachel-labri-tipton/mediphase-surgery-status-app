import { IoLogoGithub } from 'react-icons/io';

const GithubProjectLink = () => {
  return (
    <div className="mt-8 text-center">
      <a
        href="https://github.com/rachel-labri-tipton/mediphase-surgery-status-app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 text-lg font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-900/80 transition-colors"
      >
        <IoLogoGithub size={24} />
        GitHub Project
      </a>
    </div>
  );
};

export default GithubProjectLink;
