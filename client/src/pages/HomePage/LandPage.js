import React from "react";
import { Link } from "react-router-dom";
import conseillers from "../../Assets/conseillers.jpg";
import créditEtudes from "../../Assets/créditEtudes.jpg";
import oBank from "../../Assets/oBank.jpeg";
import créditImmob from "../../Assets/créditImmob.jpg";
import Fintech from "../../Assets/Fintech.jpg";
import FondationJ from "../../Assets/FondationJ.jpg";
import epargneProj from "../../Assets/epargneProj.jpg";
import "./LandPage.css";
const LandPage = () => {
  return (
    <div>
    
      <div className="container">
        <br />
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
            <li data-target="#myCarousel" data-slide-to={3} />
          </ol>
          {/* Wrapper for slides */}
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img
                src="OnlineBankCa1.png"
                alt="OnlineBankCa1"
                width="100%"
                height={0}
              />
              <div className="carousel-caption">
                <h3> Services bancaires à distance : ONLINE BANK</h3>
              </div>
            </div>
            <div className="item">
              <img
                src="FlayessC33.png"
                alt="FlayessC33"
                width="100%"
                height={345}
              />
              <div className="carousel-caption">
                <h3>Alimentez votre compte à votre convenance…</h3>
              </div>
            </div>
            <div className="item">
              <img
                src="FamilleCa2.png"
                alt="FamilleCa2"
                width="100%"
                height={345}
              />
              <div className="carousel-caption">
                <h3>
                  {" "}
                  Préparez votre avenir dès aujourd'hui pour mieux en profiter
                  demain.
                </h3>
              </div>
            </div>
          </div>
          {/* Left and right controls */}
          <a
            className="left carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <br />
      <div className="hello">
        <ul className="bleu">
          <li>
            <a className="active" href="#home">
              Le GROUPE WEBANK
            </a>
          </li>
          <li>
            <a href="#about">CONFORMITÉ</a>
          </li>
          <li>
            <a href="#contact">INDICATEURS FINANCIERS</a>
          </li>
          <li>
            <a href="#news">PARTICULIERS</a>
          </li>
          <li>
            <a href="#contact">ENTREPRISES</a>
          </li>
          <li>
            <a href="#about">PROFESSIONNELS</a>
          </li>
          <li>
            <a href="#news">TUNISIENS RÉSIDENTS À L'ÉTRENGER</a>
          </li>
          <li>
            <a href="#contact">PROMOTEURS IMMOBILIERS</a>
          </li>
          <li>
            <a href="#about">JEUNES</a>
          </li>
        </ul>
      </div>
      <br />
      <div className="two">
        <Link>
          {" "}
          <img
            src={conseillers}
            alt="cons"
            className=""
            style={{ width: "90%" }}
          />{" "}
        </Link>
        <div className="card" style={{ width: "40%" }}>
          <img className="card-img-top" src={Fintech} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">
              Fintech et WeBank : une rivalité bénéfique
            </h5>
            <p className="card-text">
              Enjeux d’innovation dans la banque de détail...
            </p>
            <a href="#" className="btn btn-primary">
              Savoir plus
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="three">
        <div class="card-group" style={{ width: "90%" }}>
          <div class="card">
            <img class="card-img-top" src={oBank} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Gérer votre argent au quotidien</h5>
              <p class="card-text">
                La WeBank vous offre une panoplie de services bancaires à
                distance, en permanence, et en toute sécurité.
              </p>

              <a href="#" className="btn btn-primary">
                Savoir plus
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={créditImmob} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Crédit Immobilier </h5>
              <p class="card-text">
                Vous rêvez de devenir propriétaire ? WeBank vous proposent une
                gamme de crédits immobiliers qui s'adapte à vos besoins.
              </p>

              <a href="#" className="btn btn-primary">
                Savoir plus
              </a>
            </div>
          </div>

          <div class="card">
            <img class="card-img-top" src={créditEtudes} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Financer votre cursus universitaire</h5>
              <p class="card-text">
                Pour la réussite des études supérieures de votre enfant ! WeBank
                vous ouvre les portes et vous propose la solution de financement
                : crédit « Etudes ».
              </p>

              <a href="#" className="btn btn-primary">
                Savoir plus
              </a>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className="fond">
        <div className="card" style={{ width: "40%" }}>
          <img
            className="card-img-top"
            src={epargneProj}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Epargner et planifier vos projets</h5>
            <p className="card-text">
              Un coup de cœur, une affaire à saisir ou simplement un imprévu à
              maitriser … Vous êtes salarié exerçant dans le secteur public ou
              privé, professionnel ou retraité … ?
            </p>
            <a href="#" className="btn btn-primary">
              Savoir plus
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "40%" }}>
          <img className="card-img-top" src={FondationJ} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Fondation WeBank pour la jeunesse.</h5>
            <p className="card-text">
              Il s’agit d’une plateforme qui met en relation les élèves et
              étudiants avec les entreprises qui gravitent dans l’univers de la
              Fondation WeBank.
            </p>
            <a href="#" className="btn btn-primary">
              Savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  }


export default LandPage;
