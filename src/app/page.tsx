import Image from "next/image";

import AboutPets from "@/assets/images/png/about-pets.png";
import PetsCharlyPNG from "@/assets/images/png/pets-charly.png";
import PetsJenniferPNG from "@/assets/images/png/pets-jennifer.png";
import PetsKatrinePNG from "@/assets/images/png/pets-katrine.png";
import PetsScarletPNG from "@/assets/images/png/pets-scarlet.png";
import PetsSophiaPNG from "@/assets/images/png/pets-sophia.png";
import PetsWoodyPNG from "@/assets/images/png/pets-woody.png";
import StartScreenPNG from "@/assets/images/png/start-screen-puppy.png";

import ArrowLeftSVG from "@/assets/images/svg/arrow-left.svg";
import ArrowRightSVG from "@/assets/images/svg/arrow-right.svg";

import BowlsSVG from "@/assets/images/svg/icon-bowls-and-cups.svg";
import CollarsSVG from "@/assets/images/svg/icon-collars-leashes.svg";
import MedicinesSVG from "@/assets/images/svg/icon-medicines.svg";
import PetFoodSVG from "@/assets/images/svg/icon-pet-food.svg";
import ShampoosSVG from "@/assets/images/svg/icon-shampoos.svg";
import SleepingSVG from "@/assets/images/svg/icon-sleeping-area.svg";
import ToysSVG from "@/assets/images/svg/icon-toys.svg";
import TransportationSVG from "@/assets/images/svg/icon-transportation.svg";
import VitaminsSVG from "@/assets/images/svg/icon-vitamins.svg";

import DonationPNG from "@/assets/images/png/donation-dog.png";
import CreditSVG from "@/assets/images/svg/credit-card.svg";

import { Footer, Header } from "@/components";

