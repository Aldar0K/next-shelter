import Image from "next/image";
import { FC } from "react";

import PuppyPNG from "@/assets/images/png/footer-puppy.png";
import EmailSVG from "@/assets/images/svg/icon-email.svg";
import MarkerSVG from "@/assets/images/svg/icon-marker.svg";
import PhoneSVG from "@/assets/images/svg/icon-phone.svg";

const Footer: FC = () => {
  return (
    <footer className="footer" id="footer">
      <div className="wrapper footer__wrapper">
        <div className="footer__content">
          <div className="footer__contacts">
            <h3 className="footer__title">For questions and suggestions</h3>
            <a className="footer__link" href="mailto:email@shelter.com">
              <Image src={EmailSVG} alt="icon-email.svg" />
              email@shelter.com
            </a>
            <a className="footer__link" href="tel:+13 674 567 75 54">
              <Image src={PhoneSVG} alt="icon-phone.svg" />
              +13 674 567 75 54
            </a>
          </div>
          <div className="footer__locations">
            <h3 className="footer__title">We are waiting for your visit</h3>
            <a
              className="footer__link"
              href="https://goo.gl/maps/zBg6fj6Rf8C8sUMa7"
              target="_blank"
            >
              <Image src={MarkerSVG} alt="icon-marker.svg" />1 Central Street,
              Boston (entrance from the store)
            </a>
            <a
              className="footer__link"
              href="https://goo.gl/maps/F5T4DatksUWieUBa7"
              target="_blank"
            >
              <Image src={MarkerSVG} alt="icon-marker.svg" />
              18 South Park, London
            </a>
          </div>
        </div>
        <div className="footer__image">
          <Image src={PuppyPNG} alt="footer-puppy.png" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
