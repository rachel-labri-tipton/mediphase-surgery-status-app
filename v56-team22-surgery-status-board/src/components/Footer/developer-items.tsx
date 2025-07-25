import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
type Developer = {
  name: string;
  github?: string;
  linkedin?: string;
};

type DeveloperItemsProps = {
  devs: Developer[];
};

const DeveloperItems = ({ devs }: DeveloperItemsProps) => {
  return (
    <div className="my-4 md:my-0 w-xs ">
      <h1 className="mb-3 text-lg font-bold text-white uppercase text-center">
        Developers
      </h1>
      <div className="flex flex-col border border-gray-300 rounded-xl gap-3 px-6 py-4 bg-white backdrop-blur-sm shadow-md m-auto">
        {devs.map((dev, index) => (
          <div key={index} className="flex items-center w-full group">
            <span className="font-mono text-base font-medium text-gray-900 group-hover:text-green-600 group-hover:scale-105 transition-all duration-200">
              {dev.name}
            </span>

            <div className="flex items-center gap-2 ml-auto">
              {dev.github && (
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  <IoLogoGithub className="inline-block" size={22} />
                </a>
              )}
              {dev.linkedin && (
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  <IoLogoLinkedin className="inline-block" size={22} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperItems;
