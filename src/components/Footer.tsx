const Footer: React.FC = () => {
  return (
    <footer className="text-center text-white py-3">
      <p className="m-0">
        © {new Date().getFullYear()} Mechanic Diagnosis App by{" "}
        <a
          href="https://www.linkedin.com/in/martindanilodaniotti/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-info"
        >
          Martin Daniotti
        </a>{" "}
        -
        <a
          href="https://github.com/mdaniotti/mechanic-diagnosis-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-info ms-2"
        >
          Ver código en GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
