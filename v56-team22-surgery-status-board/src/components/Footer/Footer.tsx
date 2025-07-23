const Footer = () => {
  return (
    <footer className="w-full px-6 bg-[hsl(82,84.5%,67.1%)] flex flex-col justify-between items-center">
      <div className="flex justify-between items-center w-full">
        <div>LOGO</div>
        <div className="my-1">
          <h1 className=" px-4 my-1 font-semibold ">Developers</h1>
          <div className="flex flex-col border-1 rounded-2xl gap-2 px-4 py-2 font-mono">
            <div>Avtar Singh</div>
            <div>Mohamed Ouederni</div>
            <div>Rachel Tipton</div>
            <div>Rapha</div>
          </div>
        </div>
        <div>Pages</div>
      </div>
      <div>
        <h1 className="px-4 my-1 font-semibold">
          <a
            href="https://github.com/chingu-voyages/V56-tier2-team-22"
            target="_blank"
          >
            Github Project Link
          </a>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
