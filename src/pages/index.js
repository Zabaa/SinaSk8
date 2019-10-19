import React from 'react';

import Layout from '../components/Layout';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import picProfile from '../assets/images/profile.jpg'
import picWoodcamp1 from '../assets/images/woodcamp1.jpg'
import picWoodcamp2 from '../assets/images/woodcamp2.jpg'
import picDesk1 from '../assets/images/desk1.jpg'
import picBarcelona from '../assets/images/barcelona.jpg'
import picStopnicaSkatePark from '../assets/images/stopnicaSkatePark.jpg'
import picTraining from "../assets/images/training.jpg"

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-angellist"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={picProfile} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Kim jestem ?</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
              turpis ante, nullam sit amet turpis non, sollicitudin posuere
              urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
              dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
              cursus.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={picTraining} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Zajęcia na deskorolce</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
              turpis ante, nullam sit amet turpis non, sollicitudin posuere
              urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
              dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
              cursus.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={picWoodcamp2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Obozy Woodcamp</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
              turpis ante, nullam sit amet turpis non, sollicitudin posuere
              urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
              dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
              cursus.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Aktualności</h2>
          <p>
            Najnowsze informacje na temet mojej aktywności zawodowej oraz zajawkowe wpisy.
            Projekty, wydarzenia, turnieje, obozy.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={picWoodcamp1} alt="" />
              </a>
              <h3 className="major">Woodcamp 2019</h3>
              <p>
                Moja mała relacja z tegorocznej wersji obozu deskorolkowego.
              </p>
              <a href="/#" className="special">
                Czytaj więcej
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={picDesk1} alt="" />
              </a>
              <h3 className="major">Jakiś super duper turniej</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Czytaj więcej
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={picBarcelona} alt="" />
              </a>
              <h3 className="major">Wypad do Barcelony</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Czytaj więcej
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={picStopnicaSkatePark} alt="" />
              </a>
              <h3 className="major">Skatepark w Stopnicy</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Czytaj więcej
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Sprawdź więcej
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
