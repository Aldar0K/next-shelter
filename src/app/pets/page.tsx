import Image from "next/image";

import PetsCharlyPNG from "@/assets/images/png/pets-charly.png";
import PetsFreddie from "@/assets/images/png/pets-freddie.png";
import PetsJenniferPNG from "@/assets/images/png/pets-jennifer.png";
import PetsKatrinePNG from "@/assets/images/png/pets-katrine.png";
import PetsScarletPNG from "@/assets/images/png/pets-scarlet.png";
import PetsSophiaPNG from "@/assets/images/png/pets-sophia.png";
import PetsTimmyPNG from "@/assets/images/png/pets-timmy.png";
import PetsWoodyPNG from "@/assets/images/png/pets-woody.png";

const PetsPage = () => {
  return (
    <main className="main">
      <section className="pagination" id="pagination">
        <div className="wrapper pagination__wrapper">
          <h3 className="pagination__title">
            Our friends who
            <br /> are looking for a house
          </h3>
          <ul className="pagination__list">
            <li className="pet-card" data-id="5">
              <Image
                className="slider__image"
                src={PetsKatrinePNG}
                alt="pets-katrine.png"
              />
              <p className="slider__name">Katrine</p>
              <button className="button button_bordered">Learn more</button>
            </li>
            <li className="pet-card">
              <Image
                className="slider__image"
                src={PetsJenniferPNG}
                alt="pets-jennifer.png"
              />
              <p className="slider__name" data-id="1">
                Jennifer
              </p>
              <button className="button button_bordered">Learn more</button>
            </li>
            <li className="pet-card" data-id="3">
              <Image
                className="slider__image"
                src={PetsWoodyPNG}
                alt="pets-woody.png"
              />
              <p className="slider__name">Woody</p>
              <button className="button button_bordered">Learn more</button>
            </li>
            <li className="pet-card" data-id="2">
              <Image
                className="slider__image"
                src={PetsSophiaPNG}
                alt="pets-sophia.png"
              />
              <p className="slider__name">Sophia</p>
              <button className="button button_bordered">Learn more</button>
            </li>
            <li className="pet-card" data-id="6">
              <Image
                className="slider__image"
                src={PetsTimmyPNG}
                alt="pets-timmy.png"
              />
              <p className="slider__name">Timmy</p>
              <button className="button button_bordered">Learn more</button>
            </li>
            <li className="pet-card" data-id="8">
              <Image
                className="slider__image"
                src={PetsCharlyPNG}
                alt="pets-charly.png"
              />
              <p className="slider__name">Charly</p>
              <button className="button button_bordered">Learn more</button>
            </li>
            <li className="pet-card" data-id="4">
              <Image
                className="slider__image"
                src={PetsScarletPNG}
                alt="pets-scarlet.png"
              />
              <p className="slider__name">Scarlett</p>
              <button className="button button_bordered">Learn more</button>
            </li>
            <li className="pet-card" data-id="7">
              <Image
                className="slider__image"
                src={PetsFreddie}
                alt="pets-freddie.png"
              />
              <p className="slider__name">Freddie</p>
              <button className="button button_bordered">Learn more</button>
            </li>
          </ul>
          <div className="pagination__buttons">
            <button
              className="button button_round button_disabled"
              id="btn-dblleft"
            >
              {"<<"}
            </button>
            <button
              className="button button_round button_disabled"
              id="btn-left"
            >
              {"<"}
            </button>
            <button
              className="button button_round button_colored"
              id="btn-info"
            >
              1
            </button>
            <button className="button button_round" id="btn-right">
              {">"}
            </button>
            <button className="button button_round" id="btn-dblright">
              {">>"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PetsPage;
