export default function Home() {
  return (
    <>
      <header className="header">
        <div className="wrapper header__wrapper">
          <a className="logo" href="#">
            <h1 className="logo__title">Cozy House</h1>
            <p className="logo__subtitle">Shelter for pets in Boston</p>
          </a>
          <nav className="header__navigation">
            <ul className="navigation">
              <li className="navigation__link navigation__link_active">
                <a href="#">About the shelter</a>
              </li>
              <li className="navigation__link">
                <a href="../pets/index.html">Our pets</a>
              </li>
              <li className="navigation__link">
                <a href="#help">Help the shelter</a>
              </li>
              <li className="navigation__link">
                <a href="#footer">Contacts</a>
              </li>
            </ul>
            <div className="menu">
              <div className="menu__icon">
                <span className="menu__line"></span>
              </div>
              <div className="menu__body">
                <div className="menu__dropout"></div>
                <ul className="menu__list">
                  <li className="menu__link menu__link_active">
                    <a href="#">About the shelter</a>
                  </li>
                  <li className="menu__link">
                    <a href="../pets/index.html">Our pets</a>
                  </li>
                  <li className="menu__link">
                    <a href="#help">Help the shelter</a>
                  </li>
                  <li className="menu__link">
                    <a href="#footer">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* <main className="">
        <h1>Home page</h1>
      </main> */}
    </>
  );
}
