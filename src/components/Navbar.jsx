function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar-custom">
      <ul className="navbar-menu">
        <li>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
            Index
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>
            Work
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
