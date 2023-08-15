const FooterSection = () => {
  return (
    <footer className="text-xs flex flex-col items-center text-brandColors-text gap-1 ">
      <p>Designed and Built By Nicolás Bolaños</p>
      <div>
        <a
          className="hover:text-cyan-500"
          href="https://www.flaticon.com/free-icons/spain"
          title="spain icons"
        >
          Spain icons created by Freepik - Flaticon
        </a>
        {" / "}
        <a
          className="hover:text-cyan-500"
          href="https://www.flaticon.com/free-icons/uk-flag"
          title="uk flag icons"
        >
          Uk flag icons created by Freepik - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