const HomePage = () => {
  return (
    <>
      <Header />

      <main className="main">
        <section className="not-only">
          <div className="wrapper not-only__wrapper">
            <div className="not-only__content">
              <h2 className="not-only__title">Not only people need a house</h2>
              <p className="not-only__subtitle">
                We offer to give a chance to a little and nice puppy with an
                extremely wide and open heart. He or she will love you more than
                anybody else in the world, you will see!
              </p>
              <a href="#pets" className="not-only__button">
                <button className="button button_colored">Make a friend</button>
              </a>
            </div>
            <div className="not-only__image">
              <Image src={StartScreenPNG} alt="start-screen-puppy" />
            </div>
          </div>
        </section>

        <section className="about">
          <div className="wrapper about__wrapper">
            <div className="about__image">
              <Image src={AboutPets} alt="about-pets.png" />
            </div>
            <div className="about__content">
              <h3 className="about__tittle">About the shelter “Cozy House”</h3>
              <p className="about__paragraph">
                Currently we have 121 dogs and 342 cats on our hands and
                statistics show that only 20% of them will find a family. The
                others will continue to live with us and will be waiting for a
                lucky chance to become dearly loved.
              </p>
              <p className="about__paragraph">
                We feed our wards with the best food and make sure that they do
                not get sick, feel comfortable (including psychologically) and
                well. We are supported by 87 volunteers and 28 employees of
                various skill levels. About 12% of the animals are taken by the
                shelter staff. Taking care of the animals, they become attached
                to the pets and would hardly ever leave them alone.
              </p>
            </div>
          </div>
        </section>

        <section className="pets" id="pets">
          <div className="wrapper pets__wrapper">
            <h3 className="pets__title">
              Our friends who
              <br />
              are looking for a house
            </h3>
            <div className="slider pets__slider">
              <button
                className="button button_round slider__button"
                id="btn-left"
              >
                <Image src={ArrowLeftSVG} alt="arrow-left.svg" />
              </button>
              <div className="slider__wrapper">
                <ul className="slider__list" id="slider">
                  <li className="slider__item" id="item-left">
                    <div className="pet-card" data-id="2">
                      <Image
                        className="slider__image"
                        src={PetsSophiaPNG}
                        width="270"
                        height="270"
                        alt="pets-sophia.png"
                      />
                      <p className="slider__name">Sophia</p>
                      <button className="button button_bordered">
                        Learn more
                      </button>
                    </div>
                    <div className="pet-card" data-id="4">
                      <Image
                        className="slider__image"
                        src={PetsScarletPNG}
                        width="270"
                        height="270"
                        alt="pets-skarlett.png"
                      />
                      <p className="slider__name">Scarlett</p>
                      <button className="button button_bordered">
                        Learn more
                      </button>
                    </div>
                    <div className="pet-card" data-id="8">
                      <Image
                        className="slider__image"
                        src={PetsCharlyPNG}
                        width="270"
                        height="270"
                        alt="pets-charly.png"
                      />
                      <p className="slider__name">Charly</p>
                      <button className="button button_bordered">
                        Learn more
                      </button>
                    </div>
                  </li>
                  <li className="slider__item" id="item-active">
                    <div className="pet-card" data-id="5">
                      <Image
                        className="slider__image"
                        src={PetsKatrinePNG}
                        width="270"
                        height="270"
                        alt="pets-katrine.png"
                      />
                      <p className="slider__name">Katrine</p>
                      <button className="button button_bordered">
                        Learn more
                      </button>
                    </div>
                    <div className="pet-card" data-id="1">
                      <Image
                        className="slider__image"
                        src={PetsJenniferPNG}
                        width="270"
                        height="270"
                        alt="pets-jennifer.png"
                      />
                      <p className="slider__name">Jennifer</p>
                      <button className="button button_bordered">
                        Learn more
                      </button>
                    </div>
                    <div className="pet-card" data-id="3">
                      <Image
                        className="slider__image"
                        src={PetsWoodyPNG}
                        width="270"
                        height="270"
                        alt="pets-woody.png"
                      />
                      <p className="slider__name">Woody</p>
                      <button className="button button_bordered">
                        Learn more
                      </button>
                    </div>
                  </li>
                  <li className="slider__item" id="item-right">
                    <div className="pet-card" data-id="2">
                      <Image
                        className="slider__image"
                        src={PetsSophiaPNG}
                        width="270"
                        height="270"
                        alt="pets-sophia.png"
                      />
                      <p className="slider__name">Sophia</p>
                      <button className="button button_bordered">
                        Learn more
                      </button>
                    </div>
                    <div className="pet-card" data-id="4">
                      <Image
                        className="slider__image"
                        src={PetsScarletPNG}
                        width="270"
                        height="270"
                        alt="pets-skarlett.png"
                      />
                      <p className="slider__name">Scarlett</p>
                      <button className="button button_bordered">
                        Learn more
                      </button>
                    </div>
                    <div className="pet-card" data-id="8">
                      <Image
                        className="slider__image"
                        src={PetsCharlyPNG}
                        width="270"
                        height="270"
                        alt="pets-charly.png"
                      />
                      <p className="slider__name">Charly</p>
                      <button className="button button_bordered">
                        Learn more
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <button
                className="button button_round slider__button"
                id="btn-right"
              >
                <Image src={ArrowRightSVG} alt="arrow-right.svg" />
              </button>
            </div>
            <a href="../pets/index.html#pagination" className="block">
              <button className="button button_colored button_big">
                Get to know the rest
              </button>
            </a>
          </div>
        </section>

        <section className="help" id="help">
          <div className="wrapper help__wrapper">
            <h3 className="help__tittle">
              How you can help
              <br />
              our shelter
            </h3>
            <ul className="help__list">
              <li className="help__item">
                <Image
                  src={PetFoodSVG}
                  width="60"
                  height="60"
                  alt="icon-pet-food.svg"
                />
                <h4 className="help__name">Pet food</h4>
              </li>
              <li className="help__item">
                <Image
                  src={TransportationSVG}
                  width="60"
                  height="60"
                  alt="icon-transportation.svg"
                />
                <h4 className="help__name">Transportation</h4>
              </li>
              <li className="help__item">
                <Image
                  src={ToysSVG}
                  width="60"
                  height="60"
                  alt="icon-toys.svg"
                />
                <h4 className="help__name">Toys</h4>
              </li>
              <li className="help__item">
                <Image
                  src={BowlsSVG}
                  width="60"
                  height="60"
                  alt="icon-bowls-and-cups.svg"
                />
                <h4 className="help__name">Bowls and cups</h4>
              </li>
              <li className="help__item">
                <Image
                  src={ShampoosSVG}
                  width="60"
                  height="60"
                  alt="icon-shampoos.svg"
                />
                <h4 className="help__name">Shampoos</h4>
              </li>
              <li className="help__item">
                <Image
                  src={VitaminsSVG}
                  width="60"
                  height="60"
                  alt="icon-vitamins.svg"
                />
                <h4 className="help__name">Vitamins</h4>
              </li>
              <li className="help__item">
                <Image
                  src={MedicinesSVG}
                  width="60"
                  height="60"
                  alt="icon-medicines.svg"
                />
                <h4 className="help__name">Medicines</h4>
              </li>
              <li className="help__item">
                <Image
                  src={CollarsSVG}
                  width="60"
                  height="60"
                  alt="icon-collars-leashed.svg"
                />
                <h4 className="help__name">Collars / leashes</h4>
              </li>
              <li className="help__item">
                <Image
                  src={SleepingSVG}
                  width="60"
                  height="60"
                  alt="icon-sleeping-area.svg"
                />
                <h4 className="help__name">Sleeping areas</h4>
              </li>
            </ul>
          </div>
        </section>

        <section className="donation">
          <div className="wrapper donation_wrapper">
            <div className="dontation__image">
              <Image src={DonationPNG} alt="donation-dog.png" />
            </div>
            <div className="dontaion__content">
              <h3 className="dontaion__tittle">You can also make a donation</h3>
              <h5 className="dontaion__subtitle">
                Name of the bank / Type of bank account
              </h5>
              <a className="donation__card" href="#">
                <Image src={CreditSVG} alt="credit-card.svg" />
                <h4>8380 2880 8028 8791 7435</h4>
              </a>
              <p className="dontation__text">
                Legal information and lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Maecenas a ipsum at libero sagittis dignissim
                sed ac diam. Praesent ultrices maximus tortor et vulputate.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
