type Page = {
  name: string;
  href: string;
};

type PagesListProps = {
  pages: Page[];
};

export const PageList = ({ pages }: PagesListProps) => {
  return (
    <div className="my-4 md:my-0">
      <h1 className="px-4 mb-3 text-lg font-semibold text-white ">Pages</h1>
      <div className="flex flex-col gap-2 px-4">
        {pages.map((page, index) => (
          <a
            key={index}
            href={page.href}
            className="font-mono text-md hover:text-white transition-colors"
          >
            {page.name}
          </a>
        ))}
      </div>
    </div>
  );
};
