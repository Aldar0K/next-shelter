import Link from "next/link";
import { FC } from "react";

const HeaderPets: FC = () => {
  return (
    <header className="header-pets">
      <div className="wrapper header-pets__wrapper">
        <Link href="/" className="logo logo_dark">
          <h1 className="logo__title">Cozy House</h1>
          <p className="logo__subtitle">Shelter for pets in Boston</p>
        </Link>

        <nav className="header__navigation">
          <ul className="navigation">
            <li className="navigation__link navigation__link_dark">
              <Link href="/">About the shelter</Link>
            </li>
            <li className="navigation__link navigation__link_dark navigation__link_active">
              <Link href="#">Our pets</Link>
            </li>
            <li className="navigation__link navigation__link_dark">
              <Link href="/#help">Help the shelter</Link>
            </li>
            <li className="navigation__link navigation__link_dark">
              <Link href="/#footer">Contacts</Link>
            </li>
          </ul>

          <div className="menu">
            <div className="menu__icon menu__icon_dark">
              <span className="menu__line menu__line_dark"></span>
            </div>
            <div className="menu__body menu__body_light">
              <div className="menu__dropout"></div>
              <ul className="menu__list">
                <li className="menu__link menu__link_dark">
                  <Link href="/">About the shelter</Link>
                </li>
                <li className="menu__link menu__link_dark menu__link_active">
                  <Link href="#">Our pets</Link>
                </li>
                <li className="menu__link menu__link_dark">
                  <Link href="/#help">Help the shelter</Link>
                </li>
                <li className="menu__link menu__link_dark">
                  <Link href="/#footer">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderPets;
